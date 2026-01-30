import React, { useState } from "react";
import { Routes, Route, Navigate , useLocation } from "react-router-dom";
import "./App.css";
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Landing from "./components/Landing";
// Pages
import Home from "./pages/Home";
import Books from "./pages/Books";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Dashboard from "./pages/Admin/Dashbord";
import ManageBooks from "./pages/Admin/ManageBooks";
import Orders from "./pages/Admin/Orders";
import { userAuth } from "./context/AuthProvider";


function App() {
  const { user } = userAuth();
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased text-slate-900">
      {/* Navbar visible only after login */}
      {user && !isAdminRoute && <Navbar />}
      <main className="flex-grow flex flex-col">
        <Routes>
          <Route path="/login" element={user ? <Navigate to={user.role === 'admin' ? "/admin/dashboard" : "/"} /> : <Login />} />
          
          <Route path="/" element={user ? <Landing /> : <Navigate to="/login" />} />
          <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/books" element={user ? <Books /> : <Navigate to="/login" />} />
          <Route path="/categories" element={user ? <Categories /> : <Navigate to="/login" />} />
          <Route path="/about" element={user ? <About /> : <Navigate to="/login" />} />
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={user?.role === "admin" ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/admin/manage-books" element={user?.role === "admin" ? <ManageBooks /> : <Navigate to="/login" />} />
          <Route path="/admin/orders" element={user?.role === "admin" ? <Orders /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to={user ? (user.role === 'admin' ? "/admin/dashboard" : "/") : "/login"} />} />
        </Routes>
      </main>
      </div> ) };
export default App; 