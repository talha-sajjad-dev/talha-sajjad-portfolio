import { FaCode, FaPalette, FaServer } from "react-icons/fa6";

const traits = [
  "Problem Solver",
  "Detail-Oriented",
  "Team Player",
  "Fast Learner",
  "Clean Code",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative pt-0 pb-24 noise-bg">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header — mesh only */}
        <div className="relative mb-12 overflow-hidden rounded-2xl">
          <div
            className="featured-bento-mesh pointer-events-none absolute inset-0 -z-0"
            aria-hidden
          />
          <div className="noise-bg relative z-10 px-4 py-10 text-left md:px-8">
            <span className="featured-section-label block text-xs font-bold uppercase tracking-widest">
              ABOUT ME
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Passionate about creating{" "}
              <span className="bg-gradient-to-r from-sky-400 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                exceptional
              </span>{" "}
              digital products
            </h2>
          </div>
        </div>

        <div className="grid items-start gap-16 md:grid-cols-2">
          {/* Left */}
          <div className="text-left">
            <p className="leading-relaxed text-text-secondary mb-6">
              I&apos;m a MERN Stack developer with 1 year of experience building
              production-ready web applications. I specialize in developing
              scalable e-commerce platforms and CRM systems with a focus on
              secure authentication, payment integrations, and performance
              optimization.
            </p>
            <p className="leading-relaxed text-text-secondary mb-8">
              From multi-vendor marketplaces to health consultation platforms,
              I&apos;ve delivered 20+ real-world applications. I excel at
              building dynamic frontends, scalable backend systems, and handling
              full application workflows from development to deployment. My code
              is clean, maintainable, and focused on solving real business
              problems.
            </p>

            <div className="flex flex-wrap gap-3">
              {traits.map((trait) => (
                <span
                  key={trait}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/90 transition-colors hover:border-violet-500/40"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Right — service cards */}
          <div className="space-y-4">
            {[
              {
                icon: <FaCode className="text-white" size={18} />,
                title: "Frontend Development",
                desc: "Building responsive and dynamic UIs with React.js, Next.js, JavaScript, HTML, CSS, Tailwind, and Bootstrap.",
              },
              {
                icon: <FaServer className="text-white" size={18} />,
                title: "Backend & APIs",
                desc: "Developing scalable REST APIs with Node.js, Express.js, and handling full application workflows with MongoDB and MySQL.",
              },
              {
                icon: <FaPalette className="text-white" size={18} />,
                title: "Authentication & Payments",
                desc: "Implementing secure JWT authentication, OAuth, and integrating Stripe payment gateways for seamless transactions.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.05] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/80 to-sky-500/50 shadow-inner">
                  {card.icon}
                </div>
                <div className="min-w-0 text-left">
                  <h3 className="mb-1 font-semibold text-white">{card.title}</h3>
                  <p className="text-sm text-white/60">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
