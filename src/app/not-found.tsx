import Link from "next/link";
import { Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
        <Compass className="h-7 w-7" />
      </span>
      <p className="mt-6 font-display text-5xl font-bold text-brand-200">404</p>
      <h1 className="mt-2 font-display text-2xl font-bold text-ink">
        We couldn&apos;t find that page
      </h1>
      <p className="mt-3 text-ink-soft">
        The link may be out of date. Let&apos;s get you back to somewhere
        useful.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          <Home className="h-4 w-4" /> Back home
        </Link>
        <Link
          href="/controls"
          className="inline-flex items-center gap-2 rounded-xl bg-surface px-5 py-2.5 text-sm font-semibold text-ink ring-1 ring-line transition-colors hover:ring-brand-300"
        >
          Browse the controls
        </Link>
      </div>
    </div>
  );
}
