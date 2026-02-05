import { useEffect, useState } from "react";
import { useCart } from "../context/CartProvider";
export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  // Helper to give each category a unique professional gradient
  const getCategoryStyles = (category) => {
    const styles = {
      frontend: "from-cyan-400 to-blue-600",
      backend: "from-slate-700 to-slate-900",
      design: "from-purple-500 to-pink-500",
      architecture: "from-amber-400 to-orange-600",
      default: "from-indigo-500 to-blue-700",
    };
    return styles[category?.toLowerCase()] || styles.default;
  };
  useEffect(() => {
    fetch("http://localhost:5000/api/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error", err);
        setLoading(false);
      });
  }, []);
  return (
    <main className="bg-[#fdfdff] min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-8 pt-20">
        
        {/* HEADER */}
        <header className="mb-20 text-center md:text-left">
          <h1 className="text-6xl font-black text-slate-900 tracking-tighter uppercase italic border-l-8 border-indigo-600 pl-6">
            The <span className="text-indigo-600">Stack</span>
          </h1>
          <p className="text-slate-400 mt-4 text-xl font-medium tracking-wide">
            Premium documentation for the next generation.
          </p>
        </header>
        {/* LOADING */}
        {loading ? (
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-80 bg-slate-100 rounded-[3rem] animate-pulse"
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((book) => (
              <div key={book._id} className="group relative">
                {/* COVER */}
                <div
                  className={`relative aspect-[4/5] rounded-[2.5rem] p-8 overflow-hidden bg-gradient-to-br ${getCategoryStyles(
                    book.category
                  )} shadow-2xl transition-all duration-500 group-hover:-rotate-2 group-hover:scale-[1.03] group-hover:shadow-indigo-200`}
                >
                  {/* Abstract Elements */}
                  <div className="absolute top-[-10%] right-[-10%] w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-[-5%] left-[-5%] w-32 h-32 bg-black/20 rounded-full blur-xl"></div>
                  {/* Spine */}
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/10"></div>
                  {/* Cover Content */}
                  <div className="relative h-full flex flex-col justify-between border border-white/20 p-4 rounded-2xl backdrop-blur-[2px]">
                    <div className="flex justify-between items-start">
                      <span className="text-[11px] font-semibold tracking-[0.25em] text-white/70 uppercase">
                        {book.category || "Volume 1"}
                      </span>
                      <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center text-[10px]">
                        ✕
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-white text-lg font-medium leading-snug tracking-tight line-clamp-3">
                        {book.title}
                      </h4>
                      <div className="h-1 w-12 bg-white/40 rounded"></div>
                    </div>
                  </div>
                </div>
                {/* INFO */}
                <div className="mt-8 px-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 tracking-tight line-clamp-1">
                      {book.title}
                    </h3>
                    <p className="text-slate-500 font-medium text-xs mt-1 tracking-wide">
                      {book.author}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <span className="text-xl font-semibold text-slate-900 tracking-tight">
                      ₹{book.price}
                    </span>
                    <button
                      onClick={() => addToCart(book)}
                      className="bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg active:scale-90"
                    >
                      Collect
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}