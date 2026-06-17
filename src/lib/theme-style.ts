import type { ControlTheme } from "@/content";

/** Visual styling per Annex A control theme — accent, soft bg, text, ring. */
export const themeStyles: Record<
  ControlTheme,
  { dot: string; chipBg: string; chipText: string; bar: string; ring: string }
> = {
  Organizational: {
    dot: "bg-brand-600",
    chipBg: "bg-brand-50",
    chipText: "text-brand-700",
    bar: "bg-brand-600",
    ring: "ring-brand-200",
  },
  People: {
    dot: "bg-amber-500",
    chipBg: "bg-amber-50",
    chipText: "text-amber-700",
    bar: "bg-amber-500",
    ring: "ring-amber-200",
  },
  Physical: {
    dot: "bg-teal-600",
    chipBg: "bg-teal-50",
    chipText: "text-teal-700",
    bar: "bg-teal-600",
    ring: "ring-teal-200",
  },
  Technological: {
    dot: "bg-sky-600",
    chipBg: "bg-sky-50",
    chipText: "text-sky-700",
    bar: "bg-sky-600",
    ring: "ring-sky-200",
  },
};
