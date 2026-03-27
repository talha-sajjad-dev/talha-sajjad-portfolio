"use client";

import { categories } from "@/data/projects";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { FaFilter, FaCopy, FaCheck } from "react-icons/fa6";
import { useState, useCallback } from "react";

export default function ProjectFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);

  const activeCategory = searchParams.get("category") || "All";

  const setCategory = useCallback(
    (category: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (category === "All") {
        params.delete("category");
      } else {
        params.set("category", category);
      }
      const query = params.toString();
      router.push(`${pathname}${query ? `?${query}` : ""}`, { scroll: false });
    },
    [searchParams, router, pathname]
  );

  const copyFilteredUrl = useCallback(() => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
      <div className="flex flex-wrap items-center gap-2">
        <FaFilter className="text-text-muted mr-1" size={12} />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === cat
                ? "bg-accent text-white shadow-lg shadow-accent/25"
                : "bg-card border border-border text-text-muted hover:text-foreground hover:border-accent/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <button
        onClick={copyFilteredUrl}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          copied
            ? "bg-accent-secondary/20 text-accent-secondary border border-accent-secondary/30"
            : "bg-card border border-border text-text-muted hover:text-foreground hover:border-accent/30"
        }`}
        title="Copy filtered URL to share with clients"
      >
        {copied ? (
          <>
            <FaCheck size={12} />
            Copied!
          </>
        ) : (
          <>
            <FaCopy size={12} />
            Copy URL
          </>
        )}
      </button>
    </div>
  );
}
