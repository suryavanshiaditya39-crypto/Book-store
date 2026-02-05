import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
export default function AdminSidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: "📊" },
    { name: "Inventory", path: "/admin/manage-books", icon: "📚" }
   
  ];
  return (
    <div className="w-72 bg-white border-r border-slate-100 h-screen sticky top-0 p-8 flex flex-col shadow-sm">
      {/* Brand Logo */}
      <Link to="/" className="flex items-center gap-3 mb-12 group">
  <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-indigo-200 group-hover:bg-indigo-700 transition-all">
    B
  </div>
  <div className="flex flex-col">
    <span className="text-xl font-black tracking-tighter text-slate-900 uppercase leading-none">Control</span>
    <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mt-1">Back to Store</span>
  </div>
</Link>
      
      {/* Navigation */}
      <nav className="flex-grow space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.path}
              to={item.path} 
              className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-200 group ${
                isActive 
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-indigo-600"
              }`}
            >
              <span className={`text-xl ${isActive ? "" : "grayscale group-hover:grayscale-0"}`}>
                {item.icon}
              </span>
              <span className="font-bold text-sm tracking-tight">{item.name}</span>
            </Link>
          );
        })}
      </nav>
      {/* Logout Button */}
      <button 
        onClick={handleLogout}
        className="mt-auto group flex items-center gap-4 px-4 py-4 rounded-2xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all duration-200"
      >
        <span className="text-xl grayscale group-hover:grayscale-0">🚪</span>
        <span className="font-bold text-sm">Logout</span>
      </button>
    </div>
  );
}