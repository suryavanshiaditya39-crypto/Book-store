import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../../context/AuthProvider"; //
export default function AdminSidebar() {
  const { logout } = userAuth(); // Get the logout function
  const navigate = useNavigate();
  const handleLogout = () => {
    logout(); // Calls the central logout
    navigate("/login");
  };
  return (
    <div className="w-64 bg-white border-r h-screen p-6 flex flex-col">
      <h2 className="text-blue-600 font-bold text-xl mb-10">Admin Panel</h2>
      
      <nav className="flex-grow space-y-4">
        <Link to="/admin/dashboard" className="block font-medium">Dashboard</Link>
        <Link to="/admin/manage-books" className="block font-medium">Books</Link>
      </nav>
      <button 
        onClick={handleLogout}
        className="mt-auto p-3 bg-red-50 text-red-600 rounded-xl font-bold"
      >
        Logout
      </button>
    </div>
  );
}