import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "SF Quorum — San Francisco legislation & supervisor accountability",
  description:
    "Track every piece of legislation before the San Francisco Board of Supervisors, in plain English — plus a live scorecard of how each district supervisor actually votes.",
};

const NAV = [
  { href: "/", label: "Home" },
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
        <header className="sticky top-0 z-40 border-b border-ink-line/70 bg-ink/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-sm font-black text-black">
                SF
              </span>
              <span className="text-[15px] font-bold tracking-tight">
                Quorum
                <span className="ml-1.5 hidden text-xs font-medium text-zinc-500 sm:inline">
                  / accountability for the Board of Supervisors
                </span>
              </span>
            </Link>
            <nav className="flex items-center gap-1 text-sm">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="rounded-lg px-3 py-1.5 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>

        <footer className="mt-16 border-t border-ink-line/70">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-500">
            <p className="max-w-2xl">
              <span className="font-semibold text-zinc-300">SF Quorum</span> is an
              independent, nonpartisan civic-transparency project. Data is sourced
              directly from the City &amp; County of San Francisco&apos;s public
              legislative record (sfgov.legistar.com). Scores are computed
              mechanically from public votes and sponsorships — see{" "}
              <Link href="/methodology" className="text-brand hover:underline">
                Methodology
              </Link>
              .
            </p>
            <p className="mt-3 text-xs text-zinc-600">
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
