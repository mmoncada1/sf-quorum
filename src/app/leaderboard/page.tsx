import Link from "next/link";
import { getLeaderboard } from "@/lib/queries";
import { Avatar, GradeBadge, ScoreNumber, StatBar, TopicChip } from "@/components/ui";
import { pct } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function LeaderboardPage() {
  const leaders = await getLeaderboard();

  return (
    <div className="space-y-8">
      <header className="max-w-3xl">
        <h1 className="font-display text-3xl font-black text-white">
          The Leaderboard
        </h1>
        <p className="mt-2 text-zinc-400">
          Eleven supervisors. One scoreboard. Every member of the Board is graded
          on what they actually produce — substantive legislation passed, bills
          authored, attendance at the dais, and willingness to break from the
          pack. Symbolic, feel-good resolutions count for very little. Scores are
          relative: the category leader sets the 100.
        </p>
      </header>

      {leaders.length === 0 ? (
        <div className="card p-8 text-center text-sm text-zinc-400">
          No stats computed yet. Run <code className="text-brand">npm run refresh</code>.
        </div>
      ) : (
        <ol className="space-y-3">
          {leaders.map((s) => {
            const st = s.stats!;
            return (
              <li key={s.id}>
                <Link
                  href={`/supervisors/${s.slug}`}
                  className="card group flex flex-col gap-5 p-5 transition hover:border-brand/40 lg:flex-row lg:items-center"
                >
                  {/* Rank + identity */}
                  <div className="flex items-center gap-4 lg:w-72">
                    <div className="w-8 shrink-0 text-center font-display text-2xl font-black text-zinc-600">
                      {st.rank}
                    </div>
                    <Avatar name={s.fullName} district={s.district} size={52} />
                    <div className="min-w-0">
                      <div className="truncate font-bold text-white group-hover:text-brand">
                        {s.fullName}
                      </div>
                      <div className="text-xs text-zinc-500">
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
                      <div className="text-[11px] uppercase tracking-wide text-zinc-500">
                        Overall
                      </div>
                      <ScoreNumber score={st.overallScore} />
                    </div>
                    <GradeBadge grade={st.grade} className="h-12 min-w-12 text-2xl" />
                  </div>

                  {/* Stat bars */}
                  <div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
                    <StatBar label="Impact" value={st.impactScore} accent="#2fd17a" />
                    <StatBar label="Activity" value={st.activityScore} accent="#5b8def" />
                    <StatBar label="Attendance" value={st.attendanceRate * 100} accent="#ffce4d" />
                    <StatBar label="Independence" value={st.independence} accent="#ff5a36" />
                  </div>

                  {/* Counts */}
                  <div className="flex shrink-0 gap-5 border-t border-ink-line/60 pt-3 text-center lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
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
      <div className="font-display text-lg font-bold tabular-nums text-white">
        {value}
      </div>
      <div className="text-[10px] uppercase tracking-wide text-zinc-500">{label}</div>
    </div>
  );
}
