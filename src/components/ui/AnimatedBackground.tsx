"use client";

/** Ambient aurora blobs + grid. Pure CSS animation, GPU-friendly, decorative. */
export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/4 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-cyan/20 blur-[120px] animate-blob" />
      <div className="absolute right-0 top-1/3 h-[35rem] w-[35rem] rounded-full bg-violet/20 blur-[120px] animate-blob [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 h-[35rem] w-[35rem] rounded-full bg-magenta/15 blur-[120px] animate-blob [animation-delay:-12s]" />
      <div
        className="absolute inset-0 opacity-[0.18] dark:opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,164,191,.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,164,191,.12) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
    </div>
  );
}
