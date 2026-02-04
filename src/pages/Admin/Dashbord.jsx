import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";

const StatCard = ({ title, value, color, gradient }) => (
  <div
    className={`relative overflow-hidden rounded-2xl p-6 shadow-lg bg-gradient-to-br ${gradient}
      transform transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
  >
    <p className="text-sm text-white/80">{title}</p>
    <p className="text-4xl font-extrabold text-white mt-2">{value}</p>

    {/* Decorative circle */}
    <div
      className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full ${color} opacity-20`}
    />
  </div>
);

const Dashboard = () => {
  const { user } = useAuth();

  const [stats, setStats] = useState({
    totalBooks: 0,
    totalOrders: 0,
    soldBooks: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/books/stats")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Dashboard stats error", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex min-h-screen  from-blue-50 to-indigo-100">
      {/* Sidebar */}
      <AdminSidebar />

      <div className=" flex flex-col">
        {/* Top Navbar */}
        <AdminNavbar title="Dashboard Overview" />

        <main className="p-8">
          {/* Welcome */}
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-indigo-900">
              Welcome back 👋
            </h1>
            <p className="text-indigo-600 mt-1">
              {user?.email}
            </p>
          </div>

          {/* Stats Cards */}
          {loading ? (
            <p className="text-indigo-300">Loading dashboard data...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <StatCard
                title="Total Books"
                value={stats.totalBooks}
                gradient="from-blue-600 to-indigo-400"
                color="bg-blue-300"
              />

              <StatCard
                title="Total Orders"
                value={stats.totalOrders}
                gradient="from-indigo-600 to-blue-400"
                color="bg-indigo-300"
              />

              <StatCard
                title="Sold Books"
                value={stats.soldBooks}
                gradient="from-blue-600 to-sky-500"
                color="bg-sky-500"
              />

            </div>
          )}

          {/* Info Section */}
          <div className="mt-12 bg-white/70 backdrop-blur rounded-2xl p-6 border border-indigo-100">
            <h2 className="font-bold text-indigo-400 mb-2">
              Admin Insights
            </h2>
            <p className="text-sm text-indigo-300">
              Track sales, manage inventory, and monitor user activity in real time.
              More analytics and charts will be available soon.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;