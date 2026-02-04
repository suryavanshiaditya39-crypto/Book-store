import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await login(email, password);
    setLoading(false);
    if (result.success) {
      toast.success("Logged in successfully!");
      navigate(result.role === "admin" ? "/admin/dashboard" : "/");
    } else {
      toast.error(result.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <form onSubmit={handleSignIn} className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-slate-900">Welcome Back</h2>
          <div className="bg-blue-50 p-3 rounded-xl mt-4 text-xs text-blue-800">
             <p className="font-bold uppercase tracking-widest text-blue-600 mb-1">Demo Credentials</p>
             <p>Admin: admin@gmail.com | admin123</p>
           
          </div>
        </div>
        <div className="space-y-4">
          <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 border outline-none focus:border-blue-500" />
          <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 border outline-none focus:border-blue-500" />
          
          <button type="submit" disabled={loading} className="w-full py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-all">
            {loading ? "Verifying..." : "Sign In"}
          </button>
          <p className="text-center text-sm text-slate-500">
            Don't have an account? <Link to="/signup" className="text-blue-600 font-bold hover:underline">Create Account</Link>
          </p>
        </div>
      </form>
    </div>
  );
}