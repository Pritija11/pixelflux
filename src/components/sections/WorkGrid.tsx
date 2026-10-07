"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CoverArt from "@/components/ui/CoverArt";
import { categories, projects } from "@/data/work";

type WorkGridProps = {
  withFilters?: boolean;
  limit?: number;
};

export default function WorkGrid({
  withFilters = false,
  limit,
}: WorkGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const list = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div>
      {withFilters && (
        <div className="filter-row">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-pill ${
                activeCategory === cat ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="work-grid">
        {list.map((project, i) => (
          <ScrollReveal
            key={project.slug}
            delay={(((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6)}
          >
            <Link
              href={`/work#${project.slug}`}
              className="work-card"
              aria-label={`${project.title} — ${project.category}`}
            >
              <CoverArt
                pattern={project.pattern}
                colors={project.colors as [string, string]}
                image={project.image}
              />

              <div className="work-card-meta">
                <h3 className="work-card-title">{project.title}</h3>
                <span className="work-card-category mono">
                  {project.category}
                </span>
              </div>

              <p className="work-card-desc">{project.description}</p>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
