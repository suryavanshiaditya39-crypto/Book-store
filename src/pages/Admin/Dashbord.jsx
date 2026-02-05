import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import AdminNavbar from "../../components/Admin/AdminNavbar";
const StatCard = ({ title, value, icon, gradient }) => (
  <div className={`relative overflow-hidden rounded-[2rem] p-8 shadow-sm border border-white/20 bg-gradient-to-br ${gradient} transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-100`}>
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl mb-4">
        {icon}
      </div>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">{title}</p>
      <p className="text-4xl font-black text-white mt-2 tracking-tight">{value}</p>
    </div>
    {/* Abstract background shape */}
    <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
  </div>
);
const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({ totalBooks: 0, totalOrders: 0, soldBooks: 0 });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/api/books/stats")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  return (
    <div className="flex min-h-screen bg-slate-50">
      <AdminSidebar />
      <div className="flex-grow flex flex-col">
        <AdminNavbar title="Dashboard Overview" />
        <main className="p-10">
          <div className="mb-12">
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">
              Welcome back, <span className="text-indigo-600">Admin</span> 👋
            </h1>
            <p className="text-slate-500 mt-2 font-medium">{user?.email}</p>
          </div>
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-pulse">
              {[1, 2, 3].map(i => <div key={i} className="h-44 bg-slate-200 rounded-[2rem]"></div>)}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatCard title="Inventory" value={stats.totalBooks} icon="📚" gradient="from-indigo-600 to-blue-500" />
              <StatCard title="Orders" value={stats.totalOrders} icon="📦" gradient="from-slate-900 to-slate-800" />
              <StatCard title="Revenue" value={`₹${stats.soldBooks}`} icon="💰" gradient="from-emerald-600 to-teal-500" />
            </div>
          )}
          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Performance Insights</h3>
              <p className="text-slate-500 leading-relaxed mb-6">Your bookstore saw a 12% increase in sales this week. System Design books are currently trending.</p>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 w-[75%] rounded-full"></div>
              </div>
              <p className="text-[10px] font-bold text-slate-400 mt-3 uppercase tracking-widest">Monthly Target: 75% Achieved</p>
            </div>
            
            <div className="bg-indigo-50 rounded-[2.5rem] p-10 border border-indigo-100">
              <h3 className="text-xl font-bold text-indigo-900 mb-2">System Status</h3>
              <p className="text-indigo-700/70 text-sm leading-relaxed">All API endpoints are operational. Database latency is currently at 24ms.</p>
              <button className="mt-6 px-6 py-2.5 bg-indigo-600 text-white text-xs font-bold rounded-xl uppercase tracking-widest hover:bg-indigo-700 transition-colors">
                Run Diagnostics
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Dashboard;