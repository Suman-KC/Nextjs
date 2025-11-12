"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import DashboardCard from "@/components/DashboardCard";
import AdminLayoutPage from "@/components/AdminLayout";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  Clock,
  Bookmark,
  Building2,
  UserCog,
} from "lucide-react";


export default function AdminDashboardPage() {
  const router = useRouter();
  const pathname = usePathname();

  // Dummy data for class summary
  const classes = [
    { name: "Class 5A", students: 28, lastActive: "2 hours ago" },
    { name: "Class 5B", students: 25, lastActive: "5 hours ago" },
    { name: "Class 6A", students: 30, lastActive: "1 day ago" },
  ];

  return (
    <div className="flex min-h-screen m-4 bg-gray-50">
      {/* Sidebar */}
     <AdminLayoutPage/>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl font-semibold">Good morning, Ms. Lee!</h1>
          <p className="text-gray-500">
            Here's what's happening with your classes today
          </p>
        </header>

        {/* Dashboard Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <DashboardCard
            title="Total Students"
            value="156"
            icon={<Users className="text-blue-500" />}
          />
          <DashboardCard
            title="Active Classes"
            value="6"
            icon={<Bookmark className="text-green-500" />}
          />
          <DashboardCard
            title="Avg. Progress"
            value="78%"
            icon={<BarChart3 className="text-purple-500" />}
          />
          <DashboardCard
            title="Hours Played"
            value="342"
            icon={<Clock className="text-orange-500" />}
          />
        </section>

        {/* Recent Classes */}
        <section className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recent Classes</h2>
            <Link
              href="#"
              className="text-green-600 text-sm font-medium hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="space-y-3">
            {classes.map((cls) => (
              <div
                key={cls.name}
                className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium">{cls.name}</p>
                  <p className="text-gray-500 text-sm">
                    {cls.students} students
                  </p>
                </div>
                <p className="text-gray-400 text-sm">
                  Last active {cls.lastActive}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Action Buttons */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <button className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-4 rounded-xl font-medium hover:opacity-90">
            Create New Class
          </button>
          <button className="bg-gradient-to-r from-green-500 to-teal-400 text-white py-4 rounded-xl font-medium hover:opacity-90">
            View Analytics
          </button>
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 rounded-xl font-medium hover:opacity-90">
            Game Settings
          </button>
        </section>
      </main>
    </div>
  );
}
