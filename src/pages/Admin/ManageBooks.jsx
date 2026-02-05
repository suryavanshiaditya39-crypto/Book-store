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
      const res = await axios.get("/api/books");
      setBooks(res.data);
      setLoading(false);
    } catch (error) {
      toast.error("Error loading inventory");
      setLoading(false);
    }
  };
  const deleteBook = async (id) => {
    if (!window.confirm("Confirm deletion of this title?")) return;
    try {
      await axios.delete(`/api/books/${id}`);
      toast.success("Inventory updated");
      fetchBooks();
    } catch (error) {
      toast.error("Failed to delete");
    }
  };
  useEffect(() => { fetchBooks(); }, []);
  return (
    <div className="flex min-h-screen bg-slate-50">
      <AdminSidebar />
      <div className="flex-grow flex flex-col">
        <AdminNavbar title="Inventory Control" />
        <main className="p-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Book Catalog</h2>
              <p className="text-slate-500 font-medium">Add, update, or remove books from your store.</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200 flex items-center gap-2"
            >
              <span>Add New Title</span>
              <span className="text-xl leading-none">+</span>
            </button>
          </div>
          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100">
                    <th className="p-6 text-xs font-bold uppercase tracking-widest text-slate-400">Book Details</th>
                    <th className="p-6 text-xs font-bold uppercase tracking-widest text-slate-400">Category</th>
                    <th className="p-6 text-xs font-bold uppercase tracking-widest text-slate-400">Price</th>
                    <th className="p-6 text-xs font-bold uppercase tracking-widest text-slate-400">Stock</th>
                    <th className="p-6 text-xs font-bold uppercase tracking-widest text-slate-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {loading ? (
                    <tr><td colSpan="5" className="p-10 text-center text-slate-400 font-medium animate-pulse">Fetching inventory records...</td></tr>
                  ) : books.map((book) => (
                    <tr key={book._id} className="hover:bg-slate-50/80 transition-colors group">
                      <td className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-14 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                             <img src={book.image} className="w-full h-full object-cover" alt="" />
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 line-clamp-1">{book.title}</p>
                            <p className="text-xs text-slate-500 mt-0.5">{book.author}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-6">
                        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase rounded-full tracking-wider">
                          {book.category || "General"}
                        </span>
                      </td>
                      <td className="p-6 font-bold text-slate-900">₹{book.price}</td>
                      <td className="p-6">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${book.stock > 10 ? 'bg-emerald-500' : 'bg-rose-500'}`}></div>
                          <span className="text-sm font-semibold text-slate-700">{book.stock} units</span>
                        </div>
                      </td>
                      <td className="p-6">
                        <button
                          onClick={() => deleteBook(book._id)}
                          className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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