import { Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { useLanguage } from "@/lib/language";
import type { ReactNode } from "react";

export interface ArticleSection {
  heading: string;
  body: ReactNode;
}

export interface ArticlePageProps {
  eyebrow: string;
  title: string;
  intro: string;
  cover: string;
  pros?: string[];
  cons?: string[];
  sections: ArticleSection[];
  ctaTitle?: string;
  ctaBody?: string;
}

const articleCopy = {
  de: {
    pros: "Dafür spricht",
    cons: "Gut zu wissen",
    next: "Nächster Schritt",
    defaultCtaTitle: "Wenn Sie Rožaje lieber erleben als nur darüber lesen möchten,",
    defaultCtaAccent: "finden Sie Ferienwohnungen, Skipässe und Touren über Monte i More.",
    monte: "Monte i More besuchen",
    more: "Weitere Artikel lesen",
  },
  en: {
    pros: "In its favour",
    cons: "Things to know",
    next: "Next step",
    defaultCtaTitle: "If you'd rather experience Rožaje than just read about it,",
    defaultCtaAccent: "you can find apartments, ski passes and tours through Monte i More.",
    monte: "Visit Monte i More",
    more: "Read more articles",
  },
  me: {
    pros: "Šta govori u prilog",
    cons: "Dobro je znati",
    next: "Sljedeći korak",
    defaultCtaTitle: "Ako Rožaje želite da doživite, a ne samo da čitate o njemu,",
    defaultCtaAccent: "apartmane, ski-pasove i ture možete pronaći kroz Monte i More.",
    monte: "Posjeti Monte i More",
    more: "Čitaj još članaka",
  },
} as const;

export function ArticlePage(p: ArticlePageProps) {
  const ref = useReveal<HTMLDivElement>();
  const { language } = useLanguage();
  const copy = articleCopy[language];

  return (
    <article ref={ref} className="bg-background">
      {/* Title block */}
      <header className="mx-auto max-w-[1100px] px-6 pt-20 md:px-10 md:pt-32">
        <div className="reveal">
          <div className="eyebrow mb-6">{p.eyebrow}</div>
          <h1 className="font-serif text-[40px] leading-[1.05] text-balance md:text-[72px]">
            {p.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/75 md:text-xl">
            {p.intro}
          </p>
        </div>
      </header>

      {/* Cover */}
      <div className="mx-auto mt-16 max-w-[1400px] px-6 md:px-10">
        <div className="reveal overflow-hidden">
          <img src={p.cover} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover" />
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-[1100px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <aside className="reveal md:col-span-3">
            <div className="sticky top-28 space-y-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {p.sections.map((s, i) => (
                <div key={i}>
                  0{i + 1} — {s.heading}
                </div>
              ))}
            </div>
          </aside>

          <div className="md:col-span-9 space-y-16">
            {p.sections.map((s, i) => (
              <section key={i} className="reveal">
                <div className="mb-4 font-serif text-sm text-muted-foreground">0{i + 1}</div>
                <h2 className="font-serif text-3xl leading-tight md:text-4xl text-balance">
                  {s.heading}
                </h2>
                <div className="mt-5 space-y-5 text-base leading-[1.8] text-foreground/80 md:text-[17px]">
                  {s.body}
                </div>
              </section>
            ))}

            {(p.pros || p.cons) && (
              <section className="reveal grid gap-10 border-y border-border py-12 md:grid-cols-2">
                {p.pros && (
                  <div>
                    <div className="eyebrow mb-4 text-[color:var(--moss)]">{copy.pros}</div>
                    <ul className="space-y-3 text-foreground/80">
                      {p.pros.map((x) => (
                        <li key={x} className="flex gap-3">
                          <span className="text-[color:var(--moss)]">+</span>
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {p.cons && (
                  <div>
                    <div className="eyebrow mb-4 text-[color:var(--gold)]">{copy.cons}</div>
                    <ul className="space-y-3 text-foreground/80">
                      {p.cons.map((x) => (
                        <li key={x} className="flex gap-3">
                          <span className="text-[color:var(--gold)]">—</span>
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            )}

            {/* Natural CTA */}
            <section className="reveal mt-8 border-t border-border pt-10">
              <div className="eyebrow mb-4">{copy.next}</div>
              <p className="font-serif text-2xl leading-snug md:text-3xl text-balance">
                {p.ctaTitle ?? copy.defaultCtaTitle}{" "}
                <span className="italic text-[color:var(--gold)]">{copy.defaultCtaAccent}</span>
              </p>
              {p.ctaBody && <p className="mt-4 text-foreground/70">{p.ctaBody}</p>}
              <div className="mt-8 flex flex-wrap gap-6">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 border-b border-foreground pb-2 text-[12px] uppercase tracking-[0.28em]"
                >
                  {copy.monte} →
                </a>
                <Link
                  to="/journal"
                  className="inline-flex items-center gap-3 pb-2 text-[12px] uppercase tracking-[0.28em] text-muted-foreground link-underline"
                >
                  {copy.more}
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
