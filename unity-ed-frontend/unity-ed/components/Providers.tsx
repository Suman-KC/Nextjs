// components/Providers.tsx
"use client";

import React from "react";
import { SectionProvider } from "./SectionContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <SectionProvider>{children}</SectionProvider>;
}
