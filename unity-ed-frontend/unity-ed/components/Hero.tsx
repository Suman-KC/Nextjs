import Image from "next/image";
// Put hero image file in public/images/hero.png or any name you prefer

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-8 grid md:grid-cols-2 gap-8 items-start">
      <div className="bg-gray-100 rounded-2xl p-8 min-h-[260px] shadow-sm">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight mb-4">
          Empowering Learning Through Play
        </h1>
        <p className="text-sm text-slate-600 max-w-lg mb-6">
          Our educational game makes learning engaging and fun.
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-2 rounded-full bg-blue-500 text-white shadow">Try the Game</button>
          <button className="px-6 py-2 rounded-full bg-amber-300 text-slate-800 shadow">Login</button>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="w-72 h-72 bg-gray-200 rounded-2xl overflow">
          {/* replace src with your image in public/images */}
          <Image src="/images/hero.png" alt="hero" width={460} height={460} objectFit="overflow" className="scale-130" />
        </div>
      </div>
    </section> 
  );
}
