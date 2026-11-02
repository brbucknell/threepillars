import katex from "katex";
import "katex/dist/katex.min.css";

export default function DataScienceSection() {
  const skills = [
    {
      title: "Mathematics & Statistics",
      graphic: "formula",
      description:
        "Apply linear algebra, calculus, probability, statistics, and optimization to understand data and develop predictive models.",
    },
    {
      title: "Programming & Development",
      graphic: "code",
      description:
        "Develop data-processing workflows, analytical applications, and machine learning solutions using Python, R, SQL, and modern development tools.",
    },
    {
      title: "Data Analysis",
      graphic: "analysis",
      description:
        "Explore, clean, and interpret datasets to identify trends, relationships, and actionable insights.",
    },
    {
      title: "Visualization & Communication",
      graphic: "chart",
      description:
        "Communicate findings through dashboards, reports, and visualizations that make complex information accessible.",
    },
    {
      title: "Critical Thinking & Problem-Solving",
      graphic: "problem",
      description:
        "Combine analytical reasoning, experimentation, and creative problem-solving to develop effective data-driven solutions.",
    },
  ];

  function Graphic({ type }: { type: string }) {
    if (type === "formula") {
      return (
        <div className="text-center font-serif text-xl italic">
          J(θ) = 1/(2m) Σ(hθ(xᵢ) − yᵢ)²
        </div>
      );
    }

    if (type === "code") {
      return (
        <div className="font-mono text-sm text-slate-600">
          <div>import pandas as pd</div>
          <div>import numpy as np</div>
          <div>model.fit(X, y)</div>
        </div>
      );
    }

    if (type === "analysis") {
      return (
        <svg viewBox="0 0 200 100" className="h-24 w-full">
          <path d="M20 10 V85 H185" stroke="#444" fill="none" />
          {[65, 55, 70, 43, 50, 32, 38, 18].map((y, i) => (
            <circle
              key={i}
              cx={35 + i * 19}
              cy={y}
              r="3.5"
              fill="#6488a4"
            />
          ))}
          <path
            d="M30 75 L175 20"
            stroke="#345e7c"
            strokeWidth="2"
          />
        </svg>
      );
    }

    if (type === "chart") {
      return (
        <svg viewBox="0 0 200 100" className="h-24 w-full">
          <path d="M20 10 V85 H185" stroke="#444" fill="none" />
          {[30, 45, 36, 65, 53].map((h, i) => (
            <rect
              key={i}
              x={35 + i * 28}
              y={84 - h}
              width="17"
              height={h}
              fill={i === 3 ? "#345e7c" : "#9eb5c6"}
            />
          ))}
        </svg>
      );
    }

    return (
      <div className="text-center text-5xl text-slate-500">
        ◇ + ◇ = ◈
      </div>
    );
  }

  return (
    <section
      id="data-ai"
      className="w-full bg-white px-6 py-20 text-slate-900"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-5 text-center text-3xl font-bold md:text-4xl">
          Data Science & AI
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-slate-600">
          Applying mathematics, programming, and analytical thinking
          to turn complex data into meaningful insights and
          practical solutions.
        </p>

        <div className="grid grid-cols-1 gap-x-14 gap-y-14 md:grid-cols-2">
          {skills.map((skill, index) => (
            <article
              key={skill.title}
              className={
                index === 4
                  ? "md:col-span-2 md:mx-auto md:max-w-md"
                  : ""
              }
            >
              <h3 className="mb-5 text-center text-xl font-semibold">
                {skill.title}
              </h3>

              <div className="mb-5 flex min-h-44 items-center justify-center rounded-lg bg-slate-50 px-4 py-5">
                <Graphic type={skill.graphic} />
              </div>

              <p className="text-center leading-relaxed text-slate-700">
                {skill.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
