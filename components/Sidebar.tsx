export default function Sidebar() {
  return (
    <aside className="w-64 h-full bg-gray-100 px-4 py-8 shadow-md">
      <ul>
        <li className="mb-4 font-medium"><a href="/dashboard">Dashboard</a></li>
        <li className="mb-4"><a href="#">Add Property</a></li>
        <li className="mb-4"><a href="#">Verifications</a></li>
      </ul>
    </aside>
  );
}
