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
    company: "Freelance / Self-Employed",
    period: "Jan 2025 — Present",
    description:
      "Delivering scalable web applications for startups and businesses across e-commerce, CRM, and SaaS verticals. Built 20+ production-ready applications using React, Node.js, Express, and MongoDB. Designed RESTful APIs (100+ endpoints) with modular, layered architecture. Integrated Stripe and PayPal payment gateways with secure webhook handling. Implemented JWT authentication, Google OAuth, OTP recovery, and role-based access control. Developed real-time chat features using Socket.IO. Optimized performance using MongoDB indexing and aggregation pipelines.",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "Express.js", "Stripe"],
  },
  {
    type: "work",
    role: "Full Stack Developer",
    company: "Modapaya",
    period: "Mar 2025 — Nov 2025",
    description:
      "Worked on Modapaya, a custom fashion eCommerce platform specializing in rhinestone and bling apparel. Built multi-role chat system (Admin, Vendor, User). Developed bulk product and category upload workflows via Excel. Improved UI/UX, resolved frontend issues, and optimized performance. Worked alongside Laravel backend.",
    tech: ["JavaScript", "Frontend", "Bootstrap", "Chat System", "Excel Integration"],
  },
  {
    type: "work",
    role: "Full Stack Web Developer",
    company: "Gempacked – Wholesale Jewelry Parts and Beads",
    period: "Mar 2024 — Jan 2025",
    description:
      "Worked on a wholesale jewelry eCommerce platform (Next.js + Symfony). Implemented and refined user interfaces, fixed UI/UX issues, improved frontend performance, and maintained clean scalable code. Provided nearly 1 year of production support and feature additions.",
    tech: ["Next.js", "Symfony", "PHP", "MySQL"],
  },
  {
    type: "education",
    role: "Bachelor of Science in Information Technology",
    company: "Concordia Colleges / Bahauddin Zakariya University, Multan",
    period: "Oct 2022 — Oct 2026 (Expected)",
    description:
      "Currently pursuing Bachelor's degree in Information Technology with a focus on software engineering, web technologies, and full-stack development. Maintaining A+ grade while building practical real-world projects.",
  },
];

function isCurrentRole(item: TimelineItem): boolean {
  return (
    item.type === "work" && item.period.toLowerCase().includes("present")
  );
}

export default function ExperienceSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header — mesh only behind this block */}
        <div className="relative mb-12 overflow-hidden rounded-2xl">
          <div
            className="featured-bento-mesh pointer-events-none absolute inset-0 -z-0"
            aria-hidden
          />
          <div className="noise-bg relative z-10 px-4 py-10 text-left md:px-8">
            <span className="featured-section-label block text-xs font-bold uppercase tracking-widest">
              EXPERIENCE
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              My Professional{" "}
              <span className="gradient-text">Journey</span>
            </h2>
          </div>
        </div>

        {/* Left-anchored timeline */}
        <div className="relative">
          <div
            className="absolute left-4 top-2 bottom-2 z-0 w-px bg-white/15"
            aria-hidden
          />

          <div className="space-y-10">
            {timeline.map((item, i) => {
              const current = isCurrentRole(item);

              return (
                <div key={i} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-2 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center">
                    {current ? (
                      <span className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-50" />
                        <span
                          className="relative inline-flex h-3 w-3 rounded-full bg-gradient-to-r from-violet-500 to-sky-400 shadow-[0_0_12px_rgba(139,92,246,0.6)]"
                          aria-hidden
                        />
                      </span>
                    ) : (
                      <span
                        className="h-3 w-3 rounded-full bg-gradient-to-r from-violet-500 to-sky-400 opacity-90"
                        aria-hidden
                      />
                    )}
                  </div>

                  {/* Card — right of line */}
                  <div className="ml-8 pl-2 sm:ml-12 sm:pl-4">
                    <div
                      className={[
                        "rounded-2xl bg-white/[0.05] p-6 text-left backdrop-blur transition-all duration-300",
                        "hover:-translate-y-1 hover:border-white/20 hover:shadow-lg hover:shadow-violet-900/20",
                        current
                          ? "border-y border-r border-white/10 border-l-2 border-l-violet-500"
                          : "border border-white/10",
                      ].join(" ")}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        {item.type === "work" ? (
                          <FaBriefcase
                            className="shrink-0 text-violet-400/90"
                            size={14}
                            aria-hidden
                          />
                        ) : (
                          <FaGraduationCap
                            className="shrink-0 text-emerald-400/90"
                            size={14}
                            aria-hidden
                          />
                        )}
                        <span className="text-xs font-medium uppercase tracking-wide text-white/50">
                          {item.period}
                        </span>
                        {current ? (
                          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/35 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-400">
                            ● Current
                          </span>
                        ) : null}
                      </div>

                      <h3 className="mt-3 text-left text-xl font-bold text-white">
                        {item.role}
                      </h3>
                      <p className="text-left text-sm font-medium text-violet-400">
                        {item.company}
                      </p>
                      <p className="mt-3 text-left text-sm leading-relaxed text-white/70">
                        {item.description}
                      </p>

                      {item.tech && item.tech.length > 0 ? (
                        <div className="mt-4 flex flex-wrap justify-start gap-2">
                          {item.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded-lg border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs text-white/80"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
