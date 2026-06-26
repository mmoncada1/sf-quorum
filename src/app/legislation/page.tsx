import Link from "next/link";
import { getRecentMatters, getAvailableYears, getAvailableMonths } from "@/lib/queries";
import { MatterCard } from "@/components/matter-card";
import { TOPICS, TOPIC_BY_SLUG } from "@/lib/topics";

export const dynamic = "force-dynamic";

const MONTH_NAMES = [
  "", "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function buildHref(params: { topic?: string; year?: string; month?: string }) {
  const parts: string[] = [];
  if (params.topic) parts.push(`topic=${params.topic}`);
  if (params.year) parts.push(`year=${params.year}`);
  if (params.month) parts.push(`month=${params.month}`);
  return parts.length ? `/legislation?${parts.join("&")}` : "/legislation";
}

export default async function LegislationPage({
  searchParams,
}: {
  searchParams: { topic?: string; year?: string; month?: string };
}) {
  const topic = searchParams.topic;
  const yearParam = searchParams.year ? parseInt(searchParams.year, 10) : undefined;
  const year = yearParam && !isNaN(yearParam) ? yearParam : undefined;
  const monthParam = searchParams.month ? parseInt(searchParams.month, 10) : undefined;
  const month = monthParam && !isNaN(monthParam) && monthParam >= 1 && monthParam <= 12
    ? monthParam
    : undefined;

  const [matters, availableYears, availableMonths] = await Promise.all([
    getRecentMatters(80, topic, year, month),
    getAvailableYears(),
    year ? getAvailableMonths(year) : Promise.resolve([]),
  ]);

  const activeTopic = topic ? TOPIC_BY_SLUG[topic] : null;

  return (
    <div className="space-y-8">
      <header className="max-w-prose">
        <div className="kicker mb-3">The feed</div>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Legislation
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Everything moving through the Board and its committees, newest first,
          each translated into plain English. Filter by policy area, year, or month.
        </p>
      </header>

      <div className="space-y-3">
        {/* Topic filter */}
        <div className="flex flex-wrap gap-2">
          <FilterPill
            href={buildHref({ year: searchParams.year, month: searchParams.month })}
            active={!topic}
            label="All topics"
          />
          {TOPICS.map((t) => (
            <FilterPill
              key={t.slug}
              href={buildHref({ topic: t.slug, year: searchParams.year, month: searchParams.month })}
              active={topic === t.slug}
              label={t.name}
            />
          ))}
        </div>

        {/* Year filter */}
        {availableYears.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <FilterPill
              href={buildHref({ topic })}
              active={!year}
              label="All years"
            />
            {availableYears.map((y) => (
              <FilterPill
                key={y}
                href={buildHref({ topic, year: String(y) })}
                active={year === y}
                label={String(y)}
              />
            ))}
          </div>
        )}

        {/* Month filter — only visible when a year is selected */}
        {year && availableMonths.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <FilterPill
              href={buildHref({ topic, year: String(year) })}
              active={!month}
              label="All months"
            />
            {availableMonths.map((m) => (
              <FilterPill
                key={m}
                href={buildHref({ topic, year: String(year), month: String(m) })}
                active={month === m}
                label={MONTH_NAMES[m]}
              />
            ))}
          </div>
        )}
      </div>

      {(activeTopic || year || month) ? (
        <p className="text-sm text-muted">
          Showing{" "}
          {activeTopic && (
            <span className="font-semibold text-ink">{activeTopic.name}</span>
          )}
          {activeTopic && (year || month) ? " · " : ""}
          {month && year && (
            <span className="font-semibold text-ink">{MONTH_NAMES[month]} {year}</span>
          )}
          {!month && year && (
            <span className="font-semibold text-ink">{year}</span>
          )}{" "}
          legislation ({matters.length}).
        </p>
      ) : null}

      {matters.length === 0 ? (
        <div className="nb-card p-10 text-center text-muted">
          Nothing here yet.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {matters.map(({ m, lastActivity, tally }) => (
            <MatterCard key={m.id} m={m} lastActivity={lastActivity} tally={tally} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterPill({
  href,
  active,
  label,
}: {
  href: string;
  active: boolean;
  label: string;
}) {
  return (
    <Link
      href={href}
      className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
        active
          ? "border-ink bg-ink text-paper"
          : "border-line bg-surface text-muted hover:border-ink hover:text-ink"
      }`}
    >
      {label}
    </Link>
  );
}
