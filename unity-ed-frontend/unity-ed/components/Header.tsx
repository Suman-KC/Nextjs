export default function Header() {
  return (
    <header className="bg-white border-b p-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">Teacher Dashboard</h1>
      <button className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700">
        Logout
      </button>
    </header>
  );
}
