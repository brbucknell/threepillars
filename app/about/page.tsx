import Image from "next/image";
import Link from "next/link";

const pillarCards = [
  {
    label: "THEME",
    title: "Environmentalism and Green Cities",
    description:
      "Designing communities that live in harmony with nature through sustainability, clean energy, green spaces, and resilient urban systems.",
    image: "/green-city.jpg",
  },
  {
    label: "THEME",
    title: "Peaceful Coexistence",
    description:
      "Fostering empathy, cooperation, and mutual respect so conflicts are resolved constructively and diverse communities can thrive together.",
    image: "/peaceful-coexistence.jpg",
  },
  {
    label: "THEME",
    title: "The Sciences",
    description:
      "Using evidence, discovery, and innovation to advance sustainability, green energy, medicine, health, food security, and ethical progress.",
    image: "/science.jpg",
  },
];

const actionCards = [
  {
    label: "PRACTICE",
    title: "Education",
    description:
      "Transforming complex information into clear, useful insights that help people think critically and make informed decisions.",
    image: "/education.jpg",
  },
  {
    label: "PRACTICE",
    title: "Lobbying and Activism",
    description:
      "Supporting evidence-based advocacy and reform by identifying patterns of inequality, inefficiency, and systemic challenges.",
    image: "/activism.jpg",
  },
  {
    label: "GOAL",
    title: "Human Flourishing",
    description:
      "Defining success by whether people are able to live meaningful, healthy, dignified, and fulfilling lives.",
    image: "/human-flourishing.jpg",
  },
];

function InfoCard({
  label,
  title,
  description,
  image,
}: {
  label: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <article className="rounded-xl bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.10)]">
      <div className="relative mb-4 h-36 w-full overflow-hidden rounded-md bg-zinc-100">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-zinc-500">
        {label}
      </p>

      <h3 className="mb-3 text-2xl font-semibold leading-snug text-black">
        {title}
      </h3>

      <p className="text-base leading-8 text-zinc-600">{description}</p>
    </article>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#efefef] text-black">
      <header className="w-full border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold text-black">
            Bryan Bucknell
          </Link>

          <nav className="flex gap-6 text-sm font-medium text-zinc-700">
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            <Link href="/portfolio" className="hover:text-black">
              Portfolio
            </Link>
            <Link href="/resume" className="hover:text-black">
              Resume
            </Link>
            <Link href="/about" className="text-black">
              About
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-green-700 md:text-4xl">
            About Three Pillars
          </h1>
          <h2 className="mt-3 text-xl font-semibold text-blue-900 md:text-2xl">
            The Three Pillars of Human Flourishing
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillarCards.map((card) => (
            <InfoCard key={card.title} {...card} />
          ))}
        </div>

        <div className="mt-14 mb-8">
          <h2 className="text-2xl font-bold text-black">
            We promote this through
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {actionCards.map((card) => (
            <InfoCard key={card.title} {...card} />
          ))}
        </div>

        <div className="mt-14 rounded-xl bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
          <p className="text-lg leading-8 text-zinc-700">
            Data science, when guided by humanist values, becomes a tool for
            enhancing dignity, supporting communities, and creating a more just,
            compassionate, and meaningful world.
          </p>
        </div>

        <div className="mt-10 rounded-xl bg-sky-700 px-6 py-14 text-center shadow-[0_8px_24px_rgba(0,0,0,0.10)]">
          <h2 className="text-4xl font-bold text-black md:text-5xl">
            Collage Here
          </h2>
        </div>
      </section>
    </main>
  );
}
