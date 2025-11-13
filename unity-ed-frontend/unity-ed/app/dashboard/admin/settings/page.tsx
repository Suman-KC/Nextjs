"use client";
import AdminLayoutPage from "@/components/AdminLayout";
export default function AdminSettingsPage() {
  return (
      <div className="flex min-h-screen m-4 bg-gray-50">
          {/* Sidebar */}
         <AdminLayoutPage/>
    <div className="w-full p-5">
      <h1 className="text-2xl font-bold text-[#143E73] mb-4">Settings</h1>
      <p className="text-gray-600 mb-6">
        Manage your account and system configurations here.
      </p>

      <div className="w-full bg-white shadow-md rounded-lg p-6 max-w-lg">
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Admin Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-2"
              defaultValue="admin@unityed.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Change Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="bg-[#316CF4] text-white px-4 py-2 rounded-md hover:bg-[#2554C7] transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div></div>
  );
}
