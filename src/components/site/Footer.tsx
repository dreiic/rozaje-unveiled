import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/language";
import { Logo } from "@/components/site/Logo";

const footerCopy = {
  de: {
    headline: "Rožaje 365 — aus den Bergen erzählt, nicht aus einer Broschüre.",
    body: "Eine alpine Projekt- und Erlebniswelt über Natur, Wintertourismus und langfristige Perspektiven im Norden Montenegros, unter Monte i More.",
    read: "Lesen",
    links: [
      "Winter in Rožaje",
      "Sommer & Natur",
      "Aufenthalt",
      "Preise & Realität",
      "Alle Artikel",
    ],
    experience: "Erlebnis",
    experienceLinks: ["Ferienwohnungen", "Skipässe", "Touren", "Quads", "Schneemobile"],
    contact: "Kontakt",
    imprint: "Impressum",
    privacy: "Datenschutz",
    copyright: "Ein alpines Projekt in Partnerschaft mit Monte i More.",
    made: "Mit Ruhe in den Bergen entwickelt.",
  },
  en: {
    headline: "Rožaje 365 — written from the mountain, not from a brochure.",
    body: "A year-round alpine project and experience world about nature, winter tourism and long-term perspective in northern Montenegro, under Monte i More.",
    read: "Read",
    links: [
      "Winter in Rožaje",
      "Summer & Nature",
      "Where to stay",
      "Prices & reality",
      "All articles",
    ],
    experience: "Experience",
    experienceLinks: ["Apartments", "Ski passes", "Tours", "Quads", "Snowmobiles"],
    contact: "Contact",
    imprint: "Imprint",
    privacy: "Privacy",
    copyright: "An alpine project in partnership with Monte i More.",
    made: "Made slowly, in the mountains.",
  },
  me: {
    headline: "Rožaje 365 — iz planine, ne iz brošure.",
    body: "Alpski projekat i svijet doživljaja o prirodi, zimskom turizmu i dugoročnoj perspektivi sjevera Crne Gore, pod Monte i More.",
    read: "Čitaj",
    links: ["Zima u Rožajama", "Ljeto i priroda", "Smještaj", "Cijene i realnost", "Svi članci"],
    experience: "Doživljaj",
    experienceLinks: ["Apartmani", "Ski-pasovi", "Ture", "Quadovi", "Motorne sanke"],
    contact: "Kontakt",
    imprint: "Impresum",
    privacy: "Privatnost",
    copyright: "Alpski projekat u partnerstvu sa Monte i More.",
    made: "Rađeno polako, u planinama.",
  },
} as const;

const readTargets = ["/winter", "/summer", "/stay", "/prices", "/journal"] as const;

export function Footer() {
  const { language } = useLanguage();
  const copy = footerCopy[language];

  return (
    <footer className="border-t border-border/60 bg-bone/60">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo size="md" className="mb-8" asLink={false} />
            <div className="font-serif text-3xl leading-tight md:text-4xl">{copy.headline}</div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              {copy.body}
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow mb-5">{copy.read}</div>
            <ul className="space-y-2 text-sm">
              {copy.links.map((label, index) => (
                <li key={label}>
                  <Link to={readTargets[index]} className="link-underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow mb-5">{copy.experience}</div>
            <ul className="space-y-2 text-sm">
              {copy.experienceLinks.map((label) => (
                <li key={label}>
                  <a href="#" className="link-underline">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow mb-5">{copy.contact}</div>
            <ul className="space-y-2 text-sm">
              <li>Rožaje, Montenegro</li>
              <li>
                <a href="mailto:hello@rozaje365.me" className="link-underline">
                  hello@rozaje365.me
                </a>
              </li>
              <li>
                <a href="#" className="link-underline">
                  {copy.imprint}
                </a>
              </li>
              <li>
                <a href="#" className="link-underline">
                  {copy.privacy}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="editorial-rule mt-16" />

        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} Rožaje 365. {copy.copyright}
          </div>
          <div className="tracking-[0.22em] uppercase">{copy.made}</div>
        </div>
      </div>
    </footer>
  );
}
