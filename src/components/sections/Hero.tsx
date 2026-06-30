"use client";
import { Download, FolderGit2, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";
import { TYPING_PHRASES, SITE, SOCIALS } from "@/constants";
import { GradientButton } from "@/components/ui/GradientButton";
import Link from "next/link";

export function Hero() {
  const typed = useTypewriter(TYPING_PHRASES);

  return (
    <section id="home" className="relative flex min-h-screen items-center px-6 pt-28 md:px-10">
      <div className="container-x grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        {/* left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-mist"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new opportunities
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="eyebrow mb-4"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            {SITE.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-xl font-medium text-mist md:text-2xl"
          >
            <span className="gradient-text font-semibold">{SITE.role}</span>
            <span className="mx-2 text-mist">·</span>
            <span className="font-mono">
              {typed}
              <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-cyan align-middle md:h-6" />
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <GradientButton href={SITE.resumeUrl} download>
              <Download size={16} /> Download résumé
            </GradientButton>
            <GradientButton href="#projects" variant="ghost">
              <FolderGit2 size={16} /> View projects
            </GradientButton>
            <GradientButton href="#contact" variant="ghost">
              <Mail size={16} /> Contact me
            </GradientButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex gap-3"
          >
            {SOCIALS.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="glass grid h-10 w-10 place-items-center rounded-full text-mist transition hover:scale-110 hover:text-cyan"
              >
                <s.icon size={18} />
              </Link>
            ))}
          </motion.div>
        </div>

        {/* right: avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative mx-auto aspect-square w-64 md:w-full md:max-w-sm"
        >
          <div className="absolute inset-0 animate-blob rounded-full bg-aurora opacity-30 blur-2xl" />
          <div className="glass relative grid h-full place-items-center overflow-hidden rounded-[2rem]">
            {/* Replace with <Image src="/avatar.jpg" .../> when you add a photo */}
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="grid h-24 w-24 place-items-center rounded-full bg-aurora font-mono text-3xl font-bold text-ink">
                SR
              </div>
              <p className="font-mono text-xs text-mist">your photo here</p>
            </div>
            <div className="absolute inset-0 bg-aurora-soft mix-blend-overlay" />
          </div>

          {/* floating accent chips */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="glass absolute -left-4 top-10 rounded-xl px-3 py-2 font-mono text-xs"
          >
            &lt;/&gt; 4+ yrs
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="glass absolute -right-4 bottom-12 rounded-xl px-3 py-2 font-mono text-xs"
          >
            AI · ML
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
