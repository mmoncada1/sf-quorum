import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "SF QUORUM — San Francisco legislation & supervisor accountability",
  description:
    "Track every piece of legislation before the San Francisco Board of Supervisors, in plain English — plus a live scorecard of how each district supervisor actually votes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <SiteHeader />

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
