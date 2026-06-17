# ISO 27001 Navigator

A friendly, beginner-first website for learning **ISO/IEC 27001:2022** and
getting an organisation ready for certification. It explains the standard in
plain language and gives ready-to-use, copy/download templates for every
required document and all 93 Annex A controls.

## What's inside

- **Learn** (`/learn`) — what ISO 27001 is, key concepts (ISMS, CIA triad,
  clauses vs Annex A, the Statement of Applicability, certification process),
  a 30-term glossary, and 14 FAQs.
- **Roadmap** (`/roadmap`) — a 9-phase implementation plan from leadership
  buy-in to the certification audit, with the relevant templates linked at
  each phase.
- **Documents** (`/documents`) — 19 mandatory and recommended documents, each
  with why-it-matters, what-to-include, beginner tips, and a full sample
  template you can **copy** or **download as Markdown**.
- **Controls** (`/controls`) — all **93 Annex A:2022 controls** as a searchable,
  filterable checklist with browser-saved progress. Each control has a plain
  explanation, implementation steps, audit evidence, and a sample template.

## Tech

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS v4 (CSS-based theme tokens in `src/app/globals.css`)
- `marked` for Markdown rendering · `lucide-react` for icons
- Content authored as typed data in `src/content/` — the UI is a thin
  rendering layer over it.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build & serve a production build:

```bash
npm run build
npm run start
```

The whole site prerenders to static HTML (every control and document is its
own static page), so it can also be hosted on any static host.

## Project structure

```
src/
  app/                 # routes (home, learn, roadmap, documents, controls)
  components/          # header, footer, template viewer, controls explorer, …
  content/             # typed data: controls, documents, learning, roadmap
  lib/                 # markdown renderer, theme styles, helpers
```

## A note

Templates are starting points to adapt to your organisation. This is an
educational resource, not legal advice or a guarantee of certification, and is
not affiliated with or endorsed by ISO/IEC.
