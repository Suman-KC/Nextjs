import Image from "next/image";

export default function EngagingGameplay() {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-12">
      <div className="bg-gray-100 rounded-2xl p-8 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-4">Engaging Educational Gameplay</h3>
          <p className="text-sm text-slate-600 mb-6">
            Our Unity-powered game makes learning fun and interactive. Students explore, solve problems, and develop critical thinking skills.
          </p>

          <div className="grid grid-cols-1 gap-3 text-sm">
            <div><strong>Interactive Gaming</strong> — Choice-driven scenarios.</div>
            <div><strong>Emotional Intelligence</strong> — Recognize and regulate responses.</div>
            <div><strong>Anti-Bullying</strong> — Safe story-based environments.</div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-64 h-48 rounded-2xl overflow-hidden bg-white shadow">
            <Image src="/images/gameplay.png" alt="gameplay" width={512} height={384} objectFit="cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
