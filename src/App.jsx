import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Landing from "./components/Landing";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
// 👉 IMPORTANT: Added Admin Page Imports
import Dashboard from "./pages/Admin/Dashbord";
import ManageBooks from "./pages/Admin/ManageBooks";
import Orders from "./pages/Admin/Orders";
function App() {
  const { user, loading } = useAuth();
  const location = useLocation();
  
  // Detect if we are in admin territory
  const isAdminRoute = location.pathname.startsWith("/admin");
  if (loading) return (
    <div className="flex h-screen items-center justify-center bg-slate-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
    </div>
  );
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased text-slate-900">
      <Toaster position="top-center" />
      
      {/* Only show Storefront Navbar if user is logged in AND not on an admin page */}
      {user && !isAdminRoute && <Navbar />}
      <main className="flex-grow flex flex-col">
        <Routes>
          {/* --- PUBLIC ACCESS --- */}
          <Route path="/login" element={user ? <Navigate to={user.role === 'admin' ? "/admin/dashboard" : "/"} /> : <Login />} />
          <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
          
          {/* --- USER PROTECTED ROUTES --- */}
          <Route path="/" element={user ? <Landing /> : <Navigate to="/login" />} />
          <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/books" element={user ? <Books /> : <Navigate to="/login" />} />
          <Route path="/categories" element={user ? <Categories /> : <Navigate to="/login" />} />
          <Route path="/cart" element={user ? <Cart /> : <Navigate to="/login" />} />
          {/* --- ADMIN PROTECTED ROUTES --- */}
          {/* Added logic to verify role for each admin sub-route */}
          <Route 
            path="/admin/dashboard" 
            element={user?.role === "admin" ? <Dashboard /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/admin/manage-books" 
            element={user?.role === "admin" ? <ManageBooks /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/admin/orders" 
            element={user?.role === "admin" ? <Orders /> : <Navigate to="/login" />} 
          />
          {/* --- FALLBACK LOGIC --- */}
          <Route 
            path="*" 
            element={<Navigate to={user ? (user.role === 'admin' ? "/admin/dashboard" : "/") : "/login"} />} 
          />
        </Routes>
      </main>
      {/* Footer also hidden for admin routes to keep dashboard clean */}
      {user && !isAdminRoute && <Footer />}
    </div>
  );
}
export default App;