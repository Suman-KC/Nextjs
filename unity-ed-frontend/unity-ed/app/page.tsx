// import React from "react";
// import Hero from "../components/Hero";
// import FeaturesRow from "../components/FeaturesRow";
// import WhyChoose from "../components/WhyChoose";
// import EngagingGameplay from "../components/EngagingGameplay";
// import Testimonials from "../components/Testimonials";
// import CTA from "../components/CTA";
"use client";
import Image from "next/image";
import { FaGamepad, FaChartBar, FaChalkboardTeacher, FaUserFriends, FaBookOpen, FaChartLine } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen">

    <main className="bg-white text-gray-700">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#143E73] mb-4">
            Empowering Learning Through Play
          </h1>
          <p className="text-gray-600 mb-6">
            Our educational games make learning engaging and fun
          </p>
          <div className="flex gap-4">
            <button className="bg-[#316CF4] text-white px-6 py-2 rounded-full font-medium hover:bg-[#2554C7] transition">
              Try the Game
            </button>
            <button className="bg-[#FFCE34] text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-[#E6B92D] transition">
              Login
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/hero.png"
            alt="Learning Robot"
            width={400}
            height={400}
            className="object-contain scale-120"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6 pb-16">
        {[
          {
            icon: <FaGamepad className="text-[#FFCE34] text-2xl" />,
            title: "Interactive Gaming",
            text: "Engage students with fun and educational challenges",
          },
          {
            icon: <FaChartBar className="text-[#316CF4] text-2xl" />,
            title: "Real time Progress Track",
            text: "Monitor student progress with live analytics",
          },
          {
            icon: <FaChalkboardTeacher className="text-[#316CF4] text-2xl" />,
            title: "Teacher’s Dashboard",
            text: "Access detailed reports and insights",
          },
        ].map((item, i) => (
          <div key={i} className="bg-white shadow-md p-6 rounded-xl text-center">
            <div className="flex justify-center mb-3">{item.icon}</div>
            <h3 className="font-semibold text-[#143E73] mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.text}</p>
          </div>
        ))}
      </section>

      {/* Why Choose Section */}
      <section className="bg-white py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#143E73] mb-12">
          Why Choose UnityED?
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {[
            {
              icon: <FaUserFriends className="text-gray-700 text-2xl" />,
              title: "Student Tracking",
              text: "Monitor individual student progress with detailed analytics and performance metrics in real-time.",
            },
            {
              icon: <FaChartLine className="text-gray-700 text-2xl" />,
              title: "Data Visualization",
              text: "Transform raw data into actionable insights with beautiful charts and comprehensive reports.",
            },
            {
              icon: <FaBookOpen className="text-gray-700 text-2xl" />,
              title: "Class Management",
              text: "Access data-driven insights to simplify classroom management and boost performance.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-xl text-center shadow-sm">
              <div className="flex justify-center mb-3">{item.icon}</div>
              <h3 className="font-semibold text-[#143E73] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Engaging Gameplay Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#143E73] mb-4">
              Engaging Educational Gameplay
            </h2>
            <p className="text-gray-600 mb-6">
              Our Unity-powered game makes learning fun and interactive. Students explore, solve problems,
              and develop critical thinking skills while teachers gain valuable insights.
            </p>

            <div>
              <h4 className="font-semibold text-[#143E73] mb-2">Building Social Skills Through Play</h4>
              <ul className="text-gray-600 space-y-1 text-sm list-disc list-inside">
                <li><b>Interactive Gaming:</b> Choice-driven scenarios and role-play.</li>
                <li><b>Foster Belonging:</b> Builds empathy and inclusion.</li>
                <li><b>Emotional Intelligence:</b> Recognize feelings and regulate responses.</li>
                <li><b>Anti-Bullying:</b> Encourages accountability and empathy.</li>
              </ul>
            </div>
          </div>

          <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/images/gameplay.png"
              alt="Educational Gameplay"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#143E73] mb-12">
          What Teachers Are Saying
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <p className="italic text-gray-700 mb-4">
                “UnityED has completely transformed my classroom. I can now see exactly where each
                student is struggling and provide targeted support.”
              </p>
              <div>
                <p className="text-[#316CF4] font-semibold">Jennifer Williams</p>
                <p className="text-sm text-gray-600">4th Grade Teacher</p>
                <p className="text-sm text-gray-600">Lincoln Elementary</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16 text-center rounded-t-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-[#143E73] mb-4">
          Ready to Transform Your Classroom?
        </h2>
        <p className="text-gray-600 mb-8">
          Start your free trial today and see the difference UnityED can make.
        </p>
        <button className="bg-white text-[#143E73] px-8 py-3 rounded-full font-medium shadow hover:shadow-md transition">
          Get Started
        </button>
      </section>
    </main>

      {/* <Hero />
      <FeaturesRow />
      <WhyChoose />
      <EngagingGameplay />
      <Testimonials />
      <CTA /> */}
    </div>
  );
}
