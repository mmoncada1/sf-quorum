import Link from "next/link";
import { getLeaderboard } from "@/lib/queries";
import { Avatar, GradeBadge, ScoreNumber, StatBar, TopicChip } from "@/components/ui";
import { pct } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function LeaderboardPage() {
  const leaders = await getLeaderboard();

  return (
    <div className="space-y-8">
      <header className="nb-card max-w-3xl p-6">
        <div className="kicker mb-3">The standings</div>
        <h1 className="font-display text-4xl font-heading uppercase tracking-tight text-black">
          The Leaderboard
        </h1>
        <p className="mt-3 font-medium text-black/80">
          Eleven supervisors. One scoreboard. Every member of the Board is graded
          on what they actually produce — substantive legislation passed, bills
          authored, attendance at the dais, and willingness to break from the
          pack. Symbolic, feel-good resolutions count for very little. Scores are
          relative: the category leader sets the 100.
        </p>
      </header>

      {leaders.length === 0 ? (
        <div className="nb-card p-8 text-center font-bold text-black/70">
          No stats computed yet. Run <code className="text-main">npm run refresh</code>.
        </div>
      ) : (
        <ol className="space-y-4">
          {leaders.map((s) => {
            const st = s.stats!;
            return (
              <li key={s.id}>
                <Link
                  href={`/supervisors/${s.slug}`}
                  className="nb-card nb-press group flex flex-col gap-5 p-5 lg:flex-row lg:items-center"
                >
                  {/* Rank + identity */}
                  <div className="flex items-center gap-4 lg:w-72">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-base border-2 border-border bg-bg font-display text-xl font-heading text-black">
                      {st.rank}
                    </div>
                    <Avatar name={s.fullName} district={s.district} size={52} />
                    <div className="min-w-0">
                      <div className="truncate font-heading text-black">
                        {s.fullName}
                      </div>
                      <div className="text-xs font-bold text-black/60">
                        District {s.district} · {s.title}
                      </div>
                      <div className="mt-1.5 flex flex-wrap gap-1">
                        {s.topTopics.slice(0, 2).map((t) => (
                          <TopicChip key={t.slug} emoji={t.emoji} name={t.name} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Score + grade */}
                  <div className="flex items-center gap-4 lg:w-40">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wide text-black/60">
                        Overall
                      </div>
                      <ScoreNumber score={st.overallScore} />
                    </div>
                    <GradeBadge grade={st.grade} className="h-12 min-w-12 text-2xl" />
                  </div>

                  {/* Stat bars */}
                  <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-3">
                    <StatBar label="Impact" value={st.impactScore} accent="var(--win)" />
                    <StatBar label="Activity" value={st.activityScore} accent="var(--info)" />
                    <StatBar label="Attendance" value={st.attendanceRate * 100} accent="var(--gold)" />
                    <StatBar label="Independence" value={st.independence} accent="var(--main)" />
                  </div>

                  {/* Counts */}
                  <div className="flex shrink-0 gap-5 border-t-2 border-border pt-3 text-center lg:border-l-2 lg:border-t-0 lg:pl-5 lg:pt-0">
                    <Count label="Votes" value={st.totalVotes} />
                    <Count label="Authored" value={st.sponsored} />
                    <Count label="Passed" value={st.passedSponsored} />
                    <Count label="Att." value={pct(st.attendanceRate)} />
                  </div>
                </Link>
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
      <div className="font-display text-lg font-heading tabular-nums text-black">
        {value}
      </div>
      <div className="text-[10px] font-bold uppercase tracking-wide text-black/60">
        {label}
      </div>
    </div>
  );
}
