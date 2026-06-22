/**
 * Plain-English ("ELI5") summaries of legislation.
 *
 * Two modes:
 *   1. Heuristic (default, no dependencies): rewrites the official legalese title
 *      into one or two plain sentences using templates + a jargon glossary.
 *   2. LLM (optional): if OPENAI_API_KEY is set, asks a model for a tighter,
 *      neutral summary. Falls back to the heuristic on any error.
 */

export interface SummarizableMatter {
  type: string;
  title: string;
  name?: string;
  status?: string;
}

const GLOSSARY: [RegExp, string][] = [
  [/\bordinance\b/gi, "city law"],
  [/\bresolution\b/gi, "an official statement"],
  [/\bappropriat(e|ing|ion)\b/gi, "set aside money"],
  [/\bde-?appropriat(e|ing|ion)\b/gi, "take back money"],
  [/\bamending\b/gi, "changing"],
  [/\benacting\b/gi, "creating"],
  [/\bauthoriz(e|ing)\b/gi, "allow"],
  [/\bapprov(e|ing)\b/gi, "approve"],
  [/\bexecut(e|ing) (a|an|the)\b/gi, "sign"],
  [/\bin an amount not to exceed\b/gi, "of up to"],
  [/\bplanning code\b/gi, "the city's zoning/building rules"],
  [/\badministrative code\b/gi, "the city's operating rules"],
  [/\bbusiness and tax regulations code\b/gi, "the city's business-tax rules"],
  [/\bpolice code\b/gi, "the city's public-safety rules"],
  [/\bpublic works code\b/gi, "the city's streets/public-works rules"],
  [/\baffirming the planning department'?s determination\b/gi, "backing the Planning Department's call"],
  [/\bunder the california environmental quality act\b/gi, "under state environmental law"],
  [/\bceqa\b/gi, "state environmental law"],
  [/\bde minimis\b/gi, "very small"],
  [/\bwhereas,?\b/gi, ""],
];

const TYPE_LEAD: Record<string, string> = {
  Ordinance: "Proposes a change to city law:",
  Resolution: "A formal position or approval by the Board:",
  Motion: "An internal Board decision:",
  Hearing: "Schedules a public hearing about:",
  "Charter Amendment": "Asks voters to change the city charter:",
  Communication: "A letter or notice on file:",
  Report: "A report submitted to the Board:",
  "Mayoral Appointment": "A mayoral appointment:",
  Appointment: "An appointment:",
};

function tidy(s: string): string {
  return s
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;])/g, "$1")
    .replace(/\s*;\s*/g, "; ")
    .trim();
}

function plainify(text: string): string {
  let out = text;
  for (const [re, rep] of GLOSSARY) out = out.replace(re, rep);
  return tidy(out);
}

// Matches the boilerplate "extending the time within which <Body> may respond"
// resolutions the Board passes in bulk (one per landmark/appeal). These are
// routine procedural housekeeping, not substantive authored legislation.
const RESPONSE_EXTENSION =
  /extending by (\d+)\s+days the (?:prescribed )?time within which the (.+?) may (?:respond to|act on|consider)\b(.+)/i;

/** True for routine procedural resolutions that shouldn't inflate a record. */
export function isProcedural(title: string | null | undefined): boolean {
  return RESPONSE_EXTENSION.test(title || "");
}

/**
 * Some resolutions are near-identical boilerplate where the only distinguishing
 * detail (a landmark, a property, a deadline) sits ~30 words into the title.
 * Front-load that detail so a list of them doesn't read as duplicates.
 */
function specialCaseSummary(title: string): string | null {
  // "Resolution extending by N days the prescribed time within which the
  //  <Body> may respond to a landmark designation of <Subject>, located at <Addr>, ..."
  const ext = title.match(RESPONSE_EXTENSION);
  if (ext) {
    const days = ext[1];
    const body = ext[2].trim();
    const rest = ext[3];
    const subj = rest.match(
      /(?:landmark designation|designation|appeal|application)?\s*(?:of|for|regarding)\s+(.+?)(?:,?\s*located at\s+(.+?))?(?:,\s*Assessor|;|\.|$)/i,
    );
    if (subj) {
      const what = subj[1].replace(/\s+/g, " ").trim();
      const addr = subj[2]?.replace(/\s+/g, " ").trim();
      return tidy(
        `Gives the ${body} ${days} more days to decide on ${what}${
          addr ? ` (${addr})` : ""
        }.`,
      );
    }
    return tidy(`Gives the ${body} ${days} more days to weigh in.`);
  }
  return null;
}

/** Deterministic, dependency-free summary. Always works. */
export function heuristicSummary(m: SummarizableMatter): string {
  const special = specialCaseSummary(m.title || m.name || "");
  if (special) return special;

  const lead = TYPE_LEAD[m.type] || "Legislation:";
  // The first clause (before the first semicolon) is almost always the gist.
  const core = (m.title || m.name || "").split(/;|\. /)[0];
  let body = plainify(core);

  // Trim a leading "Ordinance/Resolution ..." since the lead already says the type.
  body = body.replace(/^(city law|an official statement)\s*/i, "");
  body = body.charAt(0).toUpperCase() + body.slice(1);

  if (!body || body.length < 4) body = plainify(m.title || m.name || "(no title)");

  let summary = `${lead} ${body}.`;
  summary = summary.replace(/\.\.+$/, ".");

  // A short "bottom line" hint based on common patterns.
  if (/up to|set aside money/i.test(body)) {
    summary += " In short: it commits city money.";
  } else if (/voters/i.test(lead)) {
    summary += " In short: voters would decide.";
  } else if (m.type === "Resolution" && /urg|support|oppos|declar|commend|honor|recogn/i.test(m.title)) {
    summary += " In short: a symbolic stance, not a binding law.";
  }
  return tidy(summary);
}

interface LLMResult {
  text: string;
  source: "llm";
}

async function llmSummary(m: SummarizableMatter): Promise<LLMResult | null> {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return null;
  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        model,
        temperature: 0.2,
        max_tokens: 120,
        messages: [
          {
            role: "system",
            content:
              "You explain San Francisco city legislation to a busy resident in plain English. " +
              "Be neutral and factual. 2 sentences max. No preamble. Start with what it does.",
          },
          {
            role: "user",
            content: `Type: ${m.type}\nStatus: ${m.status ?? ""}\nTitle: ${m.title}`,
          },
        ],
      }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    const text = data?.choices?.[0]?.message?.content?.trim();
    if (!text) return null;
    return { text, source: "llm" };
  } catch {
    return null;
  }
}

export async function summarize(
  m: SummarizableMatter,
): Promise<{ text: string; source: "llm" | "heuristic" }> {
  const llm = await llmSummary(m);
  if (llm) return llm;
  return { text: heuristicSummary(m), source: "heuristic" };
}
