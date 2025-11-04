// components/TeacherFeatures.tsx
import React from "react";

function Feature({ title, desc, icon }: { title: string; desc: string; icon?: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md min-h-[140px] flex gap-4 items-start">
      <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-xl">
        {icon ?? "📊"}
      </div>
      <div>
        <h4 className="font-semibold text-slate-800">{title}</h4>
        <p className="text-sm text-slate-600 mt-2">{desc}</p>
      </div>
    </div>
  );
}

export default function TeacherFeatures() {
  const features = [
    { title: "Real-Time Analytics", desc: "View comprehensive analytics on student performance, engagement, and progress in real-time." },
    { title: "Class Management", desc: "Easily manage multiple classes, add students, and organize learning activities." },
    { title: "Detailed Reports", desc: "Generate comprehensive reports for individual students or entire classes." },
    { title: "Customizable Settings", desc: "Tailor the learning experience to match your curriculum and teaching style." },
    { title: "Time Tracking", desc: "Monitor how much time students spend on different activities and topics." },
    { title: "Assignment Tracking", desc: "Create assignments, track completion rates, and review student submissions." },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 mt-12">
      <h3 className="text-center text-xl md:text-2xl font-semibold text-slate-800 mb-4">Teacher Dashboard Features</h3>
      <p className="text-center text-sm text-slate-600 mb-8">Everything you need to manage your classroom effectively</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {features.map((f) => (
          <Feature key={f.title} title={f.title} desc={f.desc} />
        ))}
      </div>
    </section>
  );
}
