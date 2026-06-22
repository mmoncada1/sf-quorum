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

/** Solid neo-brutalist block for a vote value. */
export function voteBg(value: string): string {
  const v = value.toLowerCase();
  if (v === "aye") return "bg-win text-black";
  if (v === "no") return "bg-loss text-black";
  if (v === "excused" || v === "absent") return "bg-zinc-200 text-black";
  return "bg-bw text-black";
}

/** Solid background block for a letter grade. */
export function gradeBg(grade: string | null | undefined): string {
  if (!grade) return "bg-zinc-200 text-black";
  if (grade.startsWith("A")) return "bg-win text-black";
  if (grade.startsWith("B")) return "bg-info text-black";
  if (grade.startsWith("C")) return "bg-gold text-black";
  if (grade.startsWith("D")) return "bg-main text-black";
  return "bg-loss text-black";
}

/** Hex used for solid stat-bar fills. */
export function scoreFill(score: number): string {
  if (score >= 74) return "var(--win)";
  if (score >= 50) return "var(--gold)";
  if (score >= 34) return "var(--main)";
  return "var(--loss)";
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

/** Deterministic bright block color for avatars/blocks. */
const BLOCK_COLORS = [
  "#ff5a36",
  "#34d97b",
  "#ffd23f",
  "#4d9de0",
  "#b388ff",
  "#ff5d52",
  "#ff9f1c",
  "#2ec4b6",
];

export function blockColor(seed: number | string): string {
  const n =
    typeof seed === "number"
      ? seed
      : seed.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  return BLOCK_COLORS[Math.abs(n) % BLOCK_COLORS.length];
}
