"use client";

import { projects } from "@/data/projects";
import Link from "next/link";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa6";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % featured.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + featured.length) % featured.length);

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
              Featured Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Selected <span className="gradient-text">Work</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border text-sm font-medium hover:border-accent/50 hover:bg-card transition-all group self-start"
          >
            All Projects
            <FaArrowRight
              size={12}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featured.map((project) => (
                <div
                  key={project.id}
                  className="w-full flex-shrink-0"
                >
                  <div className="grid md:grid-cols-2 gap-0 bg-card border border-border rounded-3xl overflow-hidden">
                    {/* Image side */}
                    <div className="relative h-64 md:h-[460px] bg-gradient-to-br from-accent/20 to-accent-secondary/20 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-24 h-24 mx-auto rounded-2xl bg-accent/20 flex items-center justify-center mb-4 animate-float">
                          <span className="text-3xl font-bold gradient-text">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                        <p className="text-sm text-text-muted">{project.category}</p>
                      </div>
                    </div>

                    {/* Content side */}
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3">
                        {project.title}
                      </h3>
                      <p className="text-text-muted leading-relaxed mb-6 line-clamp-3">
                        {project.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2.5 py-1 rounded-lg bg-card-hover text-text-secondary border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all group"
                      >
                        View Case Study
                        <FaArrowRight
                          size={12}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-all"
              aria-label="Previous project"
            >
              <FaChevronLeft size={14} />
            </button>

            <div className="flex gap-2">
              {featured.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === currentIndex
                      ? "w-8 h-2 bg-accent"
                      : "w-2 h-2 bg-border hover:bg-text-muted"
                  }`}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-all"
              aria-label="Next project"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
