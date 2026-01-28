export default function Login({ setIsLoggedIn }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Welcome Back</h2>
          <p className="text-slate-500 mt-2">Enter your details to access your library</p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold uppercase text-slate-500 ml-1">Email Address</label>
            <input 
              type="email"
              className="w-full mt-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="name@company.com"
            />
          </div>
          <div>
            <label className="text-xs font-bold uppercase text-slate-500 ml-1">Password</label>
            <input 
              type="password"
              className="w-full mt-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>
          <button
            onClick={() => setIsLoggedIn(true)}
            className="w-full mt-6 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-100 hover:bg-blue-700 active:scale-[0.98] transition-all"
          >
            Sign In
          </button>
        </div>
        
        <p className="mt-8 text-center text-sm text-slate-400">
          Don't have an account? <span className="text-blue-600 font-medium cursor-pointer">Create one</span>
        </p>
      </div>
    </div>
  );
}