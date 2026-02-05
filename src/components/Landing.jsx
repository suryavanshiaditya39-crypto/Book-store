import { Link } from "react-router-dom";
export default function Landing() {
  return (
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">New Arrivals: Q1 2026 Edition</span>
            </div>
            <h1 className="text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Master your craft with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Expert Literature.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              The world's most comprehensive library for software engineers, designers, and tech leaders. Physical copies, delivered globally.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/books" className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 hover:-translate-y-1">
                Browse Library
              </Link>
              <Link to="/categories" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all">
                By Category
              </Link>
            </div>
            
            <div className="mt-10 flex items-center gap-6 border-t border-slate-100 pt-10">
              <div><p className="text-2xl font-bold text-slate-900">12k+</p><p className="text-sm text-slate-500">Readers</p></div>
              <div className="h-8 w-px bg-slate-200"></div>
              <div><p className="text-2xl font-bold text-slate-900">450+</p><p className="text-sm text-slate-500">Curated Titles</p></div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-10 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=800" 
              alt="Premium Books" 
              className="relative rounded-3xl shadow-2xl border border-white/20 transform rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </section>
      {/* --- REASONS SECTION --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Built for the Modern Workforce</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
             {/* Repeat your value props here with icons */}
             <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 text-indigo-600">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Verified Quality</h3>
                <p className="text-slate-600 leading-relaxed">We source directly from O'Reilly, Manning, and A Book Apart to ensure authenticity.</p>
             </div>
             {/* ... more cards ... */}
          </div>
        </div>
      </section>
    </div>
  );
}