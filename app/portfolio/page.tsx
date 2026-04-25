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
  insights?: string[];
  github?: string;
  demo?: string;
  articleLink?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Housing vs Income: A Canadian Affordability Analysis",
    category: "Data Analysis",
    image: "/Affordability.png",
    summary:
      "An analysis of Canadian housing affordability trends comparing housing costs to real income over time.",
    article:
      "This project analyzes Canadian housing affordability by comparing housing cost growth to real income trends between 2012 and 2023. Using publicly available datasets, the analysis reveals a significant divergence: housing costs increased by over 50% while real income stagnated or declined. The project combines statistical analysis with clear visual storytelling to highlight the growing affordability crisis.",
    insights: [
      "Housing costs increased by over 50% between 2012 and 2023",
      "Real income remained flat or declined over the same period",
      "The affordability gap widened significantly across the decade",
    ],
    code: `import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("housing_income.csv")

plt.figure(figsize=(10, 6))
plt.plot(df["year"], df["income"], label="Real Income")
plt.plot(df["year"], df["housing"], label="Housing Costs")

plt.title("Housing Costs vs Real Income in Canada")
plt.xlabel("Year")
plt.ylabel("Indexed Change / Value")
plt.legend()

plt.subplots_adjust(bottom=0.22)

plt.figtext(
    0.5,
    0.02,
    "Note: Between 2012 and 2023, housing costs in Canada increased by over 50%, while real income declined, indicating a marked deterioration in housing affordability.",
    ha="center",
    fontsize=9,
    style="italic",
    wrap=True
)

plt.show()`,
    github: "#",
    demo: "#",
    articleLink: "#",
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
    articleLink: "#",
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
      <h1>Portfolio Website</h1>
    </main>
  );
}`,
    github: "#",
    demo: "#",
    articleLink: "#",
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
    articleLink: "#",
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
    articleLink: "#",
  },
];

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="min-h-screen bg-[#d6d6d6] px-6 py-10">
      <nav className="mx-auto flex w-fit items-center gap-10 rounded-full bg-[linear-gradient(90deg,#b8d4ef,#a9e3d6)] px-10 py-4 shadow-md">
        <a
          href="/"
          className="text-sm font-bold uppercase tracking-[0.3em] text-black"
        >
          Home
        </a>
        <a
          href="/resume"
          className="text-sm font-bold uppercase tracking-[0.3em] text-black"
        >
          Resume
        </a>
        <a
          href="/portfolio"
          className="text-sm font-bold uppercase tracking-[0.3em] text-black underline underline-offset-4"
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

      <div className="mx-auto max-w-7xl">
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_2fr]">
          <div className="rounded-sm bg-white p-6 shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-white shadow-md">
                  <Image
                    src="/portfolioself.png"
                    alt="Bryan Bucknell"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h2 className="text-4xl font-extrabold text-black">
                    Bryan Bucknell
                  </h2>
                </div>
              </div>

              <p className="mt-4 text-sm text-zinc-600">
                Data science, software development, technical analysis, and
                writing focused on meaningful real-world problems.
              </p>

              <div className="mt-8 bg-zinc-100 p-4">
                <div className="relative h-[520px] w-full overflow-hidden bg-zinc-200">
                  <Image
                    src="/preview.png"
                    alt="Preview artwork"
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
             <div className="mb-4 relative h-36 w-full overflow-hidden rounded-sm bg-zinc-100">
  <Image
    src=""
    alt="Housing vs Income chart"
    fill
    className="object-cover"
  />
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

                {selectedProject.insights && (
                  <div className="mt-5">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-500">
                      Key Findings
                    </h4>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700">
                      {selectedProject.insights.map((insight, index) => (
                        <li key={index}>{insight}</li>
                      ))}
                    </ul>
                  </div>
                )}
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
                    href={selectedProject.articleLink || "#"}
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
  );
}
