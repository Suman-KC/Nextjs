"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { RotateCcw } from "lucide-react";
import TeacherLayout from "@/components/TeacherLayout";

export default function GameControlPage() {
  const [section, setSection] = useState("Scoreto");
  const [enableLevel4, setEnableLevel4] = useState(true);
  const [distribution, setDistribution] = useState(50);

  return (
      <div className="min-h-screen w-full bg-[#F8FAFC] flex">
                        
                              <TeacherLayout/>
    <div className="w-full p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Game Control Center</h1>
        <p className="text-gray-500">Configure game parameters and settings</p>
      </div>

      {/* Game Control Form */}
      <div className="bg-white border rounded-2xl shadow-sm p-6 space-y-6">
        {/* Section */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Section
          </label>
          <select
            value={section}
            onChange={(e) => setSection(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-emerald-400 outline-none"
          >
            <option>Scoreto</option>
            <option>QuizArena</option>
            <option>WordSprint</option>
          </select>
        </div>

        {/* Enable Level 4 */}
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">
            Enable Level 4
          </label>
          <button
            onClick={() => setEnableLevel4(!enableLevel4)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              enableLevel4 ? "bg-emerald-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                enableLevel4 ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        {/* Phrase Score Distribution */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Phrase Score Distribution
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={distribution}
            onChange={(e) => setDistribution(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>0</span>
            <span>{distribution}</span>
            <span>100</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
            Save Changes
          </Button>
          <Button className="bg-gray-200 hover:bg-gray-300 text-gray-800 flex items-center gap-2">
            <RotateCcw size={16} /> Reset to Default
          </Button>
        </div>
      </div>

      {/* Game Configuration Section */}
      <div className="bg-white border rounded-2xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Game Configuration
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Difficulty Settings */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Difficulty Settings
            </h3>
            <div className="space-y-2">
              {["Easy Mode", "Medium Mode", "Hard Mode"].map((mode) => (
                <div
                  key={mode}
                  className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3 border hover:bg-gray-100 transition"
                >
                  <span>{mode}</span>
                  <button className="text-emerald-500 hover:underline">
                    Configure
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Reward System */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Reward System
            </h3>
            <div className="space-y-2">
              {["Badge Rewards", "Point System", "Achievements"].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3 border hover:bg-gray-100 transition"
                >
                  <span>{item}</span>
                  <button className="text-emerald-500 hover:underline">
                    Manage
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div></div>
  );
}
