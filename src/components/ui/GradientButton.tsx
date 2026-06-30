"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  download?: boolean;
  external?: boolean;
  className?: string;
}

/** Primary call-to-action button with an aurora gradient or glass ghost style. */
export function GradientButton({
  href, children, variant = "solid", download, external, className,
}: Props) {
  const base =
    "group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan";
  const styles =
    variant === "solid"
      ? "bg-aurora text-ink shadow-lg shadow-violet/25 hover:shadow-violet/40 hover:-translate-y-0.5"
      : "glass text-fg hover:bg-surface/10";
  return (
    <Link
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(base, styles, className)}
    >
      {children}
    </Link>
  );
}
