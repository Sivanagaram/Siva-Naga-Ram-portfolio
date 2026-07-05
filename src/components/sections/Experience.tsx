"use client";
import { Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { EXPERIENCE } from "@/constants";

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="04 · Experience"
          title="Where I've built things"
          subtitle="Two years shipping enterprise applications and design systems."
        />

        <ol className="relative space-y-8 border-l border-hair/15 pl-8">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={job.company + job.role} delay={i * 0.1}>
              <li className="relative">
                <span className="absolute -left-12 top-0 grid h-8 w-8 place-items-center rounded-full bg-aurora text-ink">
                  <Briefcase size={15} />
                </span>
                <div className="glass rounded-2xl p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    {job.current && (
                      <span className="flex items-center gap-1.5 rounded-full bg-cyan/15 px-2.5 py-0.5 text-xs text-cyan">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-1 gradient-text font-medium">{job.company}</p>
                  <p className="font-mono text-xs text-mist">{job.period}</p>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-2 text-sm text-mist">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
