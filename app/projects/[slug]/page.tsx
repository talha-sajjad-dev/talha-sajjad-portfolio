import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
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

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors mb-8 group"
        >
          <FaArrowLeft
            size={12}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Projects
        </Link>

        {/* Hero */}
        <div className="rounded-3xl bg-gradient-to-br from-accent/15 to-accent-secondary/15 border border-border p-8 md:p-16 mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20 mb-6">
            {project.category}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            {project.description}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <FaUser size={12} className="text-accent" />
              {project.client}
            </div>
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <FaCalendar size={12} className="text-accent" />
              {project.year}
            </div>
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <FaClock size={12} className="text-accent" />
              {project.duration}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
            >
              <FaArrowUpRightFromSquare size={12} />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border font-medium hover:border-accent/50 hover:bg-card transition-all duration-200"
            >
              <FaGithub size={14} />
              Source Code
            </a>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 rounded-full bg-accent inline-block" />
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-card border border-border text-sm font-medium text-text-secondary hover:border-accent/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="section-divider mb-12" />

        {/* Requirements */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1 h-6 rounded-full bg-accent-secondary inline-block" />
            Client Requirements
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.requirements.map((req, i) => (
              <div
                key={i}
                className="flex gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <FaCircleCheck
                  className="text-accent-secondary shrink-0 mt-0.5"
                  size={16}
                />
                <p className="text-sm text-text-secondary">{req}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section-divider mb-12" />

        {/* Problems Faced */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1 h-6 rounded-full bg-[#ff6b6b] inline-block" />
            Challenges & Solutions
          </h2>
          <div className="space-y-6">
            {project.problemsFaced.map((problem, i) => (
              <div
                key={i}
                className="rounded-2xl bg-card border border-border overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-[#ff6b6b]/10 flex items-center justify-center shrink-0">
                      <FaTriangleExclamation
                        className="text-[#ff6b6b]"
                        size={14}
                      />
                    </span>
                    {problem.title}
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-[#ff6b6b]/5 border border-[#ff6b6b]/10">
                      <p className="text-xs font-semibold text-[#ff6b6b] uppercase tracking-wide mb-2">
                        The Problem
                      </p>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-accent-secondary/5 border border-accent-secondary/10">
                      <p className="text-xs font-semibold text-accent-secondary uppercase tracking-wide mb-2 flex items-center gap-1">
                        <FaLightbulb size={10} />
                        The Solution
                      </p>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {problem.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-divider mb-12" />

        {/* Navigation to other projects */}
        <div className="text-center">
          <p className="text-text-muted mb-4">Interested in more?</p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
