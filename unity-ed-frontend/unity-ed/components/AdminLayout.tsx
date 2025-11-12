"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import DashboardCard from "@/components/DashboardCard";
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

  
export default function AdminLayoutPage() {
    // Sidebar navigation
  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard/admin" },
    { icon: Building2, label: "Manage Schools", path: "/dashboard/admin/schools" },
    { icon: UserCog, label: "Manage Teachers", path: "/dashboard/admin/teachers" },
    { icon: Settings, label: "Settings", path: "/dashboard/admin/settings" },
  ];

      const router = useRouter();
  const pathname = usePathname();
  return (
    
<aside className="w-64 bg-white border-r shadow-sm p-4 sticky top-0">
        <nav className="space-y-2">
          {navItems.map(({ icon: Icon, label, path }) => {
            const isActive = pathname === path;
            return (
              <Link
                key={path}
                href={path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#1C4E80] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon size={20} />
                {label}
              </Link>
            );
          })}
        </nav>
      </aside>
  )};