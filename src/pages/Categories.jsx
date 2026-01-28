export default function Categories() {
  const categories = [
    "Frontend",
    "Backend",
    "System Design",
    "DevOps",
    "Architecture",
  ];
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-bold text-indigo-900 mb-12">
          Categories
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="rounded-xl border border-indigo-100 p-6
                         hover:bg-indigo-50 hover:border-indigo-200 transition"
            >
              <h3 className="font-semibold text-indigo-800">{cat}</h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}