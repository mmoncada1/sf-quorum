import Link from "next/link";
import { getRecentMatters } from "@/lib/queries";
import { MatterCard } from "@/components/matter-card";
import { TOPICS, TOPIC_BY_SLUG } from "@/lib/topics";

export const dynamic = "force-dynamic";

export default async function LegislationPage({
  searchParams,
}: {
  searchParams: { topic?: string };
}) {
  const topic = searchParams.topic;
  const matters = await getRecentMatters(80, topic);
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
          each translated into plain English. Filter by policy area.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        <FilterPill href="/legislation" active={!topic} label="All" />
        {TOPICS.map((t) => (
          <FilterPill
            key={t.slug}
            href={`/legislation?topic=${t.slug}`}
            active={topic === t.slug}
            label={t.name}
          />
        ))}
      </div>

      {activeTopic ? (
        <p className="text-sm text-muted">
          Showing <span className="font-semibold text-ink">{activeTopic.name}</span>{" "}
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
