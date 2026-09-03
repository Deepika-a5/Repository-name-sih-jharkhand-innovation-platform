import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Collaborate() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    type: "Student / Innovator",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.organization ||
      !form.message
    ) {
      alert("Please fill all the fields.");
      return;
    }

    // Get existing collaboration requests
    const existingRequests =
      JSON.parse(localStorage.getItem("collaborationRequests")) || [];

    // Create new request
    const newRequest = {
      id: Date.now(),
      name: form.name,
      email: form.email,
      organization: form.organization,
      type: form.type,
      message: form.message,
      date: new Date().toLocaleDateString(),
    };

    // Save request
    localStorage.setItem(
      "collaborationRequests",
      JSON.stringify([
        ...existingRequests,
        newRequest,
      ])
    );

    setSubmitted(true);

    // Clear form
    setForm({
      name: "",
      email: "",
      organization: "",
      type: "Student / Innovator",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#020b2d] text-white">

      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-20">

        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          <div className="mb-6 inline-flex rounded-full border border-emerald-400/40 bg-emerald-400/10 px-5 py-2 text-sm font-semibold text-emerald-300">
            🤝 Collaboration Hub
          </div>

          <h1 className="text-5xl font-black leading-tight md:text-6xl">
            Collaborate.
            <br />

            <span className="text-emerald-400">
              Create Impact.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100/70">
            Connect with citizens, students, universities, startups,
            researchers and industries to build meaningful solutions
            for Jharkhand.
          </p>

        </div>
      </section>

      {/* FORM */}
      <section className="bg-white px-6 py-20 text-slate-900">

        <div className="mx-auto max-w-3xl">

          <div className="mb-10 text-center">

            <p className="font-semibold uppercase tracking-widest text-emerald-600">
              Join the Network
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Start a Collaboration
            </h2>

            <p className="mt-4 text-slate-500">
              Tell us about yourself and how you would like to
              contribute.
            </p>

          </div>

          {/* SUCCESS MESSAGE */}
          {submitted && (
            <div className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-5 text-center">

              <div className="text-3xl">
                ✅
              </div>

              <h3 className="mt-2 font-bold text-emerald-700">
                Collaboration request submitted!
              </h3>

              <p className="mt-1 text-sm text-emerald-600">
                Thank you for joining the innovation network.
              </p>

            </div>
          )}

          {/* FORM CARD */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-10"
          >

            {/* NAME */}
            <div className="mb-6">

              <label className="mb-2 block font-semibold">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
              />

            </div>

            {/* EMAIL */}
            <div className="mb-6">

              <label className="mb-2 block font-semibold">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
              />

            </div>

            {/* ORGANIZATION */}
            <div className="mb-6">

              <label className="mb-2 block font-semibold">
                Organization / College
              </label>

              <input
                type="text"
                name="organization"
                value={form.organization}
                onChange={handleChange}
                placeholder="Enter college, company or organization"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
              />

            </div>

            {/* COLLABORATION TYPE */}
            <div className="mb-6">

              <label className="mb-2 block font-semibold">
                I am a
              </label>

              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
              >
                <option>Student / Innovator</option>
                <option>Citizen</option>
                <option>University / Researcher</option>
                <option>Startup</option>
                <option>Industry</option>
                <option>Government Organization</option>
                <option>NGO</option>
              </select>

            </div>

            {/* MESSAGE */}
            <div className="mb-8">

              <label className="mb-2 block font-semibold">
                How would you like to collaborate?
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="6"
                placeholder="Describe your skills, idea or how you would like to contribute..."
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
              />

            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-500 px-6 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-emerald-400"
            >
              🤝 Send Collaboration Request
            </button>

          </form>

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

export default Collaborate;