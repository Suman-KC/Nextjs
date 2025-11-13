"use client";
import AdminLayoutPage from "@/components/AdminLayout";
export default function ManageSchoolsPage() {
  return (
    <div className="flex min-h-screen m-4 bg-gray-50">
         {/* Sidebar */}
        <AdminLayoutPage/>
    <div className="w-full p-8 text-center">
      <h1 className="text-2xl font-bold text-[#143E73] mb-4">
        Manage Schools
      </h1>
      <p className="text-gray-600 mb-6">
        Here you can view, add, or update school information.
      </p>

      {/* Example Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-[#143E73] text-white">
            <tr>
              <th className="px-6 py-3">School Name</th>
              <th className="px-6 py-3">Location</th>
              <th className="px-6 py-3">Students</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-6 py-4">Unity High School</td>
              <td className="px-6 py-4">Toronto</td>
              <td className="px-6 py-4">350</td>
              <td className="px-6 py-4 text-right">
                <button className="text-blue-600 hover:underline">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
