import "./globals.css";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SessionProviderWrapper from "./providers/SessionProviderWrapper";

export const metadata = {
  title: "UnityED",
  description: "Empowering Learning Through Play",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
     <SessionProviderWrapper>
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
    </SessionProviderWrapper>
  );
}


