// Shared content data model for the ISO 27001 Navigator.
// All content (Annex A controls, mandatory documents, learning material,
// roadmap) is authored as typed data so the UI stays a thin rendering layer.

/** The four control themes introduced in ISO/IEC 27001:2022 Annex A. */
export type ControlTheme =
  | "Organizational"
  | "People"
  | "Physical"
  | "Technological";

/** A single Annex A:2022 control, explained for beginners. */
export interface AnnexControl {
  /** Annex A reference, e.g. "A.5.1". */
  id: string;
  /** Numeric sort key, e.g. 5.01, 5.37, 8.34 — used for stable ordering. */
  sort: number;
  theme: ControlTheme;
  /** Official short title, e.g. "Policies for information security". */
  title: string;
  /** Control "attributes" tags (preventive/detective, etc.) — short labels. */
  tags: string[];
  /** One-to-two sentences: what this control is for, in plain language. */
  purpose: string;
  /** Beginner-friendly explanation of what it actually means in practice. */
  whatItMeans: string;
  /** Concrete, ordered steps a small/medium organisation can take. */
  howToImplement: string[];
  /** What an auditor will look for as evidence the control works. */
  evidence: string[];
  /**
   * A ready-to-adapt sample artefact for this control, in Markdown.
   * May be a mini-policy, a register, a checklist, or a record template.
   */
  template: string;
}

export type DocCategory =
  | "Policy"
  | "Procedure"
  | "Plan"
  | "Register"
  | "Record"
  | "Methodology";

/** A mandatory (or strongly expected) piece of documented information. */
export interface MandatoryDoc {
  /** Stable slug used in the URL, e.g. "isms-scope". */
  id: string;
  title: string;
  /** Clause / Annex reference, e.g. "4.3" or "A.5.9". */
  clause: string;
  category: DocCategory;
  /** Is this strictly required by the standard, or strongly recommended? */
  required: boolean;
  /** Plain-language summary shown in cards/lists. */
  summary: string;
  /** Why the standard asks for this — the intent. */
  why: string;
  /** Bullet list of what the document should contain. */
  whatToInclude: string[];
  /** Full, adaptable sample template in Markdown. */
  template: string;
  /** Practical do/don't tips for beginners. */
  tips: string[];
}

/** A phase in the step-by-step implementation roadmap. */
export interface RoadmapPhase {
  id: string;
  /** Display number, e.g. "01". */
  number: string;
  title: string;
  /** Rough effort/duration guidance for an SME. */
  duration: string;
  summary: string;
  /** Ordered list of concrete steps in this phase. */
  steps: string[];
  /** IDs of mandatory docs produced/used in this phase. */
  relatedDocs: string[];
}

/** A glossary term explained in plain English. */
export interface GlossaryTerm {
  term: string;
  /** Common abbreviation if any, e.g. "ISMS". */
  abbr?: string;
  definition: string;
}

/** A frequently asked question. */
export interface FAQItem {
  question: string;
  answer: string;
}
