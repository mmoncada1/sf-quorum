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

/** Color for a vote value. */
export function voteColor(value: string): string {
  const v = value.toLowerCase();
  if (v === "aye") return "text-win";
  if (v === "no") return "text-loss";
  if (v === "excused" || v === "absent") return "text-meh";
  return "text-zinc-300";
}

export function voteBg(value: string): string {
  const v = value.toLowerCase();
  if (v === "aye") return "bg-win/15 text-win border-win/30";
  if (v === "no") return "bg-loss/15 text-loss border-loss/30";
  if (v === "excused" || v === "absent") return "bg-white/5 text-meh border-white/10";
  return "bg-white/5 text-zinc-300 border-white/10";
}

/** Color for a letter grade. */
export function gradeColor(grade: string | null | undefined): string {
  if (!grade) return "text-meh";
  if (grade.startsWith("A")) return "text-win";
  if (grade.startsWith("B")) return "text-emerald-300";
  if (grade.startsWith("C")) return "text-gold";
  if (grade.startsWith("D")) return "text-orange-400";
  return "text-loss";
}

export function scoreColor(score: number): string {
  if (score >= 74) return "text-win";
  if (score >= 50) return "text-gold";
  if (score >= 34) return "text-orange-400";
  return "text-loss";
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
