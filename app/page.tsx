export default function Home() {
  const chartHeight = 220;

  const bars = [
    {
      label: "A",
      segments: [150, 160, 420],
      dots: [
        { left: "18%", bottom: "74%" },
        { left: "28%", bottom: "72%" },
        { left: "38%", bottom: "75%" },
      ],
    },
    {
      label: "B",
      segments: [150, 180, 470],
      dots: [
        { left: "22%", bottom: "77%" },
        { left: "35%", bottom: "82%" },
        { left: "45%", bottom: "79%" },
        { left: "30%", bottom: "74%" },
      ],
    },
    {
      label: "C",
      segments: [170, 190, 500],
      dots: [
        { left: "15%", bottom: "84%" },
        { left: "25%", bottom: "91%" },
        { left: "38%", bottom: "86%" },
        { left: "50%", bottom: "94%" },
        { left: "62%", bottom: "82%" },
        { left: "70%", bottom: "89%" },
      ],
    },
  ];

  const dotColors = [
    "bg-lime-400/70",
    "bg-sky-300/70",
    "bg-violet-400/70",
    "bg-green-300/70",
    "bg-blue-300/70",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/background1.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-white/20" />

      <div className="relative z-10 flex flex-col items-center px-4 pt-8 pb-2 sm:pt-10">
        {/* Top Menu */}
        <nav className="mb-4 rounded-full border border-white/40 bg-white/45 px-5 py-2 shadow-lg backdrop-blur-md">
          <ul className="flex items-center gap-6 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-900 sm:text-base">
            <li>
              <a href="/resume" className="transition hover:text-green-900">
                Resume
              </a>
            </li>
            <li>
              <a href="/portfolio" className="transition hover:text-green-900">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/about" className="transition hover:text-green-900">
                About
              </a>
            </li>
          </ul>
        </nav>

        {/* Card */}
        <div className="w-full max-w-[620px] border border-white/40 bg-white/55 p-5 shadow-2xl backdrop-blur-md sm:p-6">
          <header className="mb-6 text-center">
            <h1
              className="text-3xl italic text-black sm:text-5xl"
              style={{ fontFamily: '"Times New Roman", serif' }}
            >
              Three Pillars
            </h1>

            <p
              className="mt-2 text-lg text-zinc-800 sm:text-2xl"
              style={{ fontFamily: '"Times New Roman", serif' }}
            >
              Data Science Consulting
            </p>
          </header>

          <section className="mx-auto flex w-full max-w-[460px] items-end gap-4 sm:gap-6">
            <div
              className="relative hidden w-10 sm:block"
              style={{ height: `${chartHeight}px` }}
            >
              <span className="absolute bottom-0 text-[10px] text-zinc-600">0</span>
              <span className="absolute bottom-[20%] text-[10px] text-zinc-600">200</span>
              <span className="absolute bottom-[40%] text-[10px] text-zinc-600">400</span>
              <span className="absolute bottom-[60%] text-[10px] text-zinc-600">600</span>
              <span className="absolute bottom-[80%] text-[10px] text-zinc-600">800</span>
              <span className="absolute bottom-[96%] text-[10px] text-zinc-600">1000</span>
            </div>

            <div className="grid flex-1 grid-cols-3 items-end gap-4 sm:gap-6">
              {bars.map((bar, barIndex) => (
                <div key={bar.label} className="flex flex-col items-center">
                  <div
                    className="relative flex w-full items-end justify-center"
                    style={{ height: `${chartHeight}px` }}
                  >
                    {bar.dots.map((dot, i) => (
                      <span
                        key={i}
                        className={`absolute h-3 w-3 rounded-full ${
                          dotColors[(barIndex + i) % dotColors.length]
                        }`}
                        style={{
                          left: dot.left,
                          bottom: dot.bottom,
                        }}
                      />
                    ))}

                    <div className="flex w-full max-w-[72px] flex-col overflow-hidden shadow">
                      <div
                        className="bg-green-500"
                        style={{ height: `${(bar.segments[0] / 1000) * chartHeight}px` }}
                      />
                      <div
                        className="bg-blue-700"
                        style={{ height: `${(bar.segments[1] / 1000) * chartHeight}px` }}
                      />
                      <div
                        className="bg-red-500"
                        style={{ height: `${(bar.segments[2] / 1000) * chartHeight}px` }}
                      />
                    </div>
                  </div>

                  <div className="mt-3 text-2xl font-bold sm:text-3xl">
                    {bar.label}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Pillars text */}
        <div
          className="relative z-10 mt-2 w-full text-center sm:mt-4"
          style={{ fontFamily: '"Times New Roman", serif' }}
        >
          <span className="text-green-950 text-3xl font-semibold tracking-wide [text-shadow:0_3px_6px_rgba(255,255,255,0.7),0_1px_2px_rgba(0,0,0,0.45)] sm:text-5xl">
            Precision
          </span>
          <span className="mx-4 text-2xl text-black [text-shadow:0_2px_4px_rgba(255,255,255,0.55)] sm:text-4xl">
            •
          </span>
          <span className="text-green-950 text-3xl font-semibold tracking-wide [text-shadow:0_3px_6px_rgba(255,255,255,0.7),0_1px_2px_rgba(0,0,0,0.45)] sm:text-5xl">
            Development
          </span>
          <span className="mx-4 text-2xl text-black [text-shadow:0_2px_4px_rgba(255,255,255,0.55)] sm:text-4xl">
            •
          </span>
          <span className="text-green-950 text-3xl font-semibold tracking-wide [text-shadow:0_3px_6px_rgba(255,255,255,0.7),0_1px_2px_rgba(0,0,0,0.45)] sm:text-5xl">
            Integration
          </span>
        </div>
      </div>
    </main>
  );
}
