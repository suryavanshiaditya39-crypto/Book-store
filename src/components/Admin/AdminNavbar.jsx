import React from "react";
export default function AdminNavbar({ title }) {
  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 z-10">
      <h2 className="text-xl font-bold text-slate-800">{title}</h2>
      
      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors relative">
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          🔔
        </button>
        <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 font-bold text-xs">
          AD
        </div>
      </div>
    </header>
  );
}