import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const defaultSolutions = [
  {
    id: 1,
    icon: "🤖",
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions using artificial intelligence and machine learning to solve real-world challenges.",
    category: "Technology",
  },
  {
    id: 2,
    icon: "🌱",
    title: "Environment & Sustainability",
    description:
      "Innovative ideas focused on protecting natural resources and creating a cleaner, greener Jharkhand.",
    category: "Environment",
  },
  {
    id: 3,
    icon: "🏥",
    title: "Healthcare",
    description:
      "Technology-driven solutions that improve healthcare access, monitoring and services for communities.",
    category: "Healthcare",
  },
  {
    id: 4,
    icon: "🎓",
    title: "Education",
    description:
      "Digital solutions that make quality education more accessible, personalized and engaging.",
    category: "Education",
  },
  {
    id: 5,
    icon: "🏙️",
    title: "Smart Cities",
    description:
      "Smart technology solutions for transportation, infrastructure, public services and urban development.",
    category: "Smart City",
  },
  {
    id: 6,
    icon: "🌾",
    title: "Agriculture",
    description:
      "Modern technology solutions that help farmers improve productivity, efficiency and sustainability.",
    category: "Agriculture",
  },
];

function Solutions() {
  const [solutions, setSolutions] = useState([]);

  useEffect(() => {
    const savedSolutions =
      JSON.parse(localStorage.getItem("solutions")) || [];

    setSolutions([...defaultSolutions, ...savedSolutions]);
  }, []);

  return (
    <div className="min-h-screen bg-[#020b2d] text-white">

      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-20">

        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl text-center">

          <div className="mb-6 inline-flex rounded-full border border-emerald-400/40 bg-emerald-400/10 px-5 py-2 text-sm font-semibold text-emerald-300">
            🚀 Innovation in Action
          </div>

          <h1 className="text-5xl font-black leading-tight md:text-6xl">
            Build Solutions.
            <br />

            <span className="text-emerald-400">
              Create Impact.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100/75">
            Discover innovative solutions created by students, startups,
            researchers and innovators to address real-world challenges
            across Jharkhand.
          </p>

        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-white px-6 py-20 text-slate-900">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12">

            <p className="font-semibold uppercase tracking-widest text-emerald-600">
              Explore Innovation
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Solutions Across Jharkhand
            </h2>

            <p className="mt-4 max-w-2xl text-slate-500">
              Explore technology and ideas that can transform communities,
              industries and public services.
            </p>

          </div>

          {/* CARDS */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {solutions.map((solution) => (

              <div
                key={solution.id}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl transition group-hover:scale-110">
                    {solution.icon || "💡"}
                  </div>

                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                    {solution.category}
                  </span>

                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {solution.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  {solution.description}
                </p>

                {/* USER SOLUTION DETAILS */}
                {solution.technology && (
                  <div className="mt-5 rounded-xl bg-slate-50 p-4">

                    <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                      Technology
                    </p>

                    <p className="mt-1 font-semibold text-slate-700">
                      {solution.technology}
                    </p>

                    <p className="mt-3 text-xs font-bold uppercase tracking-wide text-slate-400">
                      Submitted by
                    </p>

                    <p className="mt-1 font-semibold text-slate-700">
                      {solution.team}
                    </p>

                  </div>
                )}

                <div className="mt-6 flex items-center justify-between">

                  <span className="text-sm text-slate-400">
                    {solution.date || "Featured"}
                  </span>

                  <button
                    onClick={() => {
                      localStorage.setItem(
                        "selectedSolution",
                        JSON.stringify(solution)
                      );

                      window.location.href = "/solution-details";
                    }}
                    className="font-semibold text-blue-600 transition hover:text-emerald-600"
                  >
                    View Solution →
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-cyan-600 px-6 py-20">

        <div className="mx-auto max-w-5xl text-center">

          <h2 className="text-4xl font-bold">
            Have an innovative solution?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Share your idea and collaborate with people who are working
            towards building a better Jharkhand.
          </p>

          <button
            onClick={() => {
              window.location.href = "/submit-solution";
            }}
            className="mt-8 rounded-xl bg-emerald-500 px-8 py-4 font-bold shadow-xl transition hover:scale-105 hover:bg-emerald-400"
          >
            Submit Your Solution →
          </button>

        </div>

      </section>

      {/* FOOTER */}
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

export default Solutions;