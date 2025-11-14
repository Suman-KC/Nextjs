// components/Navbar.tsx
"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm border-b">
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-amber-400 flex items-center justify-center text-white font-bold">
            UE
          </div>
          <div className="text-lg font-semibold">UnityEd</div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="px-3 py-1 rounded-md bg-gray-100">Home</Link>
          <Link href="/about" className="hover:underline">About Us</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/play" className="hover:underline">Play Game</Link>
          <Link href="/privacy" className="hover:underline">Privacy</Link>
          <Link href="/mission" className="hover:underline">Our Mission</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="px-3 py-1 rounded-md border text-sm">Sign in</button>
          <button className="px-3 py-1 rounded-md bg-gray-800 text-white text-sm">Register</button>
        </div>
      </div>
    </header>
  );
}