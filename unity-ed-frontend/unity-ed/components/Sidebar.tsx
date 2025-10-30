"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/students", label: "Manage Students" },
  { href: "/dashboard/lesson", label: "Lesson Plan" },
  { href: "/dashboard/settings", label: "Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-blue-600 text-white flex flex-col p-4">
      <h2 className="text-xl font-bold mb-6">UnityEd</h2>
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`p-2 rounded-lg ${
              pathname === link.href ? "bg-blue-800" : "hover:bg-blue-700"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
