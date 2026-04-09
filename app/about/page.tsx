import Image from "next/image";
import Link from "next/link";

const pillarCards = [
  {
    label: "Theme",
    title: "Environmentalism and Green Cities",
    description:
      "Designing communities that live in harmony with nature through sustainability, clean energy, green spaces, and resilient urban systems.",
    image: "/green-cities.jpg",
  },
  {
    label: "Theme",
    title: "Peaceful Coexistence",
    description:
      "Fostering empathy, cooperation, and mutual respect so conflicts are resolved constructively and diverse communities can thrive together.",
    image: "/peaceful-coexistence.jpg",
  },
  {
    label: "Theme",
    title: "The Sciences",
    description:
      "Using evidence, discovery, and innovation to advance sustainability, green energy, medicine, health, food security, and ethical progress.",
    image: "/science.jpg",
  },
];

const actionCards = [
  {
    label: "Practice",
    title: "Education",
    description:
      "Transforming complex information into clear, useful insights that help people think critically and make informed decisions.",
    image: "/education.jpg",
  },
  {
    label: "Practice",
    title: "Lobbying and Activism",
    description:
      "Supporting evidence-based advocacy and reform by identifying patterns of inequality and systemic challenges.",
    image: "/activism.jpg",
  },
  {
    label: "Goal",
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
    <article className="rounded-lg bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-3 flex h-28 w-full items-center justify-center overflow-hidden rounded bg-zinc-100">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="h-full w-full object-contain"
        />
      </div>

      <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-zinc-400">
        {label}
      </p>

      <h3 className="mb-2 text-base font-semibold leading-tight text-black">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-zinc-600">{description}</p>
    </article>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#efefef] text-black">
      <header className="w-full border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link href="/" className="text-sm font-bold text-black">
            Bryan Bucknell
          </Link>

          <nav className="flex gap-4 text-xs font-medium text-zinc-700">
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            <Link href="/portfolio" className="hover:text-black">
              Portfolio
            </Link>
            <Link href="/resume" className="hover:text-black">
              Resume
            </Link>
            <Link
              href="/about"
              className="text-black underline underline-offset-4"
            >
              About
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-green-700">
            About Three Pillars
          </h1>

          <h2 className="mt-2 text-lg font-semibold text-blue-900">
            The Three Pillars of Human Flourishing
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {pillarCards.map((card) => (
            <InfoCard key={card.title} {...card} />
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-semibold text-black">
            We promote this through
          </h2>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {actionCards.map((card) => (
            <InfoCard key={card.title} {...card} />
          ))}
        </div>

        <div className="mt-10 rounded-lg bg-white p-4 shadow-sm">
          <p className="text-sm leading-relaxed text-zinc-700">
            Data science, when guided by humanist values, becomes a tool for
            enhancing dignity, supporting communities, and creating a more just,
            compassionate, and meaningful world.
          </p>
        </div>

        <div className="mt-10 rounded-lg bg-sky-700 py-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-black">Collage Here</h2>
        </div>
      </section>
    </main>
  );
}
