import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  href: string;
  label: string;
}

/** Consistent page header with optional breadcrumbs and eyebrow label. */
export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-line bg-gradient-to-b from-brand-50/70 to-canvas">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        {crumbs && crumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex flex-wrap items-center gap-1 text-sm text-muted"
          >
            {crumbs.map((c, i) => (
              <span key={c.href} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
                <Link
                  href={c.href}
                  className="transition-colors hover:text-brand-700"
                >
                  {c.label}
                </Link>
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-600">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {description}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
