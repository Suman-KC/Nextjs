// components/HowItWorks.tsx
import React from "react";

export default function HowItWorks() {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-12">
      <div className="text-center">
        <h3 className="text-2xl font-bold">How It Works</h3>
        <p className="text-sm text-slate-600 mt-2">Get started in three simple steps</p>
      </div>

      <div className="mt-8 bg-white rounded-2xl p-6 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center font-semibold">1</div>
            <h5 className="mt-4 font-semibold">Create Your Account</h5>
            <p className="text-sm text-slate-600 mt-2">Sign up for a free teacher account and set up your profile in minutes.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center font-semibold">2</div>
            <h5 className="mt-4 font-semibold">Add Your Students</h5>
            <p className="text-sm text-slate-600 mt-2">Create classes and invite students with simple access codes.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center font-semibold">3</div>
            <h5 className="mt-4 font-semibold">Track Progress</h5>
            <p className="text-sm text-slate-600 mt-2">Monitor student activity and use insights to improve learning outcomes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
