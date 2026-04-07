"use client";

import { useState } from "react";

export default function ResumePage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-200 via-zinc-300 to-zinc-400 flex items-center justify-center p-6">
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={() => setOpen(true)}
          className="group relative transition-transform duration-300 hover:scale-[1.02]"
        >
          <div className="relative w-[420px] sm:w-[500px] md:w-[600px]">
            <div className="absolute inset-0 translate-y-6 scale-95 rounded-sm bg-black/20 blur-2xl" />
            <div className="relative bg-white shadow-[0_30px_60px_rgba(0,0,0,0.28)] ring-1 ring-black/10 overflow-hidden">
              <div className="aspect-[8.5/11] w-full">
                <ResumeMockup />
              </div>
            </div>
          </div>
        </button>

        <p className="text-sm text-zinc-700/80">Click resume to enlarge</p>
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
              className="absolute -top-12 right-0 bg-white px-3 py-1 text-sm shadow"
            >
              Close
            </button>

            <div className="mx-auto w-full max-w-[900px] bg-white shadow-[0_40px_100px_rgba(0,0,0,0.45)] overflow-hidden">
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
    <div className="grid h-full w-full grid-cols-[30%_70%] text-sm text-zinc-700">
      {/* LEFT */}
      <aside className="bg-[#f3f0ed] px-5 py-6">
        <div className="flex flex-col items-center mb-4">
          <div className="h-20 w-20 rounded-full border-4 border-[#d68f7c] bg-zinc-300" />
        </div>

        <SectionTitle>PROFILE</SectionTitle>
        <p className="leading-relaxed text-sm text-zinc-600">
          Senior technical support professional with extensive experience in IT,
          telecommunications, troubleshooting, and data-driven problem solving.
        </p>

        <SectionTitle>CONTACT</SectionTitle>
        <div className="space-y-1 text-sm text-zinc-600">
          <p>+1 555 555 5555</p>
          <p>email@email.com</p>
          <p>linkedin.com/in/yourname</p>
          <p>Peterborough, ON</p>
        </div>
      </aside>

      {/* RIGHT */}
      <section>
        <div className="bg-[#2d2928] px-6 py-6 text-white">
          <h1 className="text-3xl font-semibold tracking-widest">
            BRYAN BUCKNELL
          </h1>
          <p className="mt-2 text-sm uppercase tracking-wider text-white/70">
            Technical Support • Data Science • IT Specialist
          </p>
        </div>

        <div className="px-6 py-6">
          <ResumeSection title="EDUCATION">
            <ResumeItem
              title="MSc Data Science"
              place="University of Colorado Boulder"
              years="Recent"
              text="Advanced training in machine learning, statistics, and data analysis."
            />
          </ResumeSection>

          <ResumeSection title="EXPERIENCE">
            <ResumeItem
              title="Technical Communications Analyst"
              place="Bell Canada"
              years="Multi-year"
              text="Provided high-level support, troubleshooting, and communication for complex telecom systems."
            />
            <ResumeItem
              title="Independent IT Specialist"
              place="Freelance"
              years="Various"
              text="Worked across hardware, software, networking, and web development."
            />
          </ResumeSection>
        </div>
      </section>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-6 mb-2 text-base font-bold tracking-widest text-[#d68f7c]">
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
    <div className="mb-6">
      <h2 className="mb-3 border-b border-[#e7d6cf] pb-1 text-base font-bold tracking-widest text-[#d68f7c]">
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
      <div className="mb-1 flex justify-between">
        <div>
          <h3 className="text-lg font-semibold text-zinc-800">{title}</h3>
          <p className="text-sm text-zinc-500">{place}</p>
        </div>
        <span className="text-xs text-zinc-500">{years}</span>
      </div>
      <p className="text-sm leading-relaxed text-zinc-600">{text}</p>
    </div>
  );
}
