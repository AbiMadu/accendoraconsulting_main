import Link from "next/link";

/**
 * The Accendora mark: a sharp apex — ascent, and the "A" itself — crossed by a
 * bronze bar that runs on past the form: the pathway continuing outward.
 * Mirrors the standalone files in `public/brand` — change both together.
 */
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <Link
      href="/"
      className={`group flex items-center gap-3.5 ${light ? "text-paper" : "text-ink"}`}
      aria-label="Accendora Consulting — home"
    >
      <svg viewBox="12.8 12 45.2 40" className="h-7 w-auto" aria-hidden fill="none">
        <path d="M32 12 L51.2 52 L44.8 52 L32 25.33 L19.2 52 L12.8 52 Z" fill="currentColor" />
        <path
          d="M19.81 37.4 L58 37.4 L58 42.6 L17.31 42.6 Z"
          fill={light ? "var(--color-accent-soft)" : "var(--color-accent)"}
          className="origin-left [transform-box:fill-box] transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-x-105"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-xl tracking-tight">Accendora</span>
        <span
          className={`mt-1 text-[0.5625rem] font-medium uppercase tracking-[0.42em] ${
            light ? "text-accent-soft" : "text-accent"
          }`}
        >
          Consulting
        </span>
      </span>
    </Link>
  );
}
