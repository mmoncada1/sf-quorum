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
      <header className="max-w-3xl">
        <h1 className="font-display text-3xl font-black text-white">Legislation</h1>
        <p className="mt-2 text-zinc-400">
          Everything moving through the Board and its committees, newest first,
          each translated into plain English. Filter by policy area.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        <Link
          href="/legislation"
          className={`chip ${!topic ? "border-brand/50 text-brand" : ""}`}
        >
          All
        </Link>
        {TOPICS.map((t) => (
          <Link
            key={t.slug}
            href={`/legislation?topic=${t.slug}`}
            className="chip"
            style={
              topic === t.slug
                ? { borderColor: `${t.color}`, color: t.color }
                : undefined
            }
          >
            {t.emoji} {t.name}
          </Link>
        ))}
      </div>

      {activeTopic ? (
        <p className="text-sm text-zinc-500">
          Showing{" "}
          <span className="text-zinc-300">
            {activeTopic.emoji} {activeTopic.name}
          </span>{" "}
          legislation ({matters.length}).
        </p>
      ) : null}

      {matters.length === 0 ? (
        <div className="card p-8 text-center text-sm text-zinc-400">
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
