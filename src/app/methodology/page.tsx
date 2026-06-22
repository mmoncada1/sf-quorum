export const metadata = {
  title: "Methodology — SF Quorum",
};

export default function MethodologyPage() {
  return (
    <div className="max-w-prose space-y-10">
      <header>
        <div className="kicker mb-3">Receipts</div>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Methodology
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          SF Quorum is built to be boringly transparent. Every number on this site
          is computed mechanically from San Francisco&apos;s own public records.
          No vibes, no editorializing in the data.
        </p>
      </header>

      <Section title="Where the data comes from">
        <p>
          All legislation, meetings, sponsorships, and roll-call votes are pulled
          directly from the City and County of San Francisco&apos;s public
          legislative portal at{" "}
          <a
            href="https://sfgov.legistar.com"
            className="font-medium text-accent underline decoration-2 underline-offset-2"
            target="_blank"
            rel="noreferrer"
          >
            sfgov.legistar.com
          </a>
          . We crawl the public calendar, each meeting agenda, the detail page for
          every matter, and the action history that records how each supervisor
          voted. San Francisco&apos;s official Legistar Web API mirror stopped
          updating around 2018, so we read the live record the same way a member
          of the public would.
        </p>
      </Section>

      <Section title="Plain-English summaries">
        <p>
          Official legislative titles are written in dense legalese. Each summary
          is generated from that official title, by default with a deterministic
          rewriter (a glossary that swaps jargon for plain words plus per-type
          templates). If an LLM API key is configured, summaries are produced by a
          model instructed to be neutral and factual. Summaries are an aid, not a
          legal interpretation; always read the official text for specifics.
        </p>
      </Section>

      <Section title="The scores">
        <p>
          Each supervisor gets four sub-scores, then one overall score. Sub-scores
          are <em>relative</em>: the leader in each category is set to 100 and
          everyone else is measured against them, so this is a true ranking of the
          current Board, not an absolute grade.
        </p>
        <ul className="ml-5 list-disc space-y-2">
          <li>
            <strong className="font-semibold text-ink">Impact</strong> rewards
            getting substantive legislation actually passed into law. Honorary and
            purely symbolic resolutions are weighted near zero on purpose, and
            routine procedural items (such as the bulk &ldquo;extend the
            response deadline&rdquo; resolutions) are excluded so they
            can&apos;t pad the number.
          </li>
          <li>
            <strong className="font-semibold text-ink">Activity</strong> measures
            how much original legislation the supervisor authors and co-sponsors.
            Procedural housekeeping still counts, but only a quarter as much as a
            real bill.
          </li>
          <li>
            <strong className="font-semibold text-ink">Attendance</strong> is the
            share of roll-call votes where the supervisor was present and voting
            (versus excused or absent).
          </li>
          <li>
            <strong className="font-semibold text-ink">Independence</strong> is
            how often the supervisor breaks from the eventual majority. High
            independence isn&apos;t inherently good or bad; it just measures
            willingness to dissent.
          </li>
        </ul>
        <p>
          <strong className="font-semibold text-ink">Time served</strong> is
          accounted for: Impact and Activity are measured as a rate per month in
          office over the current session, so a supervisor appointed partway
          through (for example, a mid-term replacement) is judged on pace rather
          than raw totals and isn&apos;t penalized for having had fewer chances
          to legislate. Attendance and Independence are already rates, so they
          are time-fair by construction.
        </p>
        <p>
          The <strong className="font-semibold text-ink">overall score</strong>{" "}
          weights these as 40% Impact, 30% Activity, 20% Attendance, 10%
          Independence. Letter grades map linearly from the overall score (A+ at
          90 and above, down to F).
        </p>
      </Section>

      <Section title="Topic classification">
        <p>
          Each matter is tagged into policy areas (Housing, Public Safety,
          Transportation, and so on) using a transparent keyword matcher over its
          title. This drives the focus areas on each dossier. It&apos;s
          intentionally simple and explainable rather than a black box.
        </p>
      </Section>

      <Section title="Limitations and honesty">
        <ul className="ml-5 list-disc space-y-2">
          <li>
            Scores reflect only the meetings ingested so far, a rolling recent
            window, not necessarily a supervisor&apos;s entire career.
          </li>
          <li>
            Not every item gets a recorded individual roll-call vote; consent-style
            and procedural items may show no per-member vote.
          </li>
          <li>
            Authoring fewer bills isn&apos;t automatically bad, and a high vote
            count isn&apos;t automatically good. The scores are a starting point
            for scrutiny, not a verdict.
          </li>
          <li>
            This is an independent, nonpartisan project and is not affiliated with
            the City of San Francisco or any official, campaign, or party.
          </li>
        </ul>
      </Section>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-line pt-6">
      <h2 className="mb-3 font-display text-xl font-bold tracking-tight text-ink">
        {title}
      </h2>
      <div className="space-y-3 text-[15px] leading-relaxed text-muted">
        {children}
      </div>
    </section>
  );
}
