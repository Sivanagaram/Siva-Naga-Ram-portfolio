import Link from "next/link";
import { NAV_LINKS, SOCIALS, SITE } from "@/constants";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hair/10 px-6 py-14 md:px-10">
      <div className="container-x grid gap-10 md:grid-cols-3">
        <div>
          <Link href="#home" className="flex items-center gap-2 font-mono font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-aurora text-ink">SA</span>
            {SITE.name}
          </Link>
          <p className="mt-4 max-w-xs text-sm text-mist">
            {SITE.role} building AI-powered applications with a focus on craft, speed, and accessibility.
          </p>
        </div>

        <div>
          <h3 className="eyebrow mb-4">Quick links</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm text-mist">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-fg">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-4">Connect</h3>
          <div className="flex gap-3">
            {SOCIALS.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="glass grid h-10 w-10 place-items-center rounded-full text-mist transition hover:scale-105 hover:text-cyan"
              >
                <s.icon size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container-x mt-12 flex flex-col items-center justify-between gap-3 border-t border-hair/10 pt-6 text-sm text-mist md:flex-row">
        <p>© {year} {SITE.name}. All rights reserved.</p>
        <p className="font-mono text-xs">Built with Next.js 15 · React 19 · Tailwind</p>
      </div>
    </footer>
  );
}
