import Link from "next/link";
import { getLeaderboard, getOverview, getRecentMatters } from "@/lib/queries";
import { MatterCard } from "@/components/matter-card";
import { Avatar, GradeBadge, ScoreNumber, SectionTitle, TopicChip } from "@/components/ui";
import { fmtAgo, ordinal } from "@/lib/format";
import { TOPICS } from "@/lib/topics";

export const dynamic = "force-dynamic";

const TILE_COLORS = ["bg-main", "bg-win", "bg-info", "bg-gold"];

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
      <section className="nb-card overflow-hidden p-6 sm:p-10">
        <div className="max-w-3xl">
          <div className="kicker mb-4 !bg-win">● LIVE FROM SFGOV.LEGISTAR.COM</div>
          <h1 className="font-display text-4xl font-heading uppercase leading-[0.95] tracking-tight text-black sm:text-6xl">
            What is the Board of Supervisors{" "}
            <span className="bg-main px-2 leading-tight">actually doing</span>{" "}
            this week?
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-medium text-black/80">
            Every ordinance, resolution and motion before the Board — translated
            into plain English — plus a live scorecard of how each of the 11
            district supervisors votes, what they focus on, and who actually gets
            things done.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/leaderboard" className="nb-btn">
              SEE THE LEADERBOARD →
            </Link>
            <Link href="/legislation" className="nb-btn-bw">
              Browse legislation
            </Link>
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stat label="Legislation tracked" value={overview.matters} color={TILE_COLORS[0]} />
          <Stat label="Votes recorded" value={overview.votes} color={TILE_COLORS[1]} />
          <Stat label="Meetings ingested" value={overview.meetings} color={TILE_COLORS[2]} />
          <Stat
            label="Last updated"
            valueText={
              overview.lastIngest?.finishedAt
                ? fmtAgo(overview.lastIngest.finishedAt)
                : "—"
            }
            color={TILE_COLORS[3]}
          />
        </dl>
      </section>

      {/* Leaderboard preview */}
      {top3.length > 0 && (
        <section>
          <SectionTitle
            kicker="The standings"
            action={
              <Link
                href="/leaderboard"
                className="font-bold text-black underline decoration-2 underline-offset-2 hover:text-main"
              >
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
                className="nb-card nb-press group relative overflow-hidden p-5"
              >
                <div className="absolute right-3 top-1 font-display text-6xl font-heading text-black/10">
                  {ordinal(i + 1)}
                </div>
                <div className="flex items-center gap-3">
                  <Avatar name={s.fullName} district={s.district} size={48} />
                  <div>
                    <div className="font-heading text-black">{s.fullName}</div>
                    <div className="text-xs font-bold text-black/60">
                      District {s.district} · {s.title}
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase text-black/60">
                      Overall score
                    </div>
                    <ScoreNumber score={s.stats!.overallScore} />
                  </div>
                  <GradeBadge grade={s.stats!.grade} className="h-12 min-w-12 text-2xl" />
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
            <div className="mt-4 nb-flat bg-loss/20 p-3 text-center text-sm font-bold text-black">
              Bringing up the rear:{" "}
              <Link
                href={`/supervisors/${bottom.slug}`}
                className="underline decoration-2 underline-offset-2"
              >
                {bottom.fullName} (D{bottom.district})
              </Link>{" "}
              — grade {bottom.stats.grade}.
            </div>
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
            <Link
              href="/legislation"
              className="font-bold text-black underline decoration-2 underline-offset-2 hover:text-main"
            >
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
  color = "bg-bw",
}: {
  label: string;
  value?: number;
  valueText?: string;
  color?: string;
}) {
  return (
    <div className={`rounded-base border-2 border-border p-4 shadow-nbsm ${color}`}>
      <dt className="text-xs font-bold uppercase text-black/70">{label}</dt>
      <dd className="mt-1 font-display text-2xl font-heading text-black">
        {valueText ?? value?.toLocaleString()}
      </dd>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="nb-card p-8 text-center text-sm font-bold text-black/70">
      No legislation ingested yet. Run{" "}
      <code className="rounded-base border-2 border-border bg-main px-1.5 py-0.5 font-mono text-xs text-black">
        npm run refresh
      </code>{" "}
      to pull the latest from sfgov.legistar.com.
    </div>
  );
}
