import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="rounded-2xl bg-card border border-border overflow-hidden card-hover">
        {/* Thumbnail */}
        <div className="relative h-48 bg-gradient-to-br from-accent/15 to-accent-secondary/15 flex items-center justify-center overflow-hidden">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-xl bg-accent/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold gradient-text">
                {project.title.charAt(0)}
              </span>
            </div>
            <span className="text-xs text-text-muted">{project.category}</span>
          </div>
          {/* Year badge */}
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-background/80 backdrop-blur-sm text-xs font-medium text-text-muted border border-border">
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
