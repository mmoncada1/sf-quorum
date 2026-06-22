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
    <div className="space-y-10">
      <header className="max-w-prose">
        <div className="kicker mb-3">The roster</div>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          The 11 District Supervisors
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          San Francisco is governed by an eleven-member Board, one supervisor per
          district. Open any card for a full dossier: voting record, focus areas,
          attendance, and authored legislation.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {byDistrict.map((s) => (
          <Link
            key={s.id}
            href={`/supervisors/${s.slug}`}
            className="nb-card nb-press group p-5"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Avatar name={s.fullName} district={s.district} size={48} />
                <div>
                  <div className="font-semibold text-ink">{s.fullName}</div>
                  <div className="text-xs text-muted">District {s.district}</div>
                  <div className="text-xs text-muted">{s.title}</div>
                </div>
              </div>
              <GradeBadge grade={s.stats?.grade} />
            </div>

            <div className="mt-5 flex items-end justify-between">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  Overall
                </div>
                {s.stats ? (
                  <ScoreNumber score={s.stats.overallScore} />
                ) : (
                  <span className="text-faint">—</span>
                )}
              </div>
              <div className="text-right font-mono text-xs text-muted">
                <div>
                  <span className="font-bold text-ink">{s.stats?.sponsored ?? 0}</span>{" "}
                  authored
                </div>
                <div>
                  <span className="font-bold text-ink">{s.stats?.totalVotes ?? 0}</span>{" "}
                  votes
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {s.topTopics.slice(0, 3).map((t) => (
                <TopicChip key={t.slug} name={t.name} />
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
