"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE } from "@/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 md:px-6">
      <nav className="glass container-x flex items-center justify-between rounded-2xl px-4 py-3 md:px-6">
        <Link href="#home" className="flex items-center gap-2 font-mono text-sm font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-aurora text-ink">SA</span>
          <span className="hidden sm:inline">{SITE.name}</span>
        </Link>

        {/* desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm transition-colors",
                    isActive ? "text-fg" : "text-mist hover:text-fg"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-surface/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="glass grid h-10 w-10 place-items-center rounded-full lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass container-x mt-2 flex flex-col gap-1 rounded-2xl p-3 lg:hidden"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm text-mist transition-colors hover:bg-surface/[0.06] hover:text-fg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
