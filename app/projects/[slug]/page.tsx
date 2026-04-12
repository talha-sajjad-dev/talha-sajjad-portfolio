import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectImage from "@/components/ProjectImage";
import { FadeUp } from "@/components/ProjectDetailFadeUp";
import {
  FaArrowLeft,
  FaArrowUpRightFromSquare,
  FaGithub,
  FaCalendar,
  FaClock,
  FaUser,
  FaCircleCheck,
  FaTriangleExclamation,
  FaLightbulb,
} from "react-icons/fa6";
import { Fragment } from "react";

const TECH_GROUPS = {
  Frontend: [
    "React",
    "Next.js",
    "Vue",
    "Angular",
    "TypeScript",
    "Tailwind",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "Laravel",
    "PHP",
    "Python",
    "Symfony",
  ],
  Database: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
  Payments: ["Stripe", "PayPal"],
  DevOps: ["Cloudinary", "Socket.IO", "Docker", "AWS"],
} as const;

function groupTechStack(stack: string[]) {
  const used = new Set<string>();
  const groups: { name: string; techs: string[] }[] = [];

  for (const [groupName, keys] of Object.entries(TECH_GROUPS)) {
    const matched = stack.filter((t) =>
      (keys as readonly string[]).includes(t)
    );
    matched.forEach((t) => used.add(t));
    if (matched.length > 0) {
      groups.push({ name: groupName, techs: matched });
    }
  }

  const other = stack.filter((t) => !used.has(t));
  if (other.length > 0) {
    groups.push({ name: "Other", techs: other });
  }

  return groups;
}

function titleLastWordGradient(title: string) {
  const words = title.trim().split(/\s+/);
  const last = words.pop() ?? title;
  const rest = words.join(" ");
  return { rest, last };
}

function browserBarUrl(liveUrl: string | undefined) {
  const raw = liveUrl?.trim();
  if (!raw) return "localhost:3000";
  try {
    const u = raw.startsWith("http") ? raw : `https://${raw}`;
    const parsed = new URL(u);
    const path =
      parsed.pathname === "/" ? "" : parsed.pathname.slice(0, 32);
    const s = `${parsed.host}${path}${path.length >= 32 ? "…" : ""}`;
    return s.length > 52 ? `${s.slice(0, 52)}…` : s;
  } catch {
    return raw.length > 52 ? `${raw.slice(0, 52)}…` : raw;
  }
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Talha | Portfolio`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const { rest: titleRest, last: titleLast } = titleLastWordGradient(
    project.title
  );
  const techGroups = groupTechStack(project.techStack);
  const highlights = project.highlights ?? [];
  const showStats = highlights.length >= 2;

  const statsGridClass =
    highlights.length >= 4
      ? "md:grid-cols-4"
      : highlights.length === 3
        ? "md:grid-cols-3"
        : "md:grid-cols-2";

  const mesh = (
    <div
      className="featured-bento-mesh pointer-events-none absolute inset-0 -z-0"
      aria-hidden
    />
  );

  return (
    <div className="pb-0">
      {/* ——— HERO ——— */}
      <section className="relative flex min-h-fit items-center overflow-hidden py-32">
        {mesh}
        <div className="noise-bg relative z-10 w-full">
          <FadeUp className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:px-20">
            <div className="w-full lg:w-[55%]">
              <Link
                href="/projects"
                className="group/back mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <FaArrowLeft
                  size={12}
                  className="transition-transform group-hover/back:-translate-x-0.5"
                />
                Back
              </Link>

              <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
                {project.category}
              </div>

              <h1 className="mt-5 text-4xl font-black tracking-tight text-white md:text-6xl">
                {titleRest ? (
                  <>
                    {titleRest}{" "}
                  </>
                ) : null}
                <span className="bg-gradient-to-r from-sky-400 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                  {titleLast}
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/70">
                {project.shortDescription}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/50">
                <div className="flex items-center gap-2">
                  <FaUser size={14} className="shrink-0 text-violet-400/90" />
                  <span>{project.client}</span>
                </div>
                <span className="text-white/25 select-none" aria-hidden>
                  ·
                </span>
                <div className="flex items-center gap-2">
                  <FaCalendar
                    size={14}
                    className="shrink-0 text-violet-400/90"
                  />
                  <span>{project.year}</span>
                </div>
                <span className="text-white/25 select-none" aria-hidden>
                  ·
                </span>
                <div className="flex items-center gap-2">
                  <FaClock
                    size={14}
                    className="shrink-0 text-violet-400/90"
                  />
                  <span>{project.duration}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveUrl?.trim() ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="featured-cta relative z-[15] inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:from-violet-500 hover:to-blue-500 hover:shadow-lg hover:shadow-violet-500/25"
                  >
                    <FaArrowUpRightFromSquare size={13} className="relative z-[1]" />
                    <span className="relative z-[1]">Live Demo</span>
                  </a>
                ) : null}
                {project.githubUrl?.trim() ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ghost-pill-btn inline-flex items-center gap-2"
                  >
                    <FaGithub size={15} />
                    Source Code
                  </a>
                ) : null}
              </div>
            </div>

            <div className="relative w-full lg:w-[45%]">
              <div
                className="pointer-events-none absolute -inset-4 -z-10 rounded-2xl bg-violet-500/15 blur-3xl"
                aria-hidden
              />
              <div className="rotate-1 transition-all duration-500 hover:rotate-0">
                <div className="overflow-hidden rounded-xl border border-white/15 shadow-2xl shadow-violet-900/40">
                  <div className="flex h-8 items-center gap-1.5 bg-[#1a1a2e] px-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    <div className="ml-2 flex min-w-0 flex-1 rounded bg-white/5 px-2 py-0.5">
                      <span className="truncate text-[10px] text-white/30">
                        {browserBarUrl(project.liveUrl)}
                      </span>
                    </div>
                  </div>
                  <div className="relative h-[320px] w-full overflow-hidden bg-black/40">
                    <ProjectImage
                      src={project.thumbnail}
                      alt=""
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ——— STATS ——— */}
      {showStats ? (
        <div className="border-y border-white/10 bg-white/[0.04] py-8 backdrop-blur">
          <FadeUp className="mx-auto max-w-7xl px-6 lg:px-20">
            <div
              className={`grid grid-cols-2 gap-8 divide-x divide-white/10 ${statsGridClass}`}
            >
              {highlights.map((h, i) => (
                <div key={`${h.label}-${i}`} className="px-4 text-center">
                  <p className="bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-3xl font-black text-transparent">
                    {h.value}
                  </p>
                  <p className="mt-1 text-sm text-white/50">{h.label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      ) : null}

      {/* ——— MAIN ——— */}
      <div className="mx-auto max-w-5xl space-y-16 px-6 py-20 lg:px-20">
        <FadeUp>
          <ProjectGallery
            title={project.title}
            thumbnail={project.thumbnail}
            images={project.images}
          />
        </FadeUp>

        <FadeUp>
          <div className="rounded-2xl border border-white/10 border-l-2 border-l-violet-500 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 backdrop-blur">
            <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-white">
              <span className="inline-block h-5 w-1 rounded-full bg-accent-secondary" />
              Overview
            </h2>
            <p className="text-[1.05rem] leading-relaxed text-white/80">
              {project.description}
            </p>
          </div>
        </FadeUp>

        <FadeUp>
          <div>
            <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-white">
              <span className="inline-block h-6 w-1 rounded-full bg-accent" />
              Tech Stack
            </h2>
            {techGroups.map((g) => (
              <Fragment key={g.name}>
                <p className="mb-2 text-xs uppercase tracking-widest text-white/40">
                  {g.name}
                </p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {g.techs.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 transition-all hover:border-violet-500/40 hover:bg-violet-500/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Fragment>
            ))}
          </div>
        </FadeUp>

        <FadeUp>
          <div>
            <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-white">
              <span className="inline-block h-6 w-1 rounded-full bg-accent-secondary" />
              Client Requirements
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {project.requirements.map((req, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-all hover:border-emerald-500/20 hover:bg-emerald-500/[0.03]"
                >
                  <div className="flex gap-3">
                    <FaCircleCheck
                      className="mt-0.5 shrink-0 text-emerald-400"
                      size={16}
                    />
                    <p className="text-sm text-white/80">{req}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        <FadeUp>
          <div>
            <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-white">
              <span className="inline-block h-6 w-1 rounded-full bg-[#ff6b6b]" />
              Challenges &amp; Solutions
            </h2>
            <div className="space-y-6">
              {project.problemsFaced.map((problem, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6"
                >
                  <span
                    className="pointer-events-none absolute right-6 top-4 select-none text-6xl font-black leading-none text-white/5"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="relative z-[1] mb-4 flex items-center gap-2 text-lg font-bold text-white">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#ff6b6b]/10">
                      <FaTriangleExclamation
                        className="text-[#ff6b6b]"
                        size={14}
                      />
                    </span>
                    {problem.title}
                  </h3>

                  <div className="relative z-[1] grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-red-500/15 bg-red-500/[0.06] p-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-red-400">
                        The Problem
                      </p>
                      <p className="text-sm leading-relaxed text-white/75">
                        {problem.description}
                      </p>
                    </div>
                    <div className="rounded-xl border border-emerald-500/15 bg-emerald-500/[0.06] p-4">
                      <p className="mb-2 flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-emerald-400">
                        <FaLightbulb size={10} />
                        The Solution
                      </p>
                      <p className="text-sm leading-relaxed text-white/75">
                        {problem.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
