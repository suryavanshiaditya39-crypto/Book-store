/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";
function Signup() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/user/signup", data);
      if (res.data) {
        toast.success("Signup Successfully");
        const userData = { ...res.data.user, token: res.data.token };
        localStorage.setItem("Users", JSON.stringify(userData));
        setUser(userData);
        // eslint-disable-next-line react-hooks/immutability
        axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
        navigate("/");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };
  return (
   // Simplified snippet for Signup button and container style
<div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
  <div className="w-full max-w-md bg-white p-12 rounded-[2.5rem] shadow-2xl shadow-indigo-100 border border-slate-100">
    <h3 className="text-3xl font-black text-slate-900 mb-2">Join us.</h3>
    <p className="text-slate-500 mb-8">Create an account to start building your library.</p>
    
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <input {...register("fullname")} className="w-full px-5 py-4 bg-slate-50 border-transparent focus:bg-white focus:border-indigo-500 rounded-2xl transition-all outline-none" placeholder="Full Name" />
      <input {...register("email")} className="w-full px-5 py-4 bg-slate-50 border-transparent focus:bg-white focus:border-indigo-500 rounded-2xl transition-all outline-none" placeholder="Email" />
      <input type="password" {...register("password")} className="w-full px-5 py-4 bg-slate-50 border-transparent focus:bg-white focus:border-indigo-500 rounded-2xl transition-all outline-none" placeholder="Password" />
      
      <button className="w-full bg-indigo-600 py-4 text-white rounded-2xl font-bold shadow-xl shadow-indigo-100 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all">
        Create Account
      </button>
    </form>
  </div>
</div>
  );
}
export default Signup;