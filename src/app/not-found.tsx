import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <div className="font-mono text-7xl font-bold tabular-nums text-ink">404</div>
      <p className="mt-4 text-lg text-muted">
        That page isn&apos;t on the agenda.
      </p>
      <Link href="/" className="nb-btn mt-7">
        Back to home
      </Link>
    </div>
  );
}
