"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/supervisors", label: "Supervisors" },
  { href: "/legislation", label: "Legislation" },
  { href: "/methodology", label: "Methodology" },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(href + "/");
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-border bg-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-base border-2 border-border bg-main font-heading text-sm text-black shadow-nbsm">
            SF
          </span>
          <span className="font-display text-lg font-heading uppercase tracking-tight text-black">
            Quorum
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1.5 text-sm md:flex">
          {NAV.map((n) => {
            const active = isActive(pathname, n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`rounded-base border-2 px-3 py-1.5 font-bold text-black transition-all ${
                  active
                    ? "border-border bg-main shadow-nbsm"
                    : "border-transparent hover:border-border hover:bg-bw hover:shadow-nbsm"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-base border-2 border-border bg-bw text-black shadow-nbsm transition-all active:translate-x-boxShadowX active:translate-y-boxShadowY active:shadow-none md:hidden"
        >
          {open ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav className="border-t-2 border-border bg-bg px-4 py-3 md:hidden">
          <div className="flex flex-col gap-2">
            {NAV.map((n) => {
              const active = isActive(pathname, n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-base border-2 border-border px-4 py-3 font-heading uppercase tracking-tight text-black shadow-nbsm transition-all active:translate-x-boxShadowX active:translate-y-boxShadowY active:shadow-none ${
                    active ? "bg-main" : "bg-bw"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
