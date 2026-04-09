"use client";

import { useState } from "react";
import Image from "next/image";

export default function ResumePage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-200 via-zinc-300 to-zinc-400 p-6">
      <div className="flex flex-col items-center gap-4">
        <nav className="mx-auto flex w-fit items-center gap-10 rounded-full bg-[linear-gradient(90deg,#b8d4ef,#a9e3d6)] px-10 py-4 shadow-md">
          <a
            href="/"
            className="text-sm font-bold uppercase tracking-[0.3em] text-black"
          >
            Home
          </a>
          <a
            href="/resume"
            className="text-sm font-bold uppercase tracking-[0.3em] text-black underline underline-offset-4"
          >
            Resume
          </a>
          <a
            href="/portfolio"
            className="text-sm font-bold uppercase tracking-[0.3em] text-black"
          >
            Portfolio
          </a>
          <a
            href="/about"
            className="text-sm font-bold uppercase tracking-[0.3em] text-black"
          >
            About
          </a>
        </nav>

        <button
          onClick={() => setOpen(true)}
          className="group relative transition-transform duration-300 hover:scale-[1.02]"
        >
          <div className="relative w-[420px] sm:w-[500px] md:w-[600px]">
            <div className="absolute inset-0 translate-y-6 scale-95 rounded-sm bg-black/20 blur-2xl" />
            <div className="relative overflow-hidden bg-white shadow-[0_30px_60px_rgba(0,0,0,0.28)] ring-1 ring-black/10">
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

            <div className="mx-auto w-full max-w-[900px] overflow-hidden bg-white shadow-[0_40px_100px_rgba(0,0,0,0.45)]">
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
      <aside className="bg-[#f3f0ed] px-5 py-6">
        <div className="mb-4 flex flex-col items-center">
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-white shadow-md">
            <Image
              src="/portfolioself.png"
              alt="Bryan Bucknell"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <SectionTitle>PROFILE</SectionTitle>
        <p className="text-sm leading-relaxed text-zinc-600">
          Senior technical support professional with extensive experience in IT,
          telecommunications, troubleshooting, and data-driven problem solving.
        </p>

        <SectionTitle>CONTACT</SectionTitle>
        <div className="space-y-1 text-sm text-zinc-600">
          <p>+1 705-931-0884</p>
          <p>bryan@threepillars.dev</p>
          <p>linkedin.com/in/bryan-b-9297383a1</p>
        </div>
      </aside>

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
            >
              <ul className="mt-2 list-disc space-y-2 pl-5 textAlign: 'left text-sm text-zinc-600">
                <li>
                  Applied mathematics, statistics, and computer science skills
                                </li>
                <li>
                  Data acquisition, cleaning, management, and data mining
                Machine learning and analytical modeling
                </li>
                  Design and execution of statistical experiments and models                           
                  Drawing data-driven conclusions using probability and
                  statistical methods
                </li>
                <li>
                  Communicating complex results clearly to non-technical
                  audiences
                
                  Structuring effective projects and collaborative workflows
                </li>
                <li>Ethical and responsible practice in data science</li>
              </ul>
            </ResumeItem>
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
    <h2 className="mb-2 mt-6 text-base font-bold tracking-widest text-[#d68f7c]">
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
  children,
}: {
  title: string;
  place: string;
  years: string;
  text?: string;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-1 flex justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-zinc-800">{title}</h3>
          <p className="text-sm text-zinc-500">{place}</p>
        </div>
        <span className="shrink-0 text-xs text-zinc-500">{years}</span>
      </div>

      {text && <p className="text-sm leading-relaxed text-zinc-600">{text}</p>}
      {children}
    </div>
  );
}
