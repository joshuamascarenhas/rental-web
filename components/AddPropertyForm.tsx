"use client";

import { useState } from "react";
import type { Property } from "./types";

type AddPropertyFormProps = {
  onAdd: (property: Property) => void;
  onClose: () => void;
};

export default function AddPropertyForm({ onAdd, onClose }: AddPropertyFormProps) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const [errors, setErrors] = useState<{ name?: string; address?: string; type?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = "Name required";
    if (!address.trim()) newErrors.address = "Address required";
    if (!type.trim()) newErrors.type = "Type required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onAdd({ name, address, type });
      setName("");
      setAddress("");
      setType("");
      setErrors({});
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4">Add New Property</h2>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Property Name"
            className="border p-2 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Address"
            className="border p-2 w-full"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {errors.address && <p className="text-red-600 text-sm mt-1">{errors.address}</p>}
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Type (e.g., Apartment, House)"
            className="border p-2 w-full"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          {errors.type && <p className="text-red-600 text-sm mt-1">{errors.type}</p>}
        </div>
        <div className="flex justify-end gap-4">
          <button type="button" onClick={onClose} className="px-4 py-2 border rounded">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded" disabled={!name || !address || !type}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
