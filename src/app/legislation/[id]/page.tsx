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
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
      >
        <span aria-hidden>&larr;</span> Back to legislation
      </Link>

      {/* Header */}
      <section className="nb-card p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <TypePill type={m.type} />
          {m.file ? (
            <span className="font-mono text-sm text-faint">#{m.file}</span>
          ) : null}
          {m.status ? (
            <span className="rounded border border-line px-2 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wide text-muted">
              {m.status}
            </span>
          ) : null}
        </div>

        {m.summary ? (
          <div className="mt-5 rounded-lg border border-line bg-accentWash p-4">
            <div className="mb-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-accent-ink">
              In plain English
            </div>
            <p className="text-lg font-semibold leading-snug text-ink">
              {m.summary}
            </p>
          </div>
        ) : null}

        <h1 className="mt-5 text-base font-normal leading-relaxed text-muted">
          {m.title}
        </h1>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {m.topics.map((t) => (
            <TopicChip
              key={t.topic.slug}
              name={t.topic.name}
              href={`/legislation?topic=${t.topic.slug}`}
            />
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-4 text-sm">
          <Meta label="Introduced" value={fmtDate(m.introDate)} />
          <Meta label="Final action" value={fmtDate(m.finalDate)} />
          {sponsors.length > 0 ? (
            <div className="text-sm">
              <span className="text-faint">Sponsors: </span>
              {sponsors.map((s, i) => (
                <span key={s.supervisorId}>
                  <Link
                    href={`/supervisors/${s.supervisor.slug}`}
                    className="font-medium text-ink underline decoration-line decoration-2 underline-offset-2 hover:text-accent hover:decoration-accent"
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
              className="font-medium text-accent underline decoration-2 underline-offset-2"
            >
              Official record &#8599;
            </a>
          ) : null}
        </div>
      </section>

      {/* Roll-call votes */}
      <section>
        <SectionTitle>How they voted</SectionTitle>
        {actionsWithVotes.length === 0 ? (
          <div className="nb-card p-6 text-sm text-muted">
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
              const passed = a.result && /pass|adopt|approv/i.test(a.result);
              const failed = a.result && /fail|reject/i.test(a.result);
              return (
                <div key={a.id} className="nb-card p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="font-semibold text-ink">
                        {a.actionText || "Action"}
                      </div>
                      <div className="mt-0.5 flex items-center gap-2 font-mono text-xs text-muted">
                        <span>
                          {a.bodyName} · {fmtDate(a.date)}
                        </span>
                        {a.result ? (
                          <span
                            className={`rounded px-1.5 py-0.5 font-semibold uppercase tracking-wide ${
                              passed
                                ? "bg-yeaWash text-yea"
                                : failed
                                  ? "bg-nayWash text-nay"
                                  : "bg-neutralWash text-muted"
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
                        className="flex items-center gap-2 rounded-md border border-line bg-surface p-2 transition-colors hover:border-line-strong"
                      >
                        <Avatar
                          name={v.supervisor.fullName}
                          district={v.supervisor.district}
                          size={30}
                        />
                        <div className="min-w-0 flex-1">
                          <div className="truncate text-xs font-medium text-ink">
                            {v.supervisor.fullName}
                          </div>
                          <div className="font-mono text-[10px] text-faint">
                            D{v.supervisor.district}
                          </div>
                        </div>
                        <span
                          className={`rounded px-1.5 py-0.5 font-mono text-[11px] font-semibold ${voteBg(
                            v.value,
                          )}`}
                        >
                          {v.value === "Aye"
                            ? "AYE"
                            : v.value === "No"
                              ? "NO"
                              : v.value.slice(0, 3).toUpperCase()}
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
          <SectionTitle>Full action history</SectionTitle>
          <div className="nb-card divide-y divide-line">
            {m.actions.map((a) => (
              <div key={a.id} className="flex items-start gap-3 p-4 text-sm">
                <span className="w-24 shrink-0 font-mono text-xs text-faint">
                  {fmtDate(a.date)}
                </span>
                <span className="flex-1 leading-relaxed text-ink">
                  <span className="text-faint">{a.bodyName}: </span>
                  {a.actionText || "—"}
                </span>
                {a.result ? (
                  <span className="shrink-0 font-mono text-xs text-muted">
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
    <div className="text-sm">
      <span className="text-faint">{label}: </span>
      <span className="font-medium text-ink">{value}</span>
    </div>
  );
}
