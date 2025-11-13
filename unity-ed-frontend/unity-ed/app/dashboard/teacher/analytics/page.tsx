"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/card";
import { Button } from "@/components/button";
import { ChevronDown, Filter } from "lucide-react";
import TeacherLayout from "@/components/TeacherLayout";
export default function AnalyticsPage() {
  const [selectedClass, setSelectedClass] = useState("All Classes");
  const [selectedTime, setSelectedTime] = useState("This Week");
  const [selectedGame, setSelectedGame] = useState("All Games");

  const topPerformers = [
    { name: "Emma Wilson", score: 95 },
    { name: "Michael Brown", score: 92 },
    { name: "Sarah Johnson", score: 89 },
  ];

  const improvementAreas = [
    { name: "Multiplication", percent: 65 },
    { name: "Fractions", percent: 70 },
    { name: "Word Problems", percent: 75 },
  ];

  return (
     <div className="min-h-screen w-full bg-[#F8FAFC] flex">
                
                      <TeacherLayout/>
    <div className="w-full p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="text-gray-500">
          Comprehensive insights into student performance
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        <div className="relative">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => setSelectedClass("All Classes")}
          >
            {selectedClass}
            <ChevronDown size={16} />
          </Button>
        </div>

        <div className="relative">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => setSelectedTime("This Week")}
          >
            {selectedTime}
            <ChevronDown size={16} />
          </Button>
        </div>

        <div className="relative">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => setSelectedGame("All Games")}
          >
            {selectedGame}
            <ChevronDown size={16} />
          </Button>
        </div>

        <Button className="bg-blue-600 text-white flex items-center gap-2">
          <Filter size={16} /> Filter
        </Button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-gray-500">Average Score</p>
            <h2 className="text-3xl font-bold mt-1">30</h2>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-gray-500">Ten Students</p>
            <h2 className="text-3xl font-bold mt-1">156</h2>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-gray-500">Most Played</p>
            <h2 className="text-3xl font-bold mt-1 text-blue-600">Math</h2>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Metrics */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Detailed Performance Metrics</h2>
        <div className="border border-dashed rounded-lg h-48 flex items-center justify-center text-gray-400">
          Performance charts will be displayed here
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top Performers */}
        <Card>
          <CardContent className="p-5">
            <h3 className="font-semibold mb-4">Top Performers</h3>
            <ul className="space-y-3">
              {topPerformers.map((s, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between border rounded-lg p-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500 text-white text-sm font-bold">
                      {i + 1}
                    </div>
                    <span>{s.name}</span>
                  </div>
                  <span className="font-semibold">{s.score}%</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Areas for Improvement */}
        <Card>
          <CardContent className="p-5">
            <h3 className="font-semibold mb-4">Areas for Improvement</h3>
            <ul className="space-y-4">
              {improvementAreas.map((area, i) => (
                <li key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{area.name}</span>
                    <span className="font-medium">{area.percent}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-500 h-2 rounded-full"
                      style={{ width: `${area.percent}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div> </div>
  );
}
