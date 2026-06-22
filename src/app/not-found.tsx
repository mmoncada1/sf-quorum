import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <div className="font-display text-6xl font-black text-brand">404</div>
      <p className="mt-3 text-zinc-400">
        That page isn&apos;t on the agenda.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-black hover:bg-brand/90"
      >
        Back to home
      </Link>
    </div>
  );
}
