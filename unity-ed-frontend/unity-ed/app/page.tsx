// app/page.tsx
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";

export default function HomePage() {
  return (
    <main className="p-8">
      <Hero />
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <FeatureCard
          title="Interactive Learning"
          description="Engage with interactive lessons powered by UnityEd."
        />
        <FeatureCard
          title="Student Management"
          description="Track progress and manage student performance easily."
        />
        <FeatureCard
          title="Seamless Communication"
          description="Stay connected with students and parents."
        />
      </section>
    </main>
  );
}
