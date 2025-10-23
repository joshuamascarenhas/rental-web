import type { Property } from "./types";

type PropertyListProps = {
  properties: Property[];
};

export default function PropertyList({ properties }: PropertyListProps) {
  if (properties.length === 0)
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <p>No properties yet. Start by adding one!</p>
      </div>
    );

  return (
    <div className="grid gap-4">
      {properties.map((property, idx) => (
        <div key={idx} className="p-4 bg-white rounded shadow">
          <h2 className="font-semibold text-lg">{property.name}</h2>
          <p>{property.address}</p>
          <p className="italic text-sm text-gray-600">{property.type}</p>
        </div>
      ))}
    </div>
  );
}
