"use client";

import SessionProviderWrapper from "../providers/SessionProviderWrapper";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">
      <body>
        {/* ✅ Wrap your entire app in AuthProvider */}
         <SessionProviderWrapper> {children} </SessionProviderWrapper>
      </body>
    </html>
  );
}
