import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Bank,
  ClockCounterClockwise,
  Gavel,
  Scroll,
  Trophy,
} from "@phosphor-icons/react/dist/ssr";
import { getLeaderboard, getOverview, getRecentMatters } from "@/lib/queries";
import { MatterCard } from "@/components/matter-card";
import { Avatar, GradeBadge, ScoreNumber, SectionTitle, TopicChip } from "@/components/ui";
import { CountUp, Reveal } from "@/components/motion";
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
      <section className="grid items-center gap-10 pt-1 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <Reveal>
          <div className="kicker mb-5">San Francisco Board of Supervisors</div>
          <h1 className="max-w-2xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            What is City Hall <span className="text-accent">actually doing</span>{" "}
            this week?
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Every ordinance, resolution, and motion before the Board, translated
            into plain English, with a live scorecard of how all eleven district
            supervisors vote and what they actually get done.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/leaderboard" className="nb-btn group">
              See the leaderboard
              <ArrowRight weight="bold" className="nb-arrow" />
            </Link>
            <Link href="/legislation" className="nb-btn-bw">
              Browse legislation
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.12} y={24}>
          <figure className="relative aspect-[3/2] overflow-hidden rounded-xl border border-line-strong bg-paper shadow-[0_24px_60px_-30px_rgba(26,26,29,0.45)]">
            <Image
              src="/images/city-hall-hero.png"
              alt="Editorial illustration of San Francisco City Hall"
              fill
              priority
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
            />
          </figure>
        </Reveal>
      </section>

      {/* Stats */}
      <Reveal>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
          <Stat
            icon={<Scroll weight="duotone" size={22} />}
            label="Legislation tracked"
            count={overview.matters}
          />
          <Stat
            icon={<Gavel weight="duotone" size={22} />}
            label="Votes recorded"
            count={overview.votes}
          />
          <Stat
            icon={<Bank weight="duotone" size={22} />}
            label="Meetings ingested"
            count={overview.meetings}
          />
          <Stat
            icon={<ClockCounterClockwise weight="duotone" size={22} />}
            label="Last updated"
            value={
              overview.lastIngest?.finishedAt
                ? fmtAgo(overview.lastIngest.finishedAt)
                : "n/a"
            }
          />
        </dl>
      </Reveal>

      {/* Standings */}
      {top3.length > 0 && (
        <section>
          <SectionTitle action={<MoreLink href="/leaderboard">Full leaderboard</MoreLink>}>
            <span className="inline-flex items-center gap-2.5">
              <Trophy weight="duotone" className="text-accent" />
              Power rankings
            </span>
          </SectionTitle>
          <div className="grid gap-4 md:grid-cols-3">
            {top3.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.08} className="h-full">
                <Link
                  href={`/supervisors/${s.slug}`}
                  className="nb-card nb-press group relative flex h-full flex-col overflow-hidden p-5"
                >
                  <span className="absolute right-4 top-2 font-mono text-5xl font-bold tabular-nums text-line transition-colors group-hover:text-accentWash">
                    {ordinal(i + 1)}
                  </span>
                  <div className="flex items-center gap-3">
                    <Avatar name={s.fullName} district={s.district} photoUrl={s.photoUrl} size={64} />
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
              </Reveal>
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
      <Reveal>
        <section>
          <SectionTitle>Browse by policy area</SectionTitle>
          <div className="flex flex-wrap gap-2">
            {TOPICS.map((t) => (
              <TopicChip key={t.slug} name={t.name} href={`/legislation?topic=${t.slug}`} />
            ))}
          </div>
        </section>
      </Reveal>

      {/* Recent legislation */}
      <section>
        <SectionTitle action={<MoreLink href="/legislation">All legislation</MoreLink>}>
          Latest at City Hall
        </SectionTitle>
        {recent.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {recent.map(({ m, lastActivity, tally }, i) => (
              <Reveal key={m.id} delay={Math.min(i, 6) * 0.05} className="h-full">
                <MatterCard m={m} lastActivity={lastActivity} tally={tally} />
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function MoreLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-accent"
    >
      {children}
      <ArrowUpRight weight="bold" className="nb-arrow" />
    </Link>
  );
}

function Stat({
  icon,
  label,
  value,
  count,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string;
  count?: number;
}) {
  return (
    <div className="group bg-surface p-5 transition-colors hover:bg-paper">
      <div className="flex items-center justify-between gap-2">
        <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
          {label}
        </dt>
        <span className="text-faint transition-colors group-hover:text-accent">
          {icon}
        </span>
      </div>
      <dd className="mt-2 font-mono text-2xl font-bold tabular-nums text-ink">
        {count !== undefined ? <CountUp value={count} /> : value}
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
