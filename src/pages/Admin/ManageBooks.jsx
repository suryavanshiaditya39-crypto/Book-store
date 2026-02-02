import React, { useEffect, useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";
import AddBookModal from "../../components/admin/AddBookModal";
export default function ManageBooks({ setUser }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchBooks = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/books");
      const data = await res.json();
      setBooks(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch books", error);
      setLoading(false);
    }
  };
  const deleteBook = async (id) => {
    if (!window.confirm("Delete this book?")) return;
    await fetch(`http://localhost:5000/api/books/${id}`, {
      method: "DELETE",
    });
    fetchBooks();
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <div className="flex min-h-screen bg-slate-50">
      <AdminSidebar setUser={setUser} />
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
          {/* Table */}
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
                    <th className="p-4">Sold</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {books.map((book) => (
                    <tr key={book._id} className="border-t">
                      <td className="p-4">{book.title}</td>
                      <td className="p-4">{book.author}</td>
                      <td className="p-4">₹{book.price}</td>
                      <td className="p-4">{book.stock}</td>
                      <td className="p-4">{book.sold}</td>
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