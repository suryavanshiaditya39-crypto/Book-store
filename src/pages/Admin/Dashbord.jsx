import React from "react";
import { userAuth } from "../../context/AuthProvider"; // Use the central auth
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";
const Dashboard = () => {
  const { user } = userAuth(); // Get admin data from provider
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* 1. Show the Admin-specific Sidebar */}
      <AdminSidebar /> 
      <div className="flex-grow flex flex-col">
        {/* 2. Show the Admin-specific Top Header */}
        <AdminNavbar title="Dashboard Overview" /> 
        <main className="p-8">
          <h1 className="text-2xl font-bold">Welcome, {user?.email}</h1>
          {/* Your dashboard cards and tables go here */}
        </main>
      </div>
    </div>
  );
};
export default Dashboard;