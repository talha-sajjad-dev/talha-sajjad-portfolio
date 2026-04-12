"use client";

import { visibleProjects, type Project } from "@/data/projects";
import Link from "next/link";
import ProjectImage from "@/components/ProjectImage";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaCircleCheck,
  FaGithub,
} from "react-icons/fa6";

const HOVER_GLOW = [
  "hover:shadow-[0_28px_72px_-14px_rgba(108,99,255,0.55)]",
  "hover:shadow-[0_28px_72px_-14px_rgba(0,212,170,0.48)]",
  "hover:shadow-[0_28px_72px_-14px_rgba(129,140,248,0.52)]",
] as const;

const LARGE_TECH_VISIBLE_CAP = 8;

const TAG_NEON = [
  "hover:border-[#6c63ff] hover:shadow-[0_0_14px_rgba(108,99,255,0.55)]",
  "hover:border-[#00d4aa] hover:shadow-[0_0_14px_rgba(0,212,170,0.5)]",
  "hover:border-[#818cf8] hover:shadow-[0_0_14px_rgba(129,140,248,0.5)]",
  "hover:border-[#c084fc] hover:shadow-[0_0_14px_rgba(192,132,252,0.45)]",
  "hover:border-[#22d3ee] hover:shadow-[0_0_14px_rgba(34,211,238,0.45)]",
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/35 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400 backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
      </span>
      Live
    </span>
  );
}

function keyFeatureBullets(project: Project): string[] {
  const sentences = project.shortDescription
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 8);
  const fromDesc = sentences.slice(0, 3);
  if (fromDesc.length >= 3) return fromDesc;
  const fromReq = project.requirements.slice(0, 3 - fromDesc.length);
  return [...fromDesc, ...fromReq].slice(0, 3);
}

function ProjectHighlightsBlock({ project }: { project: Project }) {
  const h = project.highlights;
  if (h && h.length >= 3) {
    return (
      <div className="grid grid-cols-3 gap-3">
        {h.slice(0, 3).map((cell, i) => (
          <div
            key={`${cell.label}-${i}`}
            className="rounded-xl bg-white/5 p-3 text-center"
          >
            <p className="text-lg font-bold text-white">{cell.value}</p>
            <p className="text-xs text-white/50">{cell.label}</p>
          </div>
        ))}
      </div>
    );
  }

  const bullets = keyFeatureBullets(project);
  return (
    <div className="space-y-2">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">
        Key features
      </p>
      <ul className="space-y-1.5">
        {bullets.map((text, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-xs leading-snug text-white/70"
          >
            <FaCircleCheck
              className="mt-0.5 size-3.5 shrink-0 text-accent"
              aria-hidden
            />
            <span className="line-clamp-2">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ImageExternalLinks({ project }: { project: Project }) {
  const gh = project.githubUrl?.trim();
  const live = project.liveUrl?.trim();
  if (!gh && !live) return null;

  const btn =
    "flex size-8 shrink-0 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-white/20";

  return (
    <div className="absolute right-3 top-3 z-20 flex gap-2">
      {gh ? (
        <a
          href={gh}
          target="_blank"
          rel="noopener noreferrer"
          className={btn}
          aria-label="View source on GitHub"
          onClick={(e) => e.stopPropagation()}
        >
          <FaGithub className="size-4" />
        </a>
      ) : null}
      {live ? (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className={btn}
          aria-label="Open live site"
          onClick={(e) => e.stopPropagation()}
        >
          <FaArrowUpRightFromSquare className="size-3.5" />
        </a>
      ) : null}
    </div>
  );
}

function BentoCard({
  project,
  size,
  accentIndex,
  priorityImage,
  indexLabel,
}: {
  project: Project;
  size: "large" | "small";
  accentIndex: number;
  priorityImage?: boolean;
  indexLabel: string;
}) {
  const shots = 1 + project.images.length;
  const glow = HOVER_GLOW[accentIndex % HOVER_GLOW.length];
  const isLarge = size === "large";

  const techShown = isLarge
    ? project.techStack.slice(0, LARGE_TECH_VISIBLE_CAP)
    : project.techStack.slice(0, 3);
  const techMore = isLarge
    ? Math.max(0, project.techStack.length - LARGE_TECH_VISIBLE_CAP)
    : Math.max(0, project.techStack.length - 3);

  return (
    <div
      className={[
        "group relative flex h-fit w-full flex-col overflow-hidden rounded-2xl border border-white/10",
        "bg-white/[0.07] backdrop-blur-2xl",
        "shadow-[0_12px_48px_-16px_rgba(0,0,0,0.65)]",
        "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:-translate-y-[8px] hover:border-white/25",
        glow,
      ].join(" ")}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-[5]"
        aria-label={`View case study: ${project.title}`}
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[25] h-[2px] rounded-t-2xl bg-gradient-to-r from-sky-400 via-violet-500 to-fuchsia-500 opacity-80 shadow-none transition-all duration-300 group-hover:opacity-100 group-hover:shadow-[0_0_18px_rgba(255,255,255,0.45)]"
        aria-hidden
      />

      <div
        className={
          isLarge
            ? "relative z-[10] aspect-[16/7] w-full shrink-0 overflow-hidden"
            : "relative z-[10] h-[200px] w-full shrink-0 overflow-hidden"
        }
      >
        {isLarge ? (
          <span
            className="absolute top-3 left-4 z-10 select-none text-5xl font-black leading-none text-gray-400"
            aria-hidden
          >
            {indexLabel}
          </span>
        ) : (
          <span
            className="pointer-events-none absolute left-3 top-3 z-[6] text-3xl font-bold tabular-nums leading-none tracking-tight text-gray-400 sm:left-4 sm:top-4 sm:text-4xl"
            aria-hidden
          >
            {indexLabel}
          </span>
        )}
        <ProjectImage
          src={project.thumbnail}
          alt=""
          fill
          sizes={
            isLarge
              ? "(max-width: 1024px) 100vw, 60vw"
              : "(max-width: 1024px) 100vw, 38vw"
          }
          priority={priorityImage}
          className={
            isLarge
              ? "object-cover object-top transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.06] group-hover:-translate-y-1"
              : "object-cover object-center transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.06] group-hover:-translate-y-1"
          }
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a12]/25 to-[#0a0a12]/95"
          aria-hidden
        />
        <ImageExternalLinks project={project} />
        <div className="pointer-events-none absolute left-3 top-12 z-10 flex max-w-[min(100%,14rem)] flex-wrap items-center gap-2 sm:left-4 sm:top-14 sm:max-w-[min(100%,18rem)]">
          <LiveBadge />
          <span className="rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/85 backdrop-blur-md">
            {project.category}
          </span>
          <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white/80 backdrop-blur-md">
            {shots} screens
          </span>
        </div>
      </div>

      {isLarge ? (
        <div className="relative z-[10] flex min-h-[260px] flex-col gap-4 overflow-hidden border-t border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent px-6 pb-6 pt-5 lg:min-h-[300px] pointer-events-none">
          <h3 className="line-clamp-2 text-[1.5rem] font-bold leading-tight tracking-tight text-white">
            {project.title}
          </h3>
          <p className="line-clamp-2 text-sm leading-snug text-white/70">
            {project.shortDescription}
          </p>
          <div className="h-px w-full bg-white/10" aria-hidden />
          <div className="flex flex-wrap gap-1">
            {techShown.map((tech, i) => (
              <span
                key={tech}
                className={[
                  "shrink-0 rounded-full border border-white/15 bg-black/25 px-2 py-0.5 text-[9px] font-medium text-white/80 backdrop-blur-sm transition-all duration-300 sm:text-[10px]",
                  TAG_NEON[i % TAG_NEON.length],
                ].join(" ")}
              >
                {tech}
              </span>
            ))}
            {techMore > 0 && (
              <span className="shrink-0 rounded-full border border-white/10 bg-black/20 px-2 py-0.5 text-[9px] text-white/50 sm:text-[10px]">
                +{techMore} more
              </span>
            )}
          </div>
          <div
            className="min-h-0 w-full flex-1 basis-0"
            aria-hidden
          />
          <ProjectHighlightsBlock project={project} />
          <span className="featured-cta relative z-[15] mt-auto flex w-full shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-6 pb-3 pt-2 text-sm font-semibold text-white shadow-md transition-all duration-300 group-hover:from-violet-500 group-hover:to-blue-500 group-hover:shadow-lg group-hover:shadow-violet-500/25 pointer-events-none">
            <span className="relative z-[1]">View case study</span>
            <FaArrowRight
              size={13}
              className="relative z-[1] transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      ) : (
        <div className="relative z-[10] flex flex-col gap-2 overflow-hidden border-t border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent px-4 pb-3 pt-3 pointer-events-none">
          <h3 className="line-clamp-1 text-base font-semibold leading-snug tracking-tight text-white">
            {project.title}
          </h3>
          <p className="line-clamp-2 text-xs leading-relaxed text-white/65">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {techShown.map((tech, i) => (
              <span
                key={tech}
                className={[
                  "rounded-full border border-white/15 bg-black/25 px-2 py-0.5 text-[10px] font-medium text-white/75 backdrop-blur-sm transition-all duration-300",
                  TAG_NEON[i % TAG_NEON.length],
                ].join(" ")}
              >
                {tech}
              </span>
            ))}
            {techMore > 0 && (
              <span className="rounded-full border border-white/10 bg-black/20 px-2 py-0.5 text-[10px] text-white/50">
                +{techMore} more
              </span>
            )}
          </div>
          <span className="featured-cta relative z-[15] mt-auto inline-flex w-full shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-full border border-white/25 bg-white/[0.08] px-3.5 py-2 text-xs font-semibold text-white transition-colors duration-300 group-hover:border-white/40 group-hover:bg-white/[0.14] pointer-events-none">
            <span className="relative z-[1]">View case study</span>
            <FaArrowRight
              size={11}
              className="relative z-[1] transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      )}
    </div>
  );
}

export default function FeaturedProjects() {
  const featured = visibleProjects.filter((p) => p.featured);
  const [primary, secondary, tertiary] = featured;

  if (!primary) return null;

  const bentoFlexRow =
    "flex flex-col gap-[20px] lg:flex-row lg:items-start";

  return (
    <section className="relative scroll-mt-20 overflow-hidden pt-20 pb-24">
      <div
        className="featured-bento-mesh pointer-events-none absolute inset-0 -z-0"
        aria-hidden
      />
      <div className="noise-bg relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-10">
            <p className="featured-section-label mb-3 text-xs font-bold uppercase tracking-widest">
              Featured Projects
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                Selected <span className="gradient-text">Work</span>
              </h2>
              <Link
                href="/projects"
                className="group/ap ghost-pill-btn shrink-0 self-start sm:self-end"
              >
                All Projects
                <FaArrowRight
                  size={12}
                  className="transition-transform duration-300 group-hover/ap:translate-x-1"
                />
              </Link>
            </div>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/60 md:text-base">
              A curated set of shipped products — deep case studies, live
              demos, and full screenshot galleries.
            </p>
            <motion.div
              className="mt-6 h-px max-w-md origin-left bg-gradient-to-r from-white/45 via-[#6c63ff]/70 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
            />
          </div>

          {featured.length === 1 && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12, margin: "0px 0px -60px 0px" }}
            >
              <motion.div variants={itemVariants} className="h-fit min-h-0">
                <BentoCard
                  project={primary}
                  size="large"
                  accentIndex={0}
                  priorityImage
                  indexLabel="01"
                />
              </motion.div>
            </motion.div>
          )}

          {featured.length === 2 && (
            <motion.div
              className={bentoFlexRow}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12, margin: "0px 0px -60px 0px" }}
            >
              <motion.div
                variants={itemVariants}
                className="h-fit w-full min-h-0 lg:min-w-0 lg:flex-[3] lg:pl-1"
              >
                <BentoCard
                  project={primary}
                  size="large"
                  accentIndex={0}
                  priorityImage
                  indexLabel="01"
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="h-fit w-full min-h-0 lg:min-w-0 lg:flex-[2]"
              >
                {secondary ? (
                  <BentoCard
                    project={secondary}
                    size="small"
                    accentIndex={1}
                    indexLabel="02"
                  />
                ) : null}
              </motion.div>
            </motion.div>
          )}

          {featured.length >= 3 && (
            <motion.div
              className={bentoFlexRow}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12, margin: "0px 0px -60px 0px" }}
            >
              <motion.div
                variants={itemVariants}
                className="h-fit w-full min-h-0 lg:min-w-0 lg:flex-[3] lg:pl-1"
              >
                <BentoCard
                  project={primary}
                  size="large"
                  accentIndex={0}
                  priorityImage
                  indexLabel="01"
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex h-fit w-full min-w-0 flex-col gap-[20px] lg:w-0 lg:flex-[2] lg:basis-0 lg:min-w-0"
              >
                {secondary ? (
                  <BentoCard
                    project={secondary}
                    size="small"
                    accentIndex={1}
                    indexLabel="02"
                  />
                ) : null}
                {tertiary ? (
                  <BentoCard
                    project={tertiary}
                    size="small"
                    accentIndex={2}
                    indexLabel="03"
                  />
                ) : null}
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
