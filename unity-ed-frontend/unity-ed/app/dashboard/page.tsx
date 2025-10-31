
export default function DashboardOverview() {
  return (
   
    <div>
    
     
      <main className="p-6">
          <h3 className="text-xl font-semibold mb-3">Dashboard Overview</h3>
          <p className="text-sm text-gray-600 mb-6">KPIs and charts will go here.</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg shadow">Active Students<br /><strong>14</strong></div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">Attempts<br /><strong>43</strong></div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">Average Score<br /><strong>74.1</strong></div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">Last Updated<br /><strong>2025-10-27</strong></div>
          </div>
        </main>
      {/* add cards, placeholders, etc. */}
    </div>
  );
}
