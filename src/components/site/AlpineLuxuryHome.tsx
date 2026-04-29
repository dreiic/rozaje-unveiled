import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { rozajeImages } from "@/assets/rozaje365";
import { useLanguage } from "@/lib/language";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import heroVideo from "@/assets/video/rozaje-hero.mp4";

const copy = {
  de: {
    nav: "Alpine Projekt- und Erlebniswelt",
    eyebrow: "Rožaje 365 · unter Monte i More",
    title: "Die alpine Seite Montenegros.",
    subtitle:
      "Wo unberührte Natur, echte Gastfreundschaft und vier Jahreszeiten voller Abenteuer zusammenkommen.",
    cta: "Projekt entdecken",
    statement:
      "Eine Region mit außergewöhnlichem Entwicklungspotenzial, erzählt mit Ruhe, Präzision und alpiner Eleganz.",
    introTitle: "Jenseits der Küste beginnt die zweite Welt Montenegros.",
    intro:
      "Im Mittelpunkt stehen authentische Landschaften, unerschlossene Möglichkeiten und die Vision einer alpinen Destination, die das ganze Jahr über erlebbar ist. Rožaje 365 richtet sich an Menschen, die Montenegro jenseits der Küste entdecken möchten, touristisch wie strategisch.",
    pillarsEyebrow: "Fokus",
    pillarsTitle: "Natur, Winter und Perspektive in einem klaren System.",
    pillars: [
      {
        k: "01",
        title: "Alpine Identität",
        text: "Die nördliche Bergwelt wird als hochwertige, eigenständige Destination sichtbar.",
      },
      {
        k: "02",
        title: "Ganzjährige Nutzung",
        text: "Winter, Sommer, Natur und Aufenthalt werden als zusammenhängende Erlebniswelt gedacht.",
      },
      {
        k: "03",
        title: "Strategischer Einstieg",
        text: "Als spezialisierte Einstiegswelt schafft Rožaje 365 Aufmerksamkeit für Monte i More.",
      },
    ],
    galleryEyebrow: "Erlebniswelt",
    galleryTitle: "Alpine Ruhe. Nördliches Potenzial. Stiller Luxus.",
    galleryIntro:
      "Eine visuelle Spur durch Winter, Täler, Wälder und die Projektlandschaft von Rožaje.",
    captions: [
      "Wintertourismus",
      "Berglandschaft",
      "Rožaje-Tal",
      "Waldwege",
      "Ganzjahresnatur",
      "Skigebiet",
      "Hochplateau",
      "Winterwald",
    ],
    systemTitle: "Ein Teil von Monte i More, mit eigener emotionaler Kraft.",
    system:
      "Rožaje 365 schafft Aufmerksamkeit und Verbindung, ohne den Bezug zum Gesamtsystem zu verlieren. Die Marke übersetzt alpine Landschaft in Orientierung, Vertrauen und langfristige Projektlogik.",
    systemTags: ["Natur", "Winter", "Strategie"],
    contactEyebrow: "Kontakt",
    contactTitle: "Planen Sie Rožaje mit einem lokalen Einstieg.",
    contactIntro:
      "Schreiben Sie uns für Aufenthalte, Wintererlebnisse, Gruppenreisen oder Projektgespräche. Die Anfrage geht direkt an info@rozaje365.me.",
    contactName: "Name",
    contactEmail: "E-Mail",
    contactMessage: "Nachricht",
    contactSubmit: "Anfrage senden",
    mapLabel: "Rožaje, Nordmontenegro",
    mapHint: "Gebirgsregion zwischen Hajla, Tälern und winterlichen Routen.",
    mapCta: "Karte",
    final: "Für Menschen, die Montenegro nicht nur besuchen, sondern verstehen wollen.",
    finalCta: "Journal öffnen",
  },
  en: {
    nav: "Alpine project and experience world",
    eyebrow: "Rožaje 365 · under Monte i More",
    title: "The alpine side of Montenegro.",
    subtitle:
      "Where untouched nature, authentic hospitality and four seasons of adventure come together.",
    cta: "Explore the project",
    statement:
      "A region with exceptional development potential, presented with calm, precision and alpine elegance.",
    introTitle: "Beyond the coast, Montenegro’s second world begins.",
    intro:
      "At the center are authentic landscapes, untapped possibilities and the vision of an alpine destination that works all year. Rožaje 365 is for people who want to discover Montenegro beyond the coast, both as travelers and strategic thinkers.",
    pillarsEyebrow: "Focus",
    pillarsTitle: "Nature, winter and perspective in one clear system.",
    pillars: [
      {
        k: "01",
        title: "Alpine identity",
        text: "The northern mountain world becomes visible as a refined destination of its own.",
      },
      {
        k: "02",
        title: "Year-round use",
        text: "Winter, summer, nature and stays are shaped as one connected experience world.",
      },
      {
        k: "03",
        title: "Strategic entry",
        text: "As a specialized entry point, Rožaje 365 builds attention for Monte i More.",
      },
    ],
    galleryEyebrow: "Experience world",
    galleryTitle: "High alpine calm. Northern potential. Quiet luxury.",
    galleryIntro:
      "A visual route through winter, valleys, forests and the project landscape of Rožaje.",
    captions: [
      "Winter tourism",
      "Mountain landscape",
      "Rožaje valley",
      "Forest roads",
      "Year-round nature",
      "Ski area",
      "High plateau",
      "Winter forest",
    ],
    systemTitle: "Part of Monte i More, with its own emotional force.",
    system:
      "Rožaje 365 creates attention and connection without losing its place in the wider system. The brand translates alpine landscape into orientation, trust and long-term project logic.",
    systemTags: ["Nature", "Winter", "Strategy"],
    contactEyebrow: "Contact",
    contactTitle: "Plan Rožaje with a local point of entry.",
    contactIntro:
      "Write to us for stays, winter experiences, group trips or project conversations. The request goes directly to info@rozaje365.me.",
    contactName: "Name",
    contactEmail: "Email",
    contactMessage: "Message",
    contactSubmit: "Send request",
    mapLabel: "Rožaje, northern Montenegro",
    mapHint: "Mountain region between Hajla, valleys and winter routes.",
    mapCta: "Map",
    final: "For people who want to understand Montenegro, not only visit it.",
    finalCta: "Open journal",
  },
  me: {
    nav: "Alpski projekat i svijet doživljaja",
    eyebrow: "Rožaje 365 · pod Monte i More",
    title: "Alpska strana Crne Gore.",
    subtitle:
      "Gdje se netaknuta priroda, autentično gostoprimstvo i četiri sezone avanture spajaju u jedno.",
    cta: "Istraži projekat",
    statement:
      "Regija sa izuzetnim razvojnim potencijalom, prikazana mirno, precizno i u luksuznom alpskom tonu.",
    introTitle: "Iza obale počinje druga Crna Gora.",
    intro:
      "U središtu su autentični pejzaži, neiskorišćene mogućnosti i vizija alpske destinacije koja živi tokom cijele godine. Rožaje 365 je za ljude koji žele da otkriju Crnu Goru izvan obale, turistički i strateški.",
    pillarsEyebrow: "Fokus",
    pillarsTitle: "Priroda, zima i perspektiva u jednom jasnom sistemu.",
    pillars: [
      {
        k: "01",
        title: "Alpski identitet",
        text: "Sjeverna planinska regija postaje vidljiva kao posebna, kvalitetna destinacija.",
      },
      {
        k: "02",
        title: "Cijela godina",
        text: "Zima, ljeto, priroda i boravak čine jednu povezanu doživljajnu cjelinu.",
      },
      {
        k: "03",
        title: "Strateški ulaz",
        text: "Kao specijalizovana ulazna tačka, Rožaje 365 stvara pažnju za Monte i More.",
      },
    ],
    galleryEyebrow: "Svijet doživljaja",
    galleryTitle: "Alpski mir. Sjeverni potencijal. Tihi luksuz.",
    galleryIntro: "Vizuelna ruta kroz zimu, doline, šume i projektnu sliku Rožaja.",
    captions: [
      "Zimski turizam",
      "Planinski pejzaž",
      "Rožajska dolina",
      "Šumski putevi",
      "Priroda tokom cijele godine",
      "Skijalište",
      "Visoravan",
      "Zimska šuma",
    ],
    systemTitle: "Dio Monte i More sistema, sa sopstvenom emotivnom snagom.",
    system:
      "Rožaje 365 gradi pažnju i povezanost, a ostaje vezan za širi sistem. Brend prevodi alpski pejzaž u orijentaciju, povjerenje i dugoročnu projektnu logiku.",
    systemTags: ["Priroda", "Zima", "Strategija"],
    contactEyebrow: "Kontakt",
    contactTitle: "Planirajte Rožaje uz lokalnu ulaznu tačku.",
    contactIntro:
      "Pišite nam za smještaj, zimske doživljaje, grupna putovanja ili projektne razgovore. Upit ide direktno na info@rozaje365.me.",
    contactName: "Ime",
    contactEmail: "E-mail",
    contactMessage: "Poruka",
    contactSubmit: "Pošalji upit",
    mapLabel: "Rožaje, sjever Crne Gore",
    mapHint: "Planinska regija između Hajle, dolina i zimskih ruta.",
    mapCta: "Mapa",
    final: "Za ljude koji Crnu Goru ne žele samo da posjete, već da je razumiju.",
    finalCta: "Otvori journal",
  },
} as const;

const galleryImages = [
  rozajeImages.skiMountain,
  rozajeImages.snowRidge,
  rozajeImages.townValley,
  rozajeImages.forestRoad,
  rozajeImages.valleyMeadow,
  rozajeImages.lift,
  rozajeImages.pasture,
  rozajeImages.winterRoad,
];

function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const travel = Math.max(el.offsetHeight - window.innerHeight, 1);
        setProgress(Math.min(Math.max(-rect.top / travel, 0), 1));
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(raf);
    };
  }, []);

  return [ref, progress] as const;
}

export function AlpineLuxuryHome() {
  const { language } = useLanguage();
  const t = copy[language];
  const revealRef = useReveal<HTMLDivElement>();
  const [galleryRef, galleryProgress] = useScrollProgress<HTMLElement>();
  const [compactGallery, setCompactGallery] = useState(false);

  useEffect(() => {
    const update = () => setCompactGallery(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const galleryOffset = `${-galleryProgress * (compactGallery ? 545 : 208)}vw`;

  return (
    <div ref={revealRef} className="bg-background">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc={heroVideo}
        bgImageSrc={rozajeImages.snowRidge}
        title="Rožaje 365"
        date={t.eyebrow}
        textBlend
      />

      <section id="project" className="border-y border-border bg-paper">
        <div className="mx-auto grid max-w-[1500px] gap-14 px-6 py-24 md:grid-cols-12 md:px-12 md:py-32">
          <div className="reveal md:col-span-4">
            <div className="eyebrow">Rožaje 365</div>
          </div>
          <div className="reveal md:col-span-8">
            <p className="font-serif text-[clamp(2.4rem,6vw,6.8rem)] leading-[0.94] text-foreground">
              {t.statement}
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background py-24 md:py-36">
        <div className="mx-auto grid max-w-[1500px] items-center gap-14 px-6 md:grid-cols-12 md:px-12">
          <div className="reveal md:col-span-5">
            <div className="relative h-[72vh] min-h-[520px] overflow-hidden">
              <img
                src={rozajeImages.winterForest}
                alt="Luxury winter landscape in northern Montenegro"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="reveal md:col-span-6 md:col-start-7">
            <div className="eyebrow mb-6">Monte i More</div>
            <h2 className="max-w-3xl font-serif text-[clamp(2.8rem,6vw,6.5rem)] leading-[0.9]">
              {t.introTitle}
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {t.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-white md:py-32">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">
          <div className="reveal mb-16 grid gap-8 md:grid-cols-12">
            <div className="text-[11px] uppercase tracking-[0.3em] text-white/55 md:col-span-3">
              {t.pillarsEyebrow}
            </div>
            <h2 className="font-serif text-[clamp(2.6rem,6vw,6rem)] leading-[0.94] md:col-span-9">
              {t.pillarsTitle}
            </h2>
          </div>
          <div className="grid border-y border-white/16 md:grid-cols-3">
            {t.pillars.map((pillar) => (
              <div key={pillar.k} className="reveal border-white/16 py-10 md:border-r md:px-10">
                <div className="mb-16 font-serif text-3xl text-white/38">{pillar.k}</div>
                <h3 className="font-serif text-4xl leading-none">{pillar.title}</h3>
                <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/66">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience-world"
        ref={galleryRef}
        className="relative h-[420vh] bg-paper md:h-[360vh]"
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[42vw] bg-gradient-to-r from-paper via-paper/86 to-transparent max-md:hidden" />
          <div className="absolute left-5 right-5 top-24 z-20 max-w-[520px] md:left-12 md:right-auto lg:left-16">
            <div className="border border-white/55 bg-paper/82 px-5 py-5 shadow-[0_24px_80px_rgba(8,18,28,0.12)] backdrop-blur-xl md:px-7 md:py-7">
              <div className="eyebrow mb-4">{t.galleryEyebrow}</div>
              <h2 className="font-serif text-[clamp(2.2rem,4.8vw,5.2rem)] leading-[0.92] text-foreground">
                {t.galleryTitle}
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {t.galleryIntro}
              </p>
              <div className="mt-6 h-px w-20 bg-[color:var(--gold)]" />
            </div>
          </div>
          <div
            className="ml-[7vw] flex gap-4 pt-[22rem] will-change-transform md:ml-[42vw] md:gap-7 md:pt-20 lg:gap-9"
            style={{ transform: `translate3d(${galleryOffset}, 0, 0)` }}
          >
            {galleryImages.map((img, index) => (
              <figure key={img} className="w-[76vw] shrink-0 md:w-[34vw] lg:w-[31vw]">
                <div className="h-[46vh] overflow-hidden md:h-[68vh]">
                  <img
                    src={img}
                    alt={t.captions[index]}
                    className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.26em] text-muted-foreground">
                  <span>{t.captions[index]}</span>
                  <span>0{index + 1}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-36">
        <div className="mx-auto grid max-w-[1500px] gap-16 px-6 md:grid-cols-12 md:px-12">
          <div className="reveal md:col-span-5">
            <h2 className="font-serif text-[clamp(2.6rem,6vw,6.2rem)] leading-[0.92]">
              {t.systemTitle}
            </h2>
          </div>
          <div className="reveal md:col-span-5 md:col-start-8">
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">{t.system}</p>
            <div className="mt-12 grid grid-cols-3 border-y border-border py-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {t.systemTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen overflow-hidden bg-ink text-white">
        <img
          src={rozajeImages.lift}
          alt="Refined alpine stay in Rožaje"
          className="absolute inset-0 h-full w-full object-cover opacity-58"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,11,17,0.25),rgba(6,11,17,0.82))]" />
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-end px-6 py-16 md:px-12">
          <div className="reveal max-w-4xl">
            <p className="font-serif text-[clamp(3rem,8vw,8rem)] leading-[0.88]">{t.final}</p>
            <Link
              to="/journal"
              className="mt-10 inline-flex border-b border-white pb-2 text-[11px] uppercase tracking-[0.3em]"
            >
              {t.finalCta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
