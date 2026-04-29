import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { rozajeImages } from "@/assets/rozaje365";
import { useLanguage } from "@/lib/language";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "The Journal — All articles | Rožaje 365" },
      {
        name: "description",
        content:
          "Every article on Rožaje 365 — honest, useful answers about winter, summer, prices and life in northern Montenegro.",
      },
      { property: "og:title", content: "The Journal — Rožaje 365" },
    ],
  }),
  component: Journal,
});

const copy = {
  de: {
    eyebrow: "Journal",
    title: "Ehrliche Texte über einen Berg, den die meisten übersehen.",
    read: "Lesezeit",
    articles: [
      {
        to: "/winter" as const,
        eyebrow: "Winter",
        title: "Lohnt sich Skifahren in Montenegro wirklich?",
        img: rozajeImages.skiMountain,
        read: "6 Min.",
      },
      {
        to: "/prices" as const,
        eyebrow: "Preise",
        title: "Was eine Woche in Rožaje wirklich kostet.",
        img: rozajeImages.valleyMeadow,
        read: "5 Min.",
      },
      {
        to: "/stay" as const,
        eyebrow: "Aufenthalt",
        title: "Apartment oder Hotel? Eine ehrliche Antwort.",
        img: rozajeImages.townValley,
        read: "4 Min.",
      },
      {
        to: "/summer" as const,
        eyebrow: "Sommer",
        title: "Die andere Hälfte des Jahres, über die kaum jemand spricht.",
        img: rozajeImages.forestRoad,
        read: "7 Min.",
      },
    ],
  },
  en: {
    eyebrow: "The Journal",
    title: "Honest writing about a mountain most people overlook.",
    read: "read",
    articles: [
      {
        to: "/winter" as const,
        eyebrow: "Winter",
        title: "Is skiing in Montenegro actually worth it?",
        img: rozajeImages.skiMountain,
        read: "6 min",
      },
      {
        to: "/prices" as const,
        eyebrow: "Prices",
        title: "What a week in Rožaje really costs.",
        img: rozajeImages.valleyMeadow,
        read: "5 min",
      },
      {
        to: "/stay" as const,
        eyebrow: "Accommodation",
        title: "Apartment or hotel? An honest answer.",
        img: rozajeImages.townValley,
        read: "4 min",
      },
      {
        to: "/summer" as const,
        eyebrow: "Summer",
        title: "The other half of the year that nobody tells you about.",
        img: rozajeImages.forestRoad,
        read: "7 min",
      },
    ],
  },
  me: {
    eyebrow: "Journal",
    title: "Iskreni tekstovi o planini koju većina ljudi previdi.",
    read: "čitanja",
    articles: [
      {
        to: "/winter" as const,
        eyebrow: "Zima",
        title: "Da li se skijanje u Crnoj Gori stvarno isplati?",
        img: rozajeImages.skiMountain,
        read: "6 min.",
      },
      {
        to: "/prices" as const,
        eyebrow: "Cijene",
        title: "Koliko sedmica u Rožajama stvarno košta.",
        img: rozajeImages.valleyMeadow,
        read: "5 min.",
      },
      {
        to: "/stay" as const,
        eyebrow: "Smještaj",
        title: "Apartman ili hotel? Iskren odgovor.",
        img: rozajeImages.townValley,
        read: "4 min.",
      },
      {
        to: "/summer" as const,
        eyebrow: "Ljeto",
        title: "Druga polovina godine o kojoj skoro niko ne priča.",
        img: rozajeImages.forestRoad,
        read: "7 min.",
      },
    ],
  },
} as const;

function Journal() {
  const ref = useReveal<HTMLDivElement>();
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <div ref={ref} className="bg-background">
      <header className="mx-auto max-w-[1400px] px-6 pt-20 md:px-10 md:pt-32">
        <div className="reveal grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3 eyebrow">{t.eyebrow}</div>
          <h1 className="md:col-span-9 font-serif text-5xl leading-[1.05] md:text-7xl text-balance">
            {t.title}
          </h1>
        </div>
      </header>

      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-x-12 md:gap-y-24">
          {t.articles.map((a, i) => (
            <Link
              key={a.to}
              to={a.to}
              className={`reveal group block ${i % 2 === 1 ? "md:mt-24" : ""}`}
            >
              <div className="overflow-hidden">
                <img
                  src={a.img}
                  alt={a.title}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                <span>{a.eyebrow}</span>
                <span>
                  {a.read} {t.read}
                </span>
              </div>
              <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl link-underline">
                {a.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
