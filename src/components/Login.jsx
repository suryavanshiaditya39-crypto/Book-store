import React,{useState} from "react";
import { userAuth } from "../context/AuthProvider";

export default function Login() {const { login } = userAuth(); // Call the central login function
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      const result = login(email, password);
      if (!result.success) {
        alert("Invalid credentials. Please check your email and password.");
      }
    } else {
      alert("Please enter both email and password.");
    }
  };
  

    return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <form 
        onSubmit={handleSignIn}
        className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Welcome Back</h2>
          <p className="text-slate-500 mt-2">Enter your details to access your library</p>
          <div className="bg-blue-50 p-3 rounded-xl mt-4">
             <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">Admin Demo Access</p>
             <p className="text-xs text-blue-800">admin@gmail.com | admin123</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold uppercase text-slate-500 ml-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="admin@gmail.com"
            />
          </div>
          <div>
            <label className="text-xs font-bold uppercase text-slate-500 ml-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-100 hover:bg-blue-700 active:scale-[0.98] transition-all"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}