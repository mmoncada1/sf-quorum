/**
 * The "athlete stats" engine.
 *
 * Turns raw vote/sponsorship aggregates into a comparable scorecard per
 * supervisor. Impact, Activity and Attendance are scored against ABSOLUTE
 * targets (a fixed bar for what strong performance looks like per month in
 * office), so a single outlier can't crush the rest of the field and a grade
 * means the same thing regardless of who else is on the board. Independence
 * stays relative to the cohort, because "dissent" only has meaning versus the
 * group. Everything here is pure + deterministic so the methodology page can
 * explain exactly how a number was produced.
 */

/**
 * Absolute monthly targets that earn a full 100 in each count-based pillar.
 * Calibrated so a highly productive supervisor reaches ~100 and the typical
 * member lands in a sensible middle band. These are normative bars, not
 * derived from the current roster, so scores are stable over time.
 */
const ACTIVITY_TARGET_PER_MONTH = 5; // authored-bill-equivalents / month
const IMPACT_TARGET_PER_MONTH = 3.5; // weighted passed/substantive work / month

function pct(rate: number, target: number): number {
  if (target <= 0) return 0;
  return Math.round(Math.min(100, Math.max(0, (rate / target) * 100)));
}

export interface RawStats {
  supervisorId: number;
  totalVotes: number; // roll-call lines this member appeared on
  ayes: number;
  noes: number;
  present: number; // ayes + noes + abstain/present (i.e. actually voting)
  absences: number; // Excused + Absent
  dissentVotes: number; // voted against the eventual majority
  sponsored: number;
  cosponsored: number;
  passedSponsored: number;
  substantiveSponsored: number; // sponsored items that are NOT honorary/symbolic/procedural
  passedSubstantiveSponsored: number; // substantive sponsored items that passed
  proceduralSponsored: number; // routine procedural items (e.g. response-time extensions)
  exposureMonths: number; // months in office within the data window (>= 1)
  topTopics: { slug: string; name: string; emoji: string; count: number }[];
}

export interface ScoredStats extends RawStats {
  attendanceRate: number; // 0..1
  dissentRate: number; // 0..1
  substanceRatio: number; // 0..1, share of sponsored work that is substantive
  impactScore: number; // 0..100
  activityScore: number; // 0..100
  independence: number; // 0..100
  attendanceScore: number; // 0..100
  overallScore: number; // 0..100
  grade: string;
  rank: number;
}

function safeDiv(a: number, b: number): number {
  return b > 0 ? a / b : 0;
}

function normalize(values: number[]): (v: number) => number {
  const max = Math.max(0, ...values);
  return (v: number) => (max > 0 ? Math.round((v / max) * 100) : 0);
}

export function gradeFor(overall: number): string {
  if (overall >= 90) return "A+";
  if (overall >= 82) return "A";
  if (overall >= 74) return "A-";
  if (overall >= 66) return "B+";
  if (overall >= 58) return "B";
  if (overall >= 50) return "B-";
  if (overall >= 42) return "C+";
  if (overall >= 34) return "C";
  if (overall >= 26) return "D";
  return "F";
}

export function scoreCohort(raws: RawStats[]): ScoredStats[] {
  // Per-member derived rates.
  const withRates = raws.map((r) => {
    const attendanceRate = safeDiv(r.present, r.totalVotes);
    const dissentRate = safeDiv(r.dissentVotes, r.present);
    const substanceRatio = safeDiv(r.substantiveSponsored, r.sponsored);
    // Procedural housekeeping counts, but only a quarter as much as real bills.
    const activityVolume =
      r.sponsored - 0.75 * r.proceduralSponsored + 0.4 * r.cosponsored;
    // Impact rewards getting substantive things passed, not procedural/symbolic volume.
    const impactVolume =
      r.passedSubstantiveSponsored * 1.0 +
      r.substantiveSponsored * 0.5 +
      r.cosponsored * 0.15;
    // Normalize by time served so a newer member isn't penalized for fewer
    // chances to legislate: these become "per month in office" rates.
    const months = Math.max(1, r.exposureMonths);
    const activityRaw = activityVolume / months;
    const impactRaw = impactVolume / months;
    return { r, attendanceRate, dissentRate, substanceRatio, activityRaw, impactRaw };
  });

  // Independence is the only pillar that stays relative to the cohort.
  const normIndep = normalize(withRates.map((x) => x.dissentRate));

  const scored: ScoredStats[] = withRates.map((x) => {
    const activityScore = pct(x.activityRaw, ACTIVITY_TARGET_PER_MONTH);
    const impactScore = pct(x.impactRaw, IMPACT_TARGET_PER_MONTH);
    const independence = normIndep(x.dissentRate);
    const attendanceScore = Math.round(x.attendanceRate * 100);
    const overallScore =
      0.4 * impactScore +
      0.3 * activityScore +
      0.2 * attendanceScore +
      0.1 * independence;
    return {
      ...x.r,
      attendanceRate: x.attendanceRate,
      dissentRate: x.dissentRate,
      substanceRatio: x.substanceRatio,
      impactScore,
      activityScore,
      independence,
      attendanceScore,
      overallScore: Math.round(overallScore * 10) / 10,
      grade: gradeFor(overallScore),
      rank: 0,
    };
  });

  scored.sort((a, b) => b.overallScore - a.overallScore);
  scored.forEach((s, i) => (s.rank = i + 1));
  return scored;
}
