// components/SectionContext.tsx
"use client";

import React, { createContext, useContext, useState } from "react";

type Section = "home" | "dashboard";

type SectionContextValue = {
  section: Section;
  setSection: (s: Section) => void;
};

const SectionContext = createContext<SectionContextValue | undefined>(undefined);

export function SectionProvider({ children }: { children: React.ReactNode }) {
  const [section, setSection] = useState<Section>("home");
  return (
    <SectionContext.Provider value={{ section, setSection }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSection() {
  const ctx = useContext(SectionContext);
  if (!ctx) throw new Error("useSection must be used within SectionProvider");
  return ctx;
}
