import React from "react";
import Navbar from "../components/Navbar";

function ChallengeDetails() {
  const savedChallenge = localStorage.getItem("selectedChallenge");

  const problem = savedChallenge
    ? JSON.parse(savedChallenge)
    : null;

  // Challenge not found
  if (!problem) {
    return (
      <div className="min-h-screen bg-[#020b2d] text-white">
        <Navbar />

        <section className="flex min-h-[70vh] items-center justify-center px-6">
          <div className="text-center">

            <div className="mb-4 text-5xl">
              ⚠️
            </div>

            <h1 className="text-3xl font-bold">
              Challenge Not Found
            </h1>

            <p className="mt-3 text-white/50">
              Please go back and select a challenge.
            </p>

            <button
              onClick={() => {
                window.location.href = "/challenges";
              }}
              className="mt-6 rounded-xl bg-emerald-500 px-6 py-3 font-bold transition hover:bg-emerald-400"
            >
              ← Back to Challenges
            </button>

          </div>
        </section>
      </div>
    );
  }

  // MAIN DETAILS PAGE
  return (
    <div className="min-h-screen bg-[#020b2d] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-16">

        {/* BACK */}
        <button
          onClick={() => {
            window.location.href = "/challenges";
          }}
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
        >
          ← Back to Challenges
        </button>

        {/* MAIN CARD */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl md:p-10">

          {/* CATEGORY */}
          <div className="mb-6 flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-semibold text-emerald-400">
              {problem.category}
            </span>

            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/50">
              Community Challenge
            </span>

          </div>

          {/* TITLE */}
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            {problem.title}
          </h1>

          {/* LOCATION */}
          <div className="mt-5 flex items-center gap-2 text-white/60">
            <span>📍</span>
            <span>{problem.location}</span>
          </div>

          {/* DIVIDER */}
          <div className="my-8 h-px bg-white/10" />

          {/* DESCRIPTION */}
          <div>
            <h2 className="text-2xl font-bold">
              Problem Description
            </h2>

            <p className="mt-4 whitespace-pre-line leading-8 text-white/65">
              {problem.description}
            </p>
          </div>

          {/* SOLUTION AREA */}
          <div className="mt-10 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">

            <h2 className="text-xl font-bold">
              Have an idea?
            </h2>

            <p className="mt-2 text-white/50">
              Help solve this community challenge by proposing an
              innovative solution.
            </p>

            <button
              onClick={() => {
                window.location.href = "/submit-solution";
              }}
              className="rounded-xl bg-emerald-500 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-emerald-400"
            >
              💡 Propose a Solution →
            </button>
           

          </div>

        </div>
      </section>
    </div>
  );
}

export default ChallengeDetails;