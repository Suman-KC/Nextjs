"use client";

import { Users, TrendingUp, Plus } from "lucide-react";
import { Button } from "@/components/button";
import TeacherLayout from "@/components/TeacherLayout";
export default function MyClassesPage() {
  const classes = [
    { name: "Class 5A", students: 28, avgScore: 82, progress: 75 },
    { name: "Class 5B", students: 25, avgScore: 78, progress: 68 },
    { name: "Class 6A", students: 30, avgScore: 85, progress: 82 },
    { name: "Class 6B", students: 27, avgScore: 80, progress: 71 },
    { name: "Class 7A", students: 26, avgScore: 88, progress: 89 },
    { name: "Class 7B", students: 20, avgScore: 76, progress: 65 },
  ];

  return (
       <div className="min-h-screen w-full bg-[#F8FAFC] flex">
                    
                          <TeacherLayout/>
    <div className="w-full p-6 space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">My Classes</h1>
          <p className="text-gray-500">
            Manage and monitor all your classes
          </p>
        </div>
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white flex items-center gap-2">
          <Plus size={16} /> New Class
        </Button>
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {classes.map((cls, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl shadow-sm p-5 hover:shadow-md transition-all"
          >
            <h2 className="text-lg font-semibold mb-3">{cls.name}</h2>

            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>Students</span>
                </div>
                <span className="font-semibold text-gray-900">
                  {cls.students}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp size={16} />
                  <span>Avg Score</span>
                </div>
                <span className="font-semibold text-gray-900">
                  {cls.avgScore}%
                </span>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-1">Class Progress</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-emerald-500 h-2 rounded-full"
                  style={{ width: `${cls.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
