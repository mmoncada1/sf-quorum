import Link from "next/link";
import { getLeaderboard, getOverview, getRecentMatters } from "@/lib/queries";
import { MatterCard } from "@/components/matter-card";
import { Avatar, GradeBadge, ScoreNumber, SectionTitle, TopicChip } from "@/components/ui";
import { fmtAgo, ordinal } from "@/lib/format";
import { TOPICS } from "@/lib/topics";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [overview, leaders, recent] = await Promise.all([
    getOverview(),
    getLeaderboard(),
    getRecentMatters(12),
  ]);

  const top3 = leaders.slice(0, 3);
  const bottom = leaders.slice(-1)[0];

  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="pt-2 sm:pt-6">
        <div className="kicker mb-5">San Francisco Board of Supervisors</div>
        <h1 className="max-w-4xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          What is City Hall <span className="text-accent">actually doing</span>{" "}
          this week?
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Every ordinance, resolution, and motion before the Board, translated
          into plain English, with a live scorecard of how all eleven district
          supervisors vote and what they actually get done.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/leaderboard" className="nb-btn">
            See the leaderboard
          </Link>
          <Link href="/legislation" className="nb-btn-bw">
            Browse legislation
          </Link>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-4">
          <Stat label="Legislation tracked" value={overview.matters.toLocaleString()} />
          <Stat label="Votes recorded" value={overview.votes.toLocaleString()} />
          <Stat label="Meetings ingested" value={overview.meetings.toLocaleString()} />
          <Stat
            label="Last updated"
            value={
              overview.lastIngest?.finishedAt
                ? fmtAgo(overview.lastIngest.finishedAt)
                : "—"
            }
          />
        </dl>
      </section>

      {/* Standings */}
      {top3.length > 0 && (
        <section>
          <SectionTitle
            action={
              <Link
                href="/leaderboard"
                className="text-sm font-medium text-muted underline decoration-line decoration-2 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                Full leaderboard
              </Link>
            }
          >
            Power rankings
          </SectionTitle>
          <div className="grid gap-4 md:grid-cols-3">
            {top3.map((s, i) => (
              <Link
                key={s.id}
                href={`/supervisors/${s.slug}`}
                className="nb-card nb-press group relative block overflow-hidden p-5"
              >
                <span className="absolute right-4 top-2 font-mono text-5xl font-bold tabular-nums text-line">
                  {ordinal(i + 1)}
                </span>
                <div className="flex items-center gap-3">
                  <Avatar name={s.fullName} district={s.district} size={44} />
                  <div className="min-w-0">
                    <div className="truncate font-semibold text-ink">
                      {s.fullName}
                    </div>
                    <div className="text-xs text-muted">
                      District {s.district} · {s.title}
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-muted">
                      Overall
                    </div>
                    <ScoreNumber score={s.stats!.overallScore} />
                  </div>
                  <GradeBadge grade={s.stats!.grade} className="h-11 min-w-11 text-2xl" />
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.topTopics.slice(0, 2).map((t) => (
                    <TopicChip key={t.slug} name={t.name} />
                  ))}
                </div>
              </Link>
            ))}
          </div>
          {bottom && bottom.stats && (
            <p className="mt-4 text-sm text-muted">
              Bringing up the rear:{" "}
              <Link
                href={`/supervisors/${bottom.slug}`}
                className="font-semibold text-ink underline decoration-line decoration-2 underline-offset-2 hover:text-accent hover:decoration-accent"
              >
                {bottom.fullName} (D{bottom.district})
              </Link>
              , grade {bottom.stats.grade}.
            </p>
          )}
        </section>
      )}

      {/* Topics */}
      <section>
        <SectionTitle>Browse by policy area</SectionTitle>
        <div className="flex flex-wrap gap-2">
          {TOPICS.map((t) => (
            <TopicChip key={t.slug} name={t.name} href={`/legislation?topic=${t.slug}`} />
          ))}
        </div>
      </section>

      {/* Recent legislation */}
      <section>
        <SectionTitle
          action={
            <Link
              href="/legislation"
              className="text-sm font-medium text-muted underline decoration-line decoration-2 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              All legislation
            </Link>
          }
        >
          Latest at City Hall
        </SectionTitle>
        {recent.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {recent.map(({ m, lastActivity, tally }) => (
              <MatterCard key={m.id} m={m} lastActivity={lastActivity} tally={tally} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-surface p-5">
      <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
        {label}
      </dt>
      <dd className="mt-2 font-mono text-2xl font-bold tabular-nums text-ink">
        {value}
      </dd>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="nb-card p-10 text-center text-sm text-muted">
      No legislation ingested yet. Run{" "}
      <code className="rounded border border-line bg-paper px-1.5 py-0.5 font-mono text-xs text-ink">
        npm run refresh
      </code>{" "}
      to pull the latest from sfgov.legistar.com.
    </div>
  );
}
