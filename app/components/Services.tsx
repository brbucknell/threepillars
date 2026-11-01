
import Link from "next/link";
import {
  CodeXml,
  ChartNoAxesCombined,
  MonitorCog,
} from "lucide-react";

const services = [
  {
    name: "Web Development",
    href: "/web-development",
    icon: CodeXml,
  },
  {
    name: "Data and AI",
    href: "/data-ai",
    icon: ChartNoAxesCombined,
  },
  {
    name: "IT Support",
    href: "/it-support",
    icon: MonitorCog,
  },
];

export default function Services() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-7 lg:justify-start">
      {services.map((service) => {
        const Icon = service.icon;

        return (
          <Link
            key={service.name}
            href={service.href}
            className="group flex items-center gap-4 text-black transition-transform duration-200 hover:-translate-y-1"
          >
            <Icon
              size={29}
              strokeWidth={1.8}
              className="text-[#333333] transition-colors group-hover:text-[#365c74]"
            />

            <span className="text-lg font-semibold tracking-tight md:text-xl">
              {service.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
