"use client";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SKILL_CATEGORIES } from "@/constants";

export function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="02 · Skills"
          title="A toolkit spanning product and AI"
          subtitle="Strong frontend foundations, a growing backend and data layer, and an expanding machine-learning stack."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.06}>
              <div className="glass group h-full rounded-2xl p-6 transition hover:border-violet/30">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-aurora-soft text-cyan">
                    <cat.icon size={20} />
                  </span>
                  <h3 className="font-semibold">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.03 }}
                      className="rounded-full border border-hair/10 bg-surface/5 px-3 py-1 text-xs text-mist transition hover:border-cyan/40 hover:text-fg"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
