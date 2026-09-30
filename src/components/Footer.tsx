import Link from "next/link";
import { legal, legalNav, nav, site } from "@/lib/site";
import { Logo } from "@/components/Logo";
import { Arrow } from "@/components/ui";

export function Footer() {
  return (
    <footer className="grain bg-ink text-paper">
      <span aria-hidden className="grain-layer" />
      <div className="container-x py-20">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-sm font-serif text-2xl leading-snug text-paper/90">
              {site.tagline}
            </p>
            <p className="eyebrow mt-6 text-accent-soft">{site.pillars}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <p className="eyebrow mb-2 text-paper/40">Site</p>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-paper/70 transition-colors hover:text-paper"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="eyebrow mb-2 text-paper/40">Contact</p>
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-paper/70 transition-colors hover:text-paper"
            >
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-paper/70 transition-colors hover:text-paper"
            >
              LinkedIn
            </a>
            <Link
              href="/contact"
              className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent-soft"
            >
              Book a conversation
              <Arrow />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-paper/15 pt-8 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Registered in{" "}
            {legal.countryOfRegistration}, company number {site.companyNumber}.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-paper"
              >
                {item.label}
              </Link>
            ))}
            <span>Established {site.established}.</span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
