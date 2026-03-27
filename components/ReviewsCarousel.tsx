"use client";

import { reviews } from "@/data/reviews";
import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa6";

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show 1 on mobile, 2 on tablet, 3 on desktop — we'll handle via CSS + actual carousel index
  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  // Get visible reviews (show current + next 2 for wraparound)
  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return visible;
  };

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

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getVisibleReviews().map((review, i) => (
            <div
              key={`${review.id}-${currentIndex}-${i}`}
              className="review-card p-6 rounded-2xl bg-card border border-border animate-scale-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <FaQuoteLeft className="text-accent/20 mb-4" size={24} />
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, si) => (
                  <FaStar
                    key={si}
                    size={12}
                    className={
                      si < review.rating ? "text-[#FFD93D]" : "text-border"
                    }
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center text-white font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm">{review.name}</p>
                  <p className="text-xs text-text-muted">
                    {review.role} @ {review.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-all"
            aria-label="Previous review"
          >
            <FaChevronLeft size={14} />
          </button>

          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === currentIndex
                    ? "w-8 h-2 bg-accent"
                    : "w-2 h-2 bg-border hover:bg-text-muted"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-all"
            aria-label="Next review"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
