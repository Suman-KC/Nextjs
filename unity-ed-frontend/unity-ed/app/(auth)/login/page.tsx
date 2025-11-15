"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer, ToastContent,toast } from "react-toastify";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STUDENT");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
      role,
    });

    setIsLoading(false);

    if (res?.ok) {
      const sessionRes = await fetch("/api/auth/session");
      const session = await sessionRes.json();
      const userRole = session?.user?.role?.toUpperCase();

      if (userRole === "ADMIN") router.push("/dashboard/admin");
      else if (userRole === "TEACHER") router.push("/dashboard/teacher");
      else router.push("/dashboard/student");
    } else {
      toast.error(res?.error || "Invalid credentials or role")
      // setError(res?.error || "Invalid credentials or role");
    }
  };

  return (
    <div className="min-h-screen flex">
      <ToastContainer/>
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#143E73] to-[#316CF4] p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCE34] rounded-full opacity-10 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFCE34] rounded-full opacity-10 -ml-48 -mb-48"></div>

        <div className="relative z-10">
          <h1 className="text-white text-4xl font-bold mb-2">UnityED</h1>
          <p className="text-blue-100">Empowering Learning Through Play</p>
        </div>

        <div className="relative z-10">
          <h2 className="text-white text-3xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-blue-100 text-lg mb-8">
            Sign in to access your personalized learning dashboard and continue your educational journey.
          </p>
          <div className="flex gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex-1">
              <p className="text-[#FFCE34] font-semibold text-2xl">1000+</p>
              <p className="text-blue-100 text-sm">Active Students</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex-1">
              <p className="text-[#FFCE34] font-semibold text-2xl">50+</p>
              <p className="text-blue-100 text-sm">Schools</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-block lg:hidden mb-4">
              <h1 className="text-[#143E73] text-3xl font-bold">UnityED</h1>
            </div>
            <h2 className="text-3xl font-bold text-[#143E73] mb-2">Sign In</h2>
            <p className="text-gray-600">Choose your role and sign in to continue</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* <div>
              <label className="block text-sm font-medium text-[#143E73] mb-2">
                Select Role
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["STUDENT", "TEACHER", "ADMIN"].map((roleOption) => (
                  <button
                    key={roleOption}
                    type="button"
                    onClick={() => setRole(roleOption)}
                    className={`py-2 px-4 rounded-lg font-medium text-sm transition-all ${
                      role === roleOption
                        ? "bg-[#316CF4] text-white shadow-md"
                        : "bg-white text-gray-700 border border-gray-300 hover:border-[#316CF4]"
                    }`}
                  >
                    {roleOption}
                  </button>
                ))}
              </div>
            </div> */}

            <div>
              <label className="block text-sm font-medium text-[#143E73] mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#316CF4] focus:border-transparent outline-none transition"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#143E73] mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#316CF4] focus:border-transparent outline-none transition"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-[#316CF4] border-gray-300 rounded focus:ring-[#316CF4]"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-sm text-[#316CF4] hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#316CF4] text-white py-3 rounded-lg font-semibold hover:bg-[#2554C7] transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link href="/register" className="text-[#316CF4] font-semibold hover:underline">
                Register here
              </Link>
            </p>
          </div>

          {/* <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-4">Or continue with</p>
              <div className="flex gap-3 justify-center">
                <button
                  type="button"
                  className="flex-1 max-w-[200px] py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">Google</span>
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
