import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import PropertyList from "../../components/PropertyList";

export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-8">
          <h1 className="text-2xl font-semibold mb-6">Landlord Dashboard</h1>
          {/* Property listing will go here */}
          <PropertyList />
        </main>
      </div>
    </div>
  );
}
