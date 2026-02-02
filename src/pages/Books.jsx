import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  //update the books state with data from backend (Fetching data is side eff)
  useEffect(() => {
    fetch("http://localhost:5000/api/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch books", err);
        setLoading(false);
      });
  }, []);
  return (
    <main className="bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-indigo-900 mb-12">
          All Books
        </h1>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {books.map((book) => (
            <div
              key={book._id}
              className="bg-white rounded-2xl border p-6 hover:shadow-xl transition"
            >
              <div className="aspect-[3/4] mb-5 bg-indigo-50 rounded-xl flex items-center justify-center">
                <span className="text-indigo-300">Cover</span>
              </div>
              <p className="text-xs font-bold text-indigo-600 uppercase">
                {book.category || "General"}
              </p>
              <h3 className="text-lg font-semibold mt-1">
                {book.title}
              </h3>
              <p className="text-slate-500 mt-1">₹{book.price}</p>
              {/* Price */}
                <p className="text-slate-500 mt-1">
                  ₹{book.price}
                </p>
                <button
                  onClick={() => {
                    console.log("Button clicked", book);
                    addToCart(book);
                  }}
                  className="mt-4 w-full py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
                >
                  Add to Cart
                </button>
            </div>

          ))}
        </div>
      </div>
    </main>
  );
}