import Link from "next/link";
import { notFound } from "next/navigation";
import { getSupervisor } from "@/lib/queries";
import {
  Avatar,
  GradeBadge,
  ScoreNumber,
  SectionTitle,
  StatBar,
  TopicChip,
  TypePill,
  VotePill,
} from "@/components/ui";
import { fmtDate, ordinal, pct } from "@/lib/format";
import { TOPIC_BY_SLUG } from "@/lib/topics";

export const dynamic = "force-dynamic";

function scoutingReport(
  name: string,
  st: NonNullable<Awaited<ReturnType<typeof getSupervisor>>>["sup"]["stats"],
  topTopic?: string,
): string {
  if (!st) return "";
  const bits: string[] = [];
  if (st.impactScore >= 70) bits.push("a heavy hitter who turns bills into law");
  else if (st.impactScore <= 30)
    bits.push("long on talk, short on enacted results");
  if (st.activityScore >= 70) bits.push("authors a high volume of legislation");
  else if (st.activityScore <= 25) bits.push("rarely puts their own name on legislation");
  if (st.attendanceRate >= 0.95) bits.push("near-perfect voting attendance");
  else if (st.attendanceRate < 0.8)
    bits.push("frequently absent or excused from votes in this window");
  if (st.independence >= 70) bits.push("a frequent dissenter who breaks from the pack");
  else if (st.independence <= 10) bits.push("an almost-automatic yes vote");
  const focus = topTopic ? ` Primary beat: ${topTopic}.` : "";
  if (bits.length === 0)
    return `${name} is a middle-of-the-pack member of the Board.${focus}`;
  return `${name} is ${bits.join(", ")}.${focus}`;
}

export default async function SupervisorPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getSupervisor(params.slug);
  if (!data) notFound();
  const { sup, topTopics, sponsorships, votes } = data;
  const st = sup.stats;

  const sponsored = sponsorships.filter((s) => s.role === "sponsor");
  const maxTopic = Math.max(1, ...topTopics.map((t) => t.count));
  const report = scoutingReport(sup.fullName, st, topTopics[0]?.name);

  return (
    <div className="space-y-10">
      <Link href="/leaderboard" className="text-sm link-muted">
        ← Back to leaderboard
      </Link>

      {/* Hero */}
      <section className="card overflow-hidden">
        <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
          <Avatar name={sup.fullName} district={sup.district} size={96} />
          <div className="flex-1">
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <span className="rounded-md bg-white/5 px-2 py-0.5 font-semibold text-zinc-200">
                District {sup.district}
              </span>
              <span>{sup.title}</span>
              {st?.rank ? (
                <span className="text-zinc-500">
                  · {ordinal(st.rank)} overall
                </span>
              ) : null}
            </div>
            <h1 className="mt-1 font-display text-3xl font-black text-white">
              {sup.fullName}
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-zinc-400">{report}</p>
            {sup.email ? (
              <a
                href={`mailto:${sup.email}`}
                className="mt-2 inline-block text-xs text-brand hover:underline"
              >
                {sup.email}
              </a>
            ) : null}
          </div>
          {st ? (
            <div className="flex items-center gap-5 sm:flex-col sm:items-end">
              <div className="text-right">
                <div className="text-[11px] uppercase tracking-wide text-zinc-500">
                  Overall
                </div>
                <ScoreNumber score={st.overallScore} />
              </div>
              <GradeBadge grade={st.grade} className="h-14 min-w-14 text-3xl" />
            </div>
          ) : null}
        </div>

        {st ? (
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-ink-line/60 p-6 sm:grid-cols-4">
            <StatBar label="Impact" value={st.impactScore} accent="#2fd17a" />
            <StatBar label="Activity" value={st.activityScore} accent="#5b8def" />
            <StatBar label="Attendance" value={st.attendanceRate * 100} accent="#ffce4d" />
            <StatBar label="Independence" value={st.independence} accent="#ff5a36" />
          </div>
        ) : null}
      </section>

      {/* Stat line */}
      {st ? (
        <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <Tile label="Votes cast" value={st.totalVotes} />
          <Tile label="Aye" value={st.ayes} tone="text-win" />
          <Tile label="No" value={st.noes} tone="text-loss" />
          <Tile label="Absent / excused" value={st.absences} tone="text-meh" />
          <Tile label="Authored" value={st.sponsored} />
          <Tile label="Passed into law" value={st.passedSponsored} tone="text-win" />
        </section>
      ) : null}

      {/* Focus areas */}
      {topTopics.length > 0 && (
        <section>
          <SectionTitle kicker="Where the time goes">Focus areas</SectionTitle>
          <div className="card space-y-3 p-5">
            {topTopics.map((t) => {
              const def = TOPIC_BY_SLUG[t.slug];
              return (
                <div key={t.slug} className="flex items-center gap-3">
                  <div className="w-40 shrink-0 text-sm text-zinc-300">
                    {t.emoji} {t.name}
                  </div>
                  <div className="stat-track flex-1">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${(t.count / maxTopic) * 100}%`,
                        background: def?.color || "#ff5a36",
                      }}
                    />
                  </div>
                  <div className="w-8 text-right text-sm tabular-nums text-zinc-400">
                    {t.count}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Authored legislation */}
        <section>
          <SectionTitle kicker="The output">Authored legislation</SectionTitle>
          {sponsored.length === 0 ? (
            <div className="card p-5 text-sm text-zinc-500">
              No authored legislation in the ingested window.
            </div>
          ) : (
            <ul className="space-y-2">
              {sponsored.slice(0, 14).map((s) => (
                <li key={s.matterId}>
                  <Link
                    href={`/legislation/${s.matter.legistarId}`}
                    className="card group block p-3 transition hover:border-brand/40"
                  >
                    <div className="flex items-center gap-2">
                      <TypePill type={s.matter.type} />
                      {s.matter.file ? (
                        <span className="font-mono text-xs text-zinc-500">
                          #{s.matter.file}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 line-clamp-2 text-sm text-zinc-200 group-hover:text-white">
                      {s.matter.summary || s.matter.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Voting record */}
        <section>
          <SectionTitle kicker="The record">Recent votes</SectionTitle>
          {votes.length === 0 ? (
            <div className="card p-5 text-sm text-zinc-500">
              No recorded votes in the ingested window.
            </div>
          ) : (
            <ul className="space-y-2">
              {votes.slice(0, 16).map((v) => (
                <li key={v.id}>
                  <Link
                    href={`/legislation/${v.matter.legistarId}`}
                    className="card group flex items-center gap-3 p-3 transition hover:border-brand/40"
                  >
                    <VotePill value={v.value} />
                    <div className="min-w-0 flex-1">
                      <p className="line-clamp-1 text-sm text-zinc-200 group-hover:text-white">
                        {v.matter.title}
                      </p>
                      <p className="text-xs text-zinc-500">
                        {v.action.bodyName} · {fmtDate(v.action.date)}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}

function Tile({
  label,
  value,
  tone = "text-white",
}: {
  label: string;
  value: number;
  tone?: string;
}) {
  return (
    <div className="card p-4">
      <div className={`font-display text-2xl font-black tabular-nums ${tone}`}>
        {value}
      </div>
      <div className="mt-0.5 text-xs text-zinc-500">{label}</div>
    </div>
  );
}
