"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ABOUT_SUMMARY, TIMELINE } from "@/constants";
import { useCounter } from "@/hooks/useCounter";

function Stat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { value, ref } = useCounter(target);
  return (
    <div className="glass rounded-2xl p-5 text-center">
      <span ref={ref} className="gradient-text text-3xl font-bold md:text-4xl">
        {value}
        {suffix}
      </span>
      <p className="mt-1 text-sm text-mist">{label}</p>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="01 · About"
          title="From pixel-perfect frontends to applied AI"
          subtitle={ABOUT_SUMMARY}
        />

        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          {/* stats */}
          <Reveal className="grid grid-cols-2 gap-4 self-start">
            <Stat target={4} suffix="+" label="Years experience" />
            <Stat target={20} suffix="+" label="Projects shipped" />
            <Stat target={5} suffix="" label="Tech domains" />
            <Stat target={100} suffix="%" label="Commitment" />
          </Reveal>

          {/* journey timeline */}
          <div>
            <p className="eyebrow mb-6">The journey</p>
            <ol className="relative space-y-7 border-l border-hair/15 pl-6">
              {TIMELINE.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.08}>
                  <li className="relative">
                    <span className="absolute -left-8 top-1 grid h-4 w-4 place-items-center rounded-full bg-aurora">
                      <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                    </span>
                    <p className="font-mono text-xs text-cyan">{item.year}</p>
                    <h3 className="mt-1 font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-mist">{item.description}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
