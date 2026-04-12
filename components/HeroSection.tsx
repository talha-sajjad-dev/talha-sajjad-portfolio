import { Fragment, type CSSProperties } from "react";
import {
  FaArrowRight,
  FaCode,
  FaDownload,
  FaGithub,
  FaRocket,
} from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const PROFILE_PHOTO_SRC = "/images/my-image.jpeg";

const GITHUB_HREF = "https://github.com/talha-sajjad-dev";

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-fit overflow-hidden py-32 noise-bg lg:flex lg:items-center">
      <div className="pointer-events-none absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-accent-secondary/15 blur-[120px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-16">
        {/* LEFT */}
        <div className="w-full text-left lg:w-[55%]">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.85)]" />
            </span>
            <span className="text-sm font-medium text-accent-secondary">
              Open to Full-Time Roles
            </span>
          </div>

          <p
            className="mb-2 text-xl font-medium text-white/60 animate-fade-in-up"
            style={{ animationDelay: "0.05s" }}
          >
            Hi, I&apos;m Talha Sajjad
          </p>

          <h1
            className="animate-fade-in-up font-black leading-[1.05] tracking-tight"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block text-5xl text-white md:text-7xl">
              MERN Stack{" "}
              <span className="bg-gradient-to-r from-sky-400 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                Developer
              </span>
            </span>
            <span className="mt-3 block text-3xl text-white/80 md:text-5xl">
              Building Scalable Solutions
            </span>
          </h1>

          <p
            className="mt-6 max-w-lg text-left text-white/60 animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            Full-stack developer with 1+ year of experience building scalable
            e-commerce platforms, CRM systems, and SaaS tools using React,
            Node.js, Express, and MongoDB.
          </p>

          <div
            className="mt-8 flex flex-wrap items-center gap-3 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Link
              href="/projects"
              className="group featured-cta relative z-[15] inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:from-violet-500 hover:to-blue-500 hover:shadow-lg hover:shadow-violet-500/25"
            >
              View My Work
              <FaArrowRight className="relative z-[1] transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="/pdf/resume/Talha_Sajjad_CV.pdf"
              download="Talha_Sajjad_CV.pdf"
              className="ghost-pill-btn inline-flex items-center gap-2 px-8 py-3.5"
            >
              <FaDownload size={14} />
              Download CV
            </a>
            <a
              href={GITHUB_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/90 transition-all hover:border-white/25 hover:bg-white/10"
              aria-label="GitHub profile"
            >
              <FaGithub size={18} />
            </a>
          </div>

          <div
            className="mt-10 flex flex-wrap items-center gap-8 animate-fade-in-up"
            style={{ animationDelay: "0.25s" }}
          >
            {stats.map((stat, i) => (
              <Fragment key={stat.label}>
                {i > 0 ? (
                  <div
                    className="hidden h-8 w-px bg-white/10 sm:block"
                    aria-hidden
                  />
                ) : null}
                <div>
                  <p className="bg-gradient-to-r from-sky-400 via-violet-400 to-fuchsia-500 bg-clip-text text-2xl font-black text-transparent md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-white/50 md:text-sm">
                    {stat.label}
                  </p>
                </div>
              </Fragment>
            ))}
          </div>
        </div>

        {/* RIGHT — single orbit cluster: photo centered, cards hug the circle (≤80px from edge) */}
        <div className="relative mx-auto flex w-full max-w-md justify-center overflow-visible lg:w-[45%] lg:max-w-none">
          <div className="relative mx-auto h-[20rem] w-[20rem] shrink-0 sm:h-[22rem] sm:w-[22rem] lg:h-[24rem] lg:w-[24rem]">
            {/* Profile photo — dead center of orbit */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rotate-1 transition-transform duration-500 hover:rotate-0">
              <div className="relative h-64 w-64 lg:h-72 lg:w-72">
                <div
                  className="absolute -inset-4 -z-10 rounded-full bg-gradient-to-r from-violet-500/30 to-sky-400/20 blur-2xl"
                  aria-hidden
                />
                <Image
                  src={PROFILE_PHOTO_SRC}
                  alt="Talha Sajjad"
                  fill
                  sizes="(max-width: 1024px) 256px, 288px"
                  priority
                  className="z-10 rounded-full border-4 border-white/15 object-cover object-top"
                />
                <div className="absolute -bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-emerald-500/40 bg-[#0d1a12] px-3 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="whitespace-nowrap text-xs font-medium text-emerald-300">
                    Open to Work
                  </span>
                </div>
              </div>
            </div>

            {/* 20+ Projects — top-right, ~32–72px from photo rim */}
            <div
              className="animate-float absolute right-2 top-6 z-30 w-max max-w-[11rem] rounded-xl border border-violet-500/30 bg-violet-500/20 p-3 text-sm text-white shadow-lg sm:right-3 sm:top-8"
              style={{ "--r": "-3deg", animationDelay: "0s" } as CSSProperties}
            >
              <div className="flex items-center gap-2 font-medium">
                <FaRocket className="shrink-0 text-violet-200" size={16} />
                <span>20+ Projects</span>
              </div>
            </div>

            {/* MERN Stack — bottom-left, clears badge */}
            <div
              className="animate-float absolute bottom-[5.25rem] left-2 z-30 w-max max-w-[11rem] rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-sm text-white shadow-lg sm:bottom-[5.5rem] sm:left-3"
              style={{ "--r": "2deg", animationDelay: "1s" } as CSSProperties}
            >
              <div className="flex items-center gap-2 font-medium">
                <FaCode className="shrink-0 text-emerald-300" size={16} />
                <span>MERN Stack</span>
              </div>
            </div>

            {/* Client rate — bottom-right */}
            <div
              className="absolute bottom-[5.25rem] right-0 z-30 rounded-xl border border-white/10 bg-white/[0.06] p-3 text-center backdrop-blur sm:bottom-[5.5rem] sm:right-0"
              style={{ transform: "rotate(2deg)" }}
            >
              <p className="text-sm font-bold text-white">100%</p>
              <p className="text-[10px] text-white/50">Client Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
