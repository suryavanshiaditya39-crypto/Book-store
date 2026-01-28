

export default function Books() {
  const books = [
    { title: "React Handbook", price: "799", tag: "Frontend" },
    { title: "Advanced JavaScript", price: "899", tag: "Core" },
    { title: "System Design", price: "1,299", tag: "Architecture" },
    { title: "Clean Code", price: "999", tag: "Best Practices" },
  ];
  return (
    <main className="bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-indigo-900 mb-12">
          All Books
        </h1>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {books.map((book, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border p-6 hover:shadow-xl transition"
            >
              <div className="aspect-[3/4] mb-5 bg-indigo-50 rounded-xl flex items-center justify-center">
                <span className="text-indigo-300">Cover</span>
              </div>
              <p className="text-xs font-bold text-indigo-600 uppercase">
                {book.tag}
              </p>
              <h3 className="text-lg font-semibold mt-1">
                {book.title}
              </h3>
              <p className="text-slate-500 mt-1">₹{book.price}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}