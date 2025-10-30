import Image from "next/image";

// app/page.tsx

import FeatureCard from "../components/FeatureCard";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />

        <section className="bg-[#f7f3eb] py-12">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-xl font-medium mb-6">Building Social Skills Through Play</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard
                title="Interactive Gaming"
                description="Choice-driven scenarios and role-play."
              />
              <FeatureCard
                title="Emotional Intelligence"
                description="Recognize feelings and regulate responses."
              />
              <FeatureCard
                title="Foster Belonging"
                description="Cooperation, inclusion, and classroom community building."
              />
              <FeatureCard
                title="Anti-Bullying"
                description="Safe story-based environments that teach accountability and empathy."
              />
            </div>
          </div>
         
        </section>
        
      </main>
       <Footer/>
    </>
  );
}

