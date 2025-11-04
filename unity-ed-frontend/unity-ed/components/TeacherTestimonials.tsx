// components/TeacherTestimonials.tsx
import React from "react";

export default function TeacherTestimonials() {
  const items = [
    {
      quote: `"UnityED has completely transformed my classroom. I can now see exactly where each student is struggling and provide targeted support."`,
      name: "Jennifer Williams",
      title: "4th Grade Teacher, Lincoln Elementary",
    },
    {
      quote: `"UnityED has completely transformed my classroom. I can now see exactly where each student is struggling and provide targeted support."`,
      name: "Jennifer Williams",
      title: "4th Grade Teacher, Lincoln Elementary",
    },
    {
      quote: `"UnityED has completely transformed my classroom. I can now see exactly where each student is struggling and provide targeted support."`,
      name: "Jennifer Williams",
      title: "4th Grade Teacher, Lincoln Elementary",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 mt-12">
      <h3 className="text-2xl font-bold text-center mb-8">What Teachers Are Saying</h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((it, idx) => (
          <div key={idx} className="bg-gray-100 rounded-2xl p-6 h-48 shadow-md">
            <p className="text-sm text-slate-700 mb-4">{it.quote}</p>
            <div className="text-xs text-blue-700 font-semibold">{it.name}</div>
            <div className="text-xs text-slate-600">{it.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
