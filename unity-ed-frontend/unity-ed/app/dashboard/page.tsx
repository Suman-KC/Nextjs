"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
import { useAuth } from "./contexts/AuthContext"; // adjust if your context path differs

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const { user, logout } = useAuth();

  // --- Navigation items per role ---
  const adminNavItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
    { icon: Building2, label: "Manage Schools", path: "/admin/schools" },
    { icon: UserCog, label: "Manage Teachers", path: "/admin/teachers" },
    { icon: Settings, label: "Settings", path: "/dashboard/settings" },
  ];

  const teacherNavItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: Users, label: "My Classes", path: "/dashboard/classes" },
    { icon: FileText, label: "Student Data", path: "/dashboard/students" },
    { icon: BarChart3, label: "Analytics", path: "/dashboard/analytics" },
    { icon: Gamepad2, label: "Game Control", path: "/dashboard/game-control" },
    { icon: Settings, label: "Settings", path: "/dashboard/settings" },
  ];

  const studentNavItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/student" },
    { icon: Gamepad2, label: "My Games", path: "/student/games" },
    { icon: TrendingUp, label: "My Progress", path: "/student/progress" },
    { icon: Trophy, label: "Achievements", path: "/student/achievements" },
    { icon: Settings, label: "Settings", path: "/dashboard/settings" },
  ];

  const navItems =
    user?.role === "admin"
      ? adminNavItems
      : user?.role === "student"
      ? studentNavItems
      : teacherNavItems;

  // --- Handlers ---
  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const getHomeLink = () => {
    if (user?.role === "admin") return "/admin";
    if (user?.role === "student") return "/student";
    return "/dashboard";
  };

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
                  {user?.name || "Guest"}
                </div>
                <div className="text-sm text-gray-600">
                  {user?.role === "student" ? (
                    user?.className
                  ) : (
                    <span className="capitalize">{user?.role || "Role"}</span>
                  )}
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
