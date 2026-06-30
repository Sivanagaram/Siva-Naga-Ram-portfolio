import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div className="text-center">
        <p className="gradient-text font-mono text-8xl font-bold md:text-9xl">404</p>
        <h1 className="mt-4 text-2xl font-semibold">This page drifted off the grid</h1>
        <p className="mx-auto mt-3 max-w-md text-mist">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-aurora px-6 py-3 text-sm font-medium text-ink transition hover:-translate-y-0.5"
        >
          <Home size={16} /> Back home
        </Link>
      </div>
    </main>
  );
}
