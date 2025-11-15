"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, User, Eye, EyeOff, School } from "lucide-react";
import Link from "next/link";
import { ToastContainer, ToastContent,toast } from "react-toastify";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "STUDENT",
    schoolName: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match")
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long")
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Registration successful.")
        setSuccess(true);
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        toast.error(data.message || "Registration failed. Please try again.")
      }
    } catch (err) {
      toast.error("An error occurred. Please try again.")
    } finally {
      setIsLoading(false);
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
          <h2 className="text-white text-3xl font-bold mb-4">Join Our Community!</h2>
          <p className="text-blue-100 text-lg mb-8">
            Create your account and start your journey with thousands of learners and educators worldwide.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FFCE34] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[#143E73] font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Interactive Learning</h3>
                <p className="text-blue-100 text-sm">
                  Engage with gamified educational content
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FFCE34] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[#143E73] font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Track Progress</h3>
                <p className="text-blue-100 text-sm">
                  Monitor learning with real-time analytics
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FFCE34] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[#143E73] font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Personalized Experience</h3>
                <p className="text-blue-100 text-sm">
                  Tailored content for every learning style
                </p>
              </div>
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
            <h2 className="text-3xl font-bold text-[#143E73] mb-2">Create Account</h2>
            <p className="text-gray-600">Join us and start your learning journey</p>
          </div>

          

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* <div>
              <label className="block text-sm font-medium text-[#143E73] mb-2">
                I am a
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["STUDENT", "TEACHER", "ADMIN"].map((roleOption) => (
                  <button
                    key={roleOption}
                    type="button"
                    onClick={() => setFormData({ ...formData, role: roleOption })}
                    className={`py-2 px-4 rounded-lg font-medium text-sm transition-all ${
                      formData.role === roleOption
                        ? "bg-[#316CF4] text-white shadow-md"
                        : "bg-white text-gray-700 border border-gray-300 hover:border-[#316CF4]"
                    }`}
                  >
                    {roleOption}
                  </button>
                ))}
              </div>
            </div> */}

            {/* <div>
              <label className="block text-sm font-medium text-[#143E73] mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#316CF4] focus:border-transparent outline-none transition"
                  required
                />
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
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#316CF4] focus:border-transparent outline-none transition"
                  required
                />
              </div>
            </div>

            {(formData.role === "TEACHER" || formData.role === "ADMIN") && (
              <div>
                <label className="block text-sm font-medium text-[#143E73] mb-2">
                  School Name <span className="text-gray-400">(Optional)</span>
                </label>
                <div className="relative">
                  <School className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="schoolName"
                    placeholder="Enter your school name"
                    value={formData.schoolName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#316CF4] focus:border-transparent outline-none transition"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-[#143E73] mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
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
              <p className="text-xs text-gray-500 mt-1">Must be at least 6 characters</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#143E73] mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#316CF4] focus:border-transparent outline-none transition"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-[#316CF4] border-gray-300 rounded focus:ring-[#316CF4] mt-1"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I agree to the{" "}
                <Link href="/terms" className="text-[#316CF4] hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-[#316CF4] hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading || success}
              className="w-full bg-[#316CF4] text-white py-3 rounded-lg font-semibold hover:bg-[#2554C7] transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-[#316CF4] font-semibold hover:underline">
                Sign in here
              </Link>
            </p>
          </div>

          {/* <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-4">Or sign up with</p>
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
