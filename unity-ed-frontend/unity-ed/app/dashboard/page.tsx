"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  Gamepad2,
  FileText,
  GraduationCap,
  User,
  LogOut,
  Building2,
  UserCog,
  Trophy,
  TrendingUp,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const user = session?.user;

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/login");
    }
  }, [status, session, router]);

  // --- Navigation items per role ---
  const adminNavItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard/admin" },
    { icon: Building2, label: "Manage Schools", path: "/dashboard/admin/schools" },
    { icon: UserCog, label: "Manage Teachers", path: "/dashboard/admin/teachers" },
    { icon: Settings, label: "Settings", path: "/dashboard/admin/settings" },
  ];

  const teacherNavItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard/teacher" },
    { icon: Users, label: "My Classes", path: "/dashboard/teacher/classes" },
    { icon: FileText, label: "Student Data", path: "/dashboard/teacher/students" },
    { icon: BarChart3, label: "Analytics", path: "/dashboard/teacher/analytics" },
    { icon: Gamepad2, label: "Game Control", path: "/dashboard/teacher/game-control" },
    { icon: Settings, label: "Settings", path: "/dashboard/teacher/settings" },
  ];

  const studentNavItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard/student" },
    { icon: Gamepad2, label: "My Games", path: "/dashboard/student/games" },
    { icon: TrendingUp, label: "My Progress", path: "/dashboard/student/progress" },
    { icon: Trophy, label: "Achievements", path: "/dashboard/student/achievements" },
    { icon: Settings, label: "Settings", path: "/dashboard/student/settings" },
  ];

  // --- Determine nav items based on role ---
  let navItems = [];
  if (user?.role === "ADMIN") navItems = adminNavItems;
  else if (user?.role === "TEACHER") navItems = teacherNavItems;
  else if (user?.role === "STUDENT") navItems = studentNavItems;

  // --- Handlers ---
  const handleLogout = () => {
    signOut({ callbackUrl: "/login" });
  };

  const getHomeLink = () => {
    if (user?.role === "ADMIN") return "/dashboard/admin";
    if (user?.role === "TEACHER") return "/dashboard/teacher";
    if (user?.role === "STUDENT") return "/dashboard/student";
    return "/";
  };

  if (status === "loading") {
    return <div className="p-10 text-center text-gray-500">Loading session...</div>;
  }

  if (!session) {
    return null; // Redirect handled by useEffect
  }

  // --- Render ---
  return (
    <div className="min-h-screen w-full bg-[#F8FAFC] flex flex-col">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-full px-6">
          <div className="flex justify-between items-center h-16">
            <Link href={getHomeLink()} className="flex items-center gap-2">
              <GraduationCap size={28} className="text-[#1C4E80]" />
              <span className="text-2xl font-bold text-[#1C4E80]">UnityED</span>
            </Link>

            <div className="flex items-center gap-4">
              <div className="text-right mr-4">
                <div className="font-semibold text-[#1C4E80]">
                  {user?.email || "Guest"}
                </div>
                <div className="text-sm text-gray-600 capitalize">
                  {user?.role?.toLowerCase() || "Role"}
                </div>
              </div>
              <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
                <User size={20} className="text-gray-600" />
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-[#1C4E80] transition-colors"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-[calc(100vh-4rem)] sticky top-16">
          <nav className="p-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-[#1C4E80] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
