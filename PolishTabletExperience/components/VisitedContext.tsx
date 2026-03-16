import React, { createContext, useContext, useMemo, useState, ReactNode, useCallback } from "react";

type VisitedContextValue = {
  visitedIds: string[];
  markVisited: (id: string) => void;
  resetVisited: () => void;
};

const VisitedContext = createContext<VisitedContextValue | undefined>(undefined);

type VisitedProviderProps = {
  children: ReactNode;
};

export function VisitedProvider({ children }: VisitedProviderProps) {
  const [visitedIds, setVisitedIds] = useState<string[]>([]);

  const markVisited = useCallback((id: string) => {
    setVisitedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const resetVisited = useCallback(() => {
    setVisitedIds([]);
  }, []);

  const value = useMemo(
    () => ({
      visitedIds,
      markVisited,
      resetVisited,
    }),
    [visitedIds, markVisited, resetVisited]
  );

  return <VisitedContext.Provider value={value}>{children}</VisitedContext.Provider>;
}

export function useVisited() {
  const ctx = useContext(VisitedContext);
  if (!ctx) {
    throw new Error("useVisited must be used within a VisitedProvider");
  }
  return ctx;
}

