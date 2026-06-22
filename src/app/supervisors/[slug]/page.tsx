import Link from "next/link";
import { notFound } from "next/navigation";
import { getSupervisor } from "@/lib/queries";
import {
  Avatar,
  GradeBadge,
  ScoreNumber,
  SectionTitle,
  StatBar,
  StatusPill,
  TopicChip,
  TypePill,
  VotePill,
} from "@/components/ui";
import { fmtDate, ordinal } from "@/lib/format";
import { monthsBetween, monthYear } from "@/lib/terms";

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

  const sponsored = sponsorships
    .filter((s) => s.role === "sponsor")
    .sort((a, b) => {
      const da = (a.matter.finalDate ?? a.matter.introDate)?.getTime() ?? 0;
      const db = (b.matter.finalDate ?? b.matter.introDate)?.getTime() ?? 0;
      return db - da;
    });
  const maxTopic = Math.max(1, ...topTopics.map((t) => t.count));
  const report = scoutingReport(sup.fullName, st, topTopics[0]?.name);
  const tenureMonths = sup.termStart
    ? monthsBetween(sup.termStart, new Date())
    : null;

  return (
    <div className="space-y-10">
      <Link
        href="/leaderboard"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
      >
        <span aria-hidden>&larr;</span> Back to leaderboard
      </Link>

      {/* Hero */}
      <section className="nb-card overflow-hidden">
        <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
          <Avatar name={sup.fullName} district={sup.district} photoUrl={sup.photoUrl} size={128} />
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="rounded border border-line-strong px-2 py-0.5 font-mono text-xs font-semibold text-ink">
                District {sup.district}
              </span>
              <span className="text-muted">{sup.title}</span>
              {st?.rank ? (
                <span className="text-faint">· {ordinal(st.rank)} overall</span>
              ) : null}
              {sup.termStart ? (
                <span className="text-faint">
                  · In office since {monthYear(sup.termStart)}
                  {tenureMonths != null
                    ? ` (${tenureMonths < 12 ? `${tenureMonths} mo` : `${(tenureMonths / 12).toFixed(1)} yr`})`
                    : ""}
                </span>
              ) : null}
            </div>
            <h1 className="mt-2.5 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {sup.fullName}
            </h1>
            <p className="mt-2.5 max-w-2xl leading-relaxed text-muted">{report}</p>
            {sup.email ? (
              <a
                href={`mailto:${sup.email}`}
                className="mt-2.5 inline-block font-mono text-xs text-muted underline decoration-line decoration-2 underline-offset-2 hover:text-accent"
              >
                {sup.email}
              </a>
            ) : null}
          </div>
          {st ? (
            <div className="flex items-center gap-5 sm:flex-col sm:items-end">
              <div className="text-right">
                <div className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  Overall
                </div>
                <ScoreNumber score={st.overallScore} />
              </div>
              <GradeBadge grade={st.grade} className="h-14 min-w-14 text-3xl" />
            </div>
          ) : null}
        </div>

        {st ? (
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line bg-paper p-6 sm:grid-cols-4">
            <StatBar label="Impact" value={st.impactScore} />
            <StatBar label="Activity" value={st.activityScore} />
            <StatBar label="Attendance" value={st.attendanceRate * 100} />
            <StatBar label="Independence" value={st.independence} />
          </div>
        ) : null}
      </section>

      {/* Stat line */}
      {st ? (
        <section className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
          <Tile label="Votes cast" value={st.totalVotes} />
          <Tile label="Aye" value={st.ayes} tone="text-yea" />
          <Tile label="No" value={st.noes} tone="text-nay" />
          <Tile label="Absent / excused" value={st.absences} tone="text-faint" />
          <Tile label="Authored" value={st.sponsored} />
          <Tile label="Passed into law" value={st.passedSponsored} />
        </section>
      ) : null}

      {/* Focus areas */}
      {topTopics.length > 0 && (
        <section>
          <SectionTitle>Focus areas</SectionTitle>
          <div className="nb-card space-y-3.5 p-5">
            {topTopics.map((t) => (
              <div key={t.slug} className="flex items-center gap-3">
                <div className="w-40 shrink-0 text-sm font-medium text-ink">
                  {t.name}
                </div>
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
                  <div
                    className="h-full rounded-full bg-ink"
                    style={{ width: `${(t.count / maxTopic) * 100}%` }}
                  />
                </div>
                <div className="w-8 text-right font-mono text-sm font-bold tabular-nums text-ink">
                  {t.count}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Authored legislation */}
        <section>
          <SectionTitle>Authored legislation</SectionTitle>
          {sponsored.length === 0 ? (
            <div className="nb-card p-5 text-sm text-muted">
              No authored legislation in the ingested window.
            </div>
          ) : (
            <ul className="space-y-2">
              {sponsored.slice(0, 14).map((s) => (
                <li key={s.matterId}>
                  <Link
                    href={`/legislation/${s.matter.legistarId}`}
                    className="nb-card nb-press group block p-4"
                  >
                    <div className="flex items-center gap-2">
                      <TypePill type={s.matter.type} />
                      {s.matter.file ? (
                        <span className="font-mono text-xs text-faint">
                          #{s.matter.file}
                        </span>
                      ) : null}
                      <StatusPill status={s.matter.status} />
                      {s.matter.finalDate || s.matter.introDate ? (
                        <span className="ml-auto font-mono text-[11px] text-faint">
                          {fmtDate(s.matter.finalDate ?? s.matter.introDate)}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-2 line-clamp-2 text-sm font-medium text-ink">
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
          <SectionTitle>Recent votes</SectionTitle>
          {votes.length === 0 ? (
            <div className="nb-card p-5 text-sm text-muted">
              No recorded votes in the ingested window.
            </div>
          ) : (
            <ul className="space-y-2">
              {votes.slice(0, 16).map((v) => (
                <li key={v.id}>
                  <Link
                    href={`/legislation/${v.matter.legistarId}`}
                    className="nb-card nb-press group flex items-center gap-3 p-4"
                  >
                    <VotePill value={v.value} />
                    <div className="min-w-0 flex-1">
                      <p className="line-clamp-1 text-sm font-medium text-ink">
                        {v.matter.title}
                      </p>
                      <p className="font-mono text-xs text-muted">
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
  tone = "text-ink",
}: {
  label: string;
  value: number;
  tone?: string;
}) {
  return (
    <div className="bg-surface p-4">
      <div className={`font-mono text-2xl font-bold tabular-nums ${tone}`}>
        {value}
      </div>
      <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted">
        {label}
      </div>
    </div>
  );
}
