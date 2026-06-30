"use client";
import { Award, Trophy, Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CERTIFICATIONS, ACHIEVEMENTS } from "@/constants";
import { cn } from "@/lib/utils";

export function Certifications() {
  return (
    <section id="certifications" className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="05 · Credentials"
          title="Certifications & achievements"
          subtitle="Formal learning and standout results. Swap in your own — placeholders are ready."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* certifications */}
          <div>
            <p className="eyebrow mb-5">Certifications</p>
            <div className="space-y-4">
              {CERTIFICATIONS.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.08}>
                  <div
                    className={cn(
                      "glass flex items-center gap-4 rounded-2xl p-5",
                      c.placeholder && "border-dashed opacity-70"
                    )}
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-aurora-soft text-cyan">
                      {c.placeholder ? <Plus size={18} /> : <Award size={18} />}
                    </span>
                    <div>
                      <h3 className="font-medium">{c.title}</h3>
                      <p className="text-sm text-mist">
                        {c.issuer} · {c.year}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* achievements */}
          <div>
            <p className="eyebrow mb-5">Achievements</p>
            <div className="space-y-4">
              {ACHIEVEMENTS.map((a, i) => (
                <Reveal key={a.title} delay={i * 0.08}>
                  <div className="glass flex items-start gap-4 rounded-2xl p-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-aurora-soft text-magenta">
                      <Trophy size={18} />
                    </span>
                    <div>
                      <h3 className="font-medium">{a.title}</h3>
                      <p className="text-sm text-mist">{a.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
