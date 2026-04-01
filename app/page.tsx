export default function Home() {
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
    <main className="relative min-h-screen overflow-hidden bg-zinc-200">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/background1.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative flex min-h-screen items-center justify-center p-6">
        <div className="w-full max-w-[760px] border border-white/40 bg-white/70 p-8 shadow-2xl backdrop-blur-md sm:p-10">
          
          {/* Title */}
          <header className="mb-8 text-center">
            <h1
              className="text-4xl sm:text-6xl text-black italic"
              style={{ fontFamily: '"Times New Roman", serif' }}
            >
              Three Pillars
            </h1>

            <p
              className="mt-3 text-xl sm:text-3xl text-zinc-800"
              style={{ fontFamily: '"Times New Roman", serif' }}
            >
              Data Science Consulting
            </p>
          </header>

          {/* Chart */}
          <section className="mx-auto flex w-full max-w-[560px] items-end gap-6 sm:gap-10">
            
            {/* Y-axis */}
            <div className="relative hidden h-[340px] w-12 sm:block">
              <span className="absolute bottom-0 text-xs text-zinc-500">0</span>
              <span className="absolute bottom-[20%] text-xs text-zinc-500">200</span>
              <span className="absolute bottom-[40%] text-xs text-zinc-500">400</span>
              <span className="absolute bottom-[60%] text-xs text-zinc-500">600</span>
              <span className="absolute bottom-[80%] text-xs text-zinc-500">800</span>
              <span className="absolute bottom-[96%] text-xs text-zinc-500">1000</span>
            </div>

            {/* Bars */}
            <div className="grid flex-1 grid-cols-3 items-end gap-6 sm:gap-10">
              {bars.map((bar, barIndex) => (
                <div key={bar.label} className="flex flex-col items-center">
                  
                  <div className="relative flex h-[340px] w-full items-end justify-center">

                    {/* Floating dots */}
                    {bar.dots.map((dot, i) => (
                      <span
                        key={i}
                        className={`absolute h-4 w-4 rounded-full ${
                          dotColors[(barIndex + i) % dotColors.length]
                        }`}
                        style={{
                          left: dot.left,
                          bottom: dot.bottom,
                        }}
                      />
                    ))}

                    {/* Bar segments */}
                    <div className="flex w-full max-w-[92px] flex-col overflow-hidden shadow">
                      <div
                        className="bg-green-500"
                        style={{ height: `${(bar.segments[0] / 1000) * 340}px` }}
                      />
                      <div
                        className="bg-blue-700"
                        style={{ height: `${(bar.segments[1] / 1000) * 340}px` }}
                      />
                      <div
                        className="bg-red-500"
                        style={{ height: `${(bar.segments[2] / 1000) * 340}px` }}
                      />
                    </div>
                  </div>

                  {/* Label */}
                  <div className="mt-4 text-4xl sm:text-5xl font-bold">
                    {bar.label}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
