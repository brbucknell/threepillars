import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    title: "Environmentalism\nand\nGreen Cities",
    image: "/green-city.jpg",
    alt: "Green city with nature and walkways",
    text: "Designing communities that live in harmony with nature, prioritizing sustainability, clean energy, green spaces, and resilient urban systems that support both people and the planet.",
    titleClass: "text-teal-800",
  },
  {
    title: "Peaceful\nCoexistence",
    image: "/peaceful-coexistence.jpg",
    alt: "People showing care and human connection",
    text: "Fostering a society grounded in empathy, cooperation, and mutual respect, where conflicts are resolved through negotiation and compromise and diverse communities can thrive together.",
    titleClass: "text-orange-700",
  },
  {
    title: "The\nSciences",
    image: "/science.jpg",
    alt: "Scientific research and discovery",
    text: "Using evidence, discovery, and innovation to solve humanity’s greatest challenges like sustainability and green energy, medicine, health, and food security. Using science and data to better understand the world and drive meaningful ethical progress.",
    titleClass: "text-black",
  },
];

const actions = [
  {
    title: "Education",
    image: "/education.jpg",
    alt: "Books and learning",
    text: "We believe knowledge should be accessible, transparent, and empowering. Through data science, we transform complex social, economic, and scientific information into clear, meaningful insights that people can understand and use. Our goal is to help make informed decisions, challenge misinformation, and promote critical thinking.",
    titleClass: "text-blue-700",
  },
  {
    title: "Lobbying\nAnd\nActivism",
    image: "/activism.jpg",
    alt: "Protest and civic engagement",
    text: "By identifying patterns of inequality, inefficiency, and systemic challenges, we aim to support evidence-based policy, advocacy, and reform. We believe responsible data science has a role in amplifying truth, supporting fairness, and encouraging accountable decision-making.",
    titleClass: "text-black",
  },
  {
    title: "Human Flourishing",
    image: "/human-flourishing.jpg",
    alt: "Children playing together",
    text: "We define success by the extent to which people are able to live meaningful, healthy, and fulfilling lives. Our analyses prioritize outcomes that improve well-being, reduce suffering, and expand opportunity.",
    titleClass: "text-black",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#efefef] text-black">
      <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold tracking-wide text-black">
            Bryan Bucknell
          </Link>

          <nav className="flex flex-wrap items-center gap-6 text-sm font-semibold text-zinc-700">
            <Link href="/" className="transition hover:text-black">
              Home
            </Link>
            <Link href="/portfolio" className="transition hover:text-black">
              Portfolio
            </Link>
            <Link href="/resume" className="transition hover:text-black">
              Resume
            </Link>
            <Link href="/about" className="text-black underline underline-offset-4">
              About
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-12">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-wide text-green-700 md:text-6xl">
            About Three Pillars
          </h1>

          <h2 className="mt-6 text-3xl font-bold text-blue-900 md:text-5xl">
            The Three Pillars of Human Flourishing:
          </h2>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {pillars.map((item) => (
            <article key={item.title} className="flex flex-col items-center text-center">
              <h3
                className={`mb-6 whitespace-pre-line text-3xl font-extrabold leading-tight md:text-5xl ${item.titleClass}`}
              >
                {item.title}
              </h3>

              <div className="relative mb-6 h-36 w-full max-w-[260px] overflow-hidden shadow-md">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="max-w-[280px] text-left text-lg leading-relaxed text-zinc-900">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-extrabold md:text-5xl">
            We promote this through:
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {actions.map((item) => (
              <article key={item.title} className="flex flex-col items-center text-center">
                <h3
                  className={`mb-6 whitespace-pre-line text-3xl font-extrabold leading-tight md:text-5xl ${item.titleClass}`}
                >
                  {item.title}
                </h3>

                <div className="relative mb-6 h-36 w-full max-w-[260px] overflow-hidden shadow-md">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="max-w-[280px] text-left text-lg leading-relaxed text-zinc-900">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <p className="text-2xl font-extrabold leading-relaxed md:text-4xl">
            Data science, when guided by humanist values, becomes a tool for
            enhancing dignity, supporting communities, creating a more just and
            compassionate world, and supporting meaningful and fulfilling lives.
          </p>
        </div>

        <div className="mt-20 bg-sky-700 px-6 py-16 text-center">
          <h2 className="text-5xl font-extrabold text-black md:text-8xl">
            Collage Here
          </h2>
        </div>
      </section>
    </main>
  );
}
