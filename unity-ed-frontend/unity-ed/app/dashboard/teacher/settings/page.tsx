"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { Bell, Lock, Mail } from "lucide-react";
import TeacherLayout from "@/components/TeacherLayout";

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    name: "Ms. Lee",
    email: "ms.lee@school.edu",
    school: "Lincoln Elementary",
  });

  const [notifications, setNotifications] = useState({
    email: true,
    progress: true,
    assignments: true,
    reports: true,
  });

  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  return (
         <div className="min-h-screen w-full bg-[#F8FAFC] flex">
                    
                          <TeacherLayout/>
    <div className="w-full flex flex-col lg:flex-row gap-6 p-6">
      {/* LEFT SECTION */}
      <div className="flex-1 space-y-6">
        {/* Profile Info */}
        <div className="bg-white border rounded-2xl shadow-sm p-6 space-y-4">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <Mail className="text-emerald-500" size={18} /> Profile Information
          </h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-600">Full Name</label>
              <input
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-400 outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-400 outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">School</label>
              <input
                value={profile.school}
                onChange={(e) => setProfile({ ...profile, school: e.target.value })}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-400 outline-none"
              />
            </div>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
              Save Changes
            </Button>
          </div>
        </div>

        {/* Change Password */}
        <div className="bg-white border rounded-2xl shadow-sm p-6 space-y-4">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <Lock className="text-emerald-500" size={18} /> Change Password
          </h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-600">
                Current Password
              </label>
              <input
                type="password"
                value={password.current}
                onChange={(e) => setPassword({ ...password, current: e.target.value })}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">
                New Password
              </label>
              <input
                type="password"
                value={password.new}
                onChange={(e) => setPassword({ ...password, new: e.target.value })}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">
                Confirm New Password
              </label>
              <input
                type="password"
                value={password.confirm}
                onChange={(e) => setPassword({ ...password, confirm: e.target.value })}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Update Password
            </Button>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full lg:w-80 space-y-6">
        {/* Notifications */}
        <div className="bg-white border rounded-2xl shadow-sm p-6 space-y-4">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <Bell className="text-emerald-500" size={18} /> Notifications
          </h2>
          {Object.entries(notifications).map(([key, value]) => (
            <div
              key={key}
              className="flex justify-between items-center border-b last:border-none py-2"
            >
              <span className="capitalize text-sm text-gray-700">
                {key.replace(/([A-Z])/g, " $1")}
              </span>
              <button
                onClick={() =>
                  setNotifications({ ...notifications, [key]: !value })
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  value ? "bg-emerald-500" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    value ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="bg-white border rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <Mail className="text-blue-600" size={18} /> Contact
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Need help? Contact our support team.
          </p>
          <Button className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 w-full">
            Contact Support
          </Button>
        </div>
      </div>
    </div></div>
  );
}
