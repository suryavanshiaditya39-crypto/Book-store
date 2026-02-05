import React from "react";
import { useCart } from "../context/CartProvider";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cartItems, removeFromCart, cartTotal } = useCart();
  // 👉 Matching the style from Books.jsx
  const getCategoryStyles = (category) => {
    const styles = {
      frontend: "from-cyan-400 to-blue-600",
      backend: "from-slate-700 to-slate-900",
      design: "from-purple-500 to-pink-500",
      architecture: "from-amber-400 to-orange-600",
      default: "from-indigo-500 to-blue-700",
    };
    return styles[category?.toLowerCase()] || styles.default;
  };
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6">
          <svg className="w-12 h-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <h2 className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic">Empty Stack</h2>
        <p className="text-slate-500 mt-2 mb-8 text-sm font-medium">Looks like you haven't collected any documentation yet.</p>
        <Link to="/books" className="px-8 py-4 bg-indigo-600 text-white rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100">
          Explore the Stack
        </Link>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <h1 className="text-5xl font-black text-slate-900 mb-12 tracking-tighter uppercase italic border-l-8 border-indigo-600 pl-6">
        Your <span className="text-indigo-600">Collection</span>
      </h1>
      <div className="grid lg:grid-cols-3 gap-16">
        {/* --- ITEMS LIST --- */}
        <div className="lg:col-span-2 space-y-8">
          {cartItems.map((item) => (
            <div key={item._id} className="group flex flex-col sm:flex-row gap-8 p-6 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500">
              
              {/* 👉 THE ARTISTIC MINI-COVER (Matching Books.jsx) */}
              <div className={`relative w-full sm:w-32 aspect-[4/5] sm:h-40 rounded-2xl overflow-hidden bg-gradient-to-br ${getCategoryStyles(item.category)} shadow-lg flex-shrink-0`}>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] m-2 rounded-xl border border-white/20 flex flex-col justify-end p-3">
                   <div className="h-0.5 w-6 bg-white/40 mb-1"></div>
                   <p className="text-[7px] text-white/80 font-bold uppercase truncate">{item.title}</p>
                </div>
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-black/10"></div>
              </div>
              {/* INFO */}
              <div className="flex-grow flex flex-col justify-between py-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-indigo-500 font-bold text-xs mt-1 uppercase tracking-widest italic">
                      {item.author}
                    </p>
                  </div>
                  <button onClick={() => removeFromCart(item._id)} className="p-2 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
                <div className="flex justify-between items-end mt-6">
                  <div className="space-y-1">
                    <p className="text-2xl font-black text-slate-900 tracking-tighter">₹{item.price}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Quantity: {item.quantity}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* --- SUMMARY --- */}
       {/* --- MINIMALIST SUMMARY --- */}
<div className="relative">
  <div className="sticky top-32 bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden">
    
    {/* Subtle top-accent line */}
    <div className="absolute top-0 left-0 right-0 h-1.5 bg-indigo-600 opacity-90"></div>
    
    <div className="mb-10">
      <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-1">Billing Summary</h2>
      <p className="text-2xl font-black text-slate-900 tracking-tight uppercase italic">Checkout info</p>
    </div>
    <div className="space-y-6 relative z-10">
      {/* Detail Rows */}
      <div className="flex justify-between items-center group">
        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Subtotal</span>
        <span className="text-lg font-black text-slate-900 tracking-tighter">₹{cartTotal}</span>
      </div>
      
      <div className="flex justify-between items-center group">
        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Logistics</span>
        <span className="text-xs font-black text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full uppercase">Complimentary</span>
      </div>
      
      <div className="flex justify-between items-center group">
        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Tax (GST)</span>
        <span className="text-xs font-bold text-slate-400 italic">Included</span>
      </div>
      
      {/* Total Section */}
      <div className="pt-10 mt-6 border-t border-slate-100">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] mb-1">Grand Total</p>
            <span className="text-5xl font-black tracking-tighter text-slate-900">₹{cartTotal}</span>
          </div>
        </div>
      </div>
      {/* Professional CTA */}
      <button className="group w-full mt-10 bg-slate-900 text-white py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] transition-all hover:bg-indigo-600 hover:shadow-2xl hover:shadow-indigo-100 active:scale-95 flex items-center justify-center gap-3">
        Confirm Purchase
        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
      {/* Trust Badge */}
      <div className="mt-8 flex items-center justify-center gap-2">
        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Secure encrypted session</p>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};
export default Cart;