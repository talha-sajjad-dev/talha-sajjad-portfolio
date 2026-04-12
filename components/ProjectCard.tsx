import Link from "next/link";
import ProjectImage from "@/components/ProjectImage";
import { FaArrowRight } from "react-icons/fa6";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <div className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:shadow-lg hover:shadow-violet-900/20">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[25] h-[2px] rounded-t-2xl bg-gradient-to-r from-sky-400 via-violet-500 to-fuchsia-500 opacity-0 transition-opacity group-hover:opacity-100"
          aria-hidden
        />
        {/* Thumbnail */}
        <div className="relative h-56 bg-gradient-to-br from-accent/15 to-accent-secondary/15 overflow-hidden">
          <ProjectImage
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-contain p-4 group-hover:scale-[1.04] transition-transform duration-300 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3 px-2 py-1 rounded-lg bg-background/85 backdrop-blur-sm text-[10px] font-semibold uppercase tracking-wide text-accent border border-accent/25 z-10 max-w-[calc(100%-5rem)] truncate">
            {1 + project.images.length} screens
          </div>
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-background/80 backdrop-blur-sm text-xs font-medium text-text-muted border border-border z-10">
            {project.year}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-text-muted leading-relaxed line-clamp-2 mb-4">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2 py-0.5 rounded-md bg-card-hover text-text-secondary border border-border"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-card-hover text-text-muted border border-border">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all">
            View Details
            <FaArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
