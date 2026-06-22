/**
 * Continuous service start dates for the current Board of Supervisors, by
 * district. Used to (a) show "in office since" context and (b) normalize the
 * count-based scores (Impact, Activity) by time served, so a supervisor who
 * joined mid-session isn't punished for having had fewer chances to legislate.
 *
 * Dates are the start of the member's current *continuous* service (appointment
 * or election), verified against SF public records.
 */
export const TERM_STARTS: Record<number, string> = {
  1: "2021-01-08", // Connie Chan
  2: "2024-12-01", // Stephen Sherrill (appointed by Mayor Breed)
  3: "2025-01-08", // Danny Sauter
  4: "2025-12-01", // Alan Wong (appointed by Mayor Lurie after Engardio recall)
  5: "2025-01-08", // Bilal Mahmood
  6: "2022-05-09", // Matt Dorsey (appointed by Mayor Breed)
  7: "2021-01-08", // Myrna Melgar
  8: "2018-07-11", // Rafael Mandelman
  9: "2025-01-08", // Jackie Fielder
  10: "2019-01-08", // Shamann Walton
  11: "2025-01-08", // Chyanne Chen
};

export function termStartForDistrict(
  district: number | null | undefined,
): Date | null {
  if (district == null) return null;
  const iso = TERM_STARTS[district];
  return iso ? new Date(iso) : null;
}

/** Whole months between two dates (>= 0). */
export function monthsBetween(start: Date, end: Date): number {
  if (end <= start) return 0;
  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  if (end.getDate() < start.getDate()) months -= 1;
  return Math.max(0, months);
}

/** Human label like "Jan 2025" for an "in office since" line. */
export function monthYear(d: Date): string {
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}
