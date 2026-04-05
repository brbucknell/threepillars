export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-100 to-zinc-200 p-6 flex items-center justify-center">
      <div className="w-full max-w-5xl rounded-3xl bg-white shadow-xl border border-zinc-200 p-10">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-800">Bryan Bucknell</h1>
          <p className="text-zinc-600 mt-2">
            Data Scientist | Software Developer | Technical Support Specialist
          </p>
        </header>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-zinc-800 mb-2">Summary</h2>
          <p className="text-zinc-600 leading-relaxed">
            Experienced technology professional with over 25 years in IT, spanning technical support, software development, and data science. 
            Skilled in Python, R, SQL, and modern data analysis techniques, with a strong focus on solving real-world social and economic problems. 
            Combines deep technical expertise with a human-centered approach to data and decision-making.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-zinc-800 mb-4">Core Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-zinc-700">
            <span>Python (pandas, scikit-learn)</span>
            <span>R (tidyverse, ggplot2)</span>
            <span>SQL & Database Design</span>
            <span>Machine Learning</span>
            <span>Data Visualization</span>
            <span>Statistical Analysis</span>
            <span>Web Development (HTML, CSS, JS)</span>
            <span>Git & Version Control</span>
            <span>Technical Troubleshooting</span>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-zinc-800 mb-4">Experience</h2>

          <div className="mb-6">
            <h3 className="font-semibold text-zinc-800">Level 2 Technical Support Analyst</h3>
            <p className="text-sm text-zinc-500">Bell Canada</p>
            <ul className="list-disc list-inside text-zinc-600 mt-2 space-y-1">
              <li>Resolved complex network and service issues for cellular customers</li>
              <li>Analyzed system logs and performance data to diagnose problems</li>
              <li>Provided advanced troubleshooting support to front-line teams</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-zinc-800">Independent Developer & Data Projects</h3>
            <ul className="list-disc list-inside text-zinc-600 mt-2 space-y-1">
              <li>Developed data-driven projects analyzing housing affordability in Canada</li>
              <li>Built web applications using modern frameworks and responsive design</li>
              <li>Applied machine learning models to real-world datasets</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-zinc-800 mb-2">Education</h2>
          <p className="text-zinc-600">
            Master of Science in Data Science<br />
            University of Colorado Boulder (Coursera)
          </p>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-xl font-semibold text-zinc-800 mb-2">Certifications</h2>
          <p className="text-zinc-600">
            SafeCheck Advanced Food Safety Certification Program (2025)
          </p>
        </section>

      </div>
    </main>
  );
}
