import React from "react";
import Hero from "../components/Hero";
import FeaturesRow from "../components/FeaturesRow";
import WhyChoose from "../components/WhyChoose";
import EngagingGameplay from "../components/EngagingGameplay";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturesRow />
      <WhyChoose />
      <EngagingGameplay />
      <Testimonials />
      <CTA />
    </div>
  );
}
