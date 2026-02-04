import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import AdminNavbar from "../../components/Admin/AdminNavbar";
import AddBookModal from "../../components/Admin/AddBookModal";
import toast from "react-hot-toast";

export default function ManageBooks() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      // Axios uses the baseURL and Auth header from your AuthProvider
      const res = await axios.get("/api/books");
      setBooks(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch books", error);
      toast.error("Error loading books");
      setLoading(false);
    }
  };

  const deleteBook = async (id) => {
    if (!window.confirm("Are you sure you want to delete this book?")) return;

    try {
      await axios.delete(`/api/books/${id}`);
      toast.success("Book deleted successfully");
      fetchBooks();
    } catch (error) {
      toast.error("Failed to delete book");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <AdminSidebar />
      <div className="flex-grow flex flex-col">
        <AdminNavbar title="Inventory Management" />
        <main className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800">All Books</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              + Add New Book
            </button>
          </div>

          <div className="bg-white rounded-xl shadow overflow-x-auto">
            {loading ? (
              <p className="p-6 text-gray-500">Loading books...</p>
            ) : (
              <table className="w-full text-left">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-4">Title</th>
                    <th className="p-4">Author</th>
                    <th className="p-4">Price</th>
                    <th className="p-4">Stock</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {books.map((book) => (
                    <tr key={book._id} className="border-t hover:bg-slate-50">
                      <td className="p-4 font-medium">{book.title}</td>
                      <td className="p-4">{book.author}</td>
                      <td className="p-4">₹{book.price}</td>
                      <td className="p-4">{book.stock}</td>
                      <td className="p-4">
                        <button
                          onClick={() => deleteBook(book._id)}
                          className="text-red-500 hover:text-red-700 font-semibold"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </main>
      </div>

      <AddBookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        refreshBooks={fetchBooks}
      />
    </div>
  );
}