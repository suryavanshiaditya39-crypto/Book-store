import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useCart } from "../context/CartProvider";
export default function Navbar() {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  // 👉 Updated navLinks to include Categories for regular users
  const navLinks = user?.role === "admin" 
    ? [
        { name: "Dashboard", path: "/admin/dashboard" }, 
        { name: "Inventory", path: "/admin/manage-books" }
      ]
    : [
        { name: "Home", path: "/home" }, 
        { name: "Books", path: "/books" },
        { name: "Categories", path: "/categories" } // Added this line
      ];
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-12">
        <Link to="/" className="text-2xl font-black tracking-tighter text-indigo-600 flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">B</div>
          BookStore
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-sm font-bold transition-all duration-200 ${
                location.pathname === link.path 
                  ? 'text-indigo-600' 
                  : 'text-slate-500 hover:text-indigo-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-6">
        {user?.role !== "admin" && (
          <Link to="/cart" className="relative p-2 text-slate-600 hover:bg-slate-50 rounded-full transition-all group">
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white animate-in zoom-in">
                {totalItems}
              </span>
            )}
          </Link>
        )}
        <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-slate-900 leading-none">{user?.fullname || "User"}</p>
            <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">{user?.role || 'Member'}</p>
          </div>
          <button 
            onClick={() => { logout(); navigate("/login"); }} 
            className="px-4 py-2 text-xs font-bold text-red-500 hover:bg-red-50 rounded-lg transition-all"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}