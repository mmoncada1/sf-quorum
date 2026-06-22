import Link from "next/link";
import { notFound } from "next/navigation";
import { getMatter } from "@/lib/queries";
import {
  Avatar,
  SectionTitle,
  TopicChip,
  TypePill,
  VotePill,
  VoteTallyBar,
} from "@/components/ui";
import { fmtDate, voteColor } from "@/lib/format";

export const dynamic = "force-dynamic";

const VOTE_ORDER: Record<string, number> = {
  Aye: 0,
  No: 1,
  Recused: 2,
  Abstain: 3,
  Excused: 4,
  Absent: 5,
};

export default async function MatterPage({
  params,
}: {
  params: { id: string };
}) {
  const legistarId = Number(params.id);
  const m = legistarId ? await getMatter(legistarId) : null;
  if (!m) notFound();

  const sponsors = m.sponsorships;
  const actionsWithVotes = m.actions.filter((a) => a.votes.length > 0);

  return (
    <div className="space-y-8">
      <Link href="/legislation" className="text-sm link-muted">
        ← Back to legislation
      </Link>

      {/* Header */}
      <section className="card p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <TypePill type={m.type} />
          {m.file ? (
            <span className="font-mono text-sm text-zinc-500">#{m.file}</span>
          ) : null}
          {m.status ? (
            <span className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-zinc-300">
              {m.status}
            </span>
          ) : null}
        </div>

        {m.summary ? (
          <div className="mt-4 rounded-xl border border-brand/20 bg-brand/5 p-4">
            <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-brand">
              In plain English
            </div>
            <p className="text-lg font-semibold text-white">{m.summary}</p>
            {m.summarySource === "heuristic" ? (
              <p className="mt-2 text-[11px] text-zinc-500">
                Auto-generated from the official title. Add an LLM key for richer
                summaries.
              </p>
            ) : null}
          </div>
        ) : null}

        <h1 className="mt-4 text-base leading-relaxed text-zinc-300">{m.title}</h1>

        <div className="mt-4 flex flex-wrap gap-2">
          {m.topics.map((t) => (
            <TopicChip
              key={t.topic.slug}
              emoji={t.topic.emoji}
              name={t.topic.name}
              color={t.topic.color}
              href={`/legislation?topic=${t.topic.slug}`}
            />
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-ink-line/60 pt-4 text-sm">
          <Meta label="Introduced" value={fmtDate(m.introDate)} />
          <Meta label="Final action" value={fmtDate(m.finalDate)} />
          {sponsors.length > 0 ? (
            <div className="text-sm">
              <span className="text-zinc-500">Sponsors: </span>
              {sponsors.map((s, i) => (
                <span key={s.supervisorId}>
                  <Link
                    href={`/supervisors/${s.supervisor.slug}`}
                    className="text-zinc-200 hover:text-brand"
                  >
                    {s.supervisor.fullName}
                  </Link>
                  {i < sponsors.length - 1 ? ", " : ""}
                </span>
              ))}
            </div>
          ) : null}
          {m.sourceUrl ? (
            <a
              href={m.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-brand hover:underline"
            >
              Official record ↗
            </a>
          ) : null}
        </div>
      </section>

      {/* Roll-call votes */}
      <section>
        <SectionTitle kicker="The roll call">How they voted</SectionTitle>
        {actionsWithVotes.length === 0 ? (
          <div className="card p-6 text-sm text-zinc-400">
            No recorded roll-call vote yet. This item may have passed without a
            recorded individual vote, or is still pending.
          </div>
        ) : (
          <div className="space-y-4">
            {actionsWithVotes.map((a) => {
              const votes = [...a.votes].sort(
                (x, y) =>
                  (VOTE_ORDER[x.value] ?? 9) - (VOTE_ORDER[y.value] ?? 9) ||
                  (x.supervisor.district ?? 99) - (y.supervisor.district ?? 99),
              );
              const aye = votes.filter((v) => v.value === "Aye").length;
              const no = votes.filter((v) => v.value === "No").length;
              const other = votes.length - aye - no;
              return (
                <div key={a.id} className="card p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="font-semibold text-zinc-100">
                        {a.actionText || "Action"}
                      </div>
                      <div className="text-xs text-zinc-500">
                        {a.bodyName} · {fmtDate(a.date)}
                        {a.result ? (
                          <span
                            className={`ml-2 font-semibold ${
                              /pass|adopt|approv/i.test(a.result)
                                ? "text-win"
                                : /fail|reject/i.test(a.result)
                                  ? "text-loss"
                                  : "text-zinc-400"
                            }`}
                          >
                            {a.result}
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <VoteTallyBar aye={aye} no={no} other={other} />
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                    {votes.map((v) => (
                      <Link
                        key={v.id}
                        href={`/supervisors/${v.supervisor.slug}`}
                        className="flex items-center gap-2 rounded-lg border border-ink-line/60 bg-black/20 p-2 transition hover:border-brand/40"
                      >
                        <Avatar
                          name={v.supervisor.fullName}
                          district={v.supervisor.district}
                          size={30}
                        />
                        <div className="min-w-0 flex-1">
                          <div className="truncate text-xs font-medium text-zinc-200">
                            {v.supervisor.fullName}
                          </div>
                          <div className="text-[10px] text-zinc-500">
                            D{v.supervisor.district}
                          </div>
                        </div>
                        <span className={`text-xs font-bold ${voteColor(v.value)}`}>
                          {v.value === "Aye"
                            ? "✓"
                            : v.value === "No"
                              ? "✕"
                              : v.value[0]}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Full history */}
      {m.actions.length > 0 && (
        <section>
          <SectionTitle kicker="Paper trail">Full action history</SectionTitle>
          <div className="card divide-y divide-ink-line/60">
            {m.actions.map((a) => (
              <div key={a.id} className="flex items-start gap-3 p-3 text-sm">
                <span className="w-24 shrink-0 text-xs text-zinc-500">
                  {fmtDate(a.date)}
                </span>
                <span className="flex-1 text-zinc-300">
                  <span className="text-zinc-500">{a.bodyName}: </span>
                  {a.actionText || "—"}
                </span>
                {a.result ? (
                  <span className="shrink-0 text-xs text-zinc-400">{a.result}</span>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-sm">
      <span className="text-zinc-500">{label}: </span>
      <span className="text-zinc-200">{value}</span>
    </div>
  );
}
