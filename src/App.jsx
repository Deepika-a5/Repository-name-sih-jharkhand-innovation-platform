function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* ================= NAVBAR ================= */}
      <header className="absolute left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8">

        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-white/10 bg-[#061a3a]/95 px-5 py-4 shadow-2xl backdrop-blur-xl md:px-7">

          {/* LOGO */}
          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-green-400 bg-white text-2xl">
              🌿
            </div>

            <div className="hidden sm:block">
              <h1 className="text-lg font-extrabold tracking-wide text-white">
                JHARKHAND
              </h1>

              <p className="text-[10px] font-semibold tracking-[0.18em] text-green-300">
                INNOVATION PLATFORM
              </p>
            </div>

          </div>


          {/* NAVIGATION */}
          <div className="hidden items-center gap-2 lg:flex">

            <a
              href="#home"
              className="rounded-full bg-green-500/15 px-5 py-2.5 font-semibold text-green-300"
            >
              🏠 Home
            </a>

            <a
              href="#challenges"
              className="rounded-full px-5 py-2.5 font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              ◈ Challenges
            </a>

            <a
              href="#solutions"
              className="rounded-full px-5 py-2.5 font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              ◇ Solutions
            </a>

            <a
              href="#collaborate"
              className="rounded-full px-5 py-2.5 font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              ♧ Collaborate
            </a>

            <a
              href="#impact"
              className="rounded-full px-5 py-2.5 font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              ◉ Impact
            </a>

            <a
              href="#about"
              className="rounded-full px-5 py-2.5 font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              About Us
            </a>

          </div>


          {/* RIGHT BUTTONS */}
          <div className="flex items-center gap-2">

            <button className="hidden h-11 w-11 items-center justify-center rounded-full border border-green-500/50 text-xl text-white transition hover:bg-green-500/10 md:flex">
              ⌕
            </button>

            <button className="rounded-xl border border-green-500/50 px-4 py-2.5 font-semibold text-white transition hover:bg-green-500/10">
              Login
            </button>

            <button className="rounded-xl bg-green-500 px-4 py-2.5 font-bold text-white shadow-lg shadow-green-500/20 transition hover:bg-green-400">
              <span className="hidden sm:inline">➤ Submit a Problem</span>
              <span className="sm:hidden">➤</span>
            </button>

          </div>

        </nav>

      </header>


      {/* ================= HERO ================= */}
      <main id="home">

        <section className="relative min-h-[780px] overflow-hidden bg-[#03183b]">

          {/* BACKGROUND GLOW */}
          <div className="absolute left-[-180px] top-[220px] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl"></div>

          <div className="absolute right-[-150px] top-[150px] h-[500px] w-[500px] rounded-full bg-green-500/10 blur-3xl"></div>

          {/* GRID */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          ></div>


          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-36 pt-48 md:grid-cols-2 md:px-10 lg:pt-52">


            {/* ================= HERO LEFT ================= */}
            <div className="relative z-10">

              {/* BADGE */}
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-400/40 bg-green-400/10 px-5 py-2.5 text-sm font-semibold text-green-300">
                🚀
                <span>Empowering Innovation Across Jharkhand</span>
              </div>


              {/* TITLE */}
              <h2 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">

                Solve Problems.

                <br />

                Build a Better

                <br />

                <span className="text-green-400">
                  Jharkhand.
                </span>

              </h2>


              {/* DESCRIPTION */}
              <p className="mt-7 max-w-2xl text-base leading-7 text-blue-100/80 md:text-lg">
                A collaborative platform connecting citizens, universities,
                students, startups and industries to transform real-world
                societal challenges into impactful solutions.
              </p>


              {/* BUTTONS */}
              <div className="mt-9 flex flex-wrap gap-4">

                <button className="group rounded-xl bg-green-500 px-6 py-4 font-bold text-white shadow-xl shadow-green-500/20 transition duration-300 hover:-translate-y-1 hover:bg-green-400">

                  📝 Submit a Problem

                  <span className="ml-3 transition group-hover:ml-5">
                    →
                  </span>

                </button>


                <button className="rounded-xl border border-green-400/60 bg-transparent px-6 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10">

                  Explore Challenges →

                </button>

              </div>


              {/* PEOPLE */}
              <div className="mt-9 flex items-center gap-4">

                <div className="flex -space-x-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#03183b] bg-orange-200">
                    👩
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#03183b] bg-blue-200">
                    👨
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#03183b] bg-green-200">
                    👩
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#03183b] bg-yellow-200">
                    👨
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#03183b] bg-purple-200">
                    +
                  </div>

                </div>

                <div>
                  <p className="font-bold text-white">
                    1,000+ citizens & innovators
                  </p>

                  <p className="text-sm text-blue-200/70">
                    already making an impact
                  </p>
                </div>

              </div>

            </div>


            {/* ================= HERO RIGHT ================= */}
            <div className="relative hidden min-h-[500px] md:block">


              {/* MAP CONTAINER */}
              <div className="absolute left-1/2 top-1/2 flex h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">

                {/* OUTER GLOW */}
                <div className="absolute h-[390px] w-[390px] rounded-full border border-green-400/10 shadow-[0_0_100px_rgba(34,197,94,0.12)]"></div>

                {/* ORBIT */}
                <div className="absolute h-[430px] w-[430px] animate-[spin_30s_linear_infinite] rounded-full border border-dashed border-green-300/20"></div>


                {/* JHARKHAND INSPIRED SHAPE */}
                <div className="relative flex h-[300px] w-[270px] rotate-[-5deg] items-center justify-center">

                  <div className="absolute inset-0 rounded-[45%_55%_48%_52%] border-4 border-green-300 bg-gradient-to-br from-green-500/40 via-blue-500/20 to-green-700/30 shadow-[0_0_60px_rgba(74,222,128,0.25)] [clip-path:polygon(25%_5%,65%_0%,93%_22%,87%_52%,100%_75%,70%_95%,40%_87%,8%_100%,0%_65%,12%_40%,5%_18%)]">
                  </div>


                  {/* CENTRAL SYMBOL */}
                  <div className="relative z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full border border-white/30 bg-[#092855]/80 shadow-2xl backdrop-blur">
                    <span className="text-4xl">🌱</span>
                    <span className="mt-1 text-xs font-bold tracking-wider text-green-300">
                      JHARKHAND
                    </span>
                  </div>

                </div>


                {/* CONNECTION DOTS */}
                <div className="absolute left-[45px] top-[100px] h-3 w-3 animate-pulse rounded-full bg-green-300 shadow-[0_0_20px_rgba(134,239,172,1)]"></div>

                <div className="absolute right-[55px] top-[155px] h-3 w-3 animate-pulse rounded-full bg-blue-300 shadow-[0_0_20px_rgba(147,197,253,1)]"></div>

                <div className="absolute bottom-[90px] left-[100px] h-3 w-3 animate-pulse rounded-full bg-purple-300 shadow-[0_0_20px_rgba(216,180,254,1)]"></div>

                <div className="absolute bottom-[60px] right-[105px] h-3 w-3 animate-pulse rounded-full bg-yellow-300 shadow-[0_0_20px_rgba(253,224,71,1)]"></div>


              </div>


              {/* CITIZEN CARD */}
              <div className="absolute left-0 top-3 w-48 rounded-2xl border border-green-200/30 bg-green-100/95 p-4 shadow-2xl backdrop-blur">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl">
                    👥
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">
                      Citizens
                    </p>

                    <p className="text-xs text-slate-600">
                      Report local challenges
                    </p>
                  </div>

                </div>

              </div>


              {/* UNIVERSITY CARD */}
              <div className="absolute left-[-70px] top-[250px] w-52 rounded-2xl border border-purple-200/30 bg-purple-100/95 p-4 shadow-2xl backdrop-blur">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl">
                    🎓
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">
                      Universities
                    </p>

                    <p className="text-xs text-slate-600">
                      Research & develop
                    </p>
                  </div>

                </div>

              </div>


              {/* INDUSTRY CARD */}
              <div className="absolute right-[-20px] top-[230px] w-48 rounded-2xl border border-orange-200/30 bg-orange-100/95 p-4 shadow-2xl backdrop-blur">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl">
                    🏭
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">
                      Industry
                    </p>

                    <p className="text-xs text-slate-600">
                      Implement & scale
                    </p>
                  </div>

                </div>

              </div>


              {/* IMPACT CARD */}
              <div className="absolute bottom-0 left-1/2 w-52 -translate-x-1/2 rounded-2xl border border-blue-200/30 bg-blue-100/95 p-4 shadow-2xl backdrop-blur">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl">
                    🌱
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">
                      Real Impact
                    </p>

                    <p className="text-xs text-slate-600">
                      Stronger communities
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* ================= STATS ================= */}
          <div className="absolute bottom-[-55px] left-1/2 z-20 w-[92%] max-w-7xl -translate-x-1/2">

            <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl md:grid-cols-5">

              <Stat
                number="1,248"
                title="Problems Reported"
                description="From across Jharkhand"
                icon="📄"
              />

              <Stat
                number="386"
                title="Solutions Implemented"
                description="Creating real impact"
                icon="✓"
              />

              <Stat
                number="42"
                title="Universities Connected"
                description="Across the state"
                icon="🎓"
              />

              <Stat
                number="67"
                title="Industry Partners"
                description="Supporting innovation"
                icon="♧"
              />

              <Stat
                number="125K+"
                title="Citizens Impacted"
                description="And growing every day"
                icon="👥"
              />

            </div>

          </div>

        </section>


        {/* ================= NEXT SECTION ================= */}
        <section className="px-6 pb-24 pt-36">

          <div className="mx-auto max-w-7xl text-center">

            <p className="font-bold tracking-[0.25em] text-green-600">
              // &nbsp; DISCOVER &nbsp; //
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#061a3a] md:text-5xl">
              Explore Community Challenges
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Real problems. Real people. Real impact.
            </p>

            <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-green-500"></div>

          </div>

        </section>

      </main>

    </div>
  );
}


/* ================= STAT COMPONENT ================= */

function Stat({ number, title, description, icon }) {
  return (
    <div className="border-b border-slate-200 px-5 py-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">

      <div className="flex items-start gap-4">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-xl text-green-600">
          {icon}
        </div>

        <div>

          <p className="text-3xl font-black text-[#06275a]">
            {number}
          </p>

          <p className="mt-1 text-sm font-bold text-slate-800">
            {title}
          </p>

          <p className="mt-1 text-xs text-slate-500">
            {description}
          </p>

        </div>

      </div>

    </div>
  );
}


export default App;