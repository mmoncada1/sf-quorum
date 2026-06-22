import Link from "next/link";
import { blockColor, gradeBg, initials, voteBg } from "@/lib/format";

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
      className="flex shrink-0 items-center justify-center rounded-base border-2 border-border font-heading text-black"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.36,
        background: blockColor(district ?? name),
        boxShadow: "2px 2px 0 0 #000",
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
      className={`inline-flex h-10 min-w-10 items-center justify-center rounded-base border-2 border-border px-2 font-heading text-xl shadow-nbsm ${gradeBg(
        grade,
      )} ${className}`}
    >
      {grade ?? "—"}
    </span>
  );
}

export function ScoreNumber({ score }: { score: number }) {
  return (
    <span className="font-display text-4xl font-heading tabular-nums text-black">
      {Math.round(score)}
    </span>
  );
}

export function StatBar({
  label,
  value,
  hint,
  accent = "var(--main)",
}: {
  label: string;
  value: number; // 0..100
  hint?: string;
  accent?: string;
}) {
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between gap-2">
        <span className="min-w-0 text-[11px] font-bold uppercase leading-tight tracking-wide text-black/70">
          {label}
        </span>
        <span className="shrink-0 text-sm font-heading tabular-nums text-black">
          {Math.round(value)}
          {hint ? <span className="ml-0.5 text-black/50">{hint}</span> : null}
        </span>
      </div>
      <div className="nb-track">
        <div
          className="h-full"
          style={{
            width: `${value <= 0 ? 0 : Math.max(3, Math.min(100, value))}%`,
            background: accent,
          }}
        />
      </div>
    </div>
  );
}

export function TopicChip({
  emoji,
  name,
  color,
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
    <span
      className="inline-flex items-center gap-1 rounded-base border-2 border-border px-2 py-0.5 text-xs font-bold text-black"
      style={{ background: color || "#ffffff" }}
    >
      {emoji ? <span>{emoji}</span> : null}
      <span>{name}</span>
      {typeof count === "number" ? (
        <span className="tabular-nums opacity-70">{count}</span>
      ) : null}
    </span>
  );
  return href ? (
    <Link href={href} className="transition-transform hover:-translate-y-0.5">
      {inner}
    </Link>
  ) : (
    inner
  );
}

export function VotePill({ value }: { value: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-base border-2 border-border px-2 py-0.5 text-xs font-heading ${voteBg(
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
      <div className="flex h-3.5 w-28 overflow-hidden rounded-base border-2 border-border bg-bw">
        <div className="h-full bg-win" style={{ width: `${(aye / total) * 100}%` }} />
        <div
          className="h-full border-l-2 border-border bg-loss"
          style={{ width: `${(no / total) * 100}%` }}
        />
        <div
          className="h-full bg-zinc-300"
          style={{ width: `${(other / total) * 100}%` }}
        />
      </div>
      <span className="text-xs font-bold tabular-nums text-black">
        {aye}
        <span className="mx-0.5 text-black/40">/</span>
        {no}
        {other ? <span className="text-black/40"> /{other}</span> : null}
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
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        {kicker ? <div className="kicker mb-2">{kicker}</div> : null}
        <h2 className="font-display text-2xl font-heading uppercase tracking-tight text-black">
          {children}
        </h2>
      </div>
      {action}
    </div>
  );
}

const TYPE_COLOR: Record<string, string> = {
  Ordinance: "#4d9de0",
  Resolution: "#b388ff",
  Motion: "#ffd23f",
  Hearing: "#2ec4b6",
  "Charter Amendment": "#ff5d52",
};

export function TypePill({ type }: { type: string | null | undefined }) {
  const t = type || "Item";
  return (
    <span
      className="inline-flex items-center rounded-base border-2 border-border px-2 py-0.5 text-[11px] font-heading uppercase text-black"
      style={{ background: TYPE_COLOR[t] || "#ffffff" }}
    >
      {t}
    </span>
  );
}
