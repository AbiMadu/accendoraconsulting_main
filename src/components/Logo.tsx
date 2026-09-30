import Link from "next/link";

/**
 * The Accendia mark: a sharp apex — ascent, and the "A" itself — crossed by a
 * bronze bar that runs on past the form: the pathway continuing outward.
 * Source of truth for the standalone files in `public/brand`.
 */
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const text = tone === "light" ? "text-paper" : "text-ink";
  return (
    <Link href="/" className={`group flex items-center gap-3.5 ${text}`} aria-label="Accendia — home">
      <svg viewBox="12.8 12 45.2 40" className="h-7 w-auto" aria-hidden fill="none">
        <path d="M32 12 L51.2 52 L44.8 52 L32 25.33 L19.2 52 L12.8 52 Z" fill="currentColor" />
        <path
          d="M19.81 37.4 L58 37.4 L58 42.6 L17.31 42.6 Z"
          fill={tone === "light" ? "var(--color-accent-soft)" : "var(--color-accent)"}
          className="origin-left [transform-box:fill-box] transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-x-105"
        />
      </svg>
      <span className="font-serif text-xl tracking-tight">Accendia</span>
    </Link>
  );
}
