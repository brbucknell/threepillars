
"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const education = [
  {
    title: "Master's Degree in Data Science",
    institution: "University of Colorado Boulder",
    date: "",
    description:
      "Advanced study in data science, algorithms, statistics, programming, and analytical methods.",
  },
  {
    title: "HTML, CSS, and JavaScript for Web Developers",
    institution: "Johns Hopkins University",
    date: "February 5, 2023",
    description:
      "Web development fundamentals, responsive design, and JavaScript programming.",
  },
  {
    title: "Web Development Business",
    institution: "Independent Practice",
    date: "2011–2023",
    description:
      "Over a decade of practical experience building and maintaining websites for clients.",
  },
  {
    title: "Computer Engineering Technician",
    institution: "Sir Sandford Fleming College",
    date: "2007",
    description:
      "Technical education in computer systems, hardware, and engineering technology.",
  },
];

const experience = [
  {
    title: "Outlier",
    role: "Independent Technology Services",
    description:
      "Web development, data and AI solutions, and IT support.",
  },
  {
    title: "University Projects",
    role: "Data Science & Software Development",
    description:
      "Academic projects involving programming, data analysis, and computational problem-solving.",
  },
  {
    title: "Bell Canada",
    role: "Network Analyst",
    description:
      "Network monitoring, technical analysis, reporting, and operational support.",
  },
  {
    title: "Rogers Wireless",
    role: "Technical Support Supervisor",
    description:
      "Technical troubleshooting, customer support, and team supervision.",
  },
  {
    title: "Independent Web Development",
    role: "Business Owner",
    description:
      "Website design, development, maintenance, and client services.",
  },
  {
    title: "Blogging & Publishing",
    role: "Digital Content",
    description:
      "Online writing, content publishing, and website management.",
  },
  {
    title: "Early Programming",
    role: "Low-Level Development",
    description:
      "Machine-level programming, early software development, and technical experimentation.",
  },
  {
    title: "HTML Development",
    role: "Hand-Coded Websites",
    description:
      "Building websites directly in Notepad using HTML.",
  },
  {
    title: "Desktop Publishing",
    role: "PC-Based Design",
    description:
      "Early experience in digital publishing, page layout, and personal computing.",
  },
];

export default function QualificationsModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  return (
    <>
     <button
  type="button"
  onClick={() => setOpen(true)}
  className="cursor-pointer text-[30px] font-normal text-black transition-opacity hover:opacity-60"
>
  Qualifications
</button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 md:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setOpen(false);
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="qualifications-title"
            className="relative max-h-[90vh] w-full max-w-[850px] overflow-y-auto bg-[#e5e2d6] p-7 shadow-2xl md:p-12"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close qualifications"
              className="absolute right-5 top-5 cursor-pointer text-black hover:opacity-50"
            >
              <X size={26} />
            </button>

            <header className="mb-12 border-b border-black/25 pb-7">
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-black/60">
                Outlier / Background
              </p>
              <h2
                id="qualifications-title"
                className="font-serif text-5xl italic md:text-6xl"
              >
                Qualifications
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-black/75">
                A background spanning computer engineering,
                network operations, web development, and modern
                data science.
              </p>
            </header>

            <div className="mb-14">
              <h3 className="mb-8 text-2xl font-medium">
                Education & Qualifications
              </h3>

              <div className="space-y-8 border-l border-black/25 pl-6">
                {education.map((item) => (
                  <article key={item.title}>
                    <p className="mb-1 text-xs uppercase tracking-widest text-black/50">
                      {item.date}
                    </p>
                    <h4 className="text-xl font-semibold">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm font-medium">
                      {item.institution}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-black/70">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-8 text-2xl font-medium">
                Professional Experience
              </h3>

              <div className="space-y-7">
                {experience.map((item, index) => (
                  <article
                    key={item.title}
                    className="grid grid-cols-[32px_1fr] gap-4 border-t border-black/15 pt-5"
                  >
                    <span className="text-xs text-black/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h4 className="text-lg font-semibold">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm italic">
                        {item.role}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-black/70">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <footer className="mt-14 border-t border-black/25 pt-6 text-sm text-black/50">
              Outlier — Web Development / Data & AI / IT Support
            </footer>
          </section>
        </div>
      )}
    </>
  );
}
