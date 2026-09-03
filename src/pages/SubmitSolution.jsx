import React, { useState } from "react";
import Navbar from "../components/Navbar";

function SubmitSolution() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    technology: "",
    team: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.title ||
      !form.description ||
      !form.technology ||
      !form.team ||
      !form.email
    ) {
      alert("Please fill all the fields.");
      return;
    }

    // Get old solutions
    const oldSolutions =
      JSON.parse(localStorage.getItem("solutions")) || [];

    // Create new solution
    const newSolution = {
      id: Date.now(),
      title: form.title,
      description: form.description,
      technology: form.technology,
      team: form.team,
      email: form.email,
      category: "Community Solution",
      date: new Date().toLocaleDateString(),
    };

    // Save solution
    localStorage.setItem(
      "solutions",
      JSON.stringify([...oldSolutions, newSolution])
    );

    alert("✅ Solution submitted successfully!");

    // Go to Solutions page
    window.location.href = "/solutions";
  };

  return (
    <div className="min-h-screen bg-[#020b2d] text-white">
      <Navbar />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">

          {/* Heading */}
          <div className="mb-10 text-center">
            <p className="font-semibold uppercase tracking-widest text-emerald-400">
              Propose a Solution
            </p>

            <h1 className="mt-3 text-4xl font-black md:text-5xl">
              Turn Ideas Into
              <span className="text-emerald-400"> Impact</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-blue-100/70">
              Share your innovative solution and help solve real-world
              challenges across Jharkhand.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-blue-400/20 bg-white/10 p-8 shadow-2xl backdrop-blur"
          >

            {/* Solution Title */}
            <div className="mb-6">
              <label className="mb-2 block font-semibold">
                Solution Title
              </label>

              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter your solution title"
                className="w-full rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-blue-100/50 focus:border-emerald-400"
              />
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="mb-2 block font-semibold">
                Solution Description
              </label>

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Explain your solution..."
                rows="5"
                className="w-full resize-none rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-blue-100/50 focus:border-emerald-400"
              />
            </div>

            {/* Technology */}
            <div className="mb-6">
              <label className="mb-2 block font-semibold">
                Technology / Approach
              </label>

              <input
                type="text"
                name="technology"
                value={form.technology}
                onChange={handleChange}
                placeholder="e.g. AI, IoT, Mobile App, Web Platform"
                className="w-full rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-blue-100/50 focus:border-emerald-400"
              />
            </div>

            {/* Team */}
            <div className="mb-6">
              <label className="mb-2 block font-semibold">
                Team / Your Name
              </label>

              <input
                type="text"
                name="team"
                value={form.team}
                onChange={handleChange}
                placeholder="Enter your name or team name"
                className="w-full rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-blue-100/50 focus:border-emerald-400"
              />
            </div>

            {/* Email */}
            <div className="mb-8">
              <label className="mb-2 block font-semibold">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-blue-100/50 focus:border-emerald-400"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">

              <button
                type="submit"
                className="flex-1 rounded-xl bg-emerald-500 px-6 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-emerald-400"
              >
                🚀 Submit Solution
              </button>

              <button
                type="button"
                onClick={() => {
                  window.location.href = "/solutions";
                }}
                className="flex-1 rounded-xl border border-white/20 px-6 py-4 font-bold transition hover:bg-white/10"
              >
                Cancel
              </button>

            </div>

          </form>
        </div>
      </section>
    </div>
  );
}

export default SubmitSolution;