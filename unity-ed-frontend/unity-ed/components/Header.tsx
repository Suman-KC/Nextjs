// components/Header.tsx
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="w-full py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <Link href="/">
          {/* Link in Next 13 accepts any element as child (no nested <a> needed) */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow text-sm">
              UnityEd
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 items-center bg-white/60 px-6 py-3 rounded-full shadow-sm">
          <Link href="/">
            <div className="px-3 py-1 rounded-md text-sm bg-gray-100 font-medium cursor-pointer">Home</div>
          </Link>
          <Link href="/about">
            <div className="text-sm hover:text-blue-600 cursor-pointer">About</div>
          </Link>
          <Link href="/games">
            <div className="text-sm hover:text-blue-600 cursor-pointer">Games</div>
          </Link>
          <Link href="/teachers">
            <div className="text-sm hover:text-blue-600 cursor-pointer">Teachers</div>
          </Link>
          <Link href="/blog">
            <div className="text-sm hover:text-blue-600 cursor-pointer">Blog</div>
          </Link>
        </nav>

        <div>
          <button className="px-4 py-2 rounded-full bg-blue-500 text-white text-sm shadow">Register/Login</button>
        </div>
      </div>
    </header>
  );
}
