import React from "react";
import Navbar from "../components/Navbar";

function SolutionDetails() {
  const solution = JSON.parse(
    localStorage.getItem("selectedSolution")
  );

  // If no solution is selected
  if (!solution) {
    return (
      <div className="min-h-screen bg-[#020b2d] text-white">
        <Navbar />

        <section className="flex min-h-[70vh] items-center justify-center px-6">
          <div className="text-center">

            <div className="mb-4 text-5xl">
              ⚠️
            </div>

            <h1 className="text-3xl font-bold">
              Solution Not Found
            </h1>

            <p className="mt-3 text-white/50">
              Please go back and select a solution.
            </p>

            <button
              onClick={() => {
                window.location.href = "/solutions";
              }}
              className="mt-6 rounded-xl bg-emerald-500 px-6 py-3 font-bold hover:bg-emerald-400"
            >
              ← Back to Solutions
            </button>

          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020b2d] text-white">

      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-16">

        {/* BACK BUTTON */}
        <button
          onClick={() => {
            window.location.href = "/solutions";
          }}
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
        >
          ← Back to Solutions
        </button>

        {/* MAIN CARD */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl md:p-10">

          {/* CATEGORY */}
          <div className="mb-6 flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-semibold text-emerald-400">
              {solution.category || "Community Solution"}
            </span>

            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/50">
              Innovation
            </span>

          </div>

          {/* TITLE */}
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            {solution.title}
          </h1>

          {/* DATE */}
          {solution.date && (
            <p className="mt-4 text-sm text-white/40">
              Submitted on {solution.date}
            </p>
          )}

          {/* DIVIDER */}
          <div className="my-8 h-px bg-white/10" />

          {/* DESCRIPTION */}
          <div>
            <h2 className="text-2xl font-bold">
              Solution Description
            </h2>

            <p className="mt-4 whitespace-pre-line leading-8 text-white/65">
              {solution.description}
            </p>
          </div>

          {/* TECHNOLOGY */}
          {solution.technology && (
            <div className="mt-10 rounded-2xl border border-blue-400/20 bg-blue-500/5 p-6">

              <h2 className="text-xl font-bold">
                🛠️ Technology / Approach
              </h2>

              <p className="mt-3 leading-7 text-white/60">
                {solution.technology}
              </p>

            </div>
          )}

          {/* TEAM */}
          {solution.team && (
            <div className="mt-6 rounded-2xl border border-purple-400/20 bg-purple-500/5 p-6">

              <h2 className="text-xl font-bold">
                👥 Team / Organization
              </h2>

              <p className="mt-3 text-white/60">
                {solution.team}
              </p>

            </div>
          )}

          {/* CONTACT */}
          {solution.email && (
            <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-6">

              <h2 className="text-xl font-bold">
                📧 Contact
              </h2>

              <p className="mt-3 text-white/60">
                {solution.email}
              </p>

            </div>
          )}

          {/* CTA */}
          <div className="mt-10 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">

            <h2 className="text-xl font-bold">
              Want to collaborate?
            </h2>

            <p className="mt-2 text-white/50">
              Connect with innovators and help turn this idea
              into real-world impact.
            </p>

            <button
              onClick={() => {
                window.location.href = "/collaborate";
              }}
              className="mt-5 rounded-xl bg-emerald-500 px-6 py-3 font-bold transition hover:scale-105 hover:bg-emerald-400"
            >
              🤝 Collaborate
            </button>

          </div>

        </div>
      </section>
    </div>
  );
}

export default SolutionDetails;