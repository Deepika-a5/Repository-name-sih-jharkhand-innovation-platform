import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Collaborate() {
  const [formData, setFormData] = useState({
    institute_name: "",
    problem_number: "",
    expectation_cost: "",
    duration_to_solve_problem: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary frontend storage.
    // Backend team can replace this with an API later.
    const existingCollaborations =
      JSON.parse(localStorage.getItem("collaborations")) || [];

    const newCollaboration = {
      id: Date.now(),
      ...formData,
    };

    localStorage.setItem(
      "collaborations",
      JSON.stringify([
        ...existingCollaborations,
        newCollaboration,
      ])
    );

    setSubmitted(true);

    setFormData({
      institute_name: "",
      problem_number: "",
      expectation_cost: "",
      duration_to_solve_problem: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#020b2d] text-white">
      <Navbar />

      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">

          {/* HEADER */}
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Collaboration
            </p>

            <h1 className="text-4xl font-black md:text-5xl">
              Collaborate With Us
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Share your institute's requirements and collaborate
              on solving a community problem.
            </p>
          </div>

          {/* FORM CARD */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur md:p-10">

            <h2 className="mb-7 text-2xl font-bold">
              Institute Collaboration Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* INSTITUTE NAME */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-white/80">
                  Institute Name
                </label>

                <input
                  type="text"
                  name="institute_name"
                  value={formData.institute_name}
                  onChange={handleChange}
                  placeholder="Enter institute name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-emerald-400"
                />
              </div>

              {/* PROBLEM NUMBER */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-white/80">
                  Problem Number
                </label>

                <input
                  type="text"
                  name="problem_number"
                  value={formData.problem_number}
                  onChange={handleChange}
                  placeholder="Enter problem number"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-emerald-400"
                />
              </div>

              {/* EXPECTED COST */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-white/80">
                  Expected Cost
                </label>

                <input
                  type="number"
                  name="expectation_cost"
                  value={formData.expectation_cost}
                  onChange={handleChange}
                  placeholder="Enter expected cost"
                  min="0"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-emerald-400"
                />
              </div>

              {/* DURATION */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-white/80">
                  Duration to Solve Problem
                </label>

                <input
                  type="text"
                  name="duration_to_solve_problem"
                  value={formData.duration_to_solve_problem}
                  onChange={handleChange}
                  placeholder="Example: 3 months"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-emerald-400"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full rounded-xl bg-emerald-500 px-6 py-4 font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-400"
              >
                Submit Collaboration Request →
              </button>

            </form>

            {/* SUCCESS MESSAGE */}
            {submitted && (
              <div className="mt-6 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-center text-emerald-300">
                ✓ Collaboration request submitted successfully!
              </div>
            )}

          </div>
        </div>
      </section>
    </div>
  );
}

export default Collaborate;