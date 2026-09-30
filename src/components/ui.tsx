import Image from "next/image";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/* ------------------------------------------------------------------ layout */

export function Section({
  children,
  className = "",
  tone = "paper",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "paper" | "sand" | "ink";
  id?: string;
}) {
  const tones = {
    paper: "bg-paper text-ink",
    sand: "bg-sand text-ink",
    ink: "bg-ink text-paper",
  } as const;

  return (
    <section id={id} className={`relative py-20 lg:py-28 ${tones[tone]} ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "accent",
  className = "",
}: {
  children: ReactNode;
  tone?: "accent" | "light" | "muted";
  className?: string;
}) {
  const tones = {
    accent: "text-accent",
    light: "text-accent-soft",
    muted: "text-muted",
  } as const;

  return (
    <p className={`eyebrow flex items-center gap-3 ${tones[tone]} ${className}`}>
      <span aria-hidden className="h-px w-8 bg-current opacity-50" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "dark",
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  const isLight = tone === "light";
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow ? (
        <Eyebrow
          tone={isLight ? "light" : "accent"}
          className={align === "center" ? "justify-center" : ""}
        >
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        className={`mt-5 text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem] ${
          isLight ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-5 text-lg leading-relaxed ${isLight ? "text-paper/70" : "text-slate"}`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ actions */

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost" | "light";
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 will-change-transform";
  const variants = {
    primary: "bg-ink text-paper hover:bg-ink-700 hover:-translate-y-0.5",
    secondary:
      "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper hover:-translate-y-0.5",
    light: "bg-paper text-ink hover:bg-accent hover:text-paper hover:-translate-y-0.5",
    ghost:
      "border border-paper/25 text-paper hover:border-paper hover:bg-paper/10 hover:-translate-y-0.5",
  } as const;

  return <Link className={`${base} ${variants[variant]} ${className}`} {...props} />;
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5" strokeLinecap="round" />
    </svg>
  );
}

export function TextLink({
  children,
  className = "",
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link
      className={`group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-ink underline-offset-4 hover:text-accent ${className}`}
      {...props}
    >
      {children}
      <Arrow />
    </Link>
  );
}

/* ------------------------------------------------------------------- media */

/**
 * Every image on the site goes through this component.
 * Swapping placeholder artwork for real photography means changing `src` only.
 */
export function Figure({
  src,
  alt,
  caption,
  ratio = "4/3",
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <figure className={className}>
      <div className="relative overflow-hidden bg-sand" style={{ aspectRatio: ratio }}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-xs tracking-wide text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

/* -------------------------------------------------------------------- misc */

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center border border-line bg-paper px-3 py-1.5 text-xs tracking-wide text-slate">
      {children}
    </span>
  );
}

/** Callout used for precise, non-negotiable clarifications (e.g. accreditation scope). */
export function Note({ children }: { children: ReactNode }) {
  return (
    <p className="border-l-2 border-accent bg-sand/70 px-5 py-4 text-sm leading-relaxed text-slate">
      {children}
    </p>
  );
}
