"use client";
import { useScrollProgress } from "@/hooks/useScrollProgress";

/** Thin aurora bar pinned to the top, tracking page scroll. */
export function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-1">
      <div
        className="h-full origin-left bg-aurora"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
