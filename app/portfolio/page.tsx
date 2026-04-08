"use client";

import { useState } from "react";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  summary: string;
  article: string;
  code: string;
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Housing vs Income",
    category: "Data Analysis",
    image: "/project1.jpg",
    summary:
      "A portfolio case study examining whether housing costs are rising faster than income in Canada.",
    article:
      "This project explores Canadian affordability trends using publicly available datasets. It compares income growth with housing cost growth and presents the findings through clear visual storytelling. The goal is to show both technical skill and social relevance.",
    code: `import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("housing_income.csv")

plt.plot(df["year"], df["income"], label="Income")
plt.plot(df["year"], df["housing"], label="Housing")
plt.legend()
plt.show()`,
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Ethical Visualization Checklist",
    category: "Writing",
    image: "/project2.jpg",
    summary:
      "A practical guide for building clear, honest, human-centered charts.",
    article:
      "This piece explains how data visuals can mislead and how to avoid that. It focuses on clarity, fairness, labeling, and audience understanding. It is meant to show communication skill as well as ethical thinking.",
    code: `const checklist = [
  "Clear labels",
  "No misleading scales",
  "Accessible colors",
  "Relevant context"
];

console.log(checklist);`,
    github: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Development",
    image: "/project3.jpg",
    summary: "A custom portfolio site built with Next.js and Tailwind CSS.",
    article:
      "This project demonstrates front-end development skills, responsive design, and personal branding. The design focuses on clarity, professional tone, and strong project presentation.",
    code: `export default function Home() {
  return (
    <main className="min-h-screen">
      <h1>My Portfolio</h1>
    </main>
  );
}`,
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Regression Case Study",
    category: "Statistics",
    image: "/project4.jpg",
    summary: "A project showing applied regression analysis and interpretation.",
    article:
      "This case study demonstrates how regression can be used to examine real-world patterns. It focuses not just on the model, but on interpretation, assumptions, and communication of results.",
    code: `import statsmodels.api as sm

X = df[["x1", "x2"]]
y = df["y"]

X = sm.add_constant(X)
model = sm.OLS(y, X).fit()
print(model.summary())`,
    github: "#",
  },
  {
    id: 5,
    title: "Reproducible Workflow",
    category: "Process",
    image: "/project5.jpg",
    summary:
      "A template for reproducible analysis with clean project structure.",
    article:
      "This project highlights workflow discipline: structured folders, reusable code, version control, and documented steps. It is aimed at showing reliability and professionalism.",
    code: `project/
  data/
  notebooks/
  src/
  outputs/
  README.md`,
    github: "#",
  },
];

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      
      <div className="w-full flex justify-center mt-4">
  <div className="flex gap-12 rounded-full bg-gradient-to-r from-blue-200/60 to-teal-200/60 px-12 py-4 shadow-md backdrop-blur-md border border-white/40">
    
    <a
      href="/resume"
      className="text-sm font-semibold tracking-[0.3em] text-black hover:scale-105 transition"
    >
      RESUME
    </a>

    <a
      href="/portfolio"
      className="text-sm font-semibold tracking-[0.3em] text-black underline"
    >
      PORTFOLIO
    </a>

    <a
      href="/about"
      className="text-sm font-semibold tracking-[0.3em] text-black hover:scale-105 transition"
    >
      ABOUT
    </a>

  </div>
</div>

      <main className="min-h-screen bg-[#d6d6d6] px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1
              className="text-5xl font-black text-black sm:text-6xl"
              style={{ fontFamily: "serif" }}
            >
           
            </h1>
            <div className="w-full flex justify-center mt-4">
  <div className="flex gap-12 rounded-full bg-gradient-to-r from-blue-200/60 to-teal-200/60 px-12 py-4 shadow-md backdrop-blur-md border border-white/40">
    
    <a
      href="/resume"
      className="text-sm font-semibold tracking-[0.3em] text-black hover:scale-105 transition"
    >
      RESUME
    </a>

    <a
      href="/portfolio"
      className="text-sm font-semibold tracking-[0.3em] text-black underline"
    >
      PORTFOLIO
    </a>

    <a
      href="/about"
      className="text-sm font-semibold tracking-[0.3em] text-black hover:scale-105 transition"
    >
      ABOUT
    </a>

  </div>
</div>
            <p
              className="mt-2 text-2xl font-bold text-black"
              style={{ fontFamily: "serif" }}
            >
           
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_2fr]">
            <div className="rounded-sm bg-white p-6 shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
              <div className="flex flex-col">
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-white shadow-md">
                    <Image
                      src="/portfolioself.png"
                      alt="Bryan Bucknell"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                      Portfolio
                    </p>

                    <h2 className="text-4xl font-extrabold text-black">
                      Bryan Bucknell
                    </h2>
                  </div>
                </div>

                <p className="mt-4 text-sm text-zinc-600">
                  Data Science, software development, technical analysis, and
                  writing focused on meaningful real-world problems.
                </p>

                <div className="mt-8 bg-zinc-100 p-4">
                  <div className="relative h-[520px] w-full overflow-hidden bg-zinc-200">
                    <Image
                      src="/preview.png"
                      alt="Female figure emerging from data"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="rounded-sm bg-white p-4 text-left shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition hover:-translate-y-1"
                >
                  <div className="mb-4 flex h-36 items-center justify-center bg-zinc-100 text-sm text-zinc-500">
                    Preview image
                  </div>

                  <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-black">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {project.summary}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8">
            <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-sm bg-white p-6 shadow-2xl">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    {selectedProject.category}
                  </p>
                  <h2 className="mt-2 text-3xl font-bold text-black">
                    {selectedProject.title}
                  </h2>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded border border-zinc-300 px-3 py-1 text-sm text-zinc-700 hover:bg-zinc-100"
                >
                  Close
                </button>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <div className="mb-4 flex h-64 items-center justify-center bg-zinc-100 text-sm text-zinc-500">
                    Expanded project preview
                  </div>

                  <h3 className="text-lg font-semibold text-black">
                    Article Preview
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-700">
                    {selectedProject.article}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-black">
                    Code Preview
                  </h3>
                  <pre className="mt-3 overflow-x-auto bg-zinc-950 p-4 text-sm text-zinc-100">
                    <code>{selectedProject.code}</code>
                  </pre>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={selectedProject.github || "#"}
                      className="rounded border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
                    >
                      View Code
                    </a>

                    <a
                      href={selectedProject.demo || "#"}
                      className="rounded bg-black px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
                    >
                      Live Preview
                    </a>

                    <a
                      href="#"
                      className="rounded border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
                    >
                      Read Article
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
