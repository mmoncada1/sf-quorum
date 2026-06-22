/**
 * Ingestion: crawl sfgov.legistar.com -> SQLite.
 *
 * Usage:
 *   npm run ingest                      # recent meetings, current year
 *   INGEST_YEARS=2026,2025 npm run ingest
 *   INGEST_MAX_MEETINGS=20 npm run ingest
 *   INGEST_BOARD_ONLY=1 npm run ingest  # only full Board of Supervisors meetings
 *
 * Re-runs are cheap: HTML is cached on disk under .cache/ and DB writes are
 * idempotent upserts.
 */

import "dotenv/config";
import { prisma } from "../src/lib/db";
import {
  getMeetingsForYear,
  getMeetingItems,
  getMatterDetail,
  getActionVotes,
  type MeetingRef,
} from "../src/lib/legistar";
import { ROSTER, matchRoster, photoFor } from "../src/lib/roster";
import { TOPICS } from "../src/lib/topics";

const YEARS = (process.env.INGEST_YEARS || String(new Date().getFullYear()))
  .split(",")
  .map((y) => parseInt(y.trim(), 10))
  .filter(Boolean);
const MAX_MEETINGS = parseInt(process.env.INGEST_MAX_MEETINGS || "12", 10);
const BOARD_ONLY = !!process.env.INGEST_BOARD_ONLY;

const VOTE_VERB =
  /(approv|adopt|pass|fail|amend|recommend|continu|reject|table|rerefer|refer|ordered|finally passed|substitut)/i;

function log(...args: unknown[]) {
  console.log(`[ingest ${new Date().toISOString().slice(11, 19)}]`, ...args);
}

async function ensureRoster() {
  for (const r of ROSTER) {
    await prisma.supervisor.upsert({
      where: { slug: r.slug },
      create: {
        slug: r.slug,
        fullName: r.fullName,
        district: r.district,
        title: r.title,
        email: r.email,
        active: true,
        website: "https://sfbos.org/",
        photoUrl: photoFor(r.slug),
      },
      update: {
        fullName: r.fullName,
        district: r.district,
        title: r.title,
        email: r.email,
        active: true,
        photoUrl: photoFor(r.slug),
      },
    });
  }
  log(`roster: ${ROSTER.length} supervisors`);
}

async function ensureTopics() {
  for (const t of TOPICS) {
    await prisma.topic.upsert({
      where: { slug: t.slug },
      create: { slug: t.slug, name: t.name, emoji: t.emoji, color: t.color },
      update: { name: t.name, emoji: t.emoji, color: t.color },
    });
  }
  log(`topics: ${TOPICS.length}`);
}

async function supervisorIdByName(
  cache: Map<string, number | null>,
  name: string,
): Promise<number | null> {
  if (cache.has(name)) return cache.get(name)!;
  const entry = matchRoster(name);
  let id: number | null = null;
  if (entry) {
    const sup = await prisma.supervisor.findUnique({ where: { slug: entry.slug } });
    id = sup?.id ?? null;
  }
  cache.set(name, id);
  return id;
}

async function run() {
  const ingestLog = await prisma.ingestLog.create({ data: {} });
  const counters = { meetings: 0, matters: 0, actions: 0, votes: 0 };

  await ensureRoster();
  await ensureTopics();

  const nameCache = new Map<string, number | null>();
  const processedMatters = new Set<number>();

  // 1) Gather meetings across requested years.
  let meetings: MeetingRef[] = [];
  for (const year of YEARS) {
    log(`fetching ${year} calendar...`);
    const ms = await getMeetingsForYear(year);
    log(`  ${ms.length} meetings in ${year}`);
    meetings.push(...ms);
  }

  if (BOARD_ONLY) {
    meetings = meetings.filter((m) => /board of supervisors/i.test(m.bodyName));
  }
  // Most recent first, capped.
  meetings.sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0));
  meetings = meetings.filter((m) => (m.date?.getTime() ?? 0) <= Date.now());
  meetings = meetings.slice(0, MAX_MEETINGS);
  log(`processing ${meetings.length} meetings (most recent)`);

  for (const m of meetings) {
    const meeting = await prisma.meeting.upsert({
      where: { legistarId: m.legistarId },
      create: {
        legistarId: m.legistarId,
        legistarGuid: m.guid,
        bodyName: m.bodyName,
        date: m.date,
        location: m.location,
        sourceUrl: `${process.env.LEGISTAR_HOST || "https://sfgov.legistar.com"}/MeetingDetail.aspx?ID=${m.legistarId}&GUID=${m.guid}`,
      },
      update: { bodyName: m.bodyName, date: m.date, location: m.location },
    });
    counters.meetings++;

    let items;
    try {
      items = await getMeetingItems(m);
    } catch (e) {
      log(`  ! failed meeting ${m.legistarId}: ${(e as Error).message}`);
      continue;
    }
    log(`  meeting ${m.date?.toISOString().slice(0, 10)} ${m.bodyName} — ${items.length} items`);

    for (const item of items) {
      if (processedMatters.has(item.legistarId)) {
        // still link action votes below if needed; but matter already stored
      }

      let detail;
      try {
        detail = await getMatterDetail(item);
      } catch (e) {
        continue;
      }
      if (!detail.title && !detail.file) continue;

      const matter = await prisma.matter.upsert({
        where: { legistarId: detail.legistarId },
        create: {
          legistarId: detail.legistarId,
          legistarGuid: detail.guid,
          file: detail.file,
          type: detail.type,
          status: detail.status,
          title: detail.title || detail.name,
          introDate: detail.introDate,
          finalDate: detail.finalDate,
          sourceUrl: detail.sourceUrl,
        },
        update: {
          type: detail.type,
          status: detail.status,
          title: detail.title || detail.name,
          finalDate: detail.finalDate,
        },
      });
      if (!processedMatters.has(item.legistarId)) counters.matters++;
      processedMatters.add(item.legistarId);

      // Sponsorships (first listed = primary sponsor).
      for (let i = 0; i < detail.sponsors.length; i++) {
        const supId = await supervisorIdByName(nameCache, detail.sponsors[i]);
        if (!supId) continue;
        await prisma.sponsorship.upsert({
          where: { matterId_supervisorId: { matterId: matter.id, supervisorId: supId } },
          create: {
            matterId: matter.id,
            supervisorId: supId,
            role: i === 0 ? "sponsor" : "cosponsor",
          },
          update: {},
        });
      }

      // Actions + roll-call votes.
      for (const a of detail.actions) {
        const action = await prisma.action.upsert({
          where: { legistarId: a.legistarId },
          create: {
            legistarId: a.legistarId,
            legistarGuid: a.guid,
            date: a.date,
            actionText: a.actionText,
            result: a.result,
            bodyName: a.bodyName,
            matterId: matter.id,
            meetingId: meeting.id,
          },
          update: { result: a.result, actionText: a.actionText },
        });
        counters.actions++;

        // Only chase votes for actions that plausibly carried a roll call.
        if (!VOTE_VERB.test(a.actionText) && !a.result) continue;

        let votes;
        try {
          votes = await getActionVotes(a);
        } catch {
          continue;
        }
        for (const v of votes.votes) {
          const supId = await supervisorIdByName(nameCache, v.name);
          if (!supId) continue;
          await prisma.vote.upsert({
            where: { actionId_supervisorId: { actionId: action.id, supervisorId: supId } },
            create: {
              actionId: action.id,
              supervisorId: supId,
              matterId: matter.id,
              value: v.value,
            },
            update: { value: v.value },
          });
          counters.votes++;
        }
      }
    }
  }

  await prisma.ingestLog.update({
    where: { id: ingestLog.id },
    data: { finishedAt: new Date(), ...counters },
  });

  log("DONE", counters);
}

run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
