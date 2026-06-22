import Link from "next/link";
import { blockColor, gradeBg, initials, scoreFill, statusTone, voteBg } from "@/lib/format";

export function Avatar({
  name,
  size = 44,
  district,
}: {
  name: string;
  size?: number;
  district?: number | null;
}) {
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-lg font-display font-bold leading-none text-paper"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.34,
        background: blockColor(district ?? name),
      }}
    >
      {initials(name)}
    </span>
  );
}

export function GradeBadge({
  grade,
  className = "",
}: {
  grade: string | null | undefined;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex h-10 min-w-10 items-center justify-center rounded-md px-2 font-display text-xl font-bold ${gradeBg(
        grade,
      )} ${className}`}
    >
      {grade ?? "—"}
    </span>
  );
}

export function ScoreNumber({ score }: { score: number }) {
  return (
    <span className="font-mono text-4xl font-bold tabular-nums leading-none text-ink">
      {Math.round(score)}
    </span>
  );
}

export function StatBar({
  label,
  value,
  hint,
  accent,
}: {
  label: string;
  value: number; // 0..100
  hint?: string;
  accent?: string;
}) {
  const width = value <= 0 ? 0 : Math.min(100, value);
  const fill = accent ?? scoreFill(value);
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-2">
        <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-muted">
          {label}
        </span>
        <span className="shrink-0 font-mono text-sm font-bold tabular-nums text-ink">
          {Math.round(value)}
          {hint ? <span className="ml-0.5 text-faint">{hint}</span> : null}
        </span>
      </div>
      <div className="nb-track">
        <div
          className="h-full rounded-full"
          style={{ width: `${width}%`, background: fill }}
        />
      </div>
    </div>
  );
}

export function TopicChip({
  name,
  count,
  href,
}: {
  emoji?: string | null;
  name: string;
  color?: string | null;
  count?: number;
  href?: string;
}) {
  const inner = (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-0.5 text-xs font-medium text-muted transition-colors group-hover:border-ink group-hover:text-ink">
      <span>{name}</span>
      {typeof count === "number" ? (
        <span className="font-mono tabular-nums text-faint">{count}</span>
      ) : null}
    </span>
  );
  return href ? (
    <Link href={href} className="group inline-flex rounded-full">
      {inner}
    </Link>
  ) : (
    inner
  );
}

export function VotePill({ value }: { value: string }) {
  return (
    <span
      className={`inline-flex items-center rounded px-2 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-wide ${voteBg(
        value,
      )}`}
    >
      {value}
    </span>
  );
}

export function VoteTallyBar({
  aye,
  no,
  other,
}: {
  aye: number;
  no: number;
  other: number;
}) {
  const total = Math.max(1, aye + no + other);
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-1.5 w-24 overflow-hidden rounded-full bg-line">
        <div className="h-full bg-yea" style={{ width: `${(aye / total) * 100}%` }} />
        <div className="h-full bg-nay" style={{ width: `${(no / total) * 100}%` }} />
        <div
          className="h-full bg-faint"
          style={{ width: `${(other / total) * 100}%` }}
        />
      </div>
      <span className="font-mono text-xs font-semibold tabular-nums text-ink">
        <span className="text-yea">{aye}</span>
        <span className="mx-0.5 text-faint">-</span>
        <span className="text-nay">{no}</span>
        {other ? <span className="text-faint"> /{other}</span> : null}
      </span>
    </div>
  );
}

export function SectionTitle({
  children,
  kicker,
  action,
}: {
  children: React.ReactNode;
  kicker?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-x-4 gap-y-2 border-b border-line pb-3">
      <div>
        {kicker ? <div className="kicker mb-1.5">{kicker}</div> : null}
        <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
          {children}
        </h2>
      </div>
      {action}
    </div>
  );
}

export function StatusPill({ status }: { status: string | null | undefined }) {
  if (!status) return null;
  return (
    <span
      className={`inline-flex items-center rounded px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide ${statusTone(
        status,
      )}`}
    >
      {status}
    </span>
  );
}

export function TypePill({ type }: { type: string | null | undefined }) {
  const t = type || "Item";
  return (
    <span className="inline-flex items-center rounded border border-line px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-muted">
      {t}
    </span>
  );
}
