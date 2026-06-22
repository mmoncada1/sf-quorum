/**
 * Enrichment: classify matters into policy topics and generate plain-English
 * ("ELI5") summaries. Safe to re-run; only fills in what's missing unless
 * ENRICH_FORCE=1.
 */

import "dotenv/config";
import { prisma } from "../src/lib/db";
import { classify, TOPIC_BY_SLUG } from "../src/lib/topics";
import { summarize } from "../src/lib/summarize";

const FORCE = !!process.env.ENRICH_FORCE;

function log(...args: unknown[]) {
  console.log(`[enrich ${new Date().toISOString().slice(11, 19)}]`, ...args);
}

async function run() {
  const topics = await prisma.topic.findMany();
  const topicIdBySlug = new Map(topics.map((t) => [t.slug, t.id]));

  const matters = await prisma.matter.findMany({
    where: FORCE ? {} : { OR: [{ summary: null }, { topics: { none: {} } }] },
    select: { id: true, type: true, title: true, status: true, summary: true },
  });
  log(`enriching ${matters.length} matters${FORCE ? " (forced)" : ""}`);

  let n = 0;
  for (const m of matters) {
    // Topics
    const tags = classify(`${m.title}`);
    for (const tag of tags) {
      const topicId = topicIdBySlug.get(tag.slug);
      if (!topicId) continue;
      await prisma.matterTopic.upsert({
        where: { matterId_topicId: { matterId: m.id, topicId } },
        create: { matterId: m.id, topicId, weight: tag.weight },
        update: { weight: tag.weight },
      });
    }

    // Importance heuristic: substantive types weigh more; honorary less.
    const isHonorary = tags.some((t) => t.slug === "honorary");
    const typeWeight =
      m.type === "Ordinance" || m.type === "Charter Amendment"
        ? 1.0
        : m.type === "Resolution"
          ? isHonorary
            ? 0.2
            : 0.6
          : m.type === "Motion"
            ? 0.5
            : 0.3;

    // Summary
    if (FORCE || !m.summary) {
      const s = await summarize({
        type: m.type || "Legislation",
        title: m.title,
        status: m.status || undefined,
      });
      await prisma.matter.update({
        where: { id: m.id },
        data: { summary: s.text, summarySource: s.source, importance: typeWeight },
      });
    } else {
      await prisma.matter.update({
        where: { id: m.id },
        data: { importance: typeWeight },
      });
    }

    n++;
    if (n % 25 === 0) log(`  ${n}/${matters.length}`);
  }

  log("DONE", { enriched: n });
}

run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
