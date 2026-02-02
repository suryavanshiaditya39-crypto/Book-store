import React, { useState } from "react";
export default function AddBookModal({ isOpen, onClose, refreshBooks }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    price: "",
    stock: "",
    category: "",
  });
  if (!isOpen) return null;
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/books/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    refreshBooks();
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-lg p-6">
        <h2 className="text-xl font-bold mb-4">Add New Book</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            placeholder="Book Title"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            name="author"
            placeholder="Author"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            name="price"
            type="number"
            placeholder="Price"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            name="stock"
            type="number"
            placeholder="Stock"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            name="category"
            placeholder="Category"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}