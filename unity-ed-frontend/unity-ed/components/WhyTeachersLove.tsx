// components/WhyTeachersLove.tsx
import Image from "next/image";
import React from "react";

export default function WhyTeachersLove() {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-12">
      <h3 className="text-2xl font-bold text-center mb-8">Why Teachers Love UnityED</h3>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <Image src="/images/teachers-why.png" alt="teachers" width={560} height={360} style={{ objectFit: "contain" }} />
        </div>

        <div className="order-1 md:order-2 bg-white rounded-2xl p-6 shadow-md">
          <ul className="space-y-4 text-sm text-slate-700">
            <li>✔ Save hours of grading and administrative work</li>
            <li>✔ Identify struggling students before they fall behind</li>
            <li>✔ Personalize learning based on individual student needs</li>
            <li>✔ Engage students with interactive, game-based learning</li>
            <li>✔ Generate professional reports for parents and administrators</li>
            <li>✔ Access comprehensive curriculum-aligned content</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
