import React from "react";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <div className="min-h-screen bg-[#020b2d] text-white">
        <Navbar />

    {/* ================= HERO ================= */}
      <section className="relative min-h-screen overflow-hidden">

        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_55%,rgba(0,102,255,0.45),transparent_45%)]" />

        <div className="absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute left-[-10%] bottom-[-20%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />


        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />


        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24">

          <div className="w-full md:w-[58%]">

            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-300">
              🚀 Empowering Innovation Across Jharkhand
            </div>


            {/* Heading */}
            <h2 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">

              Solve Problems.
              <br />

              Build a Better
              <br />

              <span className="text-emerald-400">
                Jharkhand.
              </span>

            </h2>


            {/* Description */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-blue-100/80 sm:text-xl">
              A collaborative platform connecting citizens, innovators,
              government and industry to solve real-world challenges
              across Jharkhand.
            </p>


            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <button className="rounded-xl bg-emerald-500 px-7 py-4 font-bold text-white shadow-xl transition hover:scale-105 hover:bg-emerald-400">
                Explore Challenges →
              </button>

              <button className="rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-bold backdrop-blur transition hover:bg-white/20">
                Learn More
              </button>

            </div>


            {/* Stats */}
            <div className="mt-14 flex flex-wrap gap-10">

              <div>
                <p className="text-3xl font-bold">500+</p>
                <p className="text-sm text-blue-200">
                  Problems Submitted
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">150+</p>
                <p className="text-sm text-blue-200">
                  Innovations
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">24</p>
                <p className="text-sm text-blue-200">
                  Districts
                </p>
              </div>

            </div>

          </div>


          {/* ================= FLOATING CARDS ================= */}
          <div className="absolute right-5 top-[25%] hidden h-[500px] w-[42%] lg:block">

            {/* Citizen card */}
            <div className="absolute right-[35%] top-0 w-60 rounded-2xl bg-white p-5 text-slate-800 shadow-2xl transition hover:-translate-y-2">

              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                👥
              </div>

              <h3 className="font-bold">
                Citizens
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Report local challenges
              </p>

            </div>


            {/* Government card */}
            <div className="absolute left-[5%] top-[45%] w-60 rounded-2xl bg-white p-5 text-slate-800 shadow-2xl transition hover:-translate-y-2">

              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl">
                🏛️
              </div>

              <h3 className="font-bold">
                Government
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Find innovative solutions
              </p>

            </div>


            {/* Industry card */}
            <div className="absolute bottom-[5%] right-0 w-60 rounded-2xl bg-white p-5 text-slate-800 shadow-2xl transition hover:-translate-y-2">

              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl">
                🏢
              </div>

              <h3 className="font-bold">
                Industry
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Partner for innovation
              </p>

            </div>


            {/* Center circle */}
            <div className="absolute left-[38%] top-[32%] flex h-48 w-48 items-center justify-center rounded-full border border-cyan-400/50 bg-blue-600/30 shadow-[0_0_80px_rgba(0,150,255,0.5)] backdrop-blur">

              <div className="text-center">

                <div className="text-5xl">
                  🌱
                </div>

                <p className="mt-2 text-xs font-bold tracking-widest text-emerald-300">
                  JHARKHAND
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= BELOW HERO ================= */}
      <section className="bg-white px-6 py-20 text-slate-900">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-widest text-emerald-600">
              How it works
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              From Problems to Solutions
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Connect ideas, people and technology to create meaningful
              solutions for Jharkhand.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border p-8 transition hover:-translate-y-2 hover:shadow-xl">

              <div className="text-4xl">
                💡
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Identify Problems
              </h3>

              <p className="mt-3 leading-7 text-slate-500">
                Citizens and organizations can submit real-world
                problems from their communities.
              </p>

            </div>


            <div className="rounded-2xl border p-8 transition hover:-translate-y-2 hover:shadow-xl">

              <div className="text-4xl">
                🚀
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Build Solutions
              </h3>

              <p className="mt-3 leading-7 text-slate-500">
                Innovators and developers collaborate to create
                practical technology solutions.
              </p>

            </div>


            <div className="rounded-2xl border p-8 transition hover:-translate-y-2 hover:shadow-xl">

              <div className="text-4xl">
                🌍
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Create Impact
              </h3>

              <p className="mt-3 leading-7 text-slate-500">
                Successful ideas can be implemented to create
                positive impact across Jharkhand.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-[#020b2d] px-6 py-10 text-white">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row">

          <div>
            <h3 className="font-bold">
              🌱 JHARKHAND INNOVATION PLATFORM
            </h3>

            <p className="mt-2 text-sm text-blue-200">
              Building a better Jharkhand through innovation.
            </p>
          </div>

          <p className="text-sm text-blue-300">
            © 2026 Jharkhand Innovation Platform
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Home;