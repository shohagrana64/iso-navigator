"use client";

import { Check } from "lucide-react";
import { useProgress } from "@/components/progress-provider";
import { cn } from "@/lib/cn";

/** A square checkbox bound to a control's completion state. */
export function ControlCheckbox({
  id,
  label,
  size = "md",
}: {
  id: string;
  label: string;
  size?: "sm" | "md";
}) {
  const { isDone, toggle, ready } = useProgress();
  const done = ready && isDone(id);
  const box = size === "sm" ? "h-5 w-5" : "h-6 w-6";

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={done}
      aria-label={`Mark ${label} as implemented`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(id);
      }}
      className={cn(
        "flex flex-none cursor-pointer items-center justify-center rounded-md border-2 transition-colors",
        box,
        done
          ? "border-grow-600 bg-grow-600 text-white"
          : "border-line bg-surface hover:border-brand-400",
      )}
    >
      {done && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
    </button>
  );
}
