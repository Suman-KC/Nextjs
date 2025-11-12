"use client";
import Link from "next/link";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-2 py-2 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="UnityED Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </Link>

        {/* Center: Nav Links */}
        <div className="hidden md:flex px-4 py-3 gap-6 text-gray-700 font-medium bg-gray-100 rounded-full">
          <Link href="/" className="hover:text-white hover:bg-blue-600 rounded transition px-3 py-1">
            Home
          </Link>
          <Link href="/about" className="hover:text-white hover:bg-blue-600 rounded transition px-3 py-1">
            About
          </Link>
          <Link href="/games" className="hover:text-white hover:bg-blue-600 rounded transition px-3 py-1">
            Game
          </Link>
          <Link href="/teachers" className="hover:text-white hover:bg-blue-600 rounded transition px-3 py-1">
            Teachers
          </Link>
          <Link href="/blog" className="hover:text-white hover:bg-blue-600 rounded transition px-3 py-1">
            Blog
          </Link>
        </div>

        {/* Right: Login or Logout */}
        {session ? (
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-full font-medium hover:bg-red-600 transition"
          >
            <FaUser className="text-white text-lg" />
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="flex items-center gap-2 bg-[#316CF4] text-white px-5 py-2 rounded-full font-medium hover:bg-[#2554C7] transition"
          >
            <FaUser className="text-white text-lg" />
            LogIn/Register
          </Link>
        )}
      </div>
    </nav>
  );
}
