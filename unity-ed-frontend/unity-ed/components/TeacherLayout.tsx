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
      
      export default function TeacherLayout() {
        const pathname = usePathname();
      
        // --- Sidebar Navigation Items ---
        const teacherNavItems = [
          { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard/teacher" },
          { icon: Users, label: "My Classes", path: "/dashboard/teacher/my_classes" },
          { icon: FileText, label: "Student Data", path: "/dashboard/teacher/students" },
          { icon: BarChart3, label: "Analytics", path: "/dashboard/teacher/analytics" },
          { icon: Gamepad2, label: "Game Control", path: "/dashboard/teacher/game_control" },
          { icon: Settings, label: "Settings", path: "/dashboard/teacher/settings" },
        ];
      return(
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
      </aside>)};