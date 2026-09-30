import Link from "next/link";

/** Wordmark. The mark is a simple ascending form — "accendia", to rise. */
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const text = tone === "light" ? "text-paper" : "text-ink";
  return (
    <Link href="/" className={`group flex items-center gap-3 ${text}`} aria-label="Accendia — home">
      <svg viewBox="0 0 28 28" className="h-7 w-7" aria-hidden fill="none">
        <rect x="0.75" y="0.75" width="26.5" height="26.5" stroke="currentColor" strokeOpacity="0.3" />
        <path
          d="M6 21 L14 7 L22 21"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M10 16.5h8"
          stroke="var(--color-accent)"
          strokeWidth="1.6"
          className="origin-left transition-transform duration-500 group-hover:scale-x-110"
        />
      </svg>
      <span className="font-serif text-xl tracking-tight">Accendia</span>
    </Link>
  );
}
