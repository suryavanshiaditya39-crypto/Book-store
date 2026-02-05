import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* --- BRAND COLUMN --- */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-black tracking-tighter text-indigo-600 flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-sm">B</div>
              BookStore
            </Link>
            <p className="text-slate-500 leading-relaxed font-medium">
              Curating high-quality physical books for the people who build the future of technology.
            </p>
          </div>
          {/* --- QUICK LINKS --- */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 mb-6">Shop</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><Link to="/books" className="hover:text-indigo-600 transition-colors">All Books</Link></li>
              <li><Link to="/categories" className="hover:text-indigo-600 transition-colors">Categories</Link></li>
              <li><Link to="/home" className="hover:text-indigo-600 transition-colors">Member Home</Link></li>
            </ul>
          </div>
          {/* --- SUPPORT --- */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 mb-6">Support</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><Link to="/about" className="hover:text-indigo-600 transition-colors">About Us</Link></li>
              <li><button className="hover:text-indigo-600 transition-colors text-left">Privacy Policy</button></li>
              <li><button className="hover:text-indigo-600 transition-colors text-left">Terms of Service</button></li>
            </ul>
          </div>
          {/* --- NEWSLETTER/CONNECT --- */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 mb-6">Stay Updated</h4>
            <p className="text-sm text-slate-500 mb-4">Get notified about new technical releases.</p>
            <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-100">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-transparent px-3 py-2 text-xs outline-none w-full text-slate-600" 
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-indigo-700 transition-all">
                Join
              </button>
            </div>
          </div>
        </div>
        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            © 2026 BookStore Inc. Built for Builders.
          </p>
          <div className="flex gap-6">
            {/* Simple SVG Social Icons */}
            <button className="text-slate-300 hover:text-indigo-600 transition-colors">
               <span className="sr-only">Twitter</span>
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;