import Link from "next/link";
import { getLeaderboard } from "@/lib/queries";
import { Avatar, GradeBadge, ScoreNumber, TopicChip } from "@/components/ui";

export const dynamic = "force-dynamic";

export default async function SupervisorsPage() {
  const sups = await getLeaderboard();
  const byDistrict = [...sups].sort(
    (a, b) => (a.district ?? 99) - (b.district ?? 99),
  );

  return (
    <div className="space-y-8">
      <header className="max-w-3xl">
        <h1 className="font-display text-3xl font-black text-white">
          The 11 District Supervisors
        </h1>
        <p className="mt-2 text-zinc-400">
          San Francisco is governed by an 11-member Board, one supervisor per
          district. Click any card for a full dossier: voting record, focus
          areas, attendance, and authored legislation.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {byDistrict.map((s) => (
          <Link
            key={s.id}
            href={`/supervisors/${s.slug}`}
            className="card group p-5 transition hover:border-brand/40"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Avatar name={s.fullName} district={s.district} size={52} />
                <div>
                  <div className="font-bold text-white group-hover:text-brand">
                    {s.fullName}
                  </div>
                  <div className="text-xs text-zinc-500">
                    District {s.district}
                  </div>
                  <div className="text-xs text-zinc-500">{s.title}</div>
                </div>
              </div>
              <GradeBadge grade={s.stats?.grade} />
            </div>

            <div className="mt-4 flex items-end justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-wide text-zinc-500">
                  Overall score
                </div>
                {s.stats ? (
                  <ScoreNumber score={s.stats.overallScore} />
                ) : (
                  <span className="text-zinc-600">—</span>
                )}
              </div>
              <div className="text-right text-xs text-zinc-500">
                <div>
                  <span className="font-semibold text-zinc-300">
                    {s.stats?.sponsored ?? 0}
                  </span>{" "}
                  authored
                </div>
                <div>
                  <span className="font-semibold text-zinc-300">
                    {s.stats?.totalVotes ?? 0}
                  </span>{" "}
                  votes
                </div>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {s.topTopics.slice(0, 3).map((t) => (
                <TopicChip key={t.slug} emoji={t.emoji} name={t.name} />
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
