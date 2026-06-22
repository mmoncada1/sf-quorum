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
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-ink-line bg-gradient-to-b from-ink-soft to-ink p-8 sm:p-12">
        <div className="max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            ● Live from sfgov.legistar.com
          </div>
          <h1 className="font-display text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
            What is the San Francisco Board of Supervisors{" "}
            <span className="text-brand">actually doing</span> this week?
          </h1>
          <p className="mt-4 text-lg text-zinc-300">
            Every ordinance, resolution and motion before the Board — translated
            into plain English — plus a live scorecard of how each of the 11
            district supervisors votes, what they focus on, and who actually gets
            things done.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/leaderboard"
              className="rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-black transition hover:bg-brand/90"
            >
              See the leaderboard →
            </Link>
            <Link
              href="/legislation"
              className="rounded-xl border border-ink-line bg-white/5 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:bg-white/10"
            >
              Browse legislation
            </Link>
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stat label="Legislation tracked" value={overview.matters} />
          <Stat label="Votes recorded" value={overview.votes} />
          <Stat label="Meetings ingested" value={overview.meetings} />
          <Stat
            label="Last updated"
            valueText={
              overview.lastIngest?.finishedAt
                ? fmtAgo(overview.lastIngest.finishedAt)
                : "—"
            }
          />
        </dl>
      </section>

      {/* Leaderboard preview */}
      {top3.length > 0 && (
        <section>
          <SectionTitle
            kicker="The standings"
            action={
              <Link href="/leaderboard" className="text-sm link-muted">
                Full leaderboard →
              </Link>
            }
          >
            Supervisor power rankings
          </SectionTitle>
          <div className="grid gap-4 md:grid-cols-3">
            {top3.map((s, i) => (
              <Link
                key={s.id}
                href={`/supervisors/${s.slug}`}
                className="card group relative overflow-hidden p-5 transition hover:border-brand/40"
              >
                <div className="absolute right-4 top-4 font-display text-5xl font-black text-white/5">
                  {ordinal(i + 1)}
                </div>
                <div className="flex items-center gap-3">
                  <Avatar name={s.fullName} district={s.district} size={48} />
                  <div>
                    <div className="font-bold text-white">{s.fullName}</div>
                    <div className="text-xs text-zinc-500">
                      District {s.district} · {s.title}
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <div className="text-xs text-zinc-500">Overall score</div>
                    <ScoreNumber score={s.stats!.overallScore} />
                  </div>
                  <GradeBadge grade={s.stats!.grade} />
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {s.topTopics.slice(0, 2).map((t) => (
                    <TopicChip key={t.slug} emoji={t.emoji} name={t.name} />
                  ))}
                </div>
              </Link>
            ))}
          </div>
          {bottom && bottom.stats && (
            <p className="mt-3 text-center text-xs text-zinc-500">
              Bringing up the rear:{" "}
              <Link
                href={`/supervisors/${bottom.slug}`}
                className="font-semibold text-loss hover:underline"
              >
                {bottom.fullName} (D{bottom.district})
              </Link>{" "}
              — grade {bottom.stats.grade}.
            </p>
          )}
        </section>
      )}

      {/* Topics */}
      <section>
        <SectionTitle kicker="By the numbers">Browse by policy area</SectionTitle>
        <div className="flex flex-wrap gap-2">
          {TOPICS.map((t) => (
            <TopicChip
              key={t.slug}
              emoji={t.emoji}
              name={t.name}
              color={t.color}
              href={`/legislation?topic=${t.slug}`}
            />
          ))}
        </div>
      </section>

      {/* Recent legislation */}
      <section>
        <SectionTitle
          kicker="The feed"
          action={
            <Link href="/legislation" className="text-sm link-muted">
              All legislation →
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

function Stat({
  label,
  value,
  valueText,
}: {
  label: string;
  value?: number;
  valueText?: string;
}) {
  return (
    <div className="rounded-2xl border border-ink-line bg-black/20 p-4">
      <dt className="text-xs text-zinc-500">{label}</dt>
      <dd className="mt-1 font-display text-2xl font-black text-white">
        {valueText ?? value?.toLocaleString()}
      </dd>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="card p-8 text-center text-sm text-zinc-400">
      No legislation ingested yet. Run{" "}
      <code className="rounded bg-black/40 px-1.5 py-0.5 font-mono text-xs text-brand">
        npm run refresh
      </code>{" "}
      to pull the latest from sfgov.legistar.com.
    </div>
  );
}
