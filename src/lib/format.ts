import { format, formatDistanceToNowStrict } from "date-fns";

export function fmtDate(d: Date | string | null | undefined): string {
  if (!d) return "—";
  const date = typeof d === "string" ? new Date(d) : d;
  if (isNaN(date.getTime())) return "—";
  return format(date, "MMM d, yyyy");
}

export function fmtAgo(d: Date | string | null | undefined): string {
  if (!d) return "";
  const date = typeof d === "string" ? new Date(d) : d;
  if (isNaN(date.getTime())) return "";
  return `${formatDistanceToNowStrict(date)} ago`;
}

export function pct(n: number): string {
  return `${Math.round(n * 100)}%`;
}

/** Tinted wash + dark text for a roll-call vote value. */
export function voteBg(value: string): string {
  const v = value.toLowerCase();
  if (v === "aye") return "bg-yeaWash text-yea";
  if (v === "no") return "bg-nayWash text-nay";
  if (v === "excused" || v === "absent") return "bg-neutralWash text-muted";
  return "bg-neutralWash text-muted";
}

/** Tinted wash + dark text for a letter grade. */
export function gradeBg(grade: string | null | undefined): string {
  if (!grade) return "bg-neutralWash text-muted";
  if (grade.startsWith("A")) return "bg-yeaWash text-yea";
  if (grade.startsWith("B")) return "bg-slateWash text-slate";
  if (grade.startsWith("C")) return "bg-amberWash text-amber";
  if (grade.startsWith("D")) return "bg-accentWash text-accent-ink";
  return "bg-nayWash text-nay";
}

/** 4 px colored left-border accent for cards and list rows, keyed by grade.
 *  The `!` prefix forces border-left-color to win over nb-card's border-color shorthand. */
export function gradeBorder(grade: string | null | undefined): string {
  if (!grade) return "border-l-4 !border-l-line";
  if (grade.startsWith("A")) return "border-l-4 !border-l-yea";
  if (grade.startsWith("B")) return "border-l-4 !border-l-slate";
  if (grade.startsWith("C")) return "border-l-4 !border-l-amber";
  if (grade.startsWith("D")) return "border-l-4 !border-l-accent";
  return "border-l-4 !border-l-nay"; // F
}

/** Tinted wash + dark text for a matter's lifecycle status. */
export function statusTone(status: string | null | undefined): string {
  if (!status) return "bg-neutralWash text-muted";
  const s = status.toLowerCase();
  if (/pass|adopt|approv|enact|sign|finally/.test(s)) return "bg-yeaWash text-yea";
  if (/fail|reject|veto|withdraw|tabl|died|killed/.test(s)) return "bg-nayWash text-nay";
  return "bg-neutralWash text-muted";
}

/** Ink color expressing performance, used for the metric numerals. */
export function scoreInk(score: number): string {
  if (score >= 67) return "text-yea";
  if (score >= 34) return "text-ink";
  return "text-nay";
}

/** Fill color for a thin meter. Neutral by default. */
export function scoreFill(score: number): string {
  if (score >= 67) return "var(--yea)";
  if (score >= 34) return "var(--ink)";
  return "var(--nay)";
}

export function ordinal(n: number): string {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

/** Deterministic, desaturated block color for avatars (paper text on top). */
const BLOCK_COLORS = [
  "#2f3a46", // slate
  "#5a4632", // umber
  "#3d4d3a", // moss
  "#4a3b52", // plum
  "#3a4a5a", // steel
  "#5a3438", // oxblood
  "#46433a", // olive-ink
  "#34454a", // teal-ink
];

export function blockColor(seed: number | string): string {
  const n =
    typeof seed === "number"
      ? seed
      : seed.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  return BLOCK_COLORS[Math.abs(n) % BLOCK_COLORS.length];
}
