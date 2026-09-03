import React from "react";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div className="min-h-screen bg-[#020b2d] text-white">

      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-6 py-20">

        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

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
            🌱 About Our Platform
          </div>

          <h1 className="text-5xl font-black leading-tight md:text-6xl">
            Innovation for a
            <br />
            <span className="text-emerald-400">
              Better Jharkhand.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100/70">
            The Jharkhand Innovation Platform connects citizens,
            students, universities, startups and industries to transform
            real-world challenges into meaningful solutions.
          </p>

        </div>
      </section>


      {/* ================= ABOUT ================= */}
      <section className="bg-white px-6 py-20 text-slate-900">

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">

          <div>

            <p className="font-semibold uppercase tracking-widest text-emerald-600">
              Who We Are
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Connecting Problems With Possibilities
            </h2>

            <p className="mt-6 leading-8 text-slate-500">
              Communities understand their challenges best. Innovators
              bring the ideas and technology needed to solve them.
            </p>

            <p className="mt-4 leading-8 text-slate-500">
              Our platform creates a common space where these two sides
              can connect, collaborate and turn ideas into real-world
              impact.
            </p>

            <a
              href="/challenges"
              className="mt-7 inline-block rounded-xl bg-emerald-500 px-6 py-3 font-bold text-white transition hover:bg-emerald-400"
            >
              Explore Challenges →
            </a>

          </div>


          {/* VISUAL CARD */}
          <div className="rounded-3xl bg-[#020b2d] p-8 shadow-2xl">

            <div className="grid gap-4 sm:grid-cols-2">

              <AboutCard
                icon="👥"
                title="Citizens"
                text="Identify real community challenges."
              />

              <AboutCard
                icon="🎓"
                title="Universities"
                text="Research and develop solutions."
              />

              <AboutCard
                icon="🚀"
                title="Startups"
                text="Build and test innovative ideas."
              />

              <AboutCard
                icon="🏭"
                title="Industry"
                text="Implement and scale solutions."
              />

            </div>

          </div>

        </div>
      </section>


      {/* ================= MISSION & VISION ================= */}
      <section className="bg-slate-50 px-6 py-20 text-slate-900">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-6 md:grid-cols-2">

            <InfoCard
              icon="🎯"
              title="Our Mission"
              text="To create a collaborative ecosystem where real-world problems can be identified, innovative ideas can be developed, and impactful solutions can reach communities."
            />

            <InfoCard
              icon="👁️"
              title="Our Vision"
              text="To build a stronger, smarter and more sustainable Jharkhand through collaboration, technology and citizen-driven innovation."
            />

          </div>

        </div>
      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-white px-6 py-20 text-slate-900">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <p className="font-semibold uppercase tracking-widest text-emerald-600">
              How It Works
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              From Challenge to Impact
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Our platform creates a simple journey from identifying
              problems to creating solutions.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-4">

            <Step
              number="01"
              icon="📢"
              title="Report"
              text="Citizens submit real-world problems."
            />

            <Step
              number="02"
              icon="💡"
              title="Innovate"
              text="Innovators propose creative solutions."
            />

            <Step
              number="03"
              icon="🤝"
              title="Collaborate"
              text="Different stakeholders work together."
            />

            <Step
              number="04"
              icon="🌱"
              title="Impact"
              text="Successful ideas create meaningful change."
            />

          </div>

        </div>
      </section>


      {/* ================= VALUES ================= */}
      <section className="bg-slate-50 px-6 py-20 text-slate-900">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <p className="font-semibold uppercase tracking-widest text-emerald-600">
              What We Believe
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Our Core Values
            </h2>

          </div>


          <div className="grid gap-6 md:grid-cols-3">

            <ValueCard
              icon="🤝"
              title="Collaboration"
              text="Great solutions emerge when communities, innovators and organizations work together."
            />

            <ValueCard
              icon="💡"
              title="Innovation"
              text="We encourage creative thinking and technology-driven approaches to real-world problems."
            />

            <ValueCard
              icon="🌱"
              title="Impact"
              text="Innovation matters when it creates measurable and meaningful change."
            />

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-blue-700 to-cyan-600 px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-4xl font-bold">
            Be Part of the Innovation Journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Whether you have a problem to report or an idea to solve it,
            there is a place for you in the innovation ecosystem.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="/submit-problem"
              className="rounded-xl bg-emerald-500 px-7 py-4 font-bold text-white transition hover:scale-105 hover:bg-emerald-400"
            >
              ➤ Submit a Problem
            </a>

            <a
              href="/solutions"
              className="rounded-xl border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Explore Solutions →
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


/* ================= COMPONENTS ================= */

function AboutCard({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl">
        {icon}
      </div>

      <h3 className="mt-4 font-bold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-blue-100/60">
        {text}
      </p>

    </div>
  );
}


function InfoCard({ icon, title, text }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-3xl">
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-slate-500">
        {text}
      </p>

    </div>
  );
}


function Step({ number, icon, title, text }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">

      <p className="text-sm font-bold text-emerald-600">
        {number}
      </p>

      <div className="mx-auto mt-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-2xl">
        {icon}
      </div>

      <h3 className="mt-4 font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {text}
      </p>

    </div>
  );
}


function ValueCard({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <div className="text-4xl">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-500">
        {text}
      </p>

    </div>
  );
}


export default About;