"use client";
import Image from "next/image";
import { FaBullseye, FaLightbulb, FaHeart, FaUsers, FaAward } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-700">
      {/* About Intro Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#143E73] mb-4">About UnityED</h1>
          <p className="text-gray-600 leading-relaxed">
            We’re dedicated to transforming education by leveraging innovative gaming technology 
            to create deeply engaging, active learning experiences. Our mission is to move beyond 
            passive instruction by embedding core curricula within compelling gameplay, while utilizing 
            powerful analytics to provide real-time insights into student progress.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/about.png"
            alt="About UnityED illustration"
            width={400}
            height={300}
            className="object-contain"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
          <div className="flex items-center mb-4">
            <FaBullseye className="text-cyan-500 text-2xl mr-3" />
            <h2 className="text-xl font-semibold text-[#143E73]">Our Mission</h2>
          </div>
          <p className="text-gray-600">
            To empower educators with cutting-edge tools that make learning engaging, measurable, 
            and effective. Every student deserves an educational experience that adapts to their 
            unique needs and learning style.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
          <div className="flex items-center mb-4">
            <FaLightbulb className="text-cyan-500 text-2xl mr-3" />
            <h2 className="text-xl font-semibold text-[#143E73]">Our Vision</h2>
          </div>
          <p className="text-gray-600">
            To create a world where education is personalized, data-driven, and accessible to all. 
            We envision classrooms where technology enhances human connection rather than replacing it.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-16">
        <h2 className="text-center text-2xl font-bold text-[#143E73] mb-12">Our Story</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
          <div>
            <h3 className="text-xl font-semibold text-[#143E73] mb-4">Our Story</h3>
            <p className="text-gray-600 mb-4">
              UnityED was born from a simple observation: students learn best when they are engaged, 
              and teachers need better tools to understand student progress.
            </p>
            <p className="text-gray-600 mb-4">
              Founded by a team of educators, game developers, and data scientists, we combined our 
              expertise to create a platform that bridges the gap between entertainment and education.
            </p>
            <p className="text-gray-600">
              Today, UnityED serves thousands of classrooms worldwide, helping teachers make data-driven 
              decisions while keeping students excited about learning.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/room.png"
              alt="Our Story"
              width={500}
              height={350}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-16">
        <h2 className="text-center text-2xl font-bold text-[#143E73] mb-12">Our Values</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <FaHeart className="text-cyan-500 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold text-[#143E73] mb-2">Student-Centered</h3>
            <p className="text-gray-600 text-sm">
              Every decision we make prioritizes student learning outcomes and engagement.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <FaUsers className="text-cyan-500 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold text-[#143E73] mb-2">Teacher Support</h3>
            <p className="text-gray-600 text-sm">
              We empower educators with tools that save time and provide actionable insights.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <FaAward className="text-cyan-500 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold text-[#143E73] mb-2">Excellence</h3>
            <p className="text-gray-600 text-sm">
              We are committed to delivering the highest quality educational technology.
            </p>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-2xl font-bold text-[#143E73] mb-6">Our Impact</h2>
        <p className="text-gray-600 mb-10">Making a difference in education worldwide</p>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "10K+", label: "Teachers" },
            { number: "500K+", label: "Students" },
            { number: "50+", label: "Countries" },
            { number: "95%", label: "Satisfaction Rate" },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold text-[#143E73]">{item.number}</h3>
              <p className="text-gray-600 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold text-[#143E73] mb-6">Meet Our Team</h2>
        <p className="text-gray-600 mb-12">
          Passionate professionals dedicated to transforming education
        </p>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 px-6">
          {[
            { name: " Michelle", role: "CEO & Co-Founder", img: "/images/Headshot.jpg" },
            { name: "Allan", role: "CTO & Co-Founder", img: "/images/alianno-tulloch-headshot.jpg" },
            { name: "Maechal", role: "Head of Education", img: "/images/michael-tahirovic-headshot.jpg" },
          ].map((member, i) => (
            <div key={i} className="text-center">
              <Image
                src={member.img}
                alt={member.name}
                width={150}
                height={0}
                className="rounded-full object-cover w-full h-75"
              />
              <h4 className="font-semibold text-[#143E73]">{member.name}</h4>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
