// app/(public)/HomeContent.tsx
// app/page.tsx
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContentSwitcher from "../../components/ContentSwitcher";
import Hero from "../../components/Hero";
import FeatureCard from "../../components/FeatureCard";
export default function HomeContent(){
return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />

        <section className="bg-[#f7f3eb] py-12">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-xl font-medium mb-6">Building Social Skills Through Play</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard title="Interactive Gaming" description="Choice-driven scenarios and role-play." />
              <FeatureCard title="Emotional Intelligence" description="Recognize feelings and regulate responses." />
              <FeatureCard title="Foster Belonging" description="Cooperation, inclusion, and classroom community building." />
              <FeatureCard title="Anti-Bullying" description="Safe story-based environments that teach accountability and empathy." />
            </div>
          </div>
        </section>

        {/* Here is the area that will either show home preview or the full dashboard */}
        <section className="py-12 bg-white">
          <ContentSwitcher />
        </section>
      </main>
      <Footer />
    </>
  );
}