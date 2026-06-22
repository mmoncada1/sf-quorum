import Link from "next/link";
import { gradeColor, initials, scoreColor, voteBg } from "@/lib/format";

export function Avatar({
  name,
  size = 44,
  district,
}: {
  name: string;
  size?: number;
  district?: number | null;
}) {
  const hue = (district ?? name.length * 7) * 30;
  return (
    <span
      className="relative flex shrink-0 items-center justify-center rounded-full font-bold text-black"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.36,
        background: `linear-gradient(135deg, hsl(${hue} 70% 70%), hsl(${(hue + 40) % 360} 75% 55%))`,
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
      className={`inline-flex h-9 min-w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-2 text-xl font-black ${gradeColor(
        grade,
      )} ${className}`}
    >
      {grade ?? "—"}
    </span>
  );
}

export function ScoreNumber({ score }: { score: number }) {
  return (
    <span className={`font-display text-3xl font-black tabular-nums ${scoreColor(score)}`}>
      {Math.round(score)}
    </span>
  );
}

export function StatBar({
  label,
  value,
  hint,
  accent = "#ff5a36",
}: {
  label: string;
  value: number; // 0..100
  hint?: string;
  accent?: string;
}) {
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between text-xs">
        <span className="text-zinc-400">{label}</span>
        <span className="font-semibold tabular-nums text-zinc-200">
          {Math.round(value)}
          {hint ? <span className="ml-1 text-zinc-500">{hint}</span> : null}
        </span>
      </div>
      <div className="stat-track">
        <div
          className="h-full rounded-full"
          style={{
            width: `${Math.max(2, Math.min(100, value))}%`,
            background: `linear-gradient(90deg, ${accent}aa, ${accent})`,
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
      className="chip"
      style={color ? { borderColor: `${color}55`, color: `${color}` } : undefined}
    >
      {emoji ? <span>{emoji}</span> : null}
      <span className="text-zinc-200">{name}</span>
      {typeof count === "number" ? (
        <span className="tabular-nums text-zinc-500">{count}</span>
      ) : null}
    </span>
  );
  return href ? <Link href={href}>{inner}</Link> : inner;
}

export function VotePill({ value }: { value: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold ${voteBg(
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
      <div className="flex h-2 w-28 overflow-hidden rounded-full bg-white/5">
        <div className="h-full bg-win" style={{ width: `${(aye / total) * 100}%` }} />
        <div className="h-full bg-loss" style={{ width: `${(no / total) * 100}%` }} />
        <div className="h-full bg-meh/60" style={{ width: `${(other / total) * 100}%` }} />
      </div>
      <span className="text-xs tabular-nums text-zinc-500">
        <span className="text-win">{aye}</span>
        <span className="mx-0.5">/</span>
        <span className="text-loss">{no}</span>
        {other ? <span className="text-meh"> /{other}</span> : null}
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
        {kicker ? (
          <div className="text-xs font-semibold uppercase tracking-wider text-brand">
            {kicker}
          </div>
        ) : null}
        <h2 className="font-display text-xl font-bold text-white">{children}</h2>
      </div>
      {action}
    </div>
  );
}

export function TypePill({ type }: { type: string | null | undefined }) {
  const t = type || "Item";
  const map: Record<string, string> = {
    Ordinance: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    Resolution: "bg-violet-500/15 text-violet-300 border-violet-500/30",
    Motion: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    Hearing: "bg-teal-500/15 text-teal-300 border-teal-500/30",
    "Charter Amendment": "bg-rose-500/15 text-rose-300 border-rose-500/30",
  };
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-semibold ${
        map[t] || "bg-white/5 text-zinc-300 border-white/10"
      }`}
    >
      {t}
    </span>
  );
}
