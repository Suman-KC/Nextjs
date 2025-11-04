// app/teachers/page.tsx
import React from "react";
import TeacherHero from "../../components/TeacherHero";
import TeacherFeatures from "../../components/TeacherFeatures";
import HowItWorks from "../../components/HowItWorks";
import WhyTeachersLove from "../../components/WhyTeachersLove";
import TeacherTestimonials from "../../components/TeacherTestimonials";
import Pricing from "../../components/Pricing";
import TeachersCTA from "../../components/TeachersCTA";

export default function TeachersPage() {
  return (
    <div className="min-h-screen bg-white">
      <TeacherHero />
      <TeacherFeatures />
      <HowItWorks />
      <WhyTeachersLove />
      <TeacherTestimonials />
      <Pricing />
      <TeachersCTA />
    </div>
  );
}
