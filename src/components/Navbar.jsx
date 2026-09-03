import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchText.trim();

    if (!query) {
      return;
    }

    window.location.href =
      "/challenges?search=" + encodeURIComponent(query);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#020b2d]/95 backdrop-blur-md">

      {/* MAIN NAVBAR */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        {/* LOGO */}
        <a
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl">
            🌱
          </div>

          <div>
            <h1 className="font-bold tracking-wide text-white">
              JHARKHAND
            </h1>

            <p className="text-[10px] font-semibold tracking-[0.18em] text-emerald-400">
              INNOVATION PLATFORM
            </p>
          </div>
        </a>


        {/* DESKTOP NAVBAR */}
        <div className="hidden items-center gap-2 lg:flex">

          <a
            href="/"
            className="rounded-full px-4 py-2.5 font-medium text-white/80 transition hover:bg-white/10 hover:text-emerald-400"
          >
            Home
          </a>

          <a
            href="/challenges"
            className="rounded-full px-4 py-2.5 font-medium text-white/80 transition hover:bg-white/10 hover:text-emerald-400"
          >
            Challenges
          </a>

          <a
            href="/solutions"
            className="rounded-full px-4 py-2.5 font-medium text-white/80 transition hover:bg-white/10 hover:text-emerald-400"
          >
            Solutions
          </a>

          <a
            href="/collaborate"
            className="rounded-full px-4 py-2.5 font-medium text-white/80 transition hover:bg-white/10 hover:text-emerald-400"
          >
            Collaborate
          </a>

          <a
            href="/impact"
            className="rounded-full px-4 py-2.5 font-medium text-white/80 transition hover:bg-white/10 hover:text-emerald-400"
          >
            Impact
          </a>

          <a
            href="/about"
            className="rounded-full px-4 py-2.5 font-medium text-white/80 transition hover:bg-white/10 hover:text-emerald-400"
          >
            About Us
          </a>


          {/* SEARCH BUTTON */}
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="rounded-full px-3 py-2 text-xl text-white transition hover:bg-white/10 hover:text-emerald-400"
          >
            🔍
          </button>


          {/* LOGIN */}
          <a
            href="/login"
            className="rounded-xl border border-emerald-500/50 px-4 py-2.5 font-semibold text-white transition hover:bg-emerald-500/10"
          >
            Login
          </a>


          {/* SUBMIT */}
          <a
            href="/submit-problem"
            className="rounded-xl bg-emerald-500 px-4 py-2.5 font-bold text-white transition hover:scale-105 hover:bg-emerald-400"
          >
            ➤ Submit a Problem
          </a>

        </div>


        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/20 px-3 py-2 text-2xl text-white lg:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#020b2d] px-5 pb-6 pt-4 lg:hidden">

          <div className="flex flex-col gap-2">

            <a
              href="/"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium text-white hover:bg-white/10 hover:text-emerald-400"
            >
              🏠 Home
            </a>

            <a
              href="/challenges"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium text-white hover:bg-white/10 hover:text-emerald-400"
            >
              ◈ Challenges
            </a>

            <a
              href="/solutions"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium text-white hover:bg-white/10 hover:text-emerald-400"
            >
              ◇ Solutions
            </a>

            <a
              href="/collaborate"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium text-white hover:bg-white/10 hover:text-emerald-400"
            >
              ♧ Collaborate
            </a>

            <a
              href="/impact"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium text-white hover:bg-white/10 hover:text-emerald-400"
            >
              ◉ Impact
            </a>

            <a
              href="/about"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium text-white hover:bg-white/10 hover:text-emerald-400"
            >
              ℹ About Us
            </a>


            {/* MOBILE SEARCH */}
            <button
              type="button"
              onClick={() => {
                closeMenu();
                setSearchOpen(true);
              }}
              className="mt-2 rounded-xl border border-white/20 px-4 py-3 text-left font-medium text-white hover:bg-white/10"
            >
              🔍 Search Challenges
            </button>


            {/* LOGIN */}
            <a
              href="/login"
              onClick={closeMenu}
              className="mt-2 rounded-xl border border-emerald-500/50 px-4 py-3 font-semibold text-white"
            >
              Login
            </a>


            {/* SUBMIT */}
            <a
              href="/submit-problem"
              onClick={closeMenu}
              className="rounded-xl bg-emerald-500 px-4 py-3 font-bold text-white"
            >
              ➤ Submit a Problem
            </a>

          </div>

        </div>
      )}


      {/* ================= SEARCH POPUP ================= */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 px-5 pt-24 backdrop-blur-sm"
          onClick={() => setSearchOpen(false)}
        >

          <div
            className="w-full max-w-2xl rounded-3xl border border-white/10 bg-[#071638] p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="mb-5 flex items-center justify-between">

              <div>
                <h2 className="text-2xl font-bold text-white">
                  Search Challenges
                </h2>

                <p className="mt-1 text-sm text-white/50">
                  Search by title, category, location or description.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="rounded-full px-3 py-2 text-xl text-white/60 hover:bg-white/10 hover:text-white"
              >
                ✕
              </button>

            </div>


            <form onSubmit={handleSearch}>

              <div className="flex overflow-hidden rounded-2xl border border-white/10 bg-white/10">

                <input
                  autoFocus
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="e.g. Healthcare, Ranchi, Education..."
                  className="min-w-0 flex-1 bg-transparent px-5 py-4 text-white outline-none placeholder:text-white/40"
                />

                <button
                  type="submit"
                  className="bg-emerald-500 px-6 font-bold text-white transition hover:bg-emerald-400"
                >
                  Search
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;