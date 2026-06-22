/**
 * Compute per-supervisor "athlete" stats and leaderboard rankings from the
 * ingested votes + sponsorships, then persist them to SupervisorStat.
 */

import "dotenv/config";
import { prisma } from "../src/lib/db";
import { scoreCohort, type RawStats } from "../src/lib/scoring";
import { isProcedural } from "../src/lib/summarize";

function log(...args: unknown[]) {
  console.log(`[compute ${new Date().toISOString().slice(11, 19)}]`, ...args);
}

const PASSED = /(pass|adopt|approv|enact|sign|ordered|effective|finally)/i;
const PRESENT_VALUES = new Set(["Aye", "No", "Abstain", "Present"]);
const ABSENT_VALUES = new Set(["Excused", "Absent"]);

async function run() {
  const supervisors = await prisma.supervisor.findMany({ where: { active: true } });

  const votes = await prisma.vote.findMany({
    select: { supervisorId: true, value: true, actionId: true },
  });

  // Per-action Aye/No tallies for dissent detection.
  const tally = new Map<number, { aye: number; no: number }>();
  for (const v of votes) {
    const t = tally.get(v.actionId) || { aye: 0, no: 0 };
    if (v.value === "Aye") t.aye++;
    else if (v.value === "No") t.no++;
    tally.set(v.actionId, t);
  }

  const sponsorships = await prisma.sponsorship.findMany({
    include: {
      matter: {
        select: {
          title: true,
          status: true,
          type: true,
          topics: { include: { topic: true } },
        },
      },
    },
  });

  const raws: RawStats[] = supervisors.map((s) => {
    const myVotes = votes.filter((v) => v.supervisorId === s.id);
    let ayes = 0, noes = 0, present = 0, absences = 0, dissent = 0;
    for (const v of myVotes) {
      if (v.value === "Aye") ayes++;
      else if (v.value === "No") noes++;
      if (PRESENT_VALUES.has(v.value)) present++;
      if (ABSENT_VALUES.has(v.value)) absences++;
      const t = tally.get(v.actionId);
      if (t && (v.value === "Aye" || v.value === "No")) {
        const majority = t.aye >= t.no ? "Aye" : "No";
        if (v.value !== majority && Math.min(t.aye, t.no) > 0) dissent++;
      }
    }

    const mine = sponsorships.filter((sp) => sp.supervisorId === s.id);
    const sponsoredItems = mine.filter((sp) => sp.role === "sponsor");
    const sponsored = sponsoredItems.length;
    const cosponsored = mine.filter((sp) => sp.role === "cosponsor").length;
    const passedSponsored = sponsoredItems.filter((sp) =>
      PASSED.test(sp.matter.status || ""),
    ).length;
    const isHonorary = (sp: (typeof sponsoredItems)[number]) =>
      sp.matter.topics.some((mt) => mt.topic.slug === "honorary");
    const proceduralSponsored = sponsoredItems.filter((sp) =>
      isProcedural(sp.matter.title),
    ).length;
    const substantiveItems = sponsoredItems.filter(
      (sp) => !isHonorary(sp) && !isProcedural(sp.matter.title),
    );
    const substantiveSponsored = substantiveItems.length;
    const passedSubstantiveSponsored = substantiveItems.filter((sp) =>
      PASSED.test(sp.matter.status || ""),
    ).length;

    // Focus areas: topic counts across everything they authored.
    const topicCount = new Map<string, { name: string; emoji: string; count: number }>();
    for (const sp of mine) {
      for (const mt of sp.matter.topics) {
        const cur = topicCount.get(mt.topic.slug) || {
          name: mt.topic.name,
          emoji: mt.topic.emoji || "",
          count: 0,
        };
        cur.count++;
        topicCount.set(mt.topic.slug, cur);
      }
    }
    const topTopics = Array.from(topicCount.entries())
      .map(([slug, v]) => ({ slug, ...v }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    return {
      supervisorId: s.id,
      totalVotes: myVotes.length,
      ayes,
      noes,
      present,
      absences,
      dissentVotes: dissent,
      sponsored,
      cosponsored,
      passedSponsored,
      substantiveSponsored,
      passedSubstantiveSponsored,
      proceduralSponsored,
      topTopics,
    };
  });

  const scored = scoreCohort(raws);

  for (const s of scored) {
    await prisma.supervisorStat.upsert({
      where: { supervisorId: s.supervisorId },
      create: {
        supervisorId: s.supervisorId,
        totalVotes: s.totalVotes,
        ayes: s.ayes,
        noes: s.noes,
        absences: s.absences,
        attendanceRate: s.attendanceRate,
        dissentRate: s.dissentRate,
        sponsored: s.sponsored,
        cosponsored: s.cosponsored,
        passedSponsored: s.passedSponsored,
        impactScore: s.impactScore,
        activityScore: s.activityScore,
        independence: s.independence,
        overallScore: s.overallScore,
        rank: s.rank,
        grade: s.grade,
        topTopicsJson: JSON.stringify(s.topTopics),
      },
      update: {
        totalVotes: s.totalVotes,
        ayes: s.ayes,
        noes: s.noes,
        absences: s.absences,
        attendanceRate: s.attendanceRate,
        dissentRate: s.dissentRate,
        sponsored: s.sponsored,
        cosponsored: s.cosponsored,
        passedSponsored: s.passedSponsored,
        impactScore: s.impactScore,
        activityScore: s.activityScore,
        independence: s.independence,
        overallScore: s.overallScore,
        rank: s.rank,
        grade: s.grade,
        topTopicsJson: JSON.stringify(s.topTopics),
      },
    });
  }

  log("DONE — ranked", scored.length, "supervisors");
  for (const s of scored) {
    const sup = supervisors.find((x) => x.id === s.supervisorId)!;
    log(
      `#${s.rank} ${sup.fullName} (D${sup.district}) — ${s.grade} ${s.overallScore} | votes ${s.totalVotes} att ${(s.attendanceRate * 100).toFixed(0)}% spons ${s.sponsored}`,
    );
  }
}

run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
