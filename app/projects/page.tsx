import { Suspense } from "react";
import ProjectFilters from "@/components/ProjectFilters";
import ProjectsList from "./ProjectsList";

export const metadata = {
  title: "Projects — Talha | Full-Stack Developer",
  description:
    "Browse my portfolio of web applications, SaaS products, e-commerce platforms, and more. Filter by category and share specific views.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Portfolio
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            All <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-text-muted max-w-lg mx-auto">
            A collection of my work across various domains. Use the filters to
            find what you&apos;re looking for, and share the URL with clients.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="text-center py-20 text-text-muted">
              Loading...
            </div>
          }
        >
          <ProjectFilters />
          <ProjectsList />
        </Suspense>
      </div>
    </div>
  );
}
