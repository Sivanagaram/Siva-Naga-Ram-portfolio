import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";

// Below-the-fold sections are code-split to keep the initial bundle lean.
const Experience = dynamic(() =>
  import("@/components/sections/Experience").then((m) => m.Experience)
);
const Certifications = dynamic(() =>
  import("@/components/sections/Certifications").then((m) => m.Certifications)
);
const Contact = dynamic(() =>
  import("@/components/sections/Contact").then((m) => m.Contact)
);

// Decorative layers — code-split into their own chunks to keep the initial
// bundle lean. They render nothing meaningful until their effects run, so the
// SSR output stays in sync with the first client paint (no hydration drift).
const AnimatedBackground = dynamic(() =>
  import("@/components/ui/AnimatedBackground").then((m) => m.AnimatedBackground)
);
const Particles = dynamic(() =>
  import("@/components/ui/Particles").then((m) => m.Particles)
);
const ScrollProgress = dynamic(() =>
  import("@/components/ui/ScrollProgress").then((m) => m.ScrollProgress)
);
const ScrollToTop = dynamic(() =>
  import("@/components/ui/ScrollToTop").then((m) => m.ScrollToTop)
);
const Loader = dynamic(() => import("@/components/ui/Loader").then((m) => m.Loader));

export default function Home() {
  return (
    <>
      <Loader />
      <AnimatedBackground />
      <Particles />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
