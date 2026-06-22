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

/** Deterministic, dependency-free summary. Always works. */
export function heuristicSummary(m: SummarizableMatter): string {
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
