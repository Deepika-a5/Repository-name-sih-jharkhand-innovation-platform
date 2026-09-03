import React, { useState } from "react";
import Navbar from "../components/Navbar";

function SubmitProblem() {
  const [formData, setFormData] = useState({
    title: "",
    category: "Healthcare",
    description: "",
    location: "",
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

    // Check that all fields are filled
    if (
      !formData.title.trim() ||
      !formData.description.trim() ||
      !formData.location.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Get previously submitted problems
    const existingProblems =
      JSON.parse(localStorage.getItem("submittedProblems")) || [];

    // Create new problem
    const newProblem = {
      id: Date.now(),
      title: formData.title,
      category: formData.category,
      description: formData.description,
      location: formData.location,
    };

    // Save problem
    localStorage.setItem(
      "submittedProblems",
      JSON.stringify([...existingProblems, newProblem])
    );

    // Show success message
    setSubmitted(true);

    // Clear form
    setFormData({
      title: "",
      category: "Healthcare",
      description: "",
      location: "",
    });

    // Hide success message after 4 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#020b2d] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-16">

        {/* HEADER */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Share a Challenge
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Submit a Problem
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Share a real-world problem from your community and help innovators
            build meaningful solutions.
          </p>
        </div>

        {/* SUCCESS MESSAGE */}
        {submitted && (
          <div className="mb-6 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-center">
            <div className="text-3xl">🎉</div>

            <h2 className="mt-2 text-xl font-bold text-emerald-400">
              Problem Submitted Successfully!
            </h2>

            <p className="mt-1 text-sm text-white/70">
              Thank you for helping improve your community.
            </p>
          </div>
        )}

        {/* FORM */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl md:p-10">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* PROBLEM TITLE */}
            <div>
              <label className="mb-2 block font-medium">
                Problem Title
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter problem title"
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-emerald-400"
              />
            </div>

            {/* CATEGORY */}
            <div>
              <label className="mb-2 block font-medium">
                Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none focus:border-emerald-400"
              >
                <option className="text-black">Healthcare</option>
                <option className="text-black">Education</option>
                <option className="text-black">Environment</option>
                <option className="text-black">Smart City</option>
                <option className="text-black">Agriculture</option>
                <option className="text-black">Governance</option>
              </select>
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="mb-2 block font-medium">
                Problem Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="6"
                placeholder="Describe the problem in detail..."
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-emerald-400"
              />
            </div>

            {/* LOCATION */}
            <div>
              <label className="mb-2 block font-medium">
                Location
              </label>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Ranchi, Jharkhand"
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-emerald-400"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-500 px-6 py-3 font-bold text-white transition hover:scale-[1.01] hover:bg-emerald-400"
            >
              ➤ Submit Problem
            </button>

          </form>
        </div>
      </section>
    </div>
  );
}

export default SubmitProblem;