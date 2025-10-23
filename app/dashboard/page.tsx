"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Property } from "../../components/types";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import PropertyList from "../../components/PropertyList";
import AddPropertyForm from "../../components/AddPropertyForm";

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState<Property[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn) {
      router.replace("/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  const handleAddProperty = (property: Property) => {
    setProperties((prev) => [...prev, property]);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-8 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Landlord Dashboard</h1>
            <button
              onClick={() => setShowAddForm(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add Property
            </button>
          </div>

          <PropertyList properties={properties} />

          {showAddForm && (
            <AddPropertyForm
              onAdd={handleAddProperty}
              onClose={() => setShowAddForm(false)}
            />
          )}
        </main>
      </div>
    </div>
  );
}
