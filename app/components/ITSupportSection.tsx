
import { MonitorCog, Cpu, Network } from "lucide-react";

const services = [
  {
    title: "Software",
    Icon: MonitorCog,
    description:
      "Operating system installation and configuration, application support, troubleshooting, system updates, and performance optimization.",
  },
  {
    title: "Hardware",
    Icon: Cpu,
    description:
      "Computer diagnostics, component upgrades, system assembly, peripheral installation, and preventative maintenance.",
  },
  {
    title: "Networking",
    Icon: Network,
    description:
      "Network configuration, connectivity troubleshooting, wired and wireless networking, performance monitoring, and diagnostics.",
  },
];

export default function ITSupportSection() {
  return (
    <section
      id="it-support"
      className="w-full bg-white px-6 py-20 text-slate-900"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Technical Services
          </p>

          <h2 className="mb-5 text-4xl font-bold tracking-tight md:text-5xl">
            IT Support
          </h2>

          <p className="text-lg leading-relaxed text-slate-600">
            Reliable technical solutions for computers,
            software, and connected systems. From everyday
            troubleshooting to hardware and network
            configuration.
          </p>
        </div>

        {/* Three service areas */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map(({ title, Icon, description }) => (
            <article
              key={title}
              className="group flex flex-col rounded-xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-md"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-lg border border-slate-200 bg-white">
                <Icon
                  size={36}
                  strokeWidth={1.4}
                  className="text-slate-700"
                />
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-slate-900">
                {title}
              </h3>

              <p className="flex-grow leading-7 text-slate-600">
                {description}
              </p>

              <div className="mt-8 h-px w-12 bg-slate-400 transition-all duration-300 group-hover:w-24" />
            </article>
          ))}
        </div>

        {/* Bottom detail */}
        <div className="mt-14 border-t border-slate-200 pt-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            Software / Hardware / Networking
          </p>
        </div>
      </div>
    </section>
  );
}
