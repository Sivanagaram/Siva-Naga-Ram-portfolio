"use client";
import { Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CERTIFICATIONS } from "@/constants";

export function Certifications() {
  return (
    <section id="certifications" className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="05 · Credentials"
          title="Certifications"
          subtitle="Foundational programs from IBM, ISTE, and the IBM Skills Network."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="glass flex min-h-[7rem] items-center gap-4 rounded-2xl p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-aurora-soft text-cyan">
                  <Award size={18} />
                </span>
                <div>
                  <h3 className="font-medium">{c.title}</h3>
                  <p className="text-sm text-mist">
                    {c.issuer}
                    {c.year && ` · ${c.year}`}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
