"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ShieldCheck, Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";

const NAV = [
  { href: "/learn", label: "Learn" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/documents", label: "Documents" },
  { href: "/controls", label: "Controls" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-surface/85 backdrop-blur supports-[backdrop-filter]:bg-surface/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-sm transition-colors group-hover:bg-brand-700">
            <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-bold text-ink">
              ISO 27001
            </span>
            <span className="text-[11px] font-medium tracking-wide text-muted">
              NAVIGATOR
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "bg-brand-50 text-brand-700"
                  : "text-ink-soft hover:bg-brand-50/60 hover:text-brand-700",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/roadmap"
            className="ml-2 inline-flex items-center rounded-lg bg-brand-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
          >
            Start here
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink-soft hover:bg-brand-50 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-surface px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-brand-50 text-brand-700"
                    : "text-ink-soft hover:bg-brand-50/60",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
