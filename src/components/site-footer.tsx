import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
                <ShieldCheck className="h-4 w-4" strokeWidth={2.2} />
              </span>
              <span className="font-display text-sm font-bold text-ink">
                ISO 27001 Navigator
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted">
              A friendly, beginner-first guide to building an ISO/IEC
              27001:2022 information security management system.
            </p>
          </div>

          <FooterCol
            title="Learn"
            links={[
              { href: "/learn", label: "What is ISO 27001?" },
              { href: "/learn#glossary", label: "Glossary" },
              { href: "/learn#faq", label: "FAQ" },
            ]}
          />
          <FooterCol
            title="Build"
            links={[
              { href: "/roadmap", label: "Implementation roadmap" },
              { href: "/documents", label: "Document templates" },
              { href: "/controls", label: "Annex A controls" },
              { href: "/risk-calculator", label: "Risk calculator" },
            ]}
          />
          <div>
            <h3 className="font-display text-sm font-semibold text-ink">
              Good to know
            </h3>
            <p className="mt-3 text-sm text-muted">
              All templates are starting points to adapt to your organisation —
              not legal advice or a guarantee of certification.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            Educational resource. &ldquo;ISO&rdquo; and &ldquo;ISO 27001&rdquo;
            refer to standards published by ISO/IEC; this site is not affiliated
            with or endorsed by them.
          </p>
          <p>Built to make getting started feel possible.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold text-ink">{title}</h3>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <Link
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-brand-700"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
