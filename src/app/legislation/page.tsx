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
    <div className="space-y-6">
      <header className="nb-card max-w-3xl p-6">
        <div className="kicker mb-3">The feed</div>
        <h1 className="font-display text-4xl font-heading uppercase tracking-tight text-black">
          Legislation
        </h1>
        <p className="mt-3 font-medium text-black/80">
          Everything moving through the Board and its committees, newest first,
          each translated into plain English. Filter by policy area.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        <Link
          href="/legislation"
          className="rounded-base border-2 border-border px-3 py-1 text-xs font-bold text-black shadow-nbsm"
          style={!topic ? { background: "var(--main)" } : { background: "#fff" }}
        >
          All
        </Link>
        {TOPICS.map((t) => (
          <Link
            key={t.slug}
            href={`/legislation?topic=${t.slug}`}
            className="rounded-base border-2 border-border px-3 py-1 text-xs font-bold text-black shadow-nbsm"
            style={{ background: topic === t.slug ? t.color : "#fff" }}
          >
            {t.emoji} {t.name}
          </Link>
        ))}
      </div>

      {activeTopic ? (
        <p className="text-sm font-bold text-black/70">
          Showing{" "}
          <span className="text-black">
            {activeTopic.emoji} {activeTopic.name}
          </span>{" "}
          legislation ({matters.length}).
        </p>
      ) : null}

      {matters.length === 0 ? (
        <div className="nb-card p-8 text-center font-bold text-black/70">
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
