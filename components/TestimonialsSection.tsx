"use client";

import Masonry from "react-masonry-css";
import { reviews } from "@/data/reviews";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";

const breakpointCols = {
  default: 3,
  1024: 2,
  640: 1,
};

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative noise-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-6 md:gap-8
          mb-12 py-4 px-4 bg-white/[0.03] rounded-2xl border
          border-white/[0.08]"
        >
          <div className="text-center min-w-[100px]">
            <p className="text-2xl font-black text-amber-400">4.9★</p>
            <p className="text-white/40 text-xs">Average Rating</p>
          </div>
          <div className="hidden sm:block h-8 w-px bg-white/10" />
          <div className="text-center min-w-[100px]">
            <p className="text-2xl font-black text-white">15+</p>
            <p className="text-white/40 text-xs">Happy Clients</p>
          </div>
          <div className="hidden sm:block h-8 w-px bg-white/10" />
          <div className="text-center min-w-[100px]">
            <p className="text-2xl font-black text-white">100%</p>
            <p className="text-white/40 text-xs">5-Star Reviews</p>
          </div>
        </div>

        <Masonry
          breakpointCols={breakpointCols}
          className="flex gap-5 w-auto"
          columnClassName="flex flex-col gap-5"
        >
          {reviews.map((t) => (
            <div
              key={t.id}
              className="
                bg-white/[0.05] backdrop-blur
                border border-white/10 rounded-2xl p-6
                hover:border-violet-500/30
                hover:-translate-y-1
                transition-all duration-200
                group relative overflow-hidden
              "
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px]
                bg-gradient-to-r from-violet-500 to-sky-400
                opacity-0 group-hover:opacity-100 transition-opacity"
              />

              <FaQuoteLeft className="text-violet-500/30 mb-4" size={28} />

              <p className="text-white/75 text-sm leading-relaxed mb-5">
                {t.text}
              </p>

              <div className="flex flex-wrap items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < t.rating ? "text-amber-400" : "text-white/15"}
                    size={12}
                  />
                ))}
                <span className="text-white/30 text-xs ml-1">via Fiverr</span>
              </div>

              <div className="flex items-center gap-3">
                {t.avatar ? (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-9 h-9 rounded-full
                    object-cover border border-white/10"
                  />
                ) : (
                  <div
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-sky-400
                    flex items-center justify-center text-white font-bold text-xs
                    border border-white/10 shrink-0"
                  >
                    {t.name.charAt(0)}
                  </div>
                )}
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm truncate">
                    {t.name}
                  </p>
                  <p className="text-white/40 text-xs truncate">
                    {t.role}
                    {t.company ? ` · ${t.company}` : ""}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
}
