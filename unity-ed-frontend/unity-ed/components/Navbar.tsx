// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full z-30 top-0 left-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-blue-700">
                Unity<span className="text-amber-500">Ed</span>
              </Link>
            </div>

            {/* Center (desktop): links */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`font-medium transition ${
                    pathname === item.path ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right (desktop): auth buttons */}
            <div className="hidden md:flex md:items-center md:space-x-3">
              <Link
                href="/register"
                className="px-3 py-1.5 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition text-sm"
              >
                Register
              </Link>
              <Link
                href="/signin"
                className="px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm"
              >
                Sign In
              </Link>
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden flex items-center">
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  {open ? (
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu (slide down) */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 z-20 transform transition-transform duration-200 ${
          open ? "translate-y-0" : "-translate-y-4 pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="bg-white shadow-lg rounded-b-lg mx-4 overflow-hidden">
          <div className="px-4 pt-4 pb-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-md font-medium ${
                  pathname === item.path ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="border-t mt-1 pt-3 flex flex-col gap-2 px-3 pb-4">
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="text-center px-3 py-2 border border-blue-600 text-blue-600 rounded-md"
              >
                Register
              </Link>
              <Link
                href="/signin"
                onClick={() => setOpen(false)}
                className="text-center px-3 py-2 bg-blue-600 text-white rounded-md"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* spacer so page content isn't hidden behind fixed navbar */}
      <div className="h-16" aria-hidden />
    </>
  );
}
