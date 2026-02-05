import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
export default function Home() {
  const { user } = useAuth();
  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">
          Hello, {user?.fullname?.split(' ')[0] || 'Member'}.
        </h1>
        <p className="text-slate-500 mt-2 font-medium">Here’s what’s happening in the library today.</p>
      </header>
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Featured Card */}
        <div className="lg:col-span-2 bg-indigo-600 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
          <div className="relative z-10 max-w-md">
            <h2 className="text-3xl font-bold mb-4">Mastering the <br/>Technical Interview</h2>
            <p className="text-indigo-100 mb-8 leading-relaxed">Our newest arrival covers system design, algorithms, and the soft skills needed for Senior roles.</p>
            <Link to="/books" className="px-6 py-3 bg-white text-indigo-600 rounded-xl font-bold text-sm inline-block transition-transform hover:scale-105">
              Get Your Copy
            </Link>
          </div>
          <div className="absolute right-[-10%] bottom-[-20%] text-[15rem] opacity-10 font-black rotate-12 select-none">
            READ
          </div>
        </div>
        {/* Status Sidebar */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4">Reading Progress</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-xs font-bold text-slate-400 uppercase">
                <span>Books Read</span>
                <span>3/10</span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full w-[30%] rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-900 p-8 rounded-[2rem] text-white">
            <h3 className="font-bold mb-2">Member Benefit</h3>
            <p className="text-slate-400 text-sm leading-relaxed">You have <span className="text-white font-bold">Free Shipping</span> enabled for all orders over ₹999.</p>
          </div>
        </div>
      </div>
    </div>
  );
}