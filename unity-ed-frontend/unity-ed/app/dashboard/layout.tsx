// app/dashboard/layout.tsx
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/topbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-1  flex min-h-[calc(100vh-64px)]"> {/* leaves space for root Navbar above */}
      <Sidebar />

      <div className="flex-1 flex flex-col bg-gray-100">
        <Topbar />
        <main className="p-6 flex-1 overflow-auto">
          {children} {/* /dashboard, /dashboard/students, etc. will render here */}
        </main>
      </div>
    </div>
  );
}
