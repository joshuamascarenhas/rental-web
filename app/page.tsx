import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-zinc-50">
      <h1 className="text-4xl font-bold mb-6">Welcome to Rental Web!</h1>
      <p className="text-lg mb-8 max-w-md text-center">
        Manage your rental properties efficiently with our landlord dashboard.
      </p>
      <Link
        href="/dashboard"
        className="px-6 py-3 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Go to Dashboard
      </Link>
    </main>
  );
}
