export const metadata = {
  title: "Methodology — SF Quorum",
};

export default function MethodologyPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <header className="nb-card p-6">
        <div className="kicker mb-3">Receipts</div>
        <h1 className="font-display text-4xl font-heading uppercase tracking-tight text-black">
          Methodology
        </h1>
        <p className="mt-3 font-medium text-black/80">
          SF Quorum is built to be boringly transparent. Every number on this site
          is computed mechanically from San Francisco&apos;s own public records.
          No vibes, no editorializing in the data.
        </p>
      </header>

      <Section title="Where the data comes from">
        <p>
          All legislation, meetings, sponsorships, and roll-call votes are pulled
          directly from the City &amp; County of San Francisco&apos;s public
          legislative portal at{" "}
          <a
            href="https://sfgov.legistar.com"
            className="font-bold text-main underline decoration-2 underline-offset-2"
            target="_blank"
            rel="noreferrer"
          >
            sfgov.legistar.com
          </a>
          . We crawl the public calendar, each meeting agenda, the detail page for
          every matter, and the action history that records how each supervisor
          voted. (San Francisco&apos;s official Legistar Web API mirror stopped
          updating around 2018, so we read the live record the same way a member
          of the public would.)
        </p>
      </Section>

      <Section title="Plain-English summaries">
        <p>
          Official legislative titles are written in dense legalese. Each summary
          is generated from that official title — by default with a deterministic
          rewriter (a glossary that swaps jargon for plain words plus per-type
          templates). If an LLM API key is configured, summaries are produced by a
          model instructed to be neutral and factual. Summaries are an aid, not a
          legal interpretation; always read the official text for specifics.
        </p>
      </Section>

      <Section title="The scores">
        <p>
          Each supervisor gets four sub-scores, then one overall score. Sub-scores
          are <em>relative</em> — the leader in each category is set to 100 and
          everyone else is measured against them — so this is a true ranking of
          the current Board, not an absolute grade.
        </p>
        <ul className="ml-5 list-disc space-y-2 font-medium text-black/80">
          <li>
            <strong className="text-black">Impact</strong> — rewards getting
            substantive legislation actually passed into law. Honorary and purely
            symbolic resolutions are weighted near zero on purpose.
          </li>
          <li>
            <strong className="text-black">Activity</strong> — how much original
            legislation the supervisor authors and co-sponsors.
          </li>
          <li>
            <strong className="text-black">Attendance</strong> — the share of
            roll-call votes where the supervisor was present and voting (vs.
            excused/absent).
          </li>
          <li>
            <strong className="text-black">Independence</strong> — how often the
            supervisor breaks from the eventual majority. High independence
            isn&apos;t inherently good or bad; it just measures willingness to
            dissent.
          </li>
        </ul>
        <p className="mt-3">
          The <strong>overall score</strong> weights these as: 40% Impact, 30%
          Activity, 20% Attendance, 10% Independence. Letter grades map linearly
          from the overall score (A+ at 90+, down to F).
        </p>
      </Section>

      <Section title="Topic classification">
        <p>
          Each matter is tagged into policy areas (Housing, Public Safety,
          Transportation, etc.) using a transparent keyword matcher over its
          title. This drives the &quot;focus areas&quot; on each dossier. It&apos;s
          intentionally simple and explainable rather than a black box.
        </p>
      </Section>

      <Section title="Limitations & honesty">
        <ul className="ml-5 list-disc space-y-2 font-medium text-black/80">
          <li>
            Scores reflect only the meetings ingested so far — a rolling recent
            window, not necessarily a supervisor&apos;s entire career.
          </li>
          <li>
            Not every item gets a recorded individual roll-call vote; consent-style
            and procedural items may show no per-member vote.
          </li>
          <li>
            Authoring fewer bills isn&apos;t automatically &quot;bad,&quot; and a
            high vote count isn&apos;t automatically &quot;good.&quot; The scores
            are a starting point for scrutiny, not a verdict.
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
    <section className="nb-card p-6">
      <h2 className="mb-2 font-display text-xl font-heading uppercase tracking-tight text-black">
        {title}
      </h2>
      <div className="space-y-3 text-sm font-medium leading-relaxed text-black/80">
        {children}
      </div>
    </section>
  );
}
