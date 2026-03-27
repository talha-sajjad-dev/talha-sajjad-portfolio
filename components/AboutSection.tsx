import { FaCode, FaServer, FaPalette } from "react-icons/fa6";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 noise-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              Passionate about creating{" "}
              <span className="gradient-text">exceptional</span> digital products
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              I&apos;m a MERN Stack developer with 1 year of experience building
              production-ready web applications. I specialize in developing scalable
              e-commerce platforms and CRM systems with a focus on secure authentication,
              payment integrations, and performance optimization.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              From multi-vendor marketplaces to health consultation platforms, I&apos;ve
              delivered 20+ real-world applications. I excel at building dynamic frontends,
              scalable backend systems, and handling full application workflows from
              development to deployment. My code is clean, maintainable, and focused on
              solving real business problems.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Problem Solver", "Detail-Oriented", "Team Player", "Fast Learner"].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-1.5 rounded-full text-sm bg-accent/10 text-accent border border-accent/20"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Cards */}
          <div className="space-y-4">
            {[
              {
                icon: <FaCode className="text-accent" size={22} />,
                title: "Frontend Development",
                desc: "Building responsive and dynamic UIs with React.js, Next.js, JavaScript, HTML, CSS, Tailwind, and Bootstrap.",
              },
              {
                icon: <FaServer className="text-accent-secondary" size={22} />,
                title: "Backend & APIs",
                desc: "Developing scalable REST APIs with Node.js, Express.js, and handling full application workflows with MongoDB and MySQL.",
              },
              {
                icon: <FaPalette className="text-[#ff6b9d]" size={22} />,
                title: "Authentication & Payments",
                desc: "Implementing secure JWT authentication, OAuth, and integrating Stripe payment gateways for seamless transactions.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex gap-5 p-6 rounded-2xl bg-card border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{card.title}</h3>
                  <p className="text-sm text-text-muted">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
