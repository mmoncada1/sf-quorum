import Link from "next/link";
import { notFound } from "next/navigation";
import { getMatter, parseOriginTimeline } from "@/lib/queries";
import type { OriginStep } from "@/lib/queries";
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

  // Provenance: things that happened *before* this bill arrived at the Board.
  const predecessors = m.relationsFrom; // files this matter explicitly references
  const successors = m.relationsTo;     // files that reference this matter
  const origin = parseOriginTimeline(m.originTimeline);
  const hasProvenance =
    !!origin ||
    predecessors.length > 0 ||
    successors.length > 0 ||
    m.attachments.length > 0 ||
    !!m.inControl;

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

      {/* Provenance */}
      {hasProvenance && (
        <section>
          <SectionTitle>How it got here</SectionTitle>
          <div className="space-y-3">

            {/* Narrative origin story reconstructed from the documents */}
            {origin && (
              <div className="nb-card p-6 sm:p-7">
                {origin.lead ? (
                  <p className="mb-5 text-base font-medium leading-relaxed text-ink">
                    {origin.lead}
                  </p>
                ) : null}
                <OriginStory steps={origin.steps} />
                <p className="mt-5 border-t border-line pt-3 font-mono text-[10px] uppercase tracking-wider text-faint">
                  Reconstructed from attached documents &amp; the official record
                </p>
              </div>
            )}

            {/* Predecessor legislation */}
            {predecessors.length > 0 && (
              <div className="nb-card divide-y divide-line">
                <div className="px-5 py-3">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-faint">
                    Related / predecessor legislation
                  </span>
                </div>
                {predecessors.map((rel) =>
                  rel.to ? (
                    <RelatedMatterCard
                      key={rel.id}
                      legistarId={rel.to.legistarId}
                      file={rel.to.file}
                      type={rel.to.type}
                      status={rel.to.status}
                      title={rel.to.title}
                      summary={rel.to.summary}
                      introDate={rel.to.introDate}
                      finalDate={rel.to.finalDate}
                      sponsors={rel.to.sponsorships}
                      direction="predecessor"
                    />
                  ) : (
                    <div key={rel.id} className="flex items-center gap-3 px-5 py-3 text-sm">
                      <span className="font-mono text-xs text-faint">↑ predecessor</span>
                      <span className="font-medium text-ink">#{rel.toFile}</span>
                      <span className="text-faint">— not yet in database</span>
                    </div>
                  ),
                )}
              </div>
            )}

            {/* Successor legislation */}
            {successors.length > 0 && (
              <div className="nb-card divide-y divide-line">
                <div className="px-5 py-3">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-faint">
                    Legislation that followed from this
                  </span>
                </div>
                {successors.map((rel) => (
                  <RelatedMatterCard
                    key={rel.id}
                    legistarId={rel.from.legistarId}
                    file={rel.from.file}
                    type={rel.from.type}
                    status={rel.from.status}
                    title={rel.from.title}
                    summary={rel.from.summary}
                    introDate={rel.from.introDate}
                    finalDate={rel.from.finalDate}
                    sponsors={rel.from.sponsorships}
                    direction="successor"
                  />
                ))}
              </div>
            )}

            {/* Attachments / document trail */}
            {m.attachments.length > 0 && (
              <div className="nb-card divide-y divide-line">
                <div className="px-5 py-3">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-faint">
                    Document trail
                  </span>
                </div>
                {m.attachments.map((att) => {
                  const body = attachmentBody(att.name);
                  return (
                    <div
                      key={att.id}
                      className="flex items-center gap-3 px-5 py-3 text-sm"
                    >
                      <span className="text-base leading-none" aria-hidden>
                        {body.icon}
                      </span>
                      <div className="min-w-0 flex-1">
                        {att.url ? (
                          <a
                            href={att.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-ink underline decoration-line decoration-2 underline-offset-2 hover:text-accent hover:decoration-accent"
                          >
                            {att.name}
                          </a>
                        ) : (
                          <span className="font-medium text-ink">{att.name}</span>
                        )}
                        {body.label ? (
                          <div className="mt-0.5 font-mono text-[11px] text-faint">
                            {body.label}
                          </div>
                        ) : null}
                      </div>
                      {att.url ? (
                        <span className="shrink-0 font-mono text-[11px] text-faint">
                          PDF ↗
                        </span>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Currently in committee */}
            {m.inControl && (
              <div className="nb-card flex items-center gap-3 px-5 py-3 text-sm">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-faint">
                  Currently with
                </span>
                <span className="font-medium text-ink">{m.inControl}</span>
              </div>
            )}
          </div>
        </section>
      )}

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
                          photoUrl={v.supervisor.photoUrl}
                          size={44}
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

      {/* Legislative journey */}
      {m.actions.length > 0 && (
        <section>
          <SectionTitle>Legislative journey</SectionTitle>
          <div className="nb-card p-6">
            <LegislativeJourney actions={m.actions} />
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

// ─── Origin story (narrative timeline) ──────────────────────────────────────

function OriginStory({ steps }: { steps: OriginStep[] }) {
  return (
    <div className="relative">
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        return (
          <div key={i} className="flex gap-4">
            {/* Spine */}
            <div className="flex flex-col items-center pt-1.5">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accentWash font-mono text-[11px] font-bold text-accent-ink ring-2 ring-surface">
                {i + 1}
              </div>
              {!isLast && (
                <div
                  className="mt-1 w-px flex-1 bg-line"
                  style={{ minHeight: "1.5rem" }}
                />
              )}
            </div>

            {/* Step content */}
            <div className={`flex-1 ${isLast ? "pb-0" : "pb-6"}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                <span className="text-sm font-semibold text-ink">
                  {step.title}
                </span>
                {step.date ? (
                  <span className="font-mono text-xs text-faint">
                    {step.date}
                  </span>
                ) : null}
              </div>
              <div className="mt-0.5 font-mono text-[11px] uppercase tracking-wide text-accent-ink">
                {step.actor}
              </div>
              {step.detail ? (
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {step.detail}
                </p>
              ) : null}
              {step.source ? (
                <div className="mt-1.5 inline-flex items-center gap-1 rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-faint">
                  <span aria-hidden>📄</span> {step.source}
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Provenance helpers ─────────────────────────────────────────────────────

/** Map an attachment name to a display icon + label based on common SF body names. */
function attachmentBody(name: string): { icon: string; label: string } {
  const n = name.toUpperCase();
  if (/\bHPC\b/.test(n))
    return { icon: "🏛", label: "Historic Preservation Commission" };
  if (/\bPLN\b|\bPLANNING\b/.test(n))
    return { icon: "📐", label: "SF Planning Department" };
  if (/\bBLA\b/.test(n))
    return { icon: "📊", label: "Budget and Legislative Analyst" };
  if (/\bDPH\b/.test(n))
    return { icon: "🏥", label: "Department of Public Health" };
  if (/\bMTA\b|\bSFMTA\b/.test(n))
    return { icon: "🚌", label: "SF Municipal Transportation Agency" };
  if (/\bCEQA\b/.test(n))
    return { icon: "🌿", label: "Environmental review (CEQA)" };
  if (/\bLEG\s*VER\b|\bLEG\s*DIG\b/i.test(name))
    return { icon: "📄", label: "Official legislation text" };
  if (/RESO|RESOLUTION/i.test(name))
    return { icon: "📋", label: "Resolution" };
  if (/TRANSMIT/i.test(name))
    return { icon: "📨", label: "Departmental transmittal" };
  if (/REPORT/i.test(name))
    return { icon: "📑", label: "Report" };
  if (/AMEND/i.test(name))
    return { icon: "✏️", label: "Amendment" };
  return { icon: "📎", label: "" };
}

type RelatedMatterProps = {
  legistarId: number;
  file: string | null;
  type: string | null;
  status: string | null;
  title: string;
  summary: string | null;
  introDate: Date | null;
  finalDate: Date | null;
  sponsors: { supervisor: { fullName: string; slug: string } }[];
  direction: "predecessor" | "successor";
};

function RelatedMatterCard({
  legistarId,
  file,
  type,
  status,
  title,
  summary,
  introDate,
  finalDate,
  sponsors,
  direction,
}: RelatedMatterProps) {
  const isPassed = status && /pass|adopt|approv|enact|sign|finally/i.test(status);
  const isFailed = status && /fail|reject|veto|withdraw|tabl|died/i.test(status);
  const statusClass = isPassed
    ? "bg-yeaWash text-yea"
    : isFailed
      ? "bg-nayWash text-nay"
      : "bg-neutralWash text-muted";

  return (
    <Link
      href={`/legislation/${legistarId}`}
      className="group block px-5 py-4 transition-colors hover:bg-surface"
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 font-mono text-[11px] font-semibold text-faint">
          {direction === "predecessor" ? "↑ from" : "↓ led to"}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            {type && (
              <span className="rounded bg-accentWash px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-accent-ink">
                {type}
              </span>
            )}
            {file && (
              <span className="font-mono text-xs text-faint">#{file}</span>
            )}
            {status && (
              <span
                className={`rounded px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide ${statusClass}`}
              >
                {status}
              </span>
            )}
          </div>
          <p className="mt-1.5 text-sm font-medium leading-snug text-ink group-hover:text-accent">
            {summary || title}
          </p>
          <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-0.5 font-mono text-[11px] text-faint">
            {introDate && <span>Introduced {fmtDate(introDate)}</span>}
            {finalDate && <span>Final action {fmtDate(finalDate)}</span>}
            {sponsors.length > 0 && (
              <span>
                {sponsors.map((s) => s.supervisor.fullName).join(", ")}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

// ─── Legislative Journey ────────────────────────────────────────────────────

type MatterData = NonNullable<Awaited<ReturnType<typeof getMatter>>>;
type ActionRow = MatterData["actions"][number];

interface JourneyStop {
  bodyName: string;
  actions: ActionRow[];
}

function groupIntoStops(actions: ActionRow[]): JourneyStop[] {
  const stops: JourneyStop[] = [];
  for (const action of actions) {
    const last = stops[stops.length - 1];
    const body = action.bodyName || "Unknown Body";
    if (last && last.bodyName === body) {
      last.actions.push(action);
    } else {
      stops.push({ bodyName: body, actions: [action] });
    }
  }
  return stops;
}

function stopOutcome(stop: JourneyStop): "pass" | "fail" | "neutral" {
  for (let i = stop.actions.length - 1; i >= 0; i--) {
    const r = stop.actions[i].result;
    if (!r) continue;
    if (/pass|adopt|approv|recommend|enact|sign/i.test(r)) return "pass";
    if (/fail|reject|veto/i.test(r)) return "fail";
  }
  return "neutral";
}

function actionOutcome(result: string | null): "pass" | "fail" | "neutral" {
  if (!result) return "neutral";
  if (/pass|adopt|approv|recommend|enact|sign/i.test(result)) return "pass";
  if (/fail|reject|veto/i.test(result)) return "fail";
  return "neutral";
}

function actionIcon(actionText: string | null): string {
  if (!actionText) return "·";
  const t = actionText.toLowerCase();
  if (/finally passed|enacted|signed into law/.test(t)) return "✓";
  if (/approv|pass|adopt|recommend/.test(t)) return "✓";
  if (/fail|reject|veto/.test(t)) return "✗";
  if (/continu|defer|tabled|call of the chair/.test(t)) return "↷";
  if (/amend/.test(t)) return "✎";
  if (/refer|assign|rerefer/.test(t)) return "→";
  if (/introduc|receiv|filed/.test(t)) return "·";
  return "·";
}

function LegislativeJourney({ actions }: { actions: ActionRow[] }) {
  // Render oldest-first so the timeline reads top-to-bottom
  const chronological = [...actions].reverse();
  const stops = groupIntoStops(chronological);

  return (
    <div className="relative">
      {stops.map((stop, i) => {
        const outcome = stopOutcome(stop);
        const isLast = i === stops.length - 1;
        const firstDate = stop.actions[0].date;
        const lastDate = stop.actions[stop.actions.length - 1].date;
        const sameDay = fmtDate(firstDate) === fmtDate(lastDate);

        const dotClass =
          outcome === "pass"
            ? "bg-yea"
            : outcome === "fail"
              ? "bg-nay"
              : "bg-line-strong";

        return (
          <div key={i} className="flex gap-5">
            {/* Timeline spine */}
            <div className="flex flex-col items-center pt-1">
              <div
                className={`h-3 w-3 shrink-0 rounded-full ring-2 ring-surface ${dotClass}`}
              />
              {!isLast && (
                <div className="mt-1 w-px flex-1 bg-line" style={{ minHeight: "1.5rem" }} />
              )}
            </div>

            {/* Stop content */}
            <div className={`flex-1 ${isLast ? "pb-0" : "pb-6"}`}>
              {/* Stop header */}
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                <span className="text-sm font-semibold text-ink">
                  {stop.bodyName}
                </span>
                <span className="font-mono text-xs text-faint">
                  {sameDay
                    ? fmtDate(firstDate)
                    : `${fmtDate(firstDate)} – ${fmtDate(lastDate)}`}
                </span>
              </div>

              {/* Actions within this stop */}
              <div className="mt-2 space-y-1.5">
                {stop.actions.map((a) => {
                  const ao = actionOutcome(a.result);
                  const icon = actionIcon(a.actionText);
                  return (
                    <div
                      key={a.id}
                      className="flex items-start gap-2 text-sm"
                    >
                      <span
                        className={`mt-0.5 shrink-0 font-mono text-[11px] font-semibold ${
                          ao === "pass"
                            ? "text-yea"
                            : ao === "fail"
                              ? "text-nay"
                              : "text-faint"
                        }`}
                      >
                        {icon}
                      </span>
                      <span className="flex-1 leading-snug text-muted">
                        {a.actionText || "—"}
                      </span>
                      {a.result ? (
                        <span
                          className={`shrink-0 rounded px-1.5 py-0.5 font-mono text-[10px] font-semibold ${
                            ao === "pass"
                              ? "bg-yeaWash text-yea"
                              : ao === "fail"
                                ? "bg-nayWash text-nay"
                                : "bg-neutralWash text-muted"
                          }`}
                        >
                          {a.result}
                        </span>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
