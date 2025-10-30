"use client";
const Topbar = () => {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">Teacher Dashboard</h2>
      <div className="flex items-center space-x-4">
        <p className="text-gray-600">Welcome, Teacher</p>
        <img
          src="/avatar.png"
          alt="User Avatar"
          className="w-10 h-10 rounded-full border"
        />
      </div>
    </header>
  );
};

export default Topbar;