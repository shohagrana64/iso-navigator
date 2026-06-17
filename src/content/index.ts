// Central content index. Aggregates the Annex A controls and re-exports
// documents and learning material so pages import from a single place.

import type { AnnexControl, ControlTheme, MandatoryDoc } from "./types";
import { organizationalControls } from "./annexA-organizational";
import { peopleControls, physicalControls } from "./annexA-people-physical";
import { technologicalControls } from "./annexA-technological";
import { mandatoryDocs } from "./mandatory-docs";
import { docExamples } from "./doc-examples";
import { controlExamplesA } from "./control-examples-1";
import { controlExamplesB } from "./control-examples-2";

export * from "./types";
export { mandatoryDocs } from "./mandatory-docs";
export {
  keyConcepts,
  roadmapPhases,
  glossary,
  faqs,
} from "./learning";

/** All 93 Annex A:2022 controls, in canonical order. */
export const allControls: AnnexControl[] = [
  ...organizationalControls,
  ...peopleControls,
  ...physicalControls,
  ...technologicalControls,
].sort((a, b) => a.sort - b.sort);

export interface ThemeMeta {
  theme: ControlTheme;
  label: string;
  /** Annex A clause group, e.g. "A.5". */
  clause: string;
  count: number;
  description: string;
}

/** Theme groupings with metadata for the controls overview. */
export const themes: ThemeMeta[] = [
  {
    theme: "Organizational",
    label: "Organizational",
    clause: "A.5",
    count: organizationalControls.length,
    description:
      "How the organisation governs information security — policies, roles, suppliers, incidents and continuity.",
  },
  {
    theme: "People",
    label: "People",
    clause: "A.6",
    count: peopleControls.length,
    description:
      "How staff and contractors are screened, trained and managed so people protect information.",
  },
  {
    theme: "Physical",
    label: "Physical",
    clause: "A.7",
    count: physicalControls.length,
    description:
      "Protecting the physical world — offices, equipment, media and the environment they live in.",
  },
  {
    theme: "Technological",
    label: "Technological",
    clause: "A.8",
    count: technologicalControls.length,
    description:
      "The technical safeguards — access, encryption, logging, backups, networks and secure development.",
  },
];

export const controlsById: Record<string, AnnexControl> = Object.fromEntries(
  allControls.map((c) => [c.id, c]),
);

export function getControl(id: string): AnnexControl | undefined {
  return controlsById[id];
}

export const docsById: Record<string, MandatoryDoc> = Object.fromEntries(
  mandatoryDocs.map((d) => [d.id, d]),
);

export function getDoc(id: string): MandatoryDoc | undefined {
  return docsById[id];
}

/** Slug helper so Annex A ids like "A.5.1" become URL-safe "a-5-1". */
export function controlSlug(id: string): string {
  return id.toLowerCase().replace(/\./g, "-");
}

export function controlIdFromSlug(slug: string): string {
  // "a-5-1" -> "A.5.1"
  return slug.toUpperCase().replace(/-/g, ".");
}

export const totalControls = allControls.length;
export const totalDocs = mandatoryDocs.length;

/** Filled-in worked examples keyed by id (doc slug / control id). */
export const controlExamples: Record<string, string> = {
  ...controlExamplesA,
  ...controlExamplesB,
};

export function getDocExample(id: string): string | undefined {
  return docExamples[id];
}

export function getControlExample(id: string): string | undefined {
  return controlExamples[id];
}

export { docExamples };
