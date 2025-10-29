// components/FeatureCard.tsx
type Props = {
  title: string;
  description: string;
};

export default function FeatureCard({ title, description }: Props) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border">
      <div className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-amber-400 flex items-center justify-center" />
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-slate-600 mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
}
