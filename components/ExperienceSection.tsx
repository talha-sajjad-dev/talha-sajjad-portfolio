import { FaBriefcase, FaGraduationCap } from "react-icons/fa6";

interface TimelineItem {
  type: "work" | "education";
  role: string;
  company: string;
  period: string;
  description: string;
  tech?: string[];
}

const timeline: TimelineItem[] = [
  {
    type: "work",
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2024 — Present",
    description:
      "Working on web applications for startups and businesses. Delivered 20+ web applications including e-commerce platforms, CRM systems, and business tools. Built dynamic frontends and scalable backend systems.",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "Laravel"],
  },
  {
    type: "work",
    role: "MERN Stack Developer",
    company: "Bella Findings",
    period: "2024",
    description:
      "Maintained and improved a large-scale e-commerce platform. Implemented new features and resolved bugs. Improved performance and optimized application workflows. Worked on modern frontend architecture and reusable components.",
    tech: ["MERN Stack", "E-Commerce", "Performance Optimization"],
  },
  {
    type: "work",
    role: "JavaScript Developer",
    company: "Modapaya",
    period: "2024",
    description:
      "E-commerce fashion and custom apparel platform. Built multi-role chat system (Admin, Vendor, User). Developed bulk product upload system (Excel-based). Improved internal workflows and system performance. Contributed to scalability and feature enhancements.",
    tech: ["Laravel", "Chat System", "Excel Integration"],
  },
  {
    type: "education",
    role: "Bachelor's in Computer Science",
    company: "Bahauddin Zakariya University",
    period: "09/2022 — 09/2026",
    description:
      "Currently pursuing Bachelor's degree in Computer Science. Focused on software engineering, algorithms, data structures, and web technologies. Building practical projects alongside academic studies.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            My Professional <span className="gradient-text">Journey</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background -translate-x-1/2 translate-y-1.5 z-10" />

                {/* Content */}
                <div
                  className={`flex-1 ml-16 md:ml-0 ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="p-6 rounded-2xl bg-card border border-border card-hover">
                    <div
                      className={`flex items-center gap-2 mb-3 ${
                        i % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {item.type === "work" ? (
                        <FaBriefcase className="text-accent" size={14} />
                      ) : (
                        <FaGraduationCap className="text-accent-secondary" size={14} />
                      )}
                      <span className="text-xs text-text-muted font-medium uppercase tracking-wide">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-1">{item.role}</h3>
                    <p className="text-accent text-sm font-medium mb-3">
                      {item.company}
                    </p>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {item.description}
                    </p>
                    {item.tech && (
                      <div
                        className={`flex flex-wrap gap-2 mt-4 ${
                          i % 2 === 0 ? "md:justify-end" : ""
                        }`}
                      >
                        {item.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
