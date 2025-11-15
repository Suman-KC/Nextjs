"use client";

import React, { useEffect, useState } from "react";
import TeacherLayout from "@/components/TeacherLayout";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  Gamepad2,
  FileText,
} from "lucide-react";

export default function TeacherDashboardPage() {
  const [stats, setStats] = useState({
    totalClasses: 0,
    totalStudents: 0,
  });

  useEffect(() => {
    async function loadStats() {
      try {
        const res = await fetch("/api/dashboard/stats");
        const data = await res.json();
        setStats(data);
      } catch (error) {
        console.log("Error fetching stats:", error);
      }
    }
    loadStats();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#F8FAFC] flex">
      <TeacherLayout />

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
                <h2 className="text-2xl font-bold text-[#1C4E80]">
                  {stats.totalClasses}
                </h2>
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
                <h2 className="text-2xl font-bold text-green-700">
                  {stats.totalStudents}
                </h2>
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
