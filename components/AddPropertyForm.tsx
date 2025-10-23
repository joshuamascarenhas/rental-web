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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !address || !type) {
      alert("Please fill all fields");
      return;
    }
    onAdd({ name, address, type });
    setName("");
    setAddress("");
    setType("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4">Add New Property</h2>
        <input
          type="text"
          placeholder="Property Name"
          className="border p-2 w-full mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          className="border p-2 w-full mb-3"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type (e.g., Apartment, House)"
          className="border p-2 w-full mb-4"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <div className="flex justify-end gap-4">
          <button type="button" onClick={onClose} className="px-4 py-2 border rounded">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
