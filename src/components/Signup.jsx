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
    <div className="flex h-screen items-center justify-center bg-slate-50">
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
        <h3 className="font-bold text-2xl text-slate-900 mb-6">Create Account</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input type="text" placeholder="Full Name" {...register("fullname", { required: true })} className="w-full px-4 py-2 border rounded-xl outline-none" />
          <input type="email" placeholder="Email" {...register("email", { required: true })} className="w-full px-4 py-2 border rounded-xl outline-none" />
          <input type="password" placeholder="Password" {...register("password", { required: true })} className="w-full px-4 py-2 border rounded-xl outline-none" />
          <button className="w-full bg-pink-500 text-white py-3 rounded-xl font-bold hover:bg-pink-600 transition-all">Signup</button>
          <p className="text-center text-sm text-slate-600">
            Already have account? <Link to="/login" className="text-blue-600 underline">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Signup;