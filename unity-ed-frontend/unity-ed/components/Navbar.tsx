// components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="font-bold text-lg">UnityEd</div>
        <div className="hidden md:flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/dashboard">Dashboard</Link> {/* goes to /dashboard route */}
        </div>
      </div>
      <div /> {/* right side placeholder */}
    </nav>
  );
}
