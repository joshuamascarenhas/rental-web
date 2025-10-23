"use client";

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Rental Web Dashboard</h1>
      <div>
        {/* Placeholder for future user profile and logout */}
        <button className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition">
          Logout
        </button>
      </div>
    </nav>
  );
}
