"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  
  const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/dashboard/properties", label: "Properties" },
    { href: "/dashboard/profile", label: "Profile" },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen flex flex-col p-6">
      <div className="mb-8 font-bold text-2xl">Rental Web</div>
      <nav className="flex flex-col gap-4">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`px-3 py-2 rounded hover:bg-gray-700 transition ${
              pathname === href ? "bg-gray-700" : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
