"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

/** Read the current theme from the DOM (set by the no-flash script). */
function currentIsDark(): boolean {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("dark");
}

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(currentIsDark());
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    const root = document.documentElement;
    root.classList.toggle("dark", next);
    try {
      window.localStorage.setItem("iso27001-navigator:theme", next ? "dark" : "light");
    } catch {
      // ignore
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand-700"
    >
      {/* Avoid hydration mismatch: render a stable icon until mounted */}
      {!mounted ? (
        <Sun className="h-5 w-5" />
      ) : dark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}
