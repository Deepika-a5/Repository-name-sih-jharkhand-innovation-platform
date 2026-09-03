import React from "react";
import Navbar from "../components/Navbar";

function Signup() {
  return (
    <div className="min-h-screen bg-[#020b2d] text-white">
      <Navbar />

      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-5 py-12">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">

          {/* Heading */}
          <div className="mb-8 text-center">
            <div className="mb-4 text-5xl">🌱</div>

            <h1 className="text-3xl font-black">
              Create Your Account
            </h1>

            <p className="mt-2 text-sm text-white/50">
              Join the Jharkhand Innovation Platform
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Sign Up will be connected to the backend soon!");
            }}
            className="space-y-5"
          >

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                required
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Password
              </label>

              <input
                type="password"
                placeholder="Create a password"
                required
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
              />
            </div>

            {/* Account Type */}
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Account Type
              </label>

              <select
                required
                className="w-full rounded-xl border border-white/10 bg-[#102044] px-4 py-3 text-white outline-none focus:border-emerald-400"
              >
                <option value="">Select account type</option>
                <option value="citizen">Citizen</option>
                <option value="student">Student</option>
                <option value="university">University</option>
                <option value="startup">Startup</option>
                <option value="industry">Industry</option>
              </select>
            </div>

            {/* Sign Up */}
            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-500 px-5 py-3.5 font-bold transition hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              Create Account →
            </button>

          </form>

          {/* Login */}
          <p className="mt-7 text-center text-sm text-white/50">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-semibold text-emerald-400 hover:text-emerald-300"
            >
              Login
            </a>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Signup;