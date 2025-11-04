export default function FeatureCard({ title, desc, icon }: { title: string; desc: string; icon?: React.ReactNode; }) {
  return (
    <div className="bg-white rounded-2xl p-6 min-h-[110px] flex gap-4 items-start shadow-md">
      <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
        {icon ?? "★"}
      </div>
      <div>
        <h4 className="font-semibold text-slate-800">{title}</h4>
        <p className="text-sm text-slate-600 mt-2">{desc}</p>
      </div>
    </div>
  );
}
