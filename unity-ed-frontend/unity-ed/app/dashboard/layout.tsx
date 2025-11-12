"use client";

import SessionProviderWrapper from "../providers/SessionProviderWrapper";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
 <SessionProviderWrapper>
    <html lang="en">
      <body>
        {/* ✅ Wrap your entire app in AuthProvider */}
         {children} 
      </body>
    </html></SessionProviderWrapper>
  );
}
