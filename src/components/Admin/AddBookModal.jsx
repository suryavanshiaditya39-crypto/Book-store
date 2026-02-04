import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
export default function AddBookModal({ isOpen, onClose, refreshBooks }) {
  const { register, handleSubmit, reset } = useForm();
  if (!isOpen) return null;
  const onSubmit = async (data) => {
    try {
      await axios.post("/api/books", data);
      toast.success("Book added successfully!");
      reset();
      onClose();
      refreshBooks();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add book");
    }
  };
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl w-full max-w-md shadow-2xl">
        <h2 className="text-xl font-bold mb-4">Add New Book</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input {...register("title", { required: true })} placeholder="Book Title" className="w-full p-2 border rounded" />
          <input {...register("author", { required: true })} placeholder="Author" className="w-full p-2 border rounded" />
          <input {...register("price", { required: true })} type="number" placeholder="Price" className="w-full p-2 border rounded" />
          <input {...register("stock", { required: true })} type="number" placeholder="Stock" className="w-full p-2 border rounded" />
          <input {...register("category", { required: true })} placeholder="Category" className="w-full p-2 border rounded" />
          
          <div className="flex gap-4 mt-6">
            <button type="button" onClick={onClose} className="flex-1 py-2 bg-slate-100 rounded-lg">Cancel</button>
            <button type="submit" className="flex-1 py-2 bg-blue-600 text-white rounded-lg">Save Book</button>
          </div>
        </form>
      </div>
    </div>
  );
}