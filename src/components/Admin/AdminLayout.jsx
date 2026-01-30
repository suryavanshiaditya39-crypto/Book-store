import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";
export default function AdminLayout({ children, title }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* 1. Fixed Sidebar on the Left */}
      <AdminSidebar />
      <div className="flex-grow flex flex-col">
        {/* 2. Top Admin Header */}
        <AdminNavbar title={title} />
        {/* 3. The actual page content (Dashboard, Books, etc.) */}
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}