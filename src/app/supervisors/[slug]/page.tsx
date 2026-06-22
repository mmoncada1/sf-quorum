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
      <Link
        href="/leaderboard"
        className="inline-block font-bold text-black underline decoration-2 underline-offset-2 hover:text-main"
      >
        ← Back to leaderboard
      </Link>

      {/* Hero */}
      <section className="nb-card overflow-hidden">
        <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
          <Avatar name={sup.fullName} district={sup.district} size={96} />
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="rounded-base border-2 border-border bg-main px-2 py-0.5 font-heading text-black">
                District {sup.district}
              </span>
              <span className="font-bold text-black/70">{sup.title}</span>
              {st?.rank ? (
                <span className="font-bold text-black/50">
                  · {ordinal(st.rank)} overall
                </span>
              ) : null}
            </div>
            <h1 className="mt-2 font-display text-4xl font-heading uppercase tracking-tight text-black">
              {sup.fullName}
            </h1>
            <p className="mt-2 max-w-2xl font-medium text-black/80">{report}</p>
            {sup.email ? (
              <a
                href={`mailto:${sup.email}`}
                className="mt-2 inline-block text-xs font-bold text-main underline decoration-2 underline-offset-2"
              >
                {sup.email}
              </a>
            ) : null}
          </div>
          {st ? (
            <div className="flex items-center gap-5 sm:flex-col sm:items-end">
              <div className="text-right">
                <div className="text-[11px] font-bold uppercase tracking-wide text-black/60">
                  Overall
                </div>
                <ScoreNumber score={st.overallScore} />
              </div>
              <GradeBadge grade={st.grade} className="h-14 min-w-14 text-3xl" />
            </div>
          ) : null}
        </div>

        {st ? (
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-t-2 border-border bg-bg p-6 sm:grid-cols-4">
            <StatBar label="Impact" value={st.impactScore} accent="var(--win)" />
            <StatBar label="Activity" value={st.activityScore} accent="var(--info)" />
            <StatBar label="Attendance" value={st.attendanceRate * 100} accent="var(--gold)" />
            <StatBar label="Independence" value={st.independence} accent="var(--main)" />
          </div>
        ) : null}
      </section>

      {/* Stat line */}
      {st ? (
        <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <Tile label="Votes cast" value={st.totalVotes} />
          <Tile label="Aye" value={st.ayes} color="bg-win" />
          <Tile label="No" value={st.noes} color="bg-loss" />
          <Tile label="Absent / excused" value={st.absences} color="bg-zinc-200" />
          <Tile label="Authored" value={st.sponsored} color="bg-info" />
          <Tile label="Passed into law" value={st.passedSponsored} color="bg-gold" />
        </section>
      ) : null}

      {/* Focus areas */}
      {topTopics.length > 0 && (
        <section>
          <SectionTitle kicker="Where the time goes">Focus areas</SectionTitle>
          <div className="nb-card space-y-3 p-5">
            {topTopics.map((t) => {
              const def = TOPIC_BY_SLUG[t.slug];
              return (
                <div key={t.slug} className="flex items-center gap-3">
                  <div className="w-40 shrink-0 text-sm font-bold text-black">
                    {t.emoji} {t.name}
                  </div>
                  <div className="h-4 flex-1 overflow-hidden rounded-base border-2 border-border bg-bw">
                    <div
                      className="h-full"
                      style={{
                        width: `${(t.count / maxTopic) * 100}%`,
                        background: def?.color || "var(--main)",
                      }}
                    />
                  </div>
                  <div className="w-8 text-right text-sm font-heading tabular-nums text-black">
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
            <div className="nb-card p-5 text-sm font-bold text-black/60">
              No authored legislation in the ingested window.
            </div>
          ) : (
            <ul className="space-y-2">
              {sponsored.slice(0, 14).map((s) => (
                <li key={s.matterId}>
                  <Link
                    href={`/legislation/${s.matter.legistarId}`}
                    className="nb-card nb-press group block p-3"
                  >
                    <div className="flex items-center gap-2">
                      <TypePill type={s.matter.type} />
                      {s.matter.file ? (
                        <span className="font-mono text-xs font-bold text-black/50">
                          #{s.matter.file}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 line-clamp-2 text-sm font-bold text-black">
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
            <div className="nb-card p-5 text-sm font-bold text-black/60">
              No recorded votes in the ingested window.
            </div>
          ) : (
            <ul className="space-y-2">
              {votes.slice(0, 16).map((v) => (
                <li key={v.id}>
                  <Link
                    href={`/legislation/${v.matter.legistarId}`}
                    className="nb-card nb-press group flex items-center gap-3 p-3"
                  >
                    <VotePill value={v.value} />
                    <div className="min-w-0 flex-1">
                      <p className="line-clamp-1 text-sm font-bold text-black">
                        {v.matter.title}
                      </p>
                      <p className="text-xs font-bold text-black/50">
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
  color = "bg-bw",
}: {
  label: string;
  value: number;
  color?: string;
}) {
  return (
    <div className={`rounded-base border-2 border-border p-4 shadow-nbsm ${color}`}>
      <div className="font-display text-2xl font-heading tabular-nums text-black">
        {value}
      </div>
      <div className="mt-0.5 text-xs font-bold uppercase text-black/70">{label}</div>
    </div>
  );
}
