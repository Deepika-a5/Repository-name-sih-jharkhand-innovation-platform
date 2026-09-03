import React from "react";
import Navbar from "../components/Navbar";

function Login() {
  return (
    <div className="min-h-screen bg-[#020b2d] text-white">
      <Navbar />

      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-5 py-12">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">

          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl">
              🌱
            </div>

            <h1 className="text-3xl font-bold">
              Welcome Back
            </h1>

            <p className="mt-2 text-sm text-white/60">
              Login to Jharkhand Innovation Platform
            </p>
          </div>

          <form className="space-y-5">

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-emerald-400"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-500 px-5 py-3 font-bold transition hover:bg-emerald-400"
            >
              Login
            </button>

          </form>

          <p className="mt-6 text-center text-sm text-white/60">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="font-semibold text-emerald-400 hover:text-emerald-300"
            >
              Sign Up
            </a>
          </p>

        </div>
      </main>
    </div>
  );
}

export default Login;