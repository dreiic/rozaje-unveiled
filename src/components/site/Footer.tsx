import { Link } from "@tanstack/react-router";
import logo from "@/assets/rozaje-logo.png";
import { useLanguage } from "@/lib/language";

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
    experienceLinks: [
      { label: "Ferienwohnungen", to: "/stay" },
      { label: "Skipässe", to: "/winter" },
      { label: "Touren", to: "/exploration" },
      { label: "Quads", to: "/exploration" },
      { label: "Schneemobile", to: "/exploration" },
    ],
    contact: "Kontakt",
    contactLink: "Kontaktseite",
    copyright: "Ein alpines Projekt in Partnerschaft mit Monte i More.",
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
    experienceLinks: [
      { label: "Apartments", to: "/stay" },
      { label: "Ski passes", to: "/winter" },
      { label: "Tours", to: "/exploration" },
      { label: "Quads", to: "/exploration" },
      { label: "Snowmobiles", to: "/exploration" },
    ],
    contact: "Contact",
    contactLink: "Contact page",
    copyright: "An alpine project in partnership with Monte i More.",
  },
  me: {
    headline: "Rožaje 365 — iz planine, ne iz brošure.",
    body: "Alpski projekat i svijet doživljaja o prirodi, zimskom turizmu i dugoročnoj perspektivi sjevera Crne Gore, pod Monte i More.",
    read: "Čitaj",
    links: ["Zima u Rožajama", "Ljeto i priroda", "Smještaj", "Cijene i realnost", "Svi članci"],
    experience: "Doživljaj",
    experienceLinks: [
      { label: "Apartmani", to: "/stay" },
      { label: "Ski-pasovi", to: "/winter" },
      { label: "Ture", to: "/exploration" },
      { label: "Quadovi", to: "/exploration" },
      { label: "Motorne sanke", to: "/exploration" },
    ],
    contact: "Kontakt",
    contactLink: "Kontakt stranica",
    copyright: "Alpski projekat u partnerstvu sa Monte i More.",
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
              {copy.experienceLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="link-underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow mb-5">{copy.contact}</div>
            <ul className="space-y-2 text-sm">
              <li>Rožaje, Montenegro</li>
              <li>
                <a href="mailto:info@rozaje365.me" className="link-underline">
                  info@rozaje365.me
                </a>
              </li>
              <li>
                <Link to="/contact" className="link-underline">
                  {copy.contactLink}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="editorial-rule mt-16" />

        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} Rožaje 365. {copy.copyright}
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <Link to="/" aria-label="Rožaje 365">
              <img src={logo} alt="Rožaje 365" className="h-10 w-32 object-contain object-left" />
            </Link>
            <a
              href="https://nextup-agency.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-[9px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
            >
              powered by <span className="text-foreground">NextUp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
