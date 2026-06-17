"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "iso27001-navigator:progress:v1";

interface ProgressState {
  /** Set of completed Annex A control ids (e.g. "A.5.1"). */
  done: Set<string>;
  ready: boolean;
  isDone: (id: string) => boolean;
  toggle: (id: string) => void;
  setDone: (id: string, value: boolean) => void;
  reset: () => void;
  count: number;
}

const ProgressContext = createContext<ProgressState | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [done, setDoneSet] = useState<Set<string>>(new Set());
  const [ready, setReady] = useState(false);

  // Hydrate from localStorage on mount.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const ids = JSON.parse(raw) as string[];
        setDoneSet(new Set(ids));
      }
    } catch {
      // ignore corrupt storage
    }
    setReady(true);
  }, []);

  const persist = useCallback((next: Set<string>) => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(Array.from(next)),
      );
    } catch {
      // ignore quota / privacy mode errors
    }
  }, []);

  const setDone = useCallback(
    (id: string, value: boolean) => {
      setDoneSet((prev) => {
        const next = new Set(prev);
        if (value) next.add(id);
        else next.delete(id);
        persist(next);
        return next;
      });
    },
    [persist],
  );

  const toggle = useCallback(
    (id: string) => {
      setDoneSet((prev) => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        persist(next);
        return next;
      });
    },
    [persist],
  );

  const reset = useCallback(() => {
    setDoneSet(new Set());
    persist(new Set());
  }, [persist]);

  const value = useMemo<ProgressState>(
    () => ({
      done,
      ready,
      isDone: (id: string) => done.has(id),
      toggle,
      setDone,
      reset,
      count: done.size,
    }),
    [done, ready, toggle, setDone, reset],
  );

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress(): ProgressState {
  const ctx = useContext(ProgressContext);
  if (!ctx) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return ctx;
}
