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

export interface OriginStep {
  date: string | null;
  actor: string;
  title: string;
  detail: string;
  source?: string;
}

export interface OriginTimeline {
  lead: string;
  steps: OriginStep[];
}

export function parseOriginTimeline(
  json: string | null | undefined,
): OriginTimeline | null {
  if (!json) return null;
  try {
    const parsed = JSON.parse(json) as OriginTimeline;
    if (!parsed || !Array.isArray(parsed.steps) || parsed.steps.length === 0)
      return null;
    return parsed;
  } catch {
    return null;
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

export async function getAvailableYears(): Promise<number[]> {
  // Use action dates so the filter matches "matters heard in this year"
  // rather than "matters introduced in this year."
  const rows = await prisma.action.findMany({
    select: { date: true },
    where: { date: { not: null } },
  });
  const years = new Set<number>();
  for (const { date } of rows) {
    if (date) years.add(date.getUTCFullYear());
  }
  return Array.from(years).sort((a, b) => b - a);
}

export async function getAvailableMonths(year: number): Promise<number[]> {
  const start = new Date(Date.UTC(year, 0, 1));
  const end = new Date(Date.UTC(year + 1, 0, 1));
  const rows = await prisma.action.findMany({
    select: { date: true },
    where: { date: { gte: start, lt: end } },
  });
  const months = new Set<number>();
  for (const { date } of rows) {
    if (date) months.add(date.getUTCMonth() + 1); // 1–12
  }
  return Array.from(months).sort((a, b) => b - a); // most recent first
}

export async function getRecentMatters(
  limit = 30,
  topicSlug?: string,
  year?: number,
  month?: number,
) {
  // Filter by action date so "2025" means "matters heard in 2025,"
  // not just "matters introduced in 2025."
  let actionDateRange: { gte: Date; lt: Date } | undefined;
  if (year) {
    const startM = month ? month - 1 : 0;
    actionDateRange = {
      gte: new Date(Date.UTC(year, startM, 1)),
      lt: month
        ? new Date(Date.UTC(year, month, 1))
        : new Date(Date.UTC(year + 1, 0, 1)),
    };
  }

  const dateFilter = actionDateRange
    ? { actions: { some: { date: actionDateRange } } }
    : undefined;

  const topicFilter = topicSlug
    ? { topics: { some: { topic: { slug: topicSlug } } } }
    : undefined;

  const matters = await prisma.matter.findMany({
    where: { ...topicFilter, ...dateFilter },
    include: {
      topics: { include: { topic: true } },
      // When a date window is active, restrict the fetched actions to that window.
      // This means m.actions only contains in-period rows, so lastActivity is
      // automatically scoped to the selected year/month — no JS re-filtering needed.
      actions: actionDateRange
        ? { where: { date: actionDateRange }, select: { date: true } }
        : { select: { date: true } },
      votes: { select: { value: true } },
      sponsorships: { include: { supervisor: true } },
    },
  });

  const withActivity = matters.map((m) => {
    const actionDates = m.actions
      .map((a) => a.date?.getTime() ?? 0)
      .filter(Boolean);
    // When filtering by period, do NOT mix in introDate/finalDate — those can
    // belong to a different year and would push the sort date out of the window.
    const lastActivity = actionDateRange
      ? Math.max(...actionDates, 0)
      : Math.max(
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
      attachments: { orderBy: { id: "asc" } },
      relationsFrom: {
        include: {
          to: {
            select: {
              legistarId: true,
              file: true,
              type: true,
              status: true,
              title: true,
              summary: true,
              introDate: true,
              finalDate: true,
              sponsorships: { include: { supervisor: { select: { fullName: true, slug: true } } } },
            },
          },
        },
      },
      // Also surface matters that reference THIS one, so we can show successors.
      relationsTo: {
        include: {
          from: {
            select: {
              legistarId: true,
              file: true,
              type: true,
              status: true,
              title: true,
              summary: true,
              introDate: true,
              finalDate: true,
              sponsorships: { include: { supervisor: { select: { fullName: true, slug: true } } } },
            },
          },
        },
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
