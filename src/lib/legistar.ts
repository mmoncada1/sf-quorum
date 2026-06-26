/**
 * Legistar InSite scraper for the City & County of San Francisco.
 *
 * SF's official Legistar Web API mirror (webapi.legistar.com/v1/sfgov) is frozen
 * around 2018, so current data must come from the live InSite site. Happily, the
 * whole chain is reachable over plain HTTP:
 *
 *   Calendar.aspx (POST year)  -> meetings
 *   MeetingDetail.aspx (GET)   -> agenda items (legislation)
 *   LegislationDetail.aspx     -> matter metadata + sponsors + history actions
 *   HistoryDetail.aspx         -> per-supervisor roll-call votes
 *
 * Everything below is defensive: column order is resolved from header rows, and
 * fetches are cached to disk so re-runs are fast and polite to the city's server.
 */

import * as cheerio from "cheerio";
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile, stat } from "node:fs/promises";
import path from "node:path";

const HOST = process.env.LEGISTAR_HOST || "https://sfgov.legistar.com";
const CACHE_DIR = path.join(process.cwd(), ".cache");
const USER_AGENT =
  "SFQuorum/0.1 (civic transparency project; respectful crawler)";

const DEFAULT_DELAY_MS = 350;
let lastFetch = 0;

export interface MeetingRef {
  legistarId: number;
  guid: string;
  bodyName: string;
  date: Date | null;
  dateText: string;
  location: string;
}

export interface MatterRef {
  legistarId: number;
  guid: string;
  file: string;
}

export interface ActionRef {
  legistarId: number;
  guid: string;
  date: Date | null;
  bodyName: string;
  actionText: string;
  result: string;
}

export interface RelatedFileRef {
  legistarId: number;
  guid: string;
  fileNum: string;
}

export interface AttachmentRef {
  name: string;
  url: string;
}

export interface MatterDetail {
  legistarId: number;
  guid: string;
  file: string;
  type: string;
  status: string;
  title: string;
  name: string;
  introDate: Date | null;
  finalDate: Date | null;
  inControl: string;
  sponsors: string[];
  actions: ActionRef[];
  relatedFiles: RelatedFileRef[];
  attachments: AttachmentRef[];
  sourceUrl: string;
}

export interface RollCallVote {
  name: string;
  value: string;
}

export interface ActionDetail {
  legistarId: number;
  guid: string;
  actionText: string;
  result: string;
  votes: RollCallVote[];
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

function cachePath(key: string) {
  const hash = createHash("sha1").update(key).digest("hex");
  return path.join(CACHE_DIR, `${hash}.html`);
}

async function fileAgeMs(p: string): Promise<number | null> {
  try {
    const s = await stat(p);
    return Date.now() - s.mtimeMs;
  } catch {
    return null;
  }
}

interface FetchOptions {
  method?: "GET" | "POST";
  body?: string;
  cacheKey?: string;
  /** Max acceptable cache age in ms. 0 disables caching. */
  ttlMs?: number;
  retries?: number;
}

async function fetchHtml(url: string, opts: FetchOptions = {}): Promise<string> {
  const {
    method = "GET",
    body,
    cacheKey = `${method} ${url} ${body ?? ""}`,
    ttlMs = 1000 * 60 * 60 * 24 * 30, // 30 days; detail pages are effectively immutable
    retries = 3,
  } = opts;

  const cp = cachePath(cacheKey);
  if (ttlMs > 0) {
    const age = await fileAgeMs(cp);
    if (age !== null && age < ttlMs) {
      return readFile(cp, "utf8");
    }
  }

  // polite rate limiting
  const since = Date.now() - lastFetch;
  if (since < DEFAULT_DELAY_MS) await sleep(DEFAULT_DELAY_MS - since);
  lastFetch = Date.now();

  let lastErr: unknown;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        method,
        headers: {
          "User-Agent": USER_AGENT,
          "Content-Type":
            method === "POST"
              ? "application/x-www-form-urlencoded"
              : "text/html",
          Accept: "text/html,application/xhtml+xml",
        },
        body,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
      const text = await res.text();
      if (ttlMs > 0) {
        await mkdir(CACHE_DIR, { recursive: true });
        await writeFile(cp, text, "utf8");
      }
      return text;
    } catch (err) {
      lastErr = err;
      await sleep(800 * (attempt + 1));
    }
  }
  throw lastErr;
}

function parseDate(s: string | undefined | null): Date | null {
  if (!s) return null;
  const t = s.trim();
  if (!t) return null;
  const d = new Date(t);
  return isNaN(d.getTime()) ? null : d;
}

function clean(s: string | undefined | null): string {
  return (s ?? "").replace(/\s+/g, " ").trim();
}

function hiddenField($: cheerio.CheerioAPI, id: string): string {
  return $(`#${id}`).attr("value") ?? "";
}

function detailUrl(page: string, id: number, guid: string, extra = ""): string {
  return `${HOST}/${page}.aspx?ID=${id}&GUID=${guid}${extra}`;
}

/** Map a Legistar RadGrid's header row to column indices keyed by lowercased label. */
function headerIndex($: cheerio.CheerioAPI, table: cheerio.Cheerio<any>) {
  const idx: Record<string, number> = {};
  const headers = table.find("th");
  headers.each((i, th) => {
    const label = clean($(th).text()).toLowerCase();
    if (label) idx[label] = i;
  });
  return idx;
}

/**
 * Fetch every meeting in a given calendar year via the Telerik year dropdown
 * postback. Returns committee + full-board meetings with body name and date.
 */
export async function getMeetingsForYear(year: number): Promise<MeetingRef[]> {
  const url = `${HOST}/Calendar.aspx`;
  // 1) GET the page to capture ASP.NET hidden state.
  const page = await fetchHtml(url, { ttlMs: 1000 * 60 * 30, cacheKey: `cal-get` });
  const $g = cheerio.load(page);

  const form = new URLSearchParams();
  form.set("__EVENTTARGET", "ctl00$ContentPlaceHolder1$lstYears");
  form.set("__EVENTARGUMENT", "");
  form.set("__VIEWSTATE", hiddenField($g, "__VIEWSTATE"));
  form.set("__VIEWSTATEGENERATOR", hiddenField($g, "__VIEWSTATEGENERATOR"));
  form.set("__EVENTVALIDATION", hiddenField($g, "__EVENTVALIDATION"));
  form.set("ctl00$ContentPlaceHolder1$lstYears", String(year));
  form.set(
    "ctl00_ContentPlaceHolder1_lstYears_ClientState",
    JSON.stringify({ value: String(year), text: String(year) }),
  );
  form.set("ctl00$ContentPlaceHolder1$lstBodies", "All Bodies");
  form.set(
    "ctl00_ContentPlaceHolder1_lstBodies_ClientState",
    JSON.stringify({ value: "-1", text: "All Bodies" }),
  );

  const html = await fetchHtml(url, {
    method: "POST",
    body: form.toString(),
    ttlMs: 1000 * 60 * 60 * 6, // refresh calendar a few times a day
    cacheKey: `cal-year-${year}`,
  });

  return parseCalendar(html);
}

function parseCalendar(html: string): MeetingRef[] {
  const $ = cheerio.load(html);
  const out: MeetingRef[] = [];
  const seen = new Set<number>();

  $("a[href*='MeetingDetail.aspx']").each((_, a) => {
    const href = $(a).attr("href") || "";
    const m = href.match(/MeetingDetail\.aspx\?ID=(\d+)&(?:amp;)?GUID=([0-9A-F-]+)/i);
    if (!m) return;
    const id = Number(m[1]);
    if (seen.has(id)) return;

    const row = $(a).closest("tr");
    const cells = row.find("td").map((_, td) => clean($(td).text())).get();
    // Calendar columns: Name | (icon) | Meeting Date | (icon) | Meeting Time | Location | ...
    const bodyName =
      cells.find((c) => /committee|board of supervisors|commission/i.test(c)) ||
      cells[0] ||
      "";
    const dateText = cells.find((c) => /\d{1,2}\/\d{1,2}\/\d{4}/.test(c)) || "";
    const dm = dateText.match(/\d{1,2}\/\d{1,2}\/\d{4}/);
    const location =
      cells.find((c) => /city hall|room|chamber/i.test(c)) || "";

    seen.add(id);
    out.push({
      legistarId: id,
      guid: m[2],
      bodyName: clean(bodyName),
      date: dm ? parseDate(dm[0]) : null,
      dateText,
      location: clean(location),
    });
  });

  return out;
}

/** List the legislation items (matters) on a meeting agenda. */
export async function getMeetingItems(
  meeting: Pick<MeetingRef, "legistarId" | "guid">,
): Promise<MatterRef[]> {
  const url = detailUrl(
    "MeetingDetail",
    meeting.legistarId,
    meeting.guid,
    "&Options=info|&Search=",
  );
  const html = await fetchHtml(url);
  const $ = cheerio.load(html);
  const out: MatterRef[] = [];
  const seen = new Set<number>();

  $("a[href*='LegislationDetail.aspx']").each((_, a) => {
    const href = $(a).attr("href") || "";
    const m = href.match(
      /LegislationDetail\.aspx\?ID=(\d+)&(?:amp;)?GUID=([0-9A-F-]+)/i,
    );
    if (!m) return;
    const id = Number(m[1]);
    if (seen.has(id)) return;
    seen.add(id);
    out.push({ legistarId: id, guid: m[2], file: clean($(a).text()) });
  });

  return out;
}

/** Full metadata + history (actions) for a single matter. */
export async function getMatterDetail(
  ref: Pick<MatterRef, "legistarId" | "guid">,
): Promise<MatterDetail> {
  const sourceUrl = detailUrl("LegislationDetail", ref.legistarId, ref.guid);
  const html = await fetchHtml(sourceUrl);
  const $ = cheerio.load(html);

  const txt = (id: string) => clean($(`#ctl00_ContentPlaceHolder1_${id}`).text());

  const file = txt("lblFile2");
  const type = txt("lblType2");
  const status = txt("lblStatus2");
  const title = txt("lblTitle2");
  const name = txt("lblName2");
  const introDate = parseDate(txt("lblIntroduced2"));
  const finalDate =
    parseDate(txt("lblEnactmentDate2")) || parseDate(txt("lblOnAgenda2"));

  // Sponsors: supervisor names render as PersonDetail links inside the sponsors
  // table. (Mayoral / departmental sponsors appear as plain text and are skipped
  // since they aren't Board members.)
  const sponsors: string[] = [];
  const seenSponsor = new Set<string>();
  $("#ctl00_ContentPlaceHolder1_tblSponsors a").each((_, a) => {
    const n = clean($(a).text());
    if (n && !seenSponsor.has(n)) {
      seenSponsor.add(n);
      sponsors.push(n);
    }
  });
  const grid = $("#ctl00_ContentPlaceHolder1_gridLegislation");

  // History / actions grid.
  const actions: ActionRef[] = [];
  if (grid.length) {
    const idx = headerIndex($, grid);
    const cDate = idx["date"] ?? 0;
    const cBody = idx["action by"] ?? 2;
    const cAction = idx["action"] ?? 3;
    const cResult = idx["result"] ?? 4;

    grid.find("tr").each((_, tr) => {
      // The "Action details" link is rendered as a RadWindow onclick popup, so
      // the URL lives in the row markup rather than an href attribute.
      const rowHtml = $(tr).html() || "";
      const m = rowHtml.match(
        /HistoryDetail\.aspx\?ID=(\d+)&(?:amp;|&#38;|&#39;|')*GUID=([0-9A-F-]+)/i,
      );
      if (!m) return;
      const cells = $(tr).find("td").map((_, td) => clean($(td).text())).get();
      actions.push({
        legistarId: Number(m[1]),
        guid: m[2],
        date: parseDate(cells[cDate]),
        bodyName: clean(cells[cBody] || ""),
        actionText: clean(cells[cAction] || ""),
        result: clean(cells[cResult] || ""),
      });
    });
  }

  // In control: the committee or body currently holding the matter.
  const inControl = txt("lblInControl2");

  // Related files: other LegislationDetail.aspx links on this page that are
  // not a self-reference (these appear only in the "Related files:" section).
  const relatedFiles: RelatedFileRef[] = [];
  const seenRelated = new Set<number>();
  $("a[href*='LegislationDetail.aspx']").each((_, a) => {
    const href = $(a).attr("href") || "";
    const rm = href.match(
      /LegislationDetail\.aspx\?ID=(\d+)&(?:amp;)?GUID=([0-9A-F-]+)/i,
    );
    if (!rm) return;
    const rid = Number(rm[1]);
    if (rid === ref.legistarId || seenRelated.has(rid)) return;
    seenRelated.add(rid);
    relatedFiles.push({
      legistarId: rid,
      guid: rm[2],
      fileNum: clean($(a).text()),
    });
  });

  // Attachments: View.ashx document links (PDFs attached to the matter).
  // Their names (e.g. "HPC Reso No. 1565 052526", "PLN Transmittal 061026")
  // reveal which external bodies already reviewed the legislation.
  const attachments: AttachmentRef[] = [];
  const seenAtt = new Set<string>();
  $("a[href*='View.ashx']").each((_, a) => {
    const attName = clean($(a).text());
    const href = $(a).attr("href") || "";
    if (!attName || seenAtt.has(attName)) return;
    seenAtt.add(attName);
    const attUrl = href.startsWith("http") ? href : `${HOST}/${href}`;
    attachments.push({ name: attName, url: attUrl });
  });

  return {
    legistarId: ref.legistarId,
    guid: ref.guid,
    file,
    type,
    status,
    title,
    name,
    introDate,
    finalDate,
    inControl,
    sponsors,
    actions,
    relatedFiles,
    attachments,
    sourceUrl,
  };
}

/** Roll-call votes recorded for a single action (history row). */
export async function getActionVotes(
  ref: Pick<ActionRef, "legistarId" | "guid">,
): Promise<ActionDetail> {
  const url = detailUrl("HistoryDetail", ref.legistarId, ref.guid);
  const html = await fetchHtml(url);
  const $ = cheerio.load(html);

  const actionText = clean(
    $("#ctl00_ContentPlaceHolder1_lblAction2").text() ||
      $("#ctl00_ContentPlaceHolder1_lblAction").text(),
  );
  const result = clean(
    $("#ctl00_ContentPlaceHolder1_lblResult2").text() ||
      $("#ctl00_ContentPlaceHolder1_lblResult").text(),
  );

  const votes: RollCallVote[] = [];
  const grid = $("#ctl00_ContentPlaceHolder1_gridVote");
  if (grid.length) {
    const idx = headerIndex($, grid);
    const cName = idx["person name"] ?? 0;
    const cVote = idx["vote"] ?? 1;
    grid.find("tr").each((_, tr) => {
      const nameLink = $(tr).find("a[href*='PersonDetail.aspx']");
      if (!nameLink.length) return;
      const cells = $(tr).find("td").map((_, td) => clean($(td).text())).get();
      const name = clean(nameLink.text());
      const value = clean(cells[cVote] || cells[cName + 1] || "");
      if (name && value) votes.push({ name, value });
    });
  }

  return {
    legistarId: ref.legistarId,
    guid: ref.guid,
    actionText,
    result,
    votes,
  };
}

export const legistar = {
  host: HOST,
  getMeetingsForYear,
  getMeetingItems,
  getMatterDetail,
  getActionVotes,
};
