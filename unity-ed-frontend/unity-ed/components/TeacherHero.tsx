// components/TeacherHero.tsx
import Image from "next/image";
import React from "react";

export default function TeacherHero() {
  return (
    <section className="max-w-6xl mx-auto px-4 pt-8 grid md:grid-cols-2 gap-8 items-start">
      <div className="bg-gray-100 rounded-2xl p-8 min-h-[220px] shadow-sm">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight mb-4">
          Empower Your Teaching with Data
        </h1>
        <p className="text-sm text-slate-600 max-w-lg mb-6">
          UnityED provides teachers with powerful tools to track student progress, identify learning gaps,
          and make informed decisions that improve outcomes.
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-2 rounded-full bg-blue-600 text-white shadow">Start Free Trial</button>
          <button className="px-6 py-2 rounded-full bg-amber-300 text-slate-800 shadow">Login</button>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="w-80 h-80 bg-gray-200 rounded-2xl overflow-hidden relative">
          <Image
            src="/images/teachers-hero.png"
            alt="Teachers illustration"
            fill
            sizes="(max-width: 768px) 60vw, 320px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
