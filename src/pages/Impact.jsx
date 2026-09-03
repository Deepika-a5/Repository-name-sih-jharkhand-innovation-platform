import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Impact() {
  const [problemCount, setProblemCount] = useState(0);
  const [solutionCount, setSolutionCount] = useState(0);

  useEffect(() => {
    // Get submitted problems from frontend localStorage
    const problems =
      JSON.parse(localStorage.getItem("submittedProblems")) || [];

    // Get submitted solutions from frontend localStorage
    const solutions =
      JSON.parse(localStorage.getItem("submittedSolutions")) || [];

    setProblemCount(problems.length);
    setSolutionCount(solutions.length);
  }, []);

  return (
    <div className="min-h-screen bg-[#020b2d] text-white">

      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-6 py-20">

        {/* Glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl text-center">

          <div className="mb-6 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-2 text-sm font-semibold text-emerald-300">
            🌱 Measuring Real Change
          </div>

          <h1 className="text-5xl font-black leading-tight md:text-6xl">
            Innovation That
            <br />
            <span className="text-emerald-400">
              Creates Impact.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100/70">
            See how citizens, students, universities, startups and
            industries are working together to create meaningful change
            across Jharkhand.
          </p>

        </div>
      </section>


      {/* ================= STATS ================= */}
      <section className="bg-white px-6 py-16 text-slate-900">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">

            <p className="font-semibold uppercase tracking-widest text-emerald-600">
              Our Impact
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Turning Ideas Into Action
            </h2>

          </div>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <ImpactCard
              icon="📄"
              number={problemCount}
              title="Problems Reported"
              description="Challenges shared by communities"
            />

            <ImpactCard
              icon="💡"
              number={solutionCount}
              title="Solutions Submitted"
              description="Ideas submitted by innovators"
            />

            <ImpactCard
              icon="🎓"
              number="42"
              title="Universities Connected"
              description="Students and researchers involved"
            />

            <ImpactCard
              icon="👥"
              number="125K+"
              title="Citizens Impacted"
              description="People benefiting from innovation"
            />

          </div>

        </div>
      </section>


      {/* ================= IMPACT AREAS ================= */}
      <section className="bg-slate-50 px-6 py-20 text-slate-900">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <p className="font-semibold uppercase tracking-widest text-emerald-600">
              Impact Areas
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Creating Change Across Jharkhand
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Innovation can transform different parts of everyday life,
              from healthcare and education to agriculture and the environment.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <AreaCard
              icon="🏥"
              title="Healthcare"
              description="Improving access to healthcare services, monitoring and community health."
            />

            <AreaCard
              icon="🎓"
              title="Education"
              description="Making quality learning resources and opportunities more accessible."
            />

            <AreaCard
              icon="🌱"
              title="Environment"
              description="Building sustainable solutions for waste, water, forests and natural resources."
            />

            <AreaCard
              icon="🌾"
              title="Agriculture"
              description="Helping farmers improve productivity through technology and innovation."
            />

            <AreaCard
              icon="🏙️"
              title="Smart Cities"
              description="Creating smarter transportation, infrastructure and public services."
            />

            <AreaCard
              icon="🏛️"
              title="Governance"
              description="Using technology to make public services more accessible and efficient."
            />

          </div>

        </div>
      </section>


      {/* ================= PROGRESS ================= */}
      <section className="bg-white px-6 py-20 text-slate-900">

        <div className="mx-auto max-w-5xl">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-widest text-emerald-600">
              Our Mission
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              From Problems to Solutions
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Every challenge submitted is an opportunity for students,
              innovators and organizations to create meaningful solutions.
            </p>

          </div>


          {/* PROCESS */}
          <div className="mt-14 grid gap-6 md:grid-cols-4">

            <ProcessStep
              number="01"
              icon="📢"
              title="Identify"
              description="Citizens report real-world challenges."
            />

            <ProcessStep
              number="02"
              icon="💡"
              title="Innovate"
              description="Innovators develop creative solutions."
            />

            <ProcessStep
              number="03"
              icon="🤝"
              title="Collaborate"
              description="Communities and organizations work together."
            />

            <ProcessStep
              number="04"
              icon="🌱"
              title="Impact"
              description="Successful ideas create measurable change."
            />

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-blue-700 to-cyan-600 px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-4xl font-bold">
            Be Part of the Change
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Report a problem, propose a solution or collaborate with
            innovators working to build a better Jharkhand.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="/submit-problem"
              className="rounded-xl bg-emerald-500 px-7 py-4 font-bold text-white transition hover:scale-105 hover:bg-emerald-400"
            >
              ➤ Submit a Problem
            </a>

            <a
              href="/challenges"
              className="rounded-xl border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Explore Challenges →
            </a>

          </div>

        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-[#020b2d] px-6 py-10">

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


/* ================= IMPACT CARD ================= */

function ImpactCard({
  icon,
  number,
  title,
  description,
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-3xl">
        {icon}
      </div>

      <p className="mt-6 text-4xl font-black text-[#06275a]">
        {number}
      </p>

      <h3 className="mt-2 text-lg font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>

    </div>
  );
}


/* ================= AREA CARD ================= */

function AreaCard({
  icon,
  title,
  description,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-500">
        {description}
      </p>

    </div>
  );
}


/* ================= PROCESS STEP ================= */

function ProcessStep({
  number,
  icon,
  title,
  description,
}) {
  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">

      <div className="text-xs font-bold text-emerald-600">
        {number}
      </div>

      <div className="mx-auto mt-3 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-2xl">
        {icon}
      </div>

      <h3 className="mt-4 font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>

    </div>
  );
}


export default Impact;