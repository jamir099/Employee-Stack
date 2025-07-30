import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-emerald-400/80 via-teal-300/60 to-blue-200/50 relative">
          
      <div className="backdrop-blur-md bg-white/30 border border-white/50 rounded-2xl shadow-2xl px-10 py-7 mb-3 flex flex-col items-center transition-all">
        <div className="mb-7 text-3xl font-extrabold bg-gradient-to-r from-emerald-600 via-blue-500 to-teal-700 bg-clip-text text-transparent tracking-widest drop-shadow select-none">
          💻 Employe|Stack 
        </div>

        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center w-full gap-5"
        >
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-72 px-5 py-3 rounded-xl bg-white/70 border-2 border-emerald-400 
              focus:border-blue-400 transition-all text-lg text-gray-700 
              placeholder-emerald-900 shadow-md focus:ring-emerald-300 focus:ring-2 outline-none
              "
            type="email"
            placeholder="Enter your email"
            autoComplete="username"
          />

          <div className="relative w-72">
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                w-full px-5 py-3 rounded-xl bg-white/70 border-2 border-emerald-400 
                focus:border-blue-400 transition-all text-lg text-gray-700 
                placeholder-emerald-900 shadow-md focus:ring-emerald-300 focus:ring-2 outline-none
              "
              type={showPassword ? "text" : "password"}
              placeholder="Your Password"
              autoComplete="current-password"
            />
            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-700 opacity-70 hover:opacity-100 text-sm select-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <button
            className="
              w-full py-3 px-5 rounded-xl 
              bg-gradient-to-r from-emerald-600 via-blue-500 to-teal-700
              text-white text-xl font-semibold shadow-lg mt-2
              transition-all transform hover:scale-105 hover:brightness-110
              outline-none border-none focus:ring-2 focus:ring-emerald-500
            "
          >
            Login
          </button>
        </form>

        <div className="mt-8 text-sm opacity-75 italic text-gray-700 select-none">
          Secure &amp; seamless authentication ✨
        </div>
      </div>

      {/* Footer Fixed at Bottom */}
      <footer className="bottom-3 text-sm  text-gray-800 font-medium px-2 mt-7">
        <p>
          🚀 <span className="font-bold text-emerald-800">Employe|Stack</span> is an Employee Management System with two dashboards: <br />
          👨‍🔧 Employee (emp@1.com / 123) | 👨‍💼 Admin (admin@1.com / 12345) <br />
          👨‍🔧 Employee : Can see tasks | 👨‍💼 Admin : Can see and update tasks
        </p>
      </footer>
    </div>
  );
};

export default Login;
