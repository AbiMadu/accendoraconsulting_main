import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow, Note } from "@/components/ui";
import type { LegalBlock, LegalDocument } from "@/lib/legal";
import { legal, legalNav, site } from "@/lib/site";

function Block({ block }: { block: LegalBlock }) {
  switch (block.kind) {
    case "p":
      return <p className="leading-relaxed text-slate">{block.text}</p>;

    case "note":
      return <Note>{block.text}</Note>;

    case "list":
      return (
        <ul className="grid gap-4">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-4 leading-relaxed text-slate">
              <span aria-hidden className="mt-3 h-px w-5 shrink-0 bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      );

    case "definitions":
      return (
        <dl className="grid gap-6 border-t border-line pt-6">
          {block.items.map((item) => (
            <div key={item.term} className="grid gap-2 sm:grid-cols-[minmax(0,13rem)_1fr] sm:gap-8">
              <dt className="text-sm font-medium tracking-wide text-ink">{item.term}</dt>
              <dd className="leading-relaxed text-slate">{item.text}</dd>
            </div>
          ))}
        </dl>
      );
  }
}

/**
 * Shared layout for the Privacy Policy and Terms of Business.
 * Long-form and restrained: a single measured column, a sticky contents list on
 * wide screens, and no decoration that would make a legal document look styled.
 */
export function LegalPage({ doc }: { doc: LegalDocument }) {
  const otherDocuments = legalNav.filter(
    (item) => item.label.toLowerCase() !== doc.title.toLowerCase(),
  );

  return (
    <>
      {/* -------------------------------------------------------------- opening */}
      <section className="bg-ink text-paper">
        <div className="container-x max-w-4xl py-20 lg:py-28">
          <Reveal>
            <Eyebrow tone="light">{doc.eyebrow}</Eyebrow>
            <h1 className="mt-7 text-4xl leading-[1.1] sm:text-5xl">{doc.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-paper/75">{doc.lead}</p>
            <p className="mt-10 border-t border-paper/15 pt-6 text-xs tracking-[0.14em] uppercase text-paper/45">
              Last updated {doc.updated}
            </p>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------------- document */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="container-x grid gap-16 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-20">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow text-muted">Contents</p>
            <nav aria-label={`${doc.title} contents`} className="mt-6 flex flex-col gap-3">
              {doc.sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-sm leading-snug text-slate transition-colors hover:text-accent"
                >
                  {section.heading}
                </a>
              ))}
            </nav>
          </aside>

          <div className="max-w-2xl">
            <div className="grid gap-5 border-l-2 border-line pl-6">
              {doc.intro.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-ink">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-16 grid gap-16">
              {doc.sections.map((section) => (
                <Reveal key={section.id} as="section" amount={0.1}>
                  <div id={section.id} className="scroll-mt-28">
                    <h2 className="text-2xl leading-snug text-ink">{section.heading}</h2>
                    <div className="mt-6 grid gap-6">
                      {section.blocks.map((block, index) => (
                        <Block key={index} block={block} />
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* -------------------------------------------------------- closing */}
            <div className="mt-20 border-t border-line pt-10">
              <h2 className="text-xl leading-snug text-ink">{doc.closing.heading}</h2>
              <p className="mt-4 leading-relaxed text-slate">{doc.closing.text}</p>

              <div className="mt-10 grid gap-1 text-sm text-muted">
                <p>{site.name}</p>
                <p>
                  Registered in {legal.countryOfRegistration} · Company number{" "}
                  {site.companyNumber}
                </p>
                <p>{legal.registeredAddress}</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 text-ink underline-offset-4 hover:text-accent hover:underline"
                >
                  {site.email}
                </a>
              </div>

              {otherDocuments.length ? (
                <div className="mt-10 flex flex-wrap gap-6 border-t border-line pt-8 text-sm">
                  {otherDocuments.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-slate underline-offset-4 hover:text-accent hover:underline"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    className="text-slate underline-offset-4 hover:text-accent hover:underline"
                  >
                    Contact
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
