"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [userType, setUserType] = useState<"teacher" | "student">("teacher");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 w-full max-w-md text-center">
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="UnityED Logo"
          width={80}
          height={80}
          className="mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-[#143E73] mb-6">
          Welcome Back!
        </h2>

        {/* User Type Switch */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setUserType("teacher")}
            className={`px-4 py-2 rounded-l-full font-medium border border-gray-300 w-1/2 ${
              userType === "teacher"
                ? "bg-[#316CF4] text-white"
                : "bg-white text-gray-700"
            }`}
          >
            Teacher
          </button>
          <button
            onClick={() => setUserType("student")}
            className={`px-4 py-2 rounded-r-full font-medium border border-gray-300 w-1/2 ${
              userType === "student"
                ? "bg-[#316CF4] text-white"
                : "bg-white text-gray-700"
            }`}
          >
            Student
          </button>
        </div>

        {/* Login Form */}
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Username"
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-[#316CF4] text-white py-2 rounded-full font-medium hover:bg-[#2554C7] transition"
          >
            Login as {userType === "teacher" ? "Teacher" : "Student"}
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link href="/register" className="text-[#316CF4] font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
