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
    image: "/affordability.png",
    summary:
      "An analysis of Canadian housing affordability trends comparing housing costs to real income over time.",
    article:
      "This study examines trends in housing affordability in Canada over the period 2012–2023 by analyzing the relationship between income, housing costs, and inflation. Using national-level data, variables were standardized and adjusted for inflation to enable meaningful longitudinal comparison. Exploratory data analysis and statistical modeling were used to assess patterns, relationships, and the extent to which housing costs have diverged from income over time.",
    insights: [
      "Housing costs increased by over 50% between 2012 and 2023.",
      "Real income remained flat or declined over the same period.",
      "The affordability gap widened significantly across the decade.",
    ],
    code: `import pandas as pd
import matplotlib.pyplot as plt

def load_income_data(path):
    return pd.read_csv(path)

def load__data(path):
    return pd.read_csv(path)

def clean_income(df):
    df = df.rename(columns={"REF_DATE": "year", "VALUE": "income"})
    return df[["year", "income"]].dropna()

def clean_housing(df):
    df = df.rename(columns={"REF_DATE": "year", "VALUE": "housing"})
    return df[["year", "housing"]].dropna()

def merge_data(income_df, housing_df):
    return pd.merge(income_df, housing_df, on="year", how="inner")

def create_index(df):
    df["income_index"] = df["income"] / df["income"].iloc[0] * 100
    df["housing_index"] = df["housing"] / df["housing"].iloc[0] * 100
    return df

def plot_affordability(df):
    plt.figure(figsize=(10, 6))
    plt.plot(df["year"], df["income_index"], label="Real Income")
    plt.plot(df["year"], df["housing_index"], label="Housing Costs")
    plt.title("Housing Costs vs Real Income in Canada")
    plt.xlabel("Year")
    plt.ylabel("Indexed Growth")
    plt.legend()
    plt.show()`,
    github: "#",
    demo: "#",
    articleLink: "Housing1.pdf",
  },
  {
    id: 2,
    title: "Ethical Visualization Checklist",
    category: "Writing",
    image: "/project2.jpg",
    summary:
      "A practical guide for building clear, honest, human-centered charts.",
    article:
      "This piece explains how data visuals can mislead and how to avoid that.",
    code: `const checklist = [
  "Clear labels",
  "No misleading scales",
  "Accessible colors",
  "Relevant context"
];`,
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
      "This project demonstrates front-end development skills, responsive design, and personal branding.",
    code: `export default function Home() {
  return <main>Portfolio Website</main>;
}`,
    github: "#",
    demo: "#",
    articleLink: "#",
  },
];

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="min-h-screen bg-[#d6d6d6] px-6 py-10">
      <nav className="mx-auto flex w-fit items-center gap-10 rounded-full bg-[linear-gradient(90deg,#b8d4ef,#a9e3d6)] px-10 py-4 shadow-md">
        <a href="/" className="text-sm font-bold uppercase tracking-[0.3em] text-black">
          Home
        </a>
        <a href="/resume" className="text-sm font-bold uppercase tracking-[0.3em] text-black">
          Resume
        </a>
        <a href="/portfolio" className="text-sm font-bold uppercase tracking-[0.3em] text-black underline underline-offset-4">
          Portfolio
        </a>
        <a href="/about" className="text-sm font-bold uppercase tracking-[0.3em] text-black">
          About
        </a>
      </nav>

      <div className="mx-auto mt-10 max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_2fr]">
          <aside className="rounded-sm bg-white p-6 shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
            <div className="flex items-center gap-4">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-white shadow-md">
                <Image
                  src="/portfolioself.png"
                  alt="Bryan Bucknell"
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-3xl font-extrabold text-black">
                Bryan Bucknell
              </h2>
            </div>

            <p className="mt-4 text-sm leading-6 text-zinc-600">
              Data science, software development, technical analysis, and writing
              focused on meaningful real-world problems.
            </p>

            <div className="mt-8 bg-zinc-100 p-4">
              <div className="relative h-[420px] w-full overflow-hidden bg-zinc-200">
                <Image
                  src="/preview.png"
                  alt="Preview artwork"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </aside>

          <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="rounded-sm bg-white p-4 text-left shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(0,0,0,0.22)]"
              >
                <div className="relative mb-4 h-36 w-full overflow-hidden rounded-sm bg-zinc-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-300 hover:scale-105"
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
          </section>
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8">
          <div className="max-h-[82vh] w-full max-w-3xl overflow-y-auto rounded-sm bg-white p-5 shadow-2xl">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {selectedProject.category}
                </p>

                <h2 className="mt-2 text-2xl font-bold text-black">
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

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <div className="relative mb-4 h-52 w-full overflow-hidden rounded-sm bg-zinc-100">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-lg font-semibold text-black">
                  Project Summary
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

                <pre className="mt-3 max-h-72 overflow-auto bg-zinc-950 p-4 text-xs leading-6 text-zinc-100">
                  <code>{selectedProject.code}</code>
                </pre>

                <div className="mt-5 flex flex-wrap gap-3">
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

                  {selectedProject.articleLink && (
                    <a
                      href={selectedProject.articleLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
                    >
                      Read Full Paper PDF
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
