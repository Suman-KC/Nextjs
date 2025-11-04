import FeatureCard from "./FeatureCard";

export default function FeaturesRow() {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <FeatureCard title="Interactive Gaming" desc="Engage students with fun and educational challenges" />
        <FeatureCard title="Real time Progress Track" desc="Monitor student progress with live analytics" />
        <FeatureCard title="Teacher's Dashboard" desc="Access detailed reports and insights" />
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h5 className="font-semibold mb-2">Student Tracking</h5>
          <p className="text-sm text-slate-600">Monitor individual student progress with analytics.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h5 className="font-semibold mb-2">Data Visualization</h5>
          <p className="text-sm text-slate-600">Turn raw data into insights and charts.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h5 className="font-semibold mb-2">Class Management</h5>
          <p className="text-sm text-slate-600">Manage classes, students and activities easily.</p>
        </div>
      </div>
    </section>
  );
}
