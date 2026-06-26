/**
 * Synthesize a legislation's real "origin story": a chronological, plain-English
 * timeline of how a bill came to be, reconstructed from its attached documents
 * (legislative digest, department transmittals, commission resolutions) and its
 * Legistar action history.
 *
 * Requires OPENAI_API_KEY. Returns null if unavailable or on any error — callers
 * should treat a null as "no timeline yet" and fall back to the document list.
 */

export interface OriginStep {
  /** ISO date ("2026-03-10") or a coarse label ("March 2026") or null if unknown. */
  date: string | null;
  /** Who acted, e.g. "Supervisor Fielder", "Historic Preservation Commission". */
  actor: string;
  /** Short headline for the step. */
  title: string;
  /** One or two plain-English sentences explaining what happened and why. */
  detail: string;
  /** Which source this was drawn from, e.g. "Legislative Digest", "HPC Resolution". */
  source?: string;
}

export interface OriginTimeline {
  /** One-sentence framing of where this legislation ultimately came from. */
  lead: string;
  steps: OriginStep[];
}

export interface OriginInput {
  type: string;
  file: string;
  title: string;
  status?: string;
  /** Compact chronological action history: "2026-06-23 — Board of Supervisors — ASSIGNED UNDER 30 DAY RULE". */
  actionLines: string[];
  /** Referenced/predecessor file numbers (from Legistar "Related files"). */
  relatedFiles: string[];
  /** Extracted document texts, keyed by their attachment name. */
  documents: { name: string; text: string }[];
}

const SYSTEM_PROMPT = `You are a civic-transparency analyst for San Francisco legislation.

You are given a piece of legislation: its title, its Legistar action history, any related file numbers, and the extracted text of its attached documents (which may include a Legislative Digest, department transmittal letters, commission/board resolutions, and the bill text itself).

Your job: reconstruct the REAL end-to-end origin story of this legislation as a chronological timeline. Go beyond the Board of Supervisors actions — use the documents to surface what happened UPSTREAM before it reached the Board:
- What prior law, policy, or board action required or prompted it (cite related files if mentioned).
- Which city departments or commissions reviewed it, when, and what they decided (e.g. Planning Department, Historic Preservation Commission, CEQA review).
- Who introduced it and on whose recommendation.
- Where it currently stands.

Rules:
- Only state facts you can find in the provided text. NEVER invent dates, names, or events. If a date is approximate, use a coarse label like "May 2026".
- Order steps chronologically (earliest first).
- Be concrete and specific (resolution numbers, dates, body names) but write in plain English a busy resident can follow.
- 4 to 8 steps is ideal. Prefer the meaningful upstream milestones over routine procedural rows.

Respond with ONLY a JSON object, no markdown, matching exactly:
{
  "lead": "one sentence summarizing where this legislation originated",
  "steps": [
    { "date": "2026-03-10" | "March 2026" | null, "actor": "string", "title": "short headline", "detail": "1-2 plain sentences", "source": "which document this came from" }
  ]
}`;

function buildUserContent(input: OriginInput): string {
  const docs = input.documents
    .map((d) => `### Document: ${d.name}\n${d.text}`)
    .join("\n\n");
  return [
    `Type: ${input.type}`,
    `File #: ${input.file}`,
    `Title: ${input.title}`,
    input.status ? `Status: ${input.status}` : "",
    input.relatedFiles.length
      ? `Related files: ${input.relatedFiles.join(", ")}`
      : "",
    "",
    "Action history (most recent last):",
    ...input.actionLines.map((l) => `- ${l}`),
    "",
    "Attached documents (extracted text, possibly truncated):",
    docs || "(none)",
  ]
    .filter(Boolean)
    .join("\n");
}

function coerceTimeline(raw: unknown): OriginTimeline | null {
  if (!raw || typeof raw !== "object") return null;
  const obj = raw as Record<string, unknown>;
  const steps = Array.isArray(obj.steps) ? obj.steps : [];
  const cleanSteps: OriginStep[] = steps
    .map((s) => {
      const step = s as Record<string, unknown>;
      const actor = typeof step.actor === "string" ? step.actor.trim() : "";
      const title = typeof step.title === "string" ? step.title.trim() : "";
      const detail = typeof step.detail === "string" ? step.detail.trim() : "";
      if (!actor && !title && !detail) return null;
      return {
        date:
          typeof step.date === "string" && step.date.trim()
            ? step.date.trim()
            : null,
        actor: actor || "—",
        title: title || actor || "Step",
        detail,
        source:
          typeof step.source === "string" && step.source.trim()
            ? step.source.trim()
            : undefined,
      } as OriginStep;
    })
    .filter((s): s is OriginStep => s !== null);

  if (cleanSteps.length === 0) return null;
  const lead =
    typeof obj.lead === "string" && obj.lead.trim() ? obj.lead.trim() : "";
  return { lead, steps: cleanSteps };
}

export async function generateOriginTimeline(
  input: OriginInput,
): Promise<OriginTimeline | null> {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return null;
  // Documents are the whole point; skip matters with nothing to read.
  if (input.documents.length === 0) return null;

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
        temperature: 0.1,
        max_tokens: 1200,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: buildUserContent(input) },
        ],
      }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    const content = data?.choices?.[0]?.message?.content;
    if (!content) return null;
    return coerceTimeline(JSON.parse(content));
  } catch {
    return null;
  }
}
