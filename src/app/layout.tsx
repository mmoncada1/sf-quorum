import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "SF QUORUM — San Francisco legislation & supervisor accountability",
  description:
    "Track every piece of legislation before the San Francisco Board of Supervisors, in plain English — plus a live scorecard of how each district supervisor actually votes.",
};

const NAV = [
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/supervisors", label: "Supervisors" },
  { href: "/legislation", label: "Legislation" },
  { href: "/methodology", label: "Methodology" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <header className="sticky top-0 z-40 border-b-2 border-border bg-bg/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-base border-2 border-border bg-main font-heading text-sm text-black shadow-nbsm">
                SF
              </span>
              <span className="font-display text-lg font-heading uppercase tracking-tight text-black">
                Quorum
              </span>
            </Link>
            <nav className="flex flex-wrap items-center gap-1.5 text-sm">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="rounded-base border-2 border-transparent px-3 py-1.5 font-bold text-black transition-all hover:border-border hover:bg-bw hover:shadow-nbsm"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>

        <footer className="mt-16 border-t-2 border-border bg-bw">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-black/70">
            <p className="max-w-2xl">
              <span className="font-heading text-black">SF QUORUM</span> is an
              independent, nonpartisan civic-transparency project. Data is sourced
              directly from the City &amp; County of San Francisco&apos;s public
              legislative record (sfgov.legistar.com). Scores are computed
              mechanically from public votes and sponsorships — see{" "}
              <Link
                href="/methodology"
                className="font-bold text-main underline decoration-2 underline-offset-2"
              >
                Methodology
              </Link>
              .
            </p>
            <p className="mt-3 text-xs text-black/50">
              Not affiliated with the City of San Francisco. Built for residents
              who work 9-to-5 and still want to know what their government is
              doing.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
