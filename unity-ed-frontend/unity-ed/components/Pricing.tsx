// components/Pricing.tsx
import React from "react";

function Card({ title, price, bullets, primary }: { title: string; price?: string; bullets: string[]; primary?: boolean }) {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-md transform ${primary ? "scale-105" : ""}`}>
      <div className={`text-sm font-semibold ${primary ? "text-white" : "text-slate-800"}`}>{title}</div>
      {price && <div className={`text-2xl font-bold mt-4 ${primary ? "text-white" : "text-slate-900"}`}>{price}</div>}
      <ul className={`mt-4 space-y-2 text-sm ${primary ? "text-white/90" : "text-slate-700"}`}>
        {bullets.map((b, i) => (
          <li key={i}>• {b}</li>
        ))}
      </ul>
      <div className="mt-6">
        <button className={`px-6 py-2 rounded-full ${primary ? "bg-emerald-400 text-white" : "bg-white border"}`}>
          {primary ? "Start Free Trial" : "Get Started"}
        </button>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-12 text-center">
      <h3 className="text-2xl font-bold mb-6">Simple, Transparent Pricing</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
        <Card title="Free" price="$0/month" bullets={["Up to 30 students", "Basic analytics", "Email support"]} />

        <Card title="Professional" price="$29/month" bullets={["Unlimited students", "Advanced analytics", "Priority support", "Custom reports"]} primary/>

        <Card title="School (Custom)" bullets={["Unlimited teachers", "Admin dashboard", "Dedicated support", "Training sessions"]} />
      </div>
    </section>
  );
}
