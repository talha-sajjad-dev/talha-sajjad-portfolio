"use client";

import { useSearchParams } from "next/navigation";
import { visibleProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsList() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "All";

  const filtered =
    activeCategory === "All"
      ? visibleProjects
      : visibleProjects.filter((p) => p.category === activeCategory);

  if (filtered.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-text-muted text-lg">
          No projects found for &ldquo;{activeCategory}&rdquo;.
        </p>
        <p className="text-text-muted text-sm mt-2">
          Try a different filter or view all projects.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
      {filtered.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
