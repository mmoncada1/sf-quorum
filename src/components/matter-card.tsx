import Link from "next/link";
import { fmtDate } from "@/lib/format";
import { TopicChip, TypePill, VoteTallyBar } from "./ui";

interface MatterCardData {
  legistarId: number;
  file: string | null;
  type: string | null;
  status: string | null;
  title: string;
  summary: string | null;
  topics: { topic: { slug: string; name: string; emoji: string | null; color: string | null } }[];
  sponsorships?: { supervisor: { fullName: string; district: number | null; slug: string } }[];
}

export function MatterCard({
  m,
  lastActivity,
  tally,
}: {
  m: MatterCardData;
  lastActivity?: number;
  tally?: { aye: number; no: number; other: number };
}) {
  const sponsors = (m.sponsorships ?? []).slice(0, 3);
  const hasVotes = tally && tally.aye + tally.no + tally.other > 0;
  return (
    <Link
      href={`/legislation/${m.legistarId}`}
      className="nb-card nb-press group block p-4"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <TypePill type={m.type} />
          {m.file ? (
            <span className="font-mono text-xs font-bold text-black/50">
              #{m.file}
            </span>
          ) : null}
        </div>
        {lastActivity ? (
          <span className="text-xs font-bold text-black/50">
            {fmtDate(new Date(lastActivity))}
          </span>
        ) : null}
      </div>

      <p className="mt-2 line-clamp-2 text-sm font-heading text-black">
        {m.summary || m.title}
      </p>

      {m.summary ? (
        <p className="mt-1 line-clamp-2 text-xs text-black/50">{m.title}</p>
      ) : null}

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {m.topics.slice(0, 3).map((t) => (
          <TopicChip
            key={t.topic.slug}
            emoji={t.topic.emoji}
            name={t.topic.name}
            color={t.topic.color}
          />
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between gap-3 border-t-2 border-border pt-3">
        <div className="min-w-0 text-xs text-black/60">
          {sponsors.length ? (
            <span className="truncate">
              By{" "}
              {sponsors.map((s, i) => (
                <span key={s.supervisor.slug} className="font-bold text-black">
                  {s.supervisor.fullName}
                  {i < sponsors.length - 1 ? ", " : ""}
                </span>
              ))}
            </span>
          ) : (
            <span className="font-bold text-black/50">{m.status || "—"}</span>
          )}
        </div>
        {hasVotes ? (
          <VoteTallyBar aye={tally!.aye} no={tally!.no} other={tally!.other} />
        ) : (
          <span className="shrink-0 text-xs font-bold text-black/40">
            no recorded vote
          </span>
        )}
      </div>
    </Link>
  );
}
