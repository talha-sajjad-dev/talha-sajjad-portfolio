"use client";

import { skills } from "@/data/skills";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGraphql,
  SiPrisma,
  SiFirebase,
  SiVercel,
  SiKubernetes,
  SiGithubactions,
  SiNginx,
  SiPostman,
  SiJira,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import type { IconType } from "react-icons";
import { useState } from "react";

const iconMap: Record<string, IconType> = {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaFigma,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGraphql,
  SiPrisma,
  SiFirebase,
  SiVercel,
  SiKubernetes,
  SiGithubactions,
  SiNginx,
  VscVscode,
  SiPostman,
  SiJira,
};

const categoryColors: Record<string, string> = {
  Frontend: "text-[#61DAFB]",
  Backend: "text-accent-secondary",
  DevOps: "text-[#FF9900]",
  Tools: "text-[#FF6B9D]",
};

const categories = ["All", "Frontend", "Backend", "DevOps", "Tools"];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section className="py-24 relative noise-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Skills & Technologies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            My Tech <span className="gradient-text">Arsenal</span>
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "bg-card border border-border text-text-muted hover:text-foreground hover:border-accent/30"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4 stagger-children">
          {filtered.map((skill) => {
            const Icon = iconMap[skill.icon];
            return (
              <div
                key={skill.name}
                className="skill-icon-wrapper flex flex-col items-center gap-3 p-4 rounded-2xl bg-card border border-border cursor-default"
              >
                {Icon && (
                  <Icon
                    size={28}
                    className={categoryColors[skill.category] || "text-accent"}
                  />
                )}
                <span className="text-xs text-text-muted font-medium text-center">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}