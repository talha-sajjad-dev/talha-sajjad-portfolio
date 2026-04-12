"use client";

import ProjectImage from "@/components/ProjectImage";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaXmark,
} from "react-icons/fa6";

type ProjectGalleryProps = {
  title: string;
  thumbnail: string;
  images: string[];
};

export default function ProjectGallery({
  title,
  thumbnail,
  images,
}: ProjectGalleryProps) {
  const allImages = useMemo(() => {
    const list = [thumbnail, ...images];
    return [...new Set(list)];
  }, [thumbnail, images]);

  const [selected, setSelected] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const goLightbox = useCallback(
    (dir: -1 | 1) => {
      setLightboxIndex((i) => {
        const n = allImages.length;
        if (n === 0) return i;
        return (i + dir + n) % n;
      });
    },
    [allImages.length]
  );

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goLightbox(-1);
      if (e.key === "ArrowRight") goLightbox(1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxOpen, closeLightbox, goLightbox]);

  useEffect(() => {
    thumbRefs.current[selected]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [selected]);

  if (allImages.length === 0) return null;

  const currentSrc = allImages[selected] ?? allImages[0];

  return (
    <section className="mb-14" aria-label={`${title} screenshot gallery`}>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="w-1 h-6 rounded-full bg-accent inline-block" />
            Product showcase
          </h2>
          <p className="text-sm text-text-muted mt-1 max-w-xl">
            Screens from the live experience. Open fullscreen for a closer look.
          </p>
        </div>
        <button
          type="button"
          onClick={() => openLightbox(selected)}
          className="inline-flex items-center justify-center gap-2 self-start px-4 py-2 rounded-full border border-border text-sm font-medium text-text-secondary hover:text-accent hover:border-accent/40 hover:bg-card transition-all"
        >
          <FaExpand size={14} className="opacity-80" />
          Fullscreen
        </button>
      </div>

      <div className="rounded-3xl border border-border bg-card/80 backdrop-blur-sm overflow-hidden shadow-[0_24px_80px_-20px_rgba(0,0,0,0.55)]">
        <div className="relative aspect-[16/10] w-full bg-gradient-to-br from-accent/[0.08] to-accent-secondary/[0.06]">
          <ProjectImage
            src={currentSrc}
            alt={`${title} — screenshot ${selected + 1} of ${allImages.length}`}
            fill
            className="object-contain p-6 sm:p-10"
            sizes="(max-width: 1280px) 100vw, 1152px"
            priority={selected === 0}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        <div className="border-t border-border bg-card/60 px-3 py-4 sm:px-5">
          <div className="flex gap-3 overflow-x-auto pb-1 snap-x snap-mandatory scroll-smooth scrollbar-thin [scrollbar-color:var(--border)_transparent]">
            {allImages.map((src, i) => (
              <button
                key={`${src}-${i}`}
                ref={(el) => {
                  thumbRefs.current[i] = el;
                }}
                type="button"
                onClick={() => setSelected(i)}
                className={[
                  "relative shrink-0 w-[108px] sm:w-[132px] h-[68px] sm:h-[80px] rounded-xl overflow-hidden border-2 transition-all duration-200 snap-start",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card",
                  i === selected
                    ? "border-accent shadow-[0_0_0_1px_rgba(108,99,255,0.35)] scale-[1.02]"
                    : "border-transparent opacity-75 hover:opacity-100 hover:border-border",
                ].join(" ")}
                aria-label={`View screenshot ${i + 1}`}
                aria-current={i === selected}
              >
                <ProjectImage
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="132px"
                />
              </button>
            ))}
          </div>
          <p className="text-xs text-text-muted mt-3 text-center sm:text-left">
            {selected + 1} / {allImages.length} · Click a thumbnail or use fullscreen to browse
          </p>
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery fullscreen"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/88 backdrop-blur-md"
            aria-label="Close gallery"
            onClick={closeLightbox}
          />
          <div className="relative z-[1] w-full max-w-6xl max-h-[90vh] flex flex-col items-center gap-4">
            <div className="relative w-full aspect-[16/10] max-h-[78vh]">
              <ProjectImage
                src={allImages[lightboxIndex] ?? allImages[0]}
                alt={`${title} — fullscreen ${lightboxIndex + 1} of ${allImages.length}`}
                fill
                className="object-contain drop-shadow-2xl"
                sizes="100vw"
              />
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => goLightbox(-1)}
                className="w-11 h-11 rounded-full border border-white/20 bg-white/5 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Previous image"
              >
                <FaChevronLeft size={16} />
              </button>
              <span className="text-sm text-white/80 tabular-nums min-w-[4.5rem] text-center">
                {lightboxIndex + 1} / {allImages.length}
              </span>
              <button
                type="button"
                onClick={() => goLightbox(1)}
                className="w-11 h-11 rounded-full border border-white/20 bg-white/5 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Next image"
              >
                <FaChevronRight size={16} />
              </button>
              <button
                type="button"
                onClick={closeLightbox}
                className="ml-2 w-11 h-11 rounded-full border border-white/20 bg-white/5 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <FaXmark size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
