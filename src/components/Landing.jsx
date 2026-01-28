import { Link } from "react-router-dom";
export default function Landing() {
  const books = [
    { title: "React Handbook", price: "799", tag: "Frontend" },
    { title: "Advanced JavaScript", price: "899", tag: "Core" },
    { title: "System Design", price: "1,299", tag: "Architecture" },
  ];
  return (
    <main className="bg-gradient-to-b from-indigo-50 via-white to-slate-50">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-28 text-center">
          <span className="inline-block mb-4 text-indigo-600 font-semibold tracking-widest text-xs uppercase">
            Curated Excellence
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-indigo-900 leading-tight">
            Books for people <br />
            <span className="text-indigo-400">who build things.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Skip the noise. We curate high-quality physical books for developers,
            designers, and system thinkers.
          </p>
          {/* ================= CTA BUTTONS ================= */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* 
              PRIMARY CTA
              👉 Converted from <button> to <Link>
              👉 Navigates to /books page
            */}
            <Link
              to="/books"
              className="
                inline-flex items-center justify-center
                px-8 py-4
                text-sm md:text-base font-semibold
                rounded-full
                text-white
                bg-gradient-to-r from-indigo-500 to-blue-500
                hover:from-indigo-600 hover:to-blue-600
                focus:outline-none focus:ring-4 focus:ring-indigo-500/30
                transition-all duration-200
                shadow-lg shadow-indigo-200
                hover:-translate-y-0.5
              "
            >
              Explore the Library →
            </Link>
            {/* 
              SECONDARY CTA
              👉 Navigates to /categories page
            */}
            <Link
              to="/categories"
              className="
                inline-flex items-center justify-center
                px-8 py-4
                text-sm md:text-base font-semibold
                rounded-full
                text-blue-700
                bg-gradient-to-r from-blue-50 to-indigo-50
                border border-blue-200
                hover:from-blue-100 hover:to-indigo-100
                hover:text-blue-800
                focus:outline-none focus:ring-4 focus:ring-blue-300/40
                transition-all duration-200
              "
            >
              View Categories
            </Link>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 to-transparent" />
      </section>
      {/* ================= FEATURED BOOKS ================= */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="mb-16 text-center">
            <p className="text-xs font-semibold tracking-widest uppercase text-indigo-600 mb-3">
              Featured Collection
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">
              Hand-picked for modern builders
            </h2>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {books.map((book, i) => (
              <div
                key={i} // key is required for list rendering in React
                className="
                  group bg-white rounded-2xl border border-slate-200 p-6
                  hover:shadow-xl hover:shadow-indigo-200/40
                  hover:border-indigo-200
                  transition-all duration-300 cursor-pointer
                "
              >
                <div
                  className="
                    aspect-[3/4] mb-6 rounded-xl bg-indigo-50
                    border border-dashed border-indigo-200
                    flex items-center justify-center
                    group-hover:bg-indigo-100 transition
                  "
                >
                  <span className="text-indigo-300 text-sm">Cover Art</span>
                </div>
                <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
                  {book.tag}
                </p>
                <h3 className="text-lg font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                  {book.title}
                </h3>
                <p className="text-slate-500 mt-1 font-medium">
                  ₹{book.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= VALUE PROPS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid gap-12 md:grid-cols-3 text-center">
          <div className="bg-white rounded-xl p-6 border border-indigo-100">
            <h3 className="text-lg font-semibold text-indigo-900 mb-2">
              Carefully Curated
            </h3>
            <p className="text-slate-600">
              Every book is reviewed by experienced engineers.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-indigo-100">
            <h3 className="text-lg font-semibold text-indigo-900 mb-2">
              Premium Prints
            </h3>
            <p className="text-slate-600">
              High-quality paper and bindings built to last.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-indigo-100">
            <h3 className="text-lg font-semibold text-indigo-900 mb-2">
              Fast Delivery
            </h3>
            <p className="text-slate-600">
              Reliable shipping across India with safe packaging.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}