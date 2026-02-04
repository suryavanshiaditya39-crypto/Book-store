import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useCart } from "../context/CartContext";
export default function Navbar() {
  const { user, logout } = useAuth();
  const {cart} = useCart();
  const navigate = useNavigate();
  const cartItemCount = cart.reduce((total,item)=> total + item.qty, 0);  
    
  
  const handleLogout = () => {
    logout(); // Calls central logout to clear state and storage
    navigate("/login");
  };
  return (
    <nav className="bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-xl font-bold text-blue-600">BookStore</Link>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          {user?.role === "admin" ? (
            <>
              <Link to="/admin/dashboard" className="text-purple-600 font-bold border-l pl-6 border-slate-200">Admin Dashboard</Link>
              <Link to="/admin/manage-books" className="hover:text-purple-600">Manage Books</Link>
              <Link to="/admin/orders" className="hover:text-purple-600">Orders</Link>
            </>
          ) : (
            <>
              <Link to="/home" className="hover:text-blue-600">Home</Link>
              <Link to="/books" className="hover:text-blue-600">Books</Link>
              <Link to="/categories" className="hover:text-blue-600">Categories</Link>
              <Link to="/about" className="hover:text-blue-600">About</Link>
              <Link to="/orders" className="hover:text-blue-600">myorders</Link>
            </>
          )}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xs font-medium text-slate-400 bg-slate-50 px-3 py-1 rounded-full uppercase">
          {user?.role === 'admin' ? "Admin Mode" : user?.email}
        </span>
        <button onClick={handleLogout} className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-semibold hover:bg-red-50 hover:text-red-600 transition-all">
          Logout
        </button>
      </div>
    </nav>
  );
}