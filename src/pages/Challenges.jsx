import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

console.log("🔥 NEW CHALLENGES FILE IS RUNNING");
6
function ChallengesPage() {
  const [problems, setProblems] = useState([]);
  const [input, setInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // LOAD PROBLEMS
  useEffect(() => {
    const data = localStorage.getItem("submittedProblems");

    if (data) {
      try {
        const parsedData = JSON.parse(data);

        if (Array.isArray(parsedData)) {
          setProblems(parsedData);
        }
      } catch (error) {
        console.error("Error reading submittedProblems:", error);
        setProblems([]);
      }
    }
  }, []);

  // SEARCH BUTTON
  const handleSearch = () => {
    setSearchTerm(input.trim());
  };

  // ENTER KEY
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // CLEAR SEARCH
  const clearSearch = () => {
    setInput("");
    setSearchTerm("");
  };

  // FILTER
  const filteredProblems = problems.filter((problem) => {
    if (searchTerm === "") {
      return true;
    }

    const search = searchTerm.toLowerCase();

    const title = String(problem.title || "").toLowerCase();
    const category = String(problem.category || "").toLowerCase();
    const location = String(problem.location || "").toLowerCase();
    const description = String(problem.description || "").toLowerCase();

    return (
      title.includes(search) ||
      category.includes(search) ||
      location.includes(search) ||
      description.includes(search)
    );
  });

  return (
    <div className="min-h-screen bg-[#020b2d] text-white">

      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-16">

        {/* HEADER */}
        <div className="mb-10 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Explore Challenges
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Community Challenges
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Discover real-world problems submitted by communities across
            Jharkhand and help build meaningful solutions.
          </p>

        </div>


        {/* SEARCH */}
        <div className="mx-auto mb-10 max-w-2xl">

          <div className="flex overflow-hidden rounded-2xl border border-white/10 bg-white/10">

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search Ranchi, Healthcare, Environment..."
              className="flex-1 bg-transparent px-5 py-4 text-white outline-none placeholder:text-white/40"
            />

            <button
              type="button"
              onClick={handleSearch}
              className="bg-emerald-500 px-7 font-bold text-white hover:bg-emerald-400"
            >
              🔍 Search
            </button>

          </div>

        </div>


        {/* SEARCH STATUS */}
        {searchTerm !== "" && (
          <div className="mb-8 flex items-center justify-between">

            <p className="text-sm text-white/60">
              Showing results for{" "}
              <span className="font-bold text-emerald-400">
                "{searchTerm}"
              </span>
            </p>

            <button
              type="button"
              onClick={clearSearch}
              className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white/70 hover:bg-white/10"
            >
              Clear
            </button>

          </div>
        )}


        {/* NO DATA */}
        {problems.length === 0 && (

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

            <div className="mb-4 text-5xl">
              💡
            </div>

            <h2 className="text-2xl font-bold">
              No challenges submitted yet
            </h2>

            <p className="mt-2 text-white/50">
              Be the first to submit a real-world problem.
            </p>

          </div>

        )}


        {/* NO SEARCH RESULT */}
        {problems.length > 0 && filteredProblems.length === 0 && (

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

            <div className="mb-4 text-5xl">
              🔎
            </div>

            <h2 className="text-2xl font-bold">
              No matching challenges found
            </h2>

            <p className="mt-2 text-white/50">
              No challenge matches "{searchTerm}".
            </p>

            <button
              type="button"
              onClick={clearSearch}
              className="mt-6 rounded-xl bg-emerald-500 px-6 py-3 font-bold hover:bg-emerald-400"
            >
              Show All Challenges
            </button>

          </div>

        )}


        {/* CARDS */}
        {filteredProblems.length > 0 && (

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {filteredProblems.map((problem, index) => (

              <div
                key={problem.id || index}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl transition hover:-translate-y-1 hover:border-emerald-400/40"
              >

                {/* CATEGORY */}
                <div className="mb-4 flex items-center justify-between">

                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
                    {problem.category || "General"}
                  </span>

                  <span className="text-xs text-white/40">
                    Community
                  </span>

                </div>


                {/* TITLE */}
                <h2 className="text-xl font-bold">
                  {problem.title || "Untitled Challenge"}
                </h2>


                {/* DESCRIPTION */}
                <p className="mt-3 line-clamp-4 text-sm leading-6 text-white/60">
                  {problem.description || "No description available."}
                </p>


                {/* LOCATION */}
                <div className="mt-5 flex items-center gap-2 text-sm text-white/50">
                  📍 {problem.location || "Jharkhand"}
                </div>


                {/* VIEW CHALLENGE */}
                <button
                  type="button"
                  onClick={() => {

                    localStorage.setItem(
                      "selectedChallenge",
                      JSON.stringify(problem)
                    );

                    window.location.href = "/challenge-details";

                  }}
                  className="mt-6 w-full rounded-xl border border-emerald-500/40 px-4 py-3 font-semibold text-emerald-400 transition hover:bg-emerald-500/10"
                >
                  View Challenge →
                </button>

              </div>

            ))}

          </div>

        )}

      </section>

    </div>
  );
}

export default ChallengesPage;