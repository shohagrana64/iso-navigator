"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronRight, RotateCcw, Search } from "lucide-react";
import type { AnnexControl, ControlTheme } from "@/content";
import { controlSlug } from "@/content";
import { useProgress } from "@/components/progress-provider";
import { ControlCheckbox } from "@/components/control-checkbox";
import { themeStyles } from "@/lib/theme-style";
import { cn } from "@/lib/cn";

type Filter = "All" | ControlTheme;

const FILTERS: { key: Filter; label: string; clause?: string }[] = [
  { key: "All", label: "All" },
  { key: "Organizational", label: "Organizational", clause: "A.5" },
  { key: "People", label: "People", clause: "A.6" },
  { key: "Physical", label: "Physical", clause: "A.7" },
  { key: "Technological", label: "Technological", clause: "A.8" },
];

export function ControlsExplorer({ controls }: { controls: AnnexControl[] }) {
  const { count, reset, ready, done } = useProgress();
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  const total = controls.length;
  const pct = total ? Math.round((count / total) * 100) : 0;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return controls.filter((c) => {
      if (filter !== "All" && c.theme !== filter) return false;
      if (!q) return true;
      return (
        c.id.toLowerCase().includes(q) ||
        c.title.toLowerCase().includes(q) ||
        c.purpose.toLowerCase().includes(q)
      );
    });
  }, [controls, filter, query]);

  return (
    <div>
      {/* Progress bar */}
      <div className="rounded-2xl border border-line bg-surface p-5 shadow-sm">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-muted">Your progress</p>
            <p className="font-display text-2xl font-bold text-ink">
              {ready ? count : 0}
              <span className="text-base font-medium text-muted">
                {" "}
                / {total} controls marked
              </span>
            </p>
          </div>
          <button
            type="button"
            onClick={reset}
            disabled={count === 0}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-xs font-semibold text-ink-soft transition-colors hover:border-brand-300 hover:text-brand-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Reset
          </button>
        </div>
        <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-brand-50">
          <div
            className="h-full rounded-full bg-grow-600 transition-[width] duration-500"
            style={{ width: `${ready ? pct : 0}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-muted">
          Tick a control once you&apos;ve decided how you&apos;ll handle it.
          Progress is saved in your browser only.
        </p>
      </div>

      {/* Filters + search */}
      <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={cn(
                "cursor-pointer rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                filter === f.key
                  ? "bg-brand-600 text-white shadow-sm"
                  : "bg-surface text-ink-soft ring-1 ring-line hover:ring-brand-300",
              )}
            >
              {f.label}
              {f.clause && (
                <span
                  className={cn(
                    "ml-1.5 text-xs",
                    filter === f.key ? "text-brand-100" : "text-muted",
                  )}
                >
                  {f.clause}
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="relative lg:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search controls…"
            aria-label="Search controls"
            className="w-full rounded-lg border border-line bg-surface py-2 pl-9 pr-3 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
          />
        </div>
      </div>

      <p className="mt-4 text-sm text-muted">
        Showing {filtered.length} control{filtered.length === 1 ? "" : "s"}
      </p>

      {/* List */}
      <ul className="mt-3 space-y-2.5">
        {filtered.map((c) => {
          const s = themeStyles[c.theme];
          const isDone = ready && done.has(c.id);
          return (
            <li key={c.id}>
              <div
                className={cn(
                  "group flex items-start gap-4 rounded-xl border bg-surface p-4 transition-colors",
                  isDone
                    ? "border-grow-200 bg-grow-50/40"
                    : "border-line hover:border-brand-300",
                )}
              >
                <div className="pt-0.5">
                  <ControlCheckbox id={c.id} label={`${c.id} ${c.title}`} />
                </div>
                <Link
                  href={`/controls/${controlSlug(c.id)}`}
                  className="flex flex-1 items-start justify-between gap-3"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={cn(
                          "rounded-md px-1.5 py-0.5 font-mono text-xs font-semibold",
                          s.chipBg,
                          s.chipText,
                        )}
                      >
                        {c.id}
                      </span>
                      <span className="text-[11px] font-medium uppercase tracking-wide text-muted">
                        {c.theme}
                      </span>
                    </div>
                    <h3 className="mt-1 font-display text-[15px] font-semibold text-ink">
                      {c.title}
                    </h3>
                    <p className="mt-0.5 line-clamp-2 text-sm text-muted">
                      {c.purpose}
                    </p>
                  </div>
                  <ChevronRight className="mt-1 h-5 w-5 flex-none text-line transition-colors group-hover:text-brand-500" />
                </Link>
              </div>
            </li>
          );
        })}
        {filtered.length === 0 && (
          <li className="rounded-xl border border-dashed border-line bg-surface p-8 text-center text-sm text-muted">
            No controls match your search.
          </li>
        )}
      </ul>
    </div>
  );
}
