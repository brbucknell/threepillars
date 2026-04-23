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

  const services = [
    {
      title: "Data Insights & Decision Support",
      description: "Understanding what’s happening and why.",
    },
    {
      title: "Dashboards & Data Visualization",
      description: "Making data easy to understand and act on.",
    },
    {
      title: "Predictive Analytics & Machine Learning",
      description: "Using data to forecast and optimize outcomes.",
    },
    {
      title: "Data Infrastructure & Automation",
      description: "Building reliable systems and workflows.",
    },
    {
      title: "Strategy, Experimentation & Enablement",
      description: "Turning data into long-term business value.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/background1.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-white/15" />

      <div className="relative z-10 flex min-h-screen flex-col items-center px-4 pt-6 pb-6 sm:px-6 sm:pt-10">
        <nav className="mb-5 w-full max-w-[720px] rounded-3xl border border-white/25 bg-white/20 px-4 py-3 shadow-md backdrop-blur-sm">
          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-900 sm:gap-x-8 sm:text-sm sm:tracking-[0.2em]">
            <li>
              <a
                href="/resume"
                className="block rounded-full px-3 py-1 transition hover:text-green-900"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="/portfolio"
                className="block rounded-full px-3 py-1 transition hover:text-green-900"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block rounded-full px-3 py-1 transition hover:text-green-900"
              >
                About
              </a>
            </li>
          </ul>
        </nav>

        <section className="grid w-full max-w-[1500px] grid-cols-1 items-start gap-4 xl:grid-cols-[0.85fr_1.2fr_0.85fr]">
          <aside className="rounded-2xl border border-white/20 bg-red-200/10 p-4 shadow-lg backdrop-blur-sm">
            <h2 className="mb-2 text-xl text-black sm:text-2xl">
              Brief Description
            </h2>

            <div className="space-y-2 text-sm leading-relaxed text-zinc-900 sm:text-base">
              <p>
                Three Pillars provides practical, results-focused data science
                consulting.
              </p>
              <p>
                From raw data to actionable insight, the goal is clarity,
                reliability, and real-world impact.
              </p>
            </div>
          </aside>

          <div className="rounded-2xl border border-white/20 bg-blue-200/10 p-4 shadow-xl backdrop-blur-sm sm:p-5">
            <header className="mb-4 text-center">
              <h1
                className="text-3xl italic leading-tight text-black sm:text-5xl"
                style={{ fontFamily: '"Times New Roman", serif' }}
              >
                Three Pillars
              </h1>

              <p
                className="mt-1 text-base text-zinc-800 sm:text-2xl"
                style={{ fontFamily: '"Times New Roman", serif' }}
              >
                Data Science Consulting
              </p>
            </header>

            <section className="mx-auto flex w-full max-w-[460px] items-end gap-2 sm:gap-6">
              <div
                className="relative hidden w-10 shrink-0 sm:block"
                style={{ height: `${chartHeight}px` }}
              >
                <span className="absolute bottom-0 text-[10px] text-zinc-600">
                  0
                </span>
                <span className="absolute bottom-[20%] text-[10px] text-zinc-600">
                  200
                </span>
                <span className="absolute bottom-[40%] text-[10px] text-zinc-600">
                  400
                </span>
                <span className="absolute bottom-[60%] text-[10px] text-zinc-600">
                  600
                </span>
                <span className="absolute bottom-[80%] text-[10px] text-zinc-600">
                  800
                </span>
                <span className="absolute bottom-[96%] text-[10px] text-zinc-600">
                  1000
                </span>
              </div>

              <div className="grid flex-1 grid-cols-3 items-end gap-2 sm:gap-6">
                {bars.map((bar, barIndex) => (
                  <div key={bar.label} className="flex min-w-0 flex-col items-center">
                    <div
                      className="relative flex w-full items-end justify-center"
                      style={{ height: `${chartHeight}px` }}
                    >
                      {bar.dots.map((dot, i) => (
                        <span
                          key={i}
                          className={`absolute h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3 ${
                            dotColors[(barIndex + i) % dotColors.length]
                          }`}
                          style={{
                            left: dot.left,
                            bottom: dot.bottom,
                          }}
                        />
                      ))}

                      <div className="flex w-full max-w-[72px] flex-col overflow-hidden rounded-sm shadow">
                        <div
                          className="bg-green-500"
                          style={{
                            height: `${(bar.segments[0] / 1000) * chartHeight}px`,
                          }}
                        />
                        <div
                          className="bg-blue-700"
                          style={{
                            height: `${(bar.segments[1] / 1000) * chartHeight}px`,
                          }}
                        />
                        <div
                          className="bg-red-500"
                          style={{
                            height: `${(bar.segments[2] / 1000) * chartHeight}px`,
                          }}
                        />
                      </div>
                    </div>

                    <div className="mt-3 text-xl font-bold sm:text-3xl">
                      {bar.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="rounded-2xl border border-white/20 bg-red-200/10 p-4 shadow-lg backdrop-blur-sm">
            <h2 className="mb-2 text-xl text-black sm:text-2xl">
              Services
            </h2>

            <div className="space-y-3 text-sm sm:text-base">
              {services.map((service) => (
                <div key={service.title}>
                  <p className="font-semibold text-black">{service.title}</p>
                  <p className="text-zinc-800">{service.description}</p>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <div
          className="relative z-10 mt-5 flex w-full flex-col items-center justify-center gap-1 text-center sm:mt-6 sm:flex-row sm:gap-3"
          style={{ fontFamily: '"Times New Roman", serif' }}
        >
          <span className="text-2xl font-semibold tracking-wide text-green-950 [text-shadow:0_3px_6px_rgba(255,255,255,0.7),0_1px_2px_rgba(0,0,0,0.45)] sm:text-5xl">
            Precision
          </span>

          <span className="hidden text-4xl text-black [text-shadow:0_2px_4px_rgba(255,255,255,0.55)] sm:inline">
            •
          </span>

          <span className="text-2xl font-semibold tracking-wide text-green-950 [text-shadow:0_3px_6px_rgba(255,255,255,0.7),0_1px_2px_rgba(0,0,0,0.45)] sm:text-5xl">
            Development
          </span>

          <span className="hidden text-4xl text-black [text-shadow:0_2px_4px_rgba(255,255,255,0.55)] sm:inline">
            •
          </span>

          <span className="text-2xl font-semibold tracking-wide text-green-950 [text-shadow:0_3px_6px_rgba(255,255,255,0.7),0_1px_2px_rgba(0,0,0,0.45)] sm:text-5xl">
            Integration
          </span>
        </div>
      </div>
    </main>
  );
}
