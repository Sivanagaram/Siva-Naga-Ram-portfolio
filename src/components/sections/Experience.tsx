"use client";
import { Briefcase, CheckCircle2 } from "lucide-react";
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
          subtitle="Two and a half years shipping enterprise applications and design systems."
        />

        <ol className="relative space-y-8 border-l border-hair/15 pl-8">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={job.company + job.role} delay={i * 0.1}>
              <li className="relative">
                <span className="absolute -left-12 top-1 grid h-8 w-8 place-items-center rounded-full bg-aurora text-ink shadow-lg shadow-violet/25">
                  <Briefcase size={15} />
                </span>
                <div className="group relative">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan/30 to-violet/20 opacity-0 blur transition duration-300 group-hover:opacity-100" />
                  <div className="glass relative rounded-2xl p-6 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                      <div>
                        <h3 className="text-lg font-semibold">{job.role}</h3>
                        <p className="mt-0.5 gradient-text font-medium">{job.company}</p>
                      </div>
                      <div className="flex flex-col items-start gap-2 sm:items-end">
                        {job.current && (
                          <span className="flex items-center gap-1.5 rounded-full bg-cyan/15 px-2.5 py-0.5 text-xs text-cyan">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
                            Current
                          </span>
                        )}
                        <p className="font-mono text-xs text-mist">{job.period}</p>
                      </div>
                    </div>
                    <ul className="mt-5 grid gap-2.5">
                      {job.points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-sm text-mist">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyan" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
