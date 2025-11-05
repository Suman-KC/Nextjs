"use client";
import Link from "next/link";
import Image from "next/image";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-2 py-2 flex items-center justify-between ">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="UnityED Logo"
            width={80}
            height={80}
            className="object-contain"
          />
          <span className="font-bold text-[#143E73] text-xl"></span>
        </Link>

        {/* Center: Nav Links */}
        <div className="hidden md:flex px-4 py-3 gap-6 text-gray-700 font-medium bg-gray-100 rounded-full">
          <Link href="/" className="hover:text-white hover:bg-blue-600 rounded transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-white hover:bg-blue-600 rounded transition">
            About
          </Link>
          <Link href="/games" className="hover:text-white hover:bg-blue-600 rounded transition">
            Game
          </Link>
          <Link href="/teachers" className="hover:text-white hover:bg-blue-600 rounded transition">
            Teachers
          </Link>
          <Link href="/blog" className="hover:text-white hover:bg-blue-600 rounded transition">
            Blog
          </Link>
        </div>

        {/* Right: Login Button with Human Icon */}
        <Link
          href="/login"
          className="flex items-center gap-2 bg-[#316CF4] text-white px-5 py-2 rounded-full font-medium hover:bg-[#2554C7] transition"
        >
          <FaUser className="text-white text-lg" />
          LogIn/Register
        </Link>
      </div>
    </nav>
  );
}
