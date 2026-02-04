import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup"; // Added Signup
import Landing from "./components/Landing";
import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";
import Categories from "./pages/Categories";
import Dashboard from "./pages/Admin/dashbord";
import ManageBooks from "./pages/Admin/ManageBooks";
import Orders from "./pages/Admin/Orders";
function App() {
  const { user, loading } = useAuth();
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  if (loading) return <div className="flex h-screen items-center justify-center">Loading...</div>;
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased text-slate-900">
      {user && !isAdminRoute && <Navbar />}
      <main className="flex-grow flex flex-col">
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={user ? <Navigate to={user.role === 'admin' ? "/admin/dashboard" : "/"} /> : <Login />} />
          <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
          
          {/* Private User Routes */}
          <Route path="/" element={user ? <Landing /> : <Navigate to="/login" />} />
          <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/books" element={user ? <Books /> : <Navigate to="/login" />} />
          <Route path="/categories" element={user ? <Categories /> : <Navigate to="/login" />} />
          <Route path="/about" element={user ? <About /> : <Navigate to="/login" />} />
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={user?.role === "admin" ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/admin/manage-books" element={user?.role === "admin" ? <ManageBooks /> : <Navigate to="/login" />} />
          <Route path="/admin/orders" element={user?.role === "admin" ? <Orders /> : <Navigate to="/login" />} />
          {/* Catch All */}
          <Route path="*" element={<Navigate to={user ? (user.role === 'admin' ? "/admin/dashboard" : "/") : "/login"} />} />
        </Routes>
      </main>
      {user && !isAdminRoute && <Footer />}
    </div>
  );
}
export default App;