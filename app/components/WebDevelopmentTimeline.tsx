
const comparisons = [
  ["HTML (hand-coded in Notepad)", "HTML5 (in VS Code)"],
  ["CSS (basic styling)", "Tailwind CSS (utility-first, responsive)"],
  ["JavaScript (early versions)", "TypeScript (modern, type-safe)"],
  ["jQuery (DOM & effects)", "React (component-based UI)"],
  ["PHP (server-side pages)", "Next.js (full-stack web apps)"],
  ["Bootstrap (layout & components)", "Responsive Design (Flexbox & CSS Grid)"],
  ["XML / AJAX (data & updates)", "JSON & REST APIs (data exchange)"],
  ["Dreamweaver / Notepad++ (editing)", "Visual Studio Code (development)"],
  ["Photoshop (graphics & assets)", "Modern Image Workflows (SVG, WebP)"],
  ["FileZilla / FTP (manual uploads)", "GitHub & Vercel (deployment)"],
];

function Technology({ value }: { value: string }) {
  const match = value.match(/^(.+?)(\s*\(.+\))$/);

  return (
    <span>
      <strong>{match ? match[1] : value}</strong>
      {match && <span className="font-normal"> {match[2]}</span>}
    </span>
  );
}

export default function WebDevelopmentTimeline() {
  return (
    <section
      id="web-development"
      className="w-full bg-[#e7e7e7] text-[#24191a]"
    >
      
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-10">
        <div className="bg-[] px-6 py-8 text-center">
        <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          <span className="font-extrabold text-[#e38165]">WEB</span>{" "}
          <span className="font-normal text-[#694b4d]">development</span>
        </h2>
      </div>

        <div className="grid grid-cols-2 gap-4 text-center sm:gap-12">
          <div>
            <h3 className="text-xl font-bold sm:text-3xl">
              Where I started
            </h3>
            <p className="mt-3 font-serif text-3xl">1998</p>
          </div>

          <div>
            <h3 className="text-xl font-bold sm:text-3xl">
              Where I am now
            </h3>
            <p className="mt-3 font-serif text-3xl">2026</p>
          </div>
        </div>

        <div className="my-5 flex items-center justify-center">
          <div className="h-px w-36 bg-gradient-to-r from-transparent to-[#332527] sm:w-64" />
          <div className="h-0 w-0 border-y-[7px] border-l-[16px] border-y-transparent border-l-[#332527]" />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-10">
          <ul className="space-y-4 border-r border-[#805455] pr-4 sm:pr-8">
            {comparisons.map(([oldTech]) => (
              <li key={oldTech} className="flex gap-2 text-xs leading-relaxed sm:text-base">
                <span className="text-[#622e35]">•</span>
                <Technology value={oldTech} />
              </li>
            ))}
          </ul>

          <ul className="space-y-4">
            {comparisons.map(([, newTech]) => (
              <li key={newTech} className="flex gap-2 text-xs leading-relaxed sm:text-base">
                <span className="text-[#622e35]">•</span>
                <Technology value={newTech} />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 text-center">
          <div className="flex items-center gap-5">
            <div className="h-px flex-1 bg-[#805455]" />
            <h3 className="font-serif text-3xl font-semibold italic text-[#622e35]">
              Summary
            </h3>
            <div className="h-px flex-1 bg-[#805455]" />
          </div>

          <p className="mx-auto mt-5 max-w-4xl font-serif text-lg italic leading-relaxed sm:text-2xl">
            From hand-coded HTML in 1998 to modern, full-stack
            development in 2026, my skills have evolved with the web,
            combining long-term experience with today&apos;s best practices.
          </p>
        </div>
      </div>
    </section>
  );
}
