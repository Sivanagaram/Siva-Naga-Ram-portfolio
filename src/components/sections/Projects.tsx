"use client";
import { useMemo, useState } from "react";
import { Search, ExternalLink, Github, Star, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PROJECTS } from "@/constants";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Featured", "AI", "Frontend"] as const;
type Filter = (typeof FILTERS)[number];

function matchesFilter(
  project: (typeof PROJECTS)[number],
  filter: Filter
): boolean {
  if (filter === "All") return true;
  if (filter === "Featured") return project.featured;
  const tech = project.tech.join(" ").toLowerCase();
  if (filter === "AI")
    return /python|transformers|fastapi|ml/.test(tech) || /ai/i.test(project.title);
  if (filter === "Frontend") return /react|next|tailwind|typescript/.test(tech);
  return true;
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    return PROJECTS.filter((p) => {
      if (p.comingSoon) return filter === "All" && query === "";
      const inFilter = matchesFilter(p, filter);
      const q = query.trim().toLowerCase();
      const inQuery =
        q === "" ||
        p.title.toLowerCase().includes(q) ||
        p.tech.join(" ").toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return inFilter && inQuery;
    });
  }, [filter, query]);

  return (
    <section id="projects" className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="03 · Projects"
          title="Things I've designed and shipped"
          subtitle="A selection of product and AI work. Search by name or technology, or filter by focus."
        />

        {/* controls */}
        <Reveal className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition",
                  filter === f
                    ? "bg-aurora text-ink shadow-lg shadow-violet/20"
                    : "glass text-mist hover:text-fg"
                )}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="glass flex items-center gap-2 rounded-full px-4 py-2">
            <Search size={16} className="text-mist" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects…"
              aria-label="Search projects"
              className="w-full bg-transparent text-sm outline-none placeholder:text-mist md:w-48"
            />
          </div>
        </Reveal>

        {/* grid */}
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group relative"
              >
                <div
                  className={cn(
                    "absolute -inset-px rounded-2xl bg-gradient-to-br opacity-0 blur transition group-hover:opacity-100",
                    project.accent
                  )}
                />
                <div className="glass relative flex h-full flex-col rounded-2xl p-6 transition-transform duration-300 group-hover:-translate-y-1.5">
                  {/* image / banner */}
                  <div
                    className={cn(
                      "mb-5 grid aspect-video place-items-center rounded-xl bg-gradient-to-br",
                      project.accent
                    )}
                  >
                    {project.comingSoon ? (
                      <Sparkles className="text-mist" />
                    ) : (
                      <span className="font-mono text-sm font-semibold text-fg/80">
                        {project.title.split(" ").map((w) => w[0]).join("")}
                      </span>
                    )}
                  </div>

                  <div className="mb-2 flex items-start justify-between gap-2">
                    <h3 className="font-semibold leading-tight">{project.title}</h3>
                    {project.featured && (
                      <span className="flex shrink-0 items-center gap-1 rounded-full bg-aurora-soft px-2 py-0.5 text-[10px] font-medium text-cyan">
                        <Star size={10} /> Featured
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-mist">{project.description}</p>

                  {project.features.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {project.features.map((f) => (
                        <li
                          key={f}
                          className="rounded-md bg-surface/5 px-2 py-1 text-[11px] text-mist"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}

                  {project.tech.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="font-mono text-[11px] text-cyan">
                          #{t.replace(/\s+/g, "")}
                        </span>
                      ))}
                    </div>
                  )}

                  {!project.comingSoon && (
                    <div className="mt-5 flex gap-3 pt-2">
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-fg transition hover:text-cyan"
                        >
                          <ExternalLink size={14} /> Live
                        </Link>
                      )}
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-mist transition hover:text-fg"
                        >
                          <Github size={14} /> Code
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 && (
          <p className="mt-10 text-center text-mist">
            No projects match that search. Try a different term.
          </p>
        )}
      </div>
    </section>
  );
}
