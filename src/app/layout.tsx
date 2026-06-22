import type { Metadata } from "next";
import Link from "next/link";
import { Archivo, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const sans = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SF Quorum — San Francisco legislation & supervisor accountability",
  description:
    "Track every piece of legislation before the San Francisco Board of Supervisors, in plain English, plus a live scorecard of how each district supervisor actually votes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <SiteHeader />

        <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">{children}</main>

        <footer className="mt-24 border-t border-line">
          <div className="mx-auto max-w-6xl px-4 py-12 text-sm text-muted">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded bg-ink font-mono text-[11px] font-bold text-paper">
                SF
              </span>
              <span className="font-semibold tracking-tight text-ink">
                Quorum
              </span>
            </div>
            <p className="mt-4 max-w-2xl leading-relaxed">
              An independent, nonpartisan civic-transparency project. Data is
              pulled directly from the City and County of San Francisco&apos;s
              public legislative record at sfgov.legistar.com. Scores are computed
              mechanically from recorded votes and sponsorships, documented in the{" "}
              <Link
                href="/methodology"
                className="font-medium text-ink underline decoration-accent decoration-2 underline-offset-2 hover:text-accent"
              >
                methodology
              </Link>
              .
            </p>
            <p className="mt-4 max-w-2xl text-xs leading-relaxed text-faint">
              Not affiliated with the City of San Francisco. Built for residents
              who work nine to five and still want to know what their government
              is doing.
            </p>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
