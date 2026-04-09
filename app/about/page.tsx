import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    title: "Environmentalism\nand\nGreen Cities",
    image: "/green-city.jpg",
    text: "Designing communities that live in harmony with nature, prioritizing sustainability, clean energy, green spaces, and resilient urban systems that support both people and the planet.",
    titleClass: "text-teal-800",
  },
  {
    title: "Peaceful\nCoexistence",
    image: "/peaceful-coexistence.jpg",
    text: "Fostering a society grounded in empathy, cooperation, and mutual respect, where conflicts are resolved through negotiation and compromise and diverse communities can thrive together.",
    titleClass: "text-orange-700",
  },
  {
    title: "The\nSciences",
    image: "/science.jpg",
    text: "Using evidence, discovery, and innovation to solve humanity’s greatest challenges like sustainability, green energy, medicine, health, and food security. Using science and data to drive meaningful ethical progress.",
    titleClass: "text-black",
  },
];

const actions = [
  {
    title: "Education",
    image: "/education.jpg",
    text: "We believe knowledge should be accessible, transparent, and empowering. We transform complex information into clear insights people can use.",
    titleClass: "text-blue-700",
  },
  {
    title: "Lobbying\nAnd\nActivism",
    image: "/activism.jpg",
    text: "We support evidence-based policy and advocacy by identifying patterns of inequality and systemic challenges.",
    titleClass: "text-black",
  },
  {
    title: "Human Flourishing",
    image: "/human-flourishing.jpg",
    text: "We define success by meaningful, healthy lives—prioritizing well-being, reducing suffering, and expanding opportunity.",
    titleClass: "text-black",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#efefef] text-black">
      {/* Top Menu */}
      <header className="w-full border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="text-base font-bold">
            Bryan Bucknell
          </Link>

          <nav className="flex gap-4 text-xs font-medium text-zinc-700">
            <Link href="/">Home</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/about" className="text-black underline">
              About
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-8">
        {/* Titles */}
        <div className="text-center">
          <h1 className="text-2xl font-extrabold text-green-700 md:text-3xl">
            About Three Pillars
          </h1>

          <h2 className="mt-3 text-xl font-bold text-blue-900 md:text-2xl">
            The Three Pillars of Human Flourishing:
          </h2>
        </div>

        {/* Pillars */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((item) => (
            <div key={item.title} className="text-center">
              <h3
                className={`mb-3 whitespace-pre-line text-lg font-bold leading-tight ${item.titleClass}`}
              >
                {item.title}
              </h3>

              <div className="mx-auto mb-3 h-24 w-40 relative overflow-hidden shadow">
                <Image src={item.image} alt="" fill className="object-cover" />
              </div>

              <p className="text-xs leading-relaxed text-left px-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-12">
          <h2 className="text-lg font-bold">We promote this through:</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {actions.map((item) => (
              <div key={item.title} className="text-center">
                <h3
                  className={`mb-3 whitespace-pre-line text-lg font-bold ${item.titleClass}`}
                >
                  {item.title}
                </h3>

                <div className="mx-auto mb-3 h-24 w-40 relative overflow-hidden shadow">
                  <Image src={item.image} alt="" fill className="object-cover" />
                </div>

                <p className="text-xs leading-relaxed text-left px-2">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Statement */}
        <div className="mt-12">
          <p className="text-sm font-bold leading-relaxed">
            Data science, when guided by humanist values, becomes a tool for
            enhancing dignity, supporting communities, and creating a more just
            and compassionate world.
          </p>
        </div>

        {/* Collage */}
        <div className="mt-12 bg-sky-700 py-10 text-center">
          <h2 className="text-2xl font-extrabold text-black">
            Collage Here
          </h2>
        </div>
      </section>
    </main>
  );
}
