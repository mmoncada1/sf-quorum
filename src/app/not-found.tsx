import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <div className="rounded-base border-2 border-border bg-main px-6 py-2 font-display text-7xl font-heading text-black shadow-shadow">
        404
      </div>
      <p className="mt-5 font-heading uppercase text-black">
        That page isn&apos;t on the agenda.
      </p>
      <Link href="/" className="nb-btn mt-6">
        Back to home
      </Link>
    </div>
  );
}
