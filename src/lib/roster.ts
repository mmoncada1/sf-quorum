/**
 * Canonical roster of the current San Francisco Board of Supervisors.
 * Verified against the Clerk of the Board roster (effective 2/17/2026) and
 * sfbos.org. Names are matched (loosely) against Legistar roll-call names.
 */

export interface RosterEntry {
  slug: string;
  fullName: string;
  district: number;
  title: string;
  email: string;
  /** Aliases used to match Legistar "Person Name" strings to this person. */
  aliases: string[];
}

export const ROSTER: RosterEntry[] = [
  {
    slug: "connie-chan",
    fullName: "Connie Chan",
    district: 1,
    title: "Supervisor",
    email: "Connie.Chan@sfgov.org",
    aliases: ["connie chan", "chan"],
  },
  {
    slug: "stephen-sherrill",
    fullName: "Stephen Sherrill",
    district: 2,
    title: "Supervisor",
    email: "Stephen.Sherrill@sfgov.org",
    aliases: ["stephen sherrill", "sherrill"],
  },
  {
    slug: "danny-sauter",
    fullName: "Danny Sauter",
    district: 3,
    title: "Supervisor",
    email: "Danny.Sauter@sfgov.org",
    aliases: ["danny sauter", "sauter"],
  },
  {
    slug: "alan-wong",
    fullName: "Alan Wong",
    district: 4,
    title: "Supervisor",
    email: "Alan.Wong@sfgov.org",
    aliases: ["alan wong", "wong"],
  },
  {
    slug: "bilal-mahmood",
    fullName: "Bilal Mahmood",
    district: 5,
    title: "Supervisor",
    email: "Bilal.Mahmood@sfgov.org",
    aliases: ["bilal mahmood", "mahmood"],
  },
  {
    slug: "matt-dorsey",
    fullName: "Matt Dorsey",
    district: 6,
    title: "Supervisor",
    email: "Matt.Dorsey@sfgov.org",
    aliases: ["matt dorsey", "dorsey"],
  },
  {
    slug: "myrna-melgar",
    fullName: "Myrna Melgar",
    district: 7,
    title: "Supervisor",
    email: "Myrna.Melgar@sfgov.org",
    aliases: ["myrna melgar", "melgar"],
  },
  {
    slug: "rafael-mandelman",
    fullName: "Rafael Mandelman",
    district: 8,
    title: "President of the Board",
    email: "Rafael.Mandelman@sfgov.org",
    aliases: ["rafael mandelman", "mandelman"],
  },
  {
    slug: "jackie-fielder",
    fullName: "Jackie Fielder",
    district: 9,
    title: "Supervisor",
    email: "Jackie.Fielder@sfgov.org",
    aliases: ["jackie fielder", "fielder"],
  },
  {
    slug: "shamann-walton",
    fullName: "Shamann Walton",
    district: 10,
    title: "Supervisor",
    email: "Shamann.Walton@sfgov.org",
    aliases: ["shamann walton", "walton"],
  },
  {
    slug: "chyanne-chen",
    fullName: "Chyanne Chen",
    district: 11,
    title: "Supervisor",
    email: "Chyanne.Chen@sfgov.org",
    aliases: ["chyanne chen", "chen"],
  },
];

/** Match a Legistar roll-call name to a roster slug, or null if not a current member. */
export function matchRoster(name: string): RosterEntry | null {
  const n = name.toLowerCase().replace(/\s+/g, " ").trim();
  // exact-ish full name first
  for (const r of ROSTER) {
    if (r.aliases.includes(n)) return r;
  }
  // last-name fallback, but only if unambiguous
  const last = n.split(" ").pop() || "";
  const matches = ROSTER.filter((r) => r.aliases.includes(last));
  if (matches.length === 1) return matches[0];
  // "Chan" vs "Chen" disambiguation handled by full alias above; if we get here
  // with an ambiguous surname, try contains.
  const contains = ROSTER.filter((r) => n.includes(r.fullName.toLowerCase()));
  return contains.length === 1 ? contains[0] : null;
}
