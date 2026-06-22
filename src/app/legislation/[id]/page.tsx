import Link from "next/link";
import { notFound } from "next/navigation";
import { getMatter } from "@/lib/queries";
import {
  Avatar,
  SectionTitle,
  TopicChip,
  TypePill,
  VoteTallyBar,
} from "@/components/ui";
import { fmtDate, voteBg } from "@/lib/format";

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
      <Link
        href="/legislation"
        className="inline-block font-bold text-black underline decoration-2 underline-offset-2 hover:text-main"
      >
        ← Back to legislation
      </Link>

      {/* Header */}
      <section className="nb-card p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <TypePill type={m.type} />
          {m.file ? (
            <span className="font-mono text-sm font-bold text-black/50">
              #{m.file}
            </span>
          ) : null}
          {m.status ? (
            <span className="rounded-base border-2 border-border bg-bg px-2 py-0.5 text-xs font-bold text-black">
              {m.status}
            </span>
          ) : null}
        </div>

        {m.summary ? (
          <div className="mt-4 rounded-base border-2 border-border bg-main p-4 shadow-nbsm">
            <div className="mb-1 text-[11px] font-heading uppercase tracking-wide text-black">
              In plain English
            </div>
            <p className="text-lg font-heading text-black">{m.summary}</p>
            {m.summarySource === "heuristic" ? (
              <p className="mt-2 text-[11px] font-bold text-black/60">
                Auto-generated from the official title. Add an LLM key for richer
                summaries.
              </p>
            ) : null}
          </div>
        ) : null}

        <h1 className="mt-4 text-base font-medium leading-relaxed text-black/80">
          {m.title}
        </h1>

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

        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t-2 border-border pt-4 text-sm">
          <Meta label="Introduced" value={fmtDate(m.introDate)} />
          <Meta label="Final action" value={fmtDate(m.finalDate)} />
          {sponsors.length > 0 ? (
            <div className="text-sm font-bold">
              <span className="text-black/50">Sponsors: </span>
              {sponsors.map((s, i) => (
                <span key={s.supervisorId}>
                  <Link
                    href={`/supervisors/${s.supervisor.slug}`}
                    className="text-black underline decoration-2 underline-offset-2 hover:text-main"
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
              className="text-sm font-bold text-main underline decoration-2 underline-offset-2"
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
          <div className="nb-card p-6 text-sm font-bold text-black/60">
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
                <div key={a.id} className="nb-card p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="font-heading text-black">
                        {a.actionText || "Action"}
                      </div>
                      <div className="text-xs font-bold text-black/60">
                        {a.bodyName} · {fmtDate(a.date)}
                        {a.result ? (
                          <span
                            className="ml-2 inline-block rounded-base border-2 border-border px-1.5 font-heading text-black"
                            style={{
                              background: /pass|adopt|approv/i.test(a.result)
                                ? "var(--win)"
                                : /fail|reject/i.test(a.result)
                                  ? "var(--loss)"
                                  : "#fff",
                            }}
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
                        className="flex items-center gap-2 rounded-base border-2 border-border bg-bw p-2 transition-transform hover:-translate-y-0.5"
                      >
                        <Avatar
                          name={v.supervisor.fullName}
                          district={v.supervisor.district}
                          size={30}
                        />
                        <div className="min-w-0 flex-1">
                          <div className="truncate text-xs font-bold text-black">
                            {v.supervisor.fullName}
                          </div>
                          <div className="text-[10px] font-bold text-black/50">
                            D{v.supervisor.district}
                          </div>
                        </div>
                        <span
                          className={`rounded-base border-2 border-border px-1.5 text-xs font-heading ${voteBg(
                            v.value,
                          )}`}
                        >
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
          <div className="nb-card divide-y-2 divide-border">
            {m.actions.map((a) => (
              <div key={a.id} className="flex items-start gap-3 p-3 text-sm">
                <span className="w-24 shrink-0 text-xs font-bold text-black/50">
                  {fmtDate(a.date)}
                </span>
                <span className="flex-1 font-medium text-black/80">
                  <span className="font-bold text-black/50">{a.bodyName}: </span>
                  {a.actionText || "—"}
                </span>
                {a.result ? (
                  <span className="shrink-0 text-xs font-bold text-black/70">
                    {a.result}
                  </span>
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
    <div className="text-sm font-bold">
      <span className="text-black/50">{label}: </span>
      <span className="text-black">{value}</span>
    </div>
  );
}
