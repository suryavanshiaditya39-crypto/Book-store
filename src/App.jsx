import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased text-slate-900">
      {/* Navbar visible only after login */}
      {isLoggedIn && (
        <Navbar
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
      <main className="flex-grow">
        <Routes>
          {/* Login Route */}
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/" />
              ) : (
                <Login setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />
          {/* Home route (Landing page component) */}
          <Route
            path="/"
            element={isLoggedIn ? <Landing /> : <Navigate to="/login" />}
          />
          {/* Pages */}
          <Route
            path="/home"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/books"
            element={isLoggedIn ? <Books /> : <Navigate to="/login" />}
          />
          <Route
            path="/categories"
            element={isLoggedIn ? <Categories /> : <Navigate to="/login" />}
          />
          <Route
            path="/about"
            element={isLoggedIn ? <About /> : <Navigate to="/login" />}
          />
          {/* Fallback */}
          <Route
            path="*"
            element={<Navigate to={isLoggedIn ? "/" : "/login"} />}
          />
        </Routes>
      </main>
      {/* Footer visible only after login */}
      {isLoggedIn && <Footer />}
    </div>
  );
}
export default App;