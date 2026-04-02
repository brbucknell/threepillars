"use client";

import { useState } from "react";

export default function ResumePage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-200 via-zinc-300 to-zinc-400 flex items-center justify-center p-6">
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={() => setOpen(true)}
          className="group relative transition-transform duration-300 hover:scale-[1.02] focus:outline-none"
          aria-label="Open resume preview"
        >
          <div className="relative w-[320px] sm:w-[380px] md:w-[420px]">
            <div className="absolute inset-0 translate-y-6 scale-95 rounded-sm bg-black/20 blur-2xl" />
            <div className="relative bg-white rounded-[2px] shadow-[0_30px_60px_rgba(0,0,0,0.28)] ring-1 ring-black/10 overflow-hidden">
              <div className="aspect-[8.5/11] w-full">
                <ResumeMockup />
              </div>
            </div>
          </div>
        </button>

        <p className="text-sm text-zinc-700/80 tracking-wide">
          Click resume to enlarge
        </p>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-h-[95vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-12 right-0 rounded-md bg-white/90 px-3 py-1 text-sm font-medium text-zinc-900 shadow hover:bg-white"
            >
              Close
            </button>

            <div className="mx-auto w-full max-w-[900px] bg-white rounded-sm shadow-[0_40px_100px_rgba(0,0,0,0.45)] overflow-hidden">
              <div className="aspect-[8.5/11] w-full">
                <ResumeMockup />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function ResumeMockup() {
  return (
    <div className="grid h-full w-full grid-cols-[30%_70%] text-[0.58rem] text-zinc-700">
      {/* Left Column */}
      <aside className="bg-[#f3f0ed] px-4 py-5">
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 rounded-full border-4 border-[#d68f7c] bg-[radial-gradient(circle_at_35%_30%,#f8d7c8,transparent_35%),linear-gradient(135deg,#b48b7a,#7f5f53)]" />
        </div>

        <SectionTitle>PROFILE</SectionTitle>
        <p className="leading-relaxed text-[0.5rem] text-zinc-600">
          Senior support and technical professional with strong experience in
          customer service, systems support, troubleshooting, documentation, and
          communication across complex environments.
        </p>

        <SectionTitle>CONTACT</SectionTitle>
        <div className="space-y-1 text-[0.5rem] text-zinc-600">
          <p>+1 555 555 5555</p>
          <p>hello@email.com</p>
          <p>linkedin.com/in/yourname</p>
          <p>Peterborough, ON</p>
        </div>

        <SectionTitle>LANGUAGE</SectionTitle>
        <div className="space-y-2 text-[0.5rem]">
          {[
            ["English", 95],
            ["French", 45],
            ["Spanish", 30],
          ].map(([label, width]) => (
            <div key={label}>
              <div className="mb-1 flex justify-between text-zinc-600">
                <span>{label}</span>
              </div>
              <div className="h-1.5 w-full bg-[#e6d7d0]">
                <div
                  className="h-1.5 bg-[#d68f7c]"
                  style={{ width: `${width}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Right Column */}
      <section className="bg-white">
        <div className="bg-[#2d2928] px-6 py-5 text-white">
          <h1 className="text-xl font-semibold tracking-[0.18em]">
            BRYAN JOHNSON
          </h1>
          <p className="mt-1 text-[0.52rem] uppercase tracking-[0.18em] text-white/70">
            Technical Support • Data Science • IT Operations
          </p>
        </div>

        <div className="px-6 py-5">
          <ResumeSection title="EDUCATION">
            <ResumeItem
              title="Master of Science in Data Science"
              place="University of Colorado Boulder"
              years="Recent"
              text="Graduate-level training in data science, analytics, statistics, machine learning, and communication."
            />
            <ResumeItem
              title="Additional Technical Training"
              place="Professional development across IT, support, and systems"
              years="Ongoing"
              text="Continuous learning in software, infrastructure, troubleshooting, and modern data workflows."
            />
          </ResumeSection>

          <ResumeSection title="EXPERIENCE">
            <ResumeItem
              title="Technical Communications Analyst"
              place="Bell Canada"
              years="Multi-year role"
              text="Provided advanced technical support, issue investigation, service coordination, and customer communication in telecommunications environments."
            />
            <ResumeItem
              title="Independent Technology Professional"
              place="Freelance / Self-employed"
              years="Various years"
              text="Worked across web, hardware, software, troubleshooting, repair, and technical guidance for a wide range of systems and clients."
            />
            <ResumeItem
              title="Data Science Projects"
              place="Portfolio and independent research"
              years="Recent"
              text="Built data analysis and visualization projects using Python, R, SQL, and machine learning concepts with a focus on practical impact."
            />
          </ResumeSection>
        </div>
      </section>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-5 mb-2 text-[0.52rem] font-bold tracking-[0.18em] text-[#d68f7c]">
      {children}
    </h2>
  );
}

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5">
      <h2 className="mb-3 border-b border-[#e7d6cf] pb-1 text-[0.58rem] font-bold tracking-[0.18em] text-[#d68f7c]">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function ResumeItem({
  title,
  place,
  years,
  text,
}: {
  title: string;
  place: string;
  years: string;
  text: string;
}) {
  return (
    <div>
      <div className="mb-1 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-[0.56rem] font-semibold text-zinc-800">{title}</h3>
          <p className="text-[0.5rem] text-zinc-500">{place}</p>
        </div>
        <span className="shrink-0 text-[0.48rem] text-zinc-500">{years}</span>
      </div>
      <p className="max-w-[95%] text-[0.5rem] leading-relaxed text-zinc-600">
        {text}
      </p>
    </div>
  );
}
