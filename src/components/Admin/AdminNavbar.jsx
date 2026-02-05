import React from "react";
export default function AdminNavbar({ title }) {
  return (
    <header className="h-24 bg-white/70 backdrop-blur-xl border-b border-slate-100 flex items-center justify-between px-10 sticky top-0 z-20">
      <div>
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">{title}</h2>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Administrator Access</p>
      </div>
      
      <div className="flex items-center gap-6">
        {/* Search Placeholder */}
        <div className="hidden lg:flex items-center bg-slate-100 px-4 py-2 rounded-xl border border-transparent focus-within:border-indigo-200 transition-all">
          <span className="text-slate-400 mr-2">🔍</span>
          <input 
            type="text" 
            placeholder="Search records..." 
            className="bg-transparent text-sm outline-none w-48 text-slate-600 placeholder:text-slate-400"
          />
        </div>
        {/* Notifications */}
        <button className="relative p-2.5 bg-slate-50 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white animate-pulse"></span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        {/* User Profile */}
        <div className="flex items-center gap-3 pl-6 border-l border-slate-100">
          <div className="text-right">
            <p className="text-xs font-black text-slate-900">Admin Account</p>
            <p className="text-[10px] text-emerald-500 font-bold uppercase">Online</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 shadow-md flex items-center justify-center text-white font-bold text-xs">
            AD
          </div>
        </div>
      </div>
    </header>
  );
}