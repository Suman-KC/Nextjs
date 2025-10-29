// components/Hero.tsx
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-emerald-900/90 text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Gamified Social-Emotional Learning
          </h1>
          <p className="mt-4 text-slate-100/85">
            Empowering youth to build empathy, confidence, and belonging through playful learning experiences.
          </p>

          <div className="mt-8 flex gap-4">
            <Link href="/mission" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-amber-400 text-black font-semibold shadow">
              Our Mission
            </Link>
            <Link href="/progress" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/90 text-emerald-900 font-semibold">
              See Our Progress
            </Link>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="rounded-2xl overflow-hidden ring-4 ring-white/40">
            {/* Put your hero image in public/hero.jpg */}
            <Image src="/hero.jpg" alt="Classroom" width={520} height={300} className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
