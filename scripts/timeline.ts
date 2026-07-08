/**
 * Origin timelines: read each matter's attached PDFs (legislative digest,
 * department transmittals, commission resolutions) and synthesize a real
 * chronological "how it got here" story via the LLM.
 *
 * Usage:
 *   npm run timeline                 # matters with attachments, missing a timeline
 *   TIMELINE_FORCE=1 npm run timeline
 *   TIMELINE_FILE=260698 npm run timeline   # just one file number
 *   TIMELINE_FILES=260755,260756 npm run timeline
 *   TIMELINE_RECENT_MEETINGS=12 npm run timeline   # matters from latest ingest window
 *   TIMELINE_LIMIT=20 npm run timeline
 *
 * Requires OPENAI_API_KEY. PDF bytes + extracted text are cached under
 * .cache/pdf/, so re-runs are cheap.
 */

import "dotenv/config";
import { prisma } from "../src/lib/db";
import { fetchPdfText } from "../src/lib/pdf";
import { generateOriginTimeline } from "../src/lib/origin";

const FORCE = !!process.env.TIMELINE_FORCE;
const ONLY_FILE = process.env.TIMELINE_FILE?.trim();
const ONLY_FILES = (process.env.TIMELINE_FILES || "")
  .split(",")
  .map((f) => f.trim())
  .filter(Boolean);
const RECENT_MEETINGS = parseInt(
  process.env.TIMELINE_RECENT_MEETINGS || "0",
  10,
);
const LIMIT = parseInt(process.env.TIMELINE_LIMIT || "0", 10);

function log(...args: unknown[]) {
  console.log(`[timeline ${new Date().toISOString().slice(11, 19)}]`, ...args);
}

function fmt(d: Date | null): string {
  return d ? d.toISOString().slice(0, 10) : "(no date)";
}

async function run() {
  if (!process.env.OPENAI_API_KEY) {
    log("OPENAI_API_KEY not set — cannot synthesize timelines. Aborting.");
    return;
  }

  const where: Record<string, unknown> = {
    attachments: { some: {} },
  };
  if (ONLY_FILE) where.file = ONLY_FILE;
  else if (ONLY_FILES.length) where.file = { in: ONLY_FILES };
  if (!FORCE && !ONLY_FILE && !ONLY_FILES.length)
    where.originTimeline = null;

  if (RECENT_MEETINGS > 0) {
    const recent = await prisma.meeting.findMany({
      orderBy: { date: "desc" },
      take: RECENT_MEETINGS,
      select: { id: true },
    });
    where.actions = {
      some: { meetingId: { in: recent.map((m) => m.id) } },
    };
  }

  let matters = await prisma.matter.findMany({
    where,
    include: {
      attachments: true,
      actions: {
        select: { date: true, bodyName: true, actionText: true, result: true },
        orderBy: { date: "asc" },
      },
      relationsFrom: { select: { toFile: true } },
    },
    orderBy: { introDate: "desc" },
  });
  if (LIMIT > 0) matters = matters.slice(0, LIMIT);

  log(`processing ${matters.length} matters${FORCE ? " (forced)" : ""}`);

  let done = 0;
  let skipped = 0;
  for (const m of matters) {
    // Extract text from each attachment (cached on disk).
    const documents: { name: string; text: string }[] = [];
    for (const att of m.attachments) {
      if (!att.url) continue;
      const text = await fetchPdfText(att.url);
      if (text && text.length > 40) documents.push({ name: att.name, text });
    }

    if (documents.length === 0) {
      skipped++;
      log(`  · ${m.file} — no readable documents, skipped`);
      continue;
    }

    const timeline = await generateOriginTimeline({
      type: m.type || "Legislation",
      file: m.file || String(m.legistarId),
      title: m.title,
      status: m.status || undefined,
      actionLines: m.actions.map(
        (a) =>
          `${fmt(a.date)} — ${a.bodyName || "?"} — ${a.actionText || ""}${
            a.result ? ` (${a.result})` : ""
          }`,
      ),
      relatedFiles: m.relationsFrom.map((r) => r.toFile),
      documents,
    });

    if (!timeline) {
      skipped++;
      log(`  ! ${m.file} — synthesis failed/empty, skipped`);
      continue;
    }

    await prisma.matter.update({
      where: { id: m.id },
      data: {
        originTimeline: JSON.stringify(timeline),
        originGeneratedAt: new Date(),
      },
    });
    done++;
    log(`  ✓ ${m.file} — ${timeline.steps.length} steps from ${documents.length} docs`);
  }

  log("DONE", { generated: done, skipped });
}

run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
