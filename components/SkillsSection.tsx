"use client";

import { skills } from "@/data/skills";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiVercel,
  SiNetlify,
  SiPostman,
  SiJsonwebtokens,
  SiStripe,
  SiSocketdotio,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { useState } from "react";

const iconMap: Record<string, IconType> = {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiVercel,
  SiNetlify,
  SiPostman,
  SiJsonwebtokens,
  SiStripe,
  SiSocketdotio,
};

/** Brand colors for specific skills (rest use category tint). */
const skillBrandColors: Partial<Record<string, string>> = {
  CSS3: "#264de4",
  Bootstrap: "#7952b3",
  MySQL: "#4479a1",
  Netlify: "#00c7b7",
  "JWT Auth": "#d63aff",
  Stripe: "#635bff",
  "Socket.IO": "#ffffff",
};

const categoryFallback: Record<string, string> = {
  Frontend: "#61DAFB",
  Backend: "#00d4aa",
  DevOps: "#FF9900",
  Tools: "#a78bfa",
};

const categories = ["All", "Frontend", "Backend", "DevOps", "Tools"];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section className="relative pt-20 pb-24 noise-bg">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Skills & Technologies
          </span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            My Tech <span className="gradient-text">Arsenal</span>
          </h2>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/25"
                  : "border border-white/10 bg-white/5 text-white/60 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
          {filtered.map((skill) => {
            const Icon = iconMap[skill.icon];
            const brand = skillBrandColors[skill.name];
            const fallback = categoryFallback[skill.category] ?? "#a78bfa";
            const color = brand ?? fallback;

            return (
              <div
                key={skill.name}
                className="flex max-h-[100px] min-w-0 flex-col items-center justify-center gap-1.5 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.04] p-4 transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-lg"
              >
                {Icon ? (
                  <Icon
                    size={32}
                    style={{ color }}
                    className={
                      skill.name === "Socket.IO"
                        ? "drop-shadow-[0_0_6px_rgba(255,255,255,0.35)]"
                        : undefined
                    }
                  />
                ) : null}
                <span className="text-center text-xs text-white/70">
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
