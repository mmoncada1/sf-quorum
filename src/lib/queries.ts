import { prisma } from "./db";

export interface TopTopic {
  slug: string;
  name: string;
  emoji: string;
  count: number;
}

export function parseTopTopics(json: string | null | undefined): TopTopic[] {
  if (!json) return [];
  try {
    return JSON.parse(json) as TopTopic[];
  } catch {
    return [];
  }
}

export async function getOverview() {
  const [matters, votes, meetings, supervisors, lastIngest] = await Promise.all([
    prisma.matter.count(),
    prisma.vote.count(),
    prisma.meeting.count(),
    prisma.supervisor.count({ where: { active: true } }),
    prisma.ingestLog.findFirst({
      where: { finishedAt: { not: null } },
      orderBy: { finishedAt: "desc" },
    }),
  ]);
  return { matters, votes, meetings, supervisors, lastIngest };
}

export async function getLeaderboard() {
  const sups = await prisma.supervisor.findMany({
    where: { active: true },
    include: { stats: true },
  });
  const ranked = sups
    .filter((s) => s.stats)
    .sort((a, b) => (a.stats!.rank ?? 99) - (b.stats!.rank ?? 99));
  return ranked.map((s) => ({
    ...s,
    topTopics: parseTopTopics(s.stats?.topTopicsJson),
  }));
}

function tally(votes: { value: string }[]) {
  const t = { aye: 0, no: 0, other: 0 };
  for (const v of votes) {
    if (v.value === "Aye") t.aye++;
    else if (v.value === "No") t.no++;
    else t.other++;
  }
  return t;
}

export async function getRecentMatters(limit = 30, topicSlug?: string) {
  const matters = await prisma.matter.findMany({
    where: topicSlug
      ? { topics: { some: { topic: { slug: topicSlug } } } }
      : undefined,
    include: {
      topics: { include: { topic: true } },
      actions: { select: { date: true } },
      votes: { select: { value: true } },
      sponsorships: { include: { supervisor: true } },
    },
  });

  const withActivity = matters.map((m) => {
    const actionDates = m.actions
      .map((a) => a.date?.getTime() ?? 0)
      .filter(Boolean);
    const lastActivity = Math.max(
      m.introDate?.getTime() ?? 0,
      m.finalDate?.getTime() ?? 0,
      ...actionDates,
      0,
    );
    return { m, lastActivity, tally: tally(m.votes) };
  });

  withActivity.sort((a, b) => b.lastActivity - a.lastActivity);
  return withActivity.slice(0, limit);
}

export async function getMatter(legistarId: number) {
  const m = await prisma.matter.findUnique({
    where: { legistarId },
    include: {
      topics: { include: { topic: true } },
      sponsorships: { include: { supervisor: true } },
      actions: {
        include: {
          meeting: true,
          votes: { include: { supervisor: true } },
        },
        orderBy: { date: "desc" },
      },
    },
  });
  return m;
}

export async function getSupervisor(slug: string) {
  const sup = await prisma.supervisor.findUnique({
    where: { slug },
    include: { stats: true },
  });
  if (!sup) return null;

  const [sponsorships, votes] = await Promise.all([
    prisma.sponsorship.findMany({
      where: { supervisorId: sup.id },
      include: {
        matter: {
          include: { topics: { include: { topic: true } } },
        },
      },
    }),
    prisma.vote.findMany({
      where: { supervisorId: sup.id },
      include: {
        action: { select: { date: true, actionText: true, result: true, bodyName: true } },
        matter: { select: { legistarId: true, file: true, title: true, type: true } },
      },
      orderBy: { action: { date: "desc" } },
      take: 40,
    }),
  ]);

  return {
    sup,
    topTopics: parseTopTopics(sup.stats?.topTopicsJson),
    sponsorships,
    votes,
  };
}

export async function getAllSupervisorsRanked() {
  return getLeaderboard();
}
