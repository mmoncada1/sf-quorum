import Link from "next/link";
import { getLeaderboard } from "@/lib/queries";
import { Avatar, GradeBadge, ScoreNumber, StatBar, TopicChip } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { pct } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function LeaderboardPage() {
  const leaders = await getLeaderboard();

  return (
    <div className="space-y-10">
      <header className="max-w-prose">
        <div className="kicker mb-3">The standings</div>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          The Leaderboard
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Eleven supervisors, one scoreboard. Every member of the Board is graded
          on what they actually produce: substantive legislation passed, bills
          authored, attendance at the dais, and willingness to break from the
          pack. Symbolic and procedural resolutions count for little. Impact,
          Activity, and Attendance are scored against fixed targets, so a grade
          means the same thing no matter who else is on the Board.
        </p>
      </header>

      {leaders.length === 0 ? (
        <div className="nb-card p-10 text-center text-muted">
          No stats computed yet. Run{" "}
          <code className="rounded border border-line bg-paper px-1.5 py-0.5 font-mono text-xs text-ink">
            npm run refresh
          </code>
          .
        </div>
      ) : (
        <ol className="overflow-hidden rounded-xl border border-line bg-surface">
          {leaders.map((s, i) => {
            const st = s.stats!;
            return (
              <li key={s.id} className="border-b border-line last:border-0">
                <Reveal delay={Math.min(i, 8) * 0.05}>
                <Link
                  href={`/supervisors/${s.slug}`}
                  className="group flex flex-col gap-5 p-5 transition-colors hover:bg-paper lg:flex-row lg:items-center"
                >
                  {/* Rank + identity */}
                  <div className="flex items-center gap-4 lg:w-72">
                    <div className="w-7 shrink-0 text-center font-mono text-xl font-bold tabular-nums text-faint">
                      {st.rank}
                    </div>
                    <Avatar name={s.fullName} district={s.district} photoUrl={s.photoUrl} size={68} />
                    <div className="min-w-0">
                      <div className="truncate font-semibold text-ink">
                        {s.fullName}
                      </div>
                      <div className="text-xs text-muted">
                        District {s.district} · {s.title}
                      </div>
                      <div className="mt-1.5 flex flex-wrap gap-1">
                        {s.topTopics.slice(0, 2).map((t) => (
                          <TopicChip key={t.slug} name={t.name} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Score + grade */}
                  <div className="flex items-center gap-4 lg:w-36">
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-wider text-muted">
                        Overall
                      </div>
                      <ScoreNumber score={st.overallScore} />
                    </div>
                    <GradeBadge grade={st.grade} className="h-11 min-w-11 text-2xl" />
                  </div>

                  {/* Stat bars */}
                  <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-3">
                    <StatBar label="Impact" value={st.impactScore} />
                    <StatBar label="Activity" value={st.activityScore} />
                    <StatBar label="Attendance" value={st.attendanceRate * 100} />
                    <StatBar label="Independence" value={st.independence} />
                  </div>

                  {/* Counts */}
                  <div className="flex shrink-0 gap-6 border-t border-line pt-3 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                    <Count label="Votes" value={st.totalVotes} />
                    <Count label="Authored" value={st.sponsored} />
                    <Count label="Passed" value={st.passedSponsored} />
                    <Count label="Att." value={pct(st.attendanceRate)} />
                  </div>
                </Link>
                </Reveal>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}

function Count({ label, value }: { label: string; value: number | string }) {
  return (
    <div>
      <div className="font-mono text-lg font-bold tabular-nums text-ink">
        {value}
      </div>
      <div className="font-mono text-[10px] uppercase tracking-wider text-muted">
        {label}
      </div>
    </div>
  );
}
