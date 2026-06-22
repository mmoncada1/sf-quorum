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
      className="nb-card nb-press group block p-5"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <TypePill type={m.type} />
          {m.file ? (
            <span className="font-mono text-xs text-faint">#{m.file}</span>
          ) : null}
        </div>
        {lastActivity ? (
          <span className="font-mono text-xs text-faint">
            {fmtDate(new Date(lastActivity))}
          </span>
        ) : null}
      </div>

      <p className="mt-3 line-clamp-2 text-[15px] font-semibold leading-snug text-ink">
        {m.summary || m.title}
      </p>

      {m.summary ? (
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted">
          {m.title}
        </p>
      ) : null}

      <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
        {m.topics.slice(0, 3).map((t) => (
          <TopicChip key={t.topic.slug} name={t.topic.name} />
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 border-t border-line pt-3">
        <div className="min-w-0 text-xs text-muted">
          {sponsors.length ? (
            <span className="truncate">
              By{" "}
              {sponsors.map((s, i) => (
                <span key={s.supervisor.slug} className="font-semibold text-ink">
                  {s.supervisor.fullName}
                  {i < sponsors.length - 1 ? ", " : ""}
                </span>
              ))}
            </span>
          ) : (
            <span className="font-medium text-faint">{m.status || "—"}</span>
          )}
        </div>
        {hasVotes ? (
          <VoteTallyBar aye={tally!.aye} no={tally!.no} other={tally!.other} />
        ) : (
          <span className="shrink-0 font-mono text-[11px] uppercase tracking-wide text-faint">
            no vote
          </span>
        )}
      </div>
    </Link>
  );
}
