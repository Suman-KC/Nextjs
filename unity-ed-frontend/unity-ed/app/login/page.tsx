"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, User } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STUDENT"); // default role
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
      role,
    });

    if (res?.ok) {
      const sessionRes = await fetch("/api/auth/session");
      const session = await sessionRes.json();
      const userRole = session?.user?.role?.toUpperCase();

      if (userRole === "ADMIN") router.push("/dashboard/admin");
      else if (userRole === "TEACHER") router.push("/dashboard/teacher");
      else router.push("/dashboard/student");
    } else {
      alert("Invalid credentials or role");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 backdrop-blur-xl bg-purple-600 border border-white/30 p-8 rounded-2xl shadow-2xl w-96 text-white"
      >
        <h2 className="text-3xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-yellow-300 drop-shadow-md">
          Welcome Back
        </h2>
        <p className="text-center text-white-700 mb-4 text-sm">
          Choose your role and sign in to continue
        </p>

        {/* Role Selection */}
        <div>
          <label className="block text-sm   text-white-600 mb-1">Select Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="p-2 rounded border border-white/40 text-white focus:bg-white/30 focus:outline-none w-full"
          >
            <option className="bg-blue-500 " value="ADMIN">ADMIN</option>
            <option className="bg-blue-500 " value="TEACHER">TEACHER</option>
            <option className="bg-blue-500 "  value="STUDENT">STUDENT</option>
          </select>
        </div>

        {/* Email Input */}
        <div className="relative">
          <Mail className="absolute left-3 top-2.5 w-5 h-5 text-white/70" />
          <input
            type="email"
            placeholder="Email"
            className="pl-10 p-2 rounded bg-white/20 placeholder-white/70 focus:bg-white/30 transition border border-white/40 focus:outline-none w-full"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Input */}
        <div className="relative">
          <Lock className="absolute left-3 top-2.5 w-5 h-5 text-white/70" />
          <input
            type="password"
            placeholder="Password"
            className="pl-10 p-2 rounded bg-white/20 placeholder-white/70 focus:bg-white/30 transition border border-white/40 focus:outline-none w-full"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-2 rounded-lg font-semibold hover:scale-105 transform transition-all duration-200 shadow-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
}
