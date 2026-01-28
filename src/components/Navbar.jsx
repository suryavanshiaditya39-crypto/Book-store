import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-indigo-600 relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-indigo-600"
      : "text-slate-600 hover:text-indigo-700 transition";
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-50 via-white to-blue-50 border-b border-indigo-100">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold text-indigo-900">
          <span className="text-indigo-600 text-2xl">📘</span>
          BOOKSTORE
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-base font-medium">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/books" className={navLinkClass}>Books</NavLink>
          <NavLink to="/categories" className={navLinkClass}>Categories</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
        </nav>
        {/* Right Section */}
        <div className="hidden md:flex items-center gap-5">
          <input
            type="text"
            placeholder="Search books..."
            className="w-52 px-4 py-2.5 text-sm rounded-xl border border-indigo-200 bg-white
                       focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
          />
          <button
            className="text-indigo-600 text-2xl hover:text-indigo-800 transition"
            title="Cart"
          >
            🛒
          </button>
          {isLoggedIn ? (
            <button
              onClick={() => setIsLoggedIn(false)}
              className="px-5 py-2.5 text-sm font-semibold rounded-xl text-white
                         bg-gradient-to-r from-indigo-500 to-blue-500
                         hover:from-indigo-600 hover:to-blue-600 transition shadow-md"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => setIsLoggedIn(true)}
              className="px-5 py-2.5 text-sm font-semibold rounded-xl
                         text-indigo-700 bg-indigo-50 border border-indigo-200
                         hover:bg-indigo-100 transition"
            >
              Login
            </button>
          )}
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-xl hover:bg-indigo-100 transition"
        >
          <span className="text-2xl text-indigo-900">☰</span>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-indigo-50 to-white
                        border-t border-indigo-100 px-6 py-6 space-y-5 text-base">
          <nav className="space-y-4">
            <NavLink onClick={() => setMenuOpen(false)} to="/" className={navLinkClass}>Home</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/books" className={navLinkClass}>Books</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/categories" className={navLinkClass}>Categories</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/about" className={navLinkClass}>About</NavLink>
          </nav>
          <input
            type="text"
            placeholder="Search books..."
            className="w-full px-4 py-2.5 rounded-xl border border-indigo-200
                       focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
          />
          <button className="text-indigo-600 text-2xl hover:text-indigo-800 transition">
            🛒
          </button>
          {isLoggedIn ? (
            <button
              onClick={() => {
                setIsLoggedIn(false);
                setMenuOpen(false);
              }}
              className="w-full py-3 rounded-xl text-white font-semibold
                         bg-gradient-to-r from-indigo-500 to-blue-500"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                setIsLoggedIn(true);
                setMenuOpen(false);
              }}
              className="w-full py-3 rounded-xl text-indigo-700 font-semibold
                         bg-indigo-50 border border-indigo-200"
            >
              Login
            </button>
          )}
        </div>
      )}
    </header>
  );
}