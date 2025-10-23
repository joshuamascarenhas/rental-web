import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50">
      <main className="flex flex-col items-center justify-center py-32 px-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Welcome to Rental Web!
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
          Manage your rental properties, verify listings, and oversee safety information—all in one dashboard.
        </p>
        <Link
          href="/dashboard"
          className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
        >
          Go to Landlord Dashboard
        </Link>
      </main>
    </div>
  );
}
