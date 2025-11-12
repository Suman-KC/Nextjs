"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  Gamepad2,
  FileText,
} from "lucide-react";

export default function TeacherDashboardPage() {
  const pathname = usePathname();

  // --- Sidebar Navigation Items ---
  const teacherNavItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard/teacher" },
    { icon: Users, label: "My Classes", path: "/dashboard/teacher/classes" },
    { icon: FileText, label: "Student Data", path: "/dashboard/teacher/students" },
    { icon: BarChart3, label: "Analytics", path: "/dashboard/teacher/analytics" },
    { icon: Gamepad2, label: "Game Control", path: "/dashboard/teacher/game-control" },
    { icon: Settings, label: "Settings", path: "/dashboard/teacher/settings" },
  ];

  return (
    <div className="min-h-screen w-full bg-[#F8FAFC] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-sm min-h-screen">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-[#1C4E80]">UnityED</h1>
          <p className="text-sm text-gray-500 mt-1">Teacher Panel</p>
        </div>

        <nav className="p-4 space-y-2">
          {teacherNavItems.map((item) => {
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

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-[#1C4E80] mb-8">
          Welcome, Teacher 👋
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Classes */}
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Users size={28} className="text-[#1C4E80]" />
              </div>
              <div>
                <p className="text-gray-600">Total Classes</p>
                <h2 className="text-2xl font-bold text-[#1C4E80]">12</h2>
              </div>
            </div>
          </div>

          {/* Students */}
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-full">
                <FileText size={28} className="text-green-700" />
              </div>
              <div>
                <p className="text-gray-600">Students Enrolled</p>
                <h2 className="text-2xl font-bold text-green-700">240</h2>
              </div>
            </div>
          </div>

          {/* Analytics */}
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-yellow-100 rounded-full">
                <BarChart3 size={28} className="text-yellow-700" />
              </div>
              <div>
                <p className="text-gray-600">Performance Score</p>
                <h2 className="text-2xl font-bold text-yellow-700">89%</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="mt-10 bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-[#1C4E80] mb-4">
            Recent Activities
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Added new class: Mathematics 101</li>
            <li>📊 Viewed analytics for Science class</li>
            <li>👩‍🎓 Enrolled 10 new students</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
