import React from "react";

const challenges = [
  {
    id: 1,
    category: "AI & ML",
    icon: "🤖",
    title: "AI-Based Smart Diagnosis",
    description:
      "Develop an intelligent system that can assist users with early detection and analysis.",
    difficulty: "Medium",
    status: "Open",
  },
  {
    id: 2,
    category: "Healthcare",
    icon: "🏥",
    title: "Digital Health Monitoring",
    description:
      "Create a technology solution for continuous health monitoring and alerts.",
    difficulty: "Hard",
    status: "Open",
  },
  {
    id: 3,
    category: "Education",
    icon: "🎓",
    title: "Personalized Learning Platform",
    description:
      "Build a platform that provides personalized learning experiences for students.",
    difficulty: "Medium",
    status: "Open",
  },
  {
    id: 4,
    category: "Smart City",
    icon: "🚦",
    title: "Intelligent Traffic Management",
    description:
      "Use AI and data to improve traffic flow and reduce congestion in cities.",
    difficulty: "Hard",
    status: "Open",
  },
  {
    id: 5,
    category: "Governance",
    icon: "🏛️",
    title: "Citizen Service Portal",
    description:
      "Develop a unified digital platform that makes public services easier to access.",
    difficulty: "Medium",
    status: "Open",
  },
  {
    id: 6,
    category: "Environment",
    icon: "🌱",
    title: "Smart Waste Management",
    description:
      "Create a smart solution to monitor, collect and manage waste efficiently.",
    difficulty: "Easy",
    status: "Open",
  },
];

function ChallengesPage() {
  const handleViewDetails = (challenge) => {
    alert(
      `${challenge.title}\n\n` +
        `${challenge.description}\n\n` +
        `Category: ${challenge.category}\n` +
        `Difficulty: ${challenge.difficulty}\n` +
        `Status: ${challenge.status}`
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* NAVBAR */}
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
              SIH
            </div>

            <div>
              <h1 className="text-lg font-bold">
                Smart India Hackathon
              </h1>

              <p className="text-xs text-slate-500">
                Innovation • Technology • India
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#"
              className="font-medium hover:text-blue-600"
            >
              Home
            </a>

            <a
              href="#"
              className="font-medium hover:text-blue-600"
            >
              About
            </a>

            <a
              href="#"
              className="font-medium text-blue-600"
            >
              Challenges
            </a>

            <a
              href="#"
              className="font-medium hover:text-blue-600"
            >
              Contact
            </a>

            <button className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* PAGE HEADER */}
      <section className="bg-gradient-to-r from-blue-700 to-cyan-500 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-100">
            Smart India Hackathon 2026
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Explore Challenges
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-blue-50">
            Discover real-world problems and build innovative technology
            solutions that can help transform India.
          </p>
        </div>
      </section>

      {/* CHALLENGES */}
      <main className="mx-auto max-w-7xl px-6 py-12">
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold">
            Available Challenges
          </h2>

          <p className="mt-2 text-slate-500">
            Choose a challenge and start building your solution.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              
              {/* Card top */}
              <div className="mb-5 flex items-start justify-between">
                
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  {challenge.icon}
                </div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  {challenge.status}
                </span>
              </div>

              {/* Category */}
              <p className="text-sm font-semibold text-blue-600">
                {challenge.category}
              </p>

              {/* Title */}
              <h3 className="mt-2 text-xl font-bold">
                {challenge.title}
              </h3>

              {/* Description */}
              <p className="mt-3 flex-grow leading-7 text-slate-600">
                {challenge.description}
              </p>

              {/* Difficulty */}
              <div className="mt-6 border-t pt-5">
                <p className="text-sm text-slate-500">
                  Difficulty
                </p>

                <p className="font-semibold">
                  {challenge.difficulty}
                </p>
              </div>

              {/* View Details Button */}
              <button
                onClick={() => handleViewDetails(challenge)}
                className="mt-5 w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                View Details →
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="mt-10 border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center">
          <p className="font