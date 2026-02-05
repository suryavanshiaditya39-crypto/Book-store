import React from "react";
import { useNavigate } from "react-router-dom";
const CAT_DATA = [
  { name: "Frontend", icon: "⚛️", desc: "React, Vue, CSS and Modern JS", color: "bg-blue-50 text-blue-700" },
  { name: "Backend", icon: "⚙️", desc: "Node, Python, Go and Databases", color: "bg-emerald-50 text-emerald-700" },
  { name: "Design", icon: "🎨", desc: "UI/UX, Figma and Visual Systems", color: "bg-purple-50 text-purple-700" },
  { name: "Architecture", icon: "🏗️", desc: "System Design & Distributed Systems", color: "bg-orange-50 text-orange-700" },
  { name: "DevOps", icon: "☁️", desc: "Docker, Kubernetes and AWS", color: "bg-cyan-50 text-cyan-700" },
  { name: "Career", icon: "📈", desc: "Soft Skills and Engineering Management", color: "bg-rose-50 text-rose-700" },
];
export default function Categories() {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Topics</h1>
        <p className="text-slate-500 mt-2">Specialized collections for every stage of your career.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CAT_DATA.map((cat) => (
          <div 
            key={cat.name}
            onClick={() => navigate(`/books?category=${cat.name}`)}
            className={`group p-8 rounded-[2rem] border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-xl transition-all cursor-pointer ${cat.color}`}
          >
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">
              {cat.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
            <p className="text-sm opacity-80 leading-relaxed">{cat.desc}</p>
            <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
              Explore Books →
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}