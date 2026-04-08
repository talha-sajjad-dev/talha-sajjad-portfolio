import { FaArrowRight, FaDownload } from "react-icons/fa6";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden noise-bg">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-secondary/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
          <span className="text-sm text-accent-secondary font-medium">
            Available for freelance
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          MERN Stack{" "}
          <span className="gradient-text">Developer</span>
          <br />
          Building Scalable Solutions
        </h1>

        <p
          className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Full-stack developer with 1 year of experience specializing in building
          scalable e-commerce and CRM systems with secure authentication, payment
          integration, and clean architecture.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 group"
          >
            View My Work
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="/pdf/resume/Talha Sajjad.pdf"
            download="Talha_Sajjad_Resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border text-foreground font-medium hover:border-accent/50 hover:bg-card transition-all duration-300"
          >
            <FaDownload size={14} />
            Download Resume
          </a>
        </div>

        {/* Stats strip */}
        <div
          className="mt-20 grid grid-cols-2 gap-6 max-w-xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { value: "1+", label: "Years Experience" },
            { value: "20+", label: "Projects Delivered" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold gradient-text">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
