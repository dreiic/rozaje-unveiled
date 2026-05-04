import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import snowmobileBackground from "@/assets/exploration-snowmobile.png";
import { rozajeImages } from "@/assets/rozaje365";
import { useReveal } from "@/hooks/use-reveal";
import { useLanguage } from "@/lib/language";

const copy = {
  de: {
    metaTitle: "Kontakt — Rožaje 365",
    metaDescription:
      "Kontaktieren Sie Rožaje 365 für Aufenthalte, Wintererlebnisse, Gruppenreisen und Projektgespräche.",
    eyebrow: "Kontakt",
    title: "Planen Sie Rožaje mit einem lokalen Einstieg.",
    intro:
      "Schreiben Sie uns für Aufenthalte, Wintererlebnisse, Gruppenreisen oder Projektgespräche. Die Anfrage geht direkt an info@rozaje365.me.",
    monteText:
      "Wenn Sie direkt über Monte i More buchen möchten, wird hier der Zugang zur Buchungsseite ergänzt.",
    monteCta: "Monte i More besuchen",
    name: "Name",
    email: "E-Mail",
    message: "Nachricht",
    submit: "Anfrage senden",
    location: "Rožaje, Nordmontenegro",
    mapHint: "Gebirgsregion zwischen Hajla, Tälern und winterlichen Routen.",
    mapCta: "Karte öffnen",
    direct: "Direktkontakt",
  },
  en: {
    metaTitle: "Contact — Rožaje 365",
    metaDescription:
      "Contact Rožaje 365 for stays, winter experiences, group trips and project conversations.",
    eyebrow: "Contact",
    title: "Plan Rožaje with a local point of entry.",
    intro:
      "Write to us for stays, winter experiences, group trips or project conversations. The request goes directly to info@rozaje365.me.",
    monteText:
      "If you would like to book directly through Monte i More, access to the booking page will be added here.",
    monteCta: "Visit Monte i More",
    name: "Name",
    email: "Email",
    message: "Message",
    submit: "Send request",
    location: "Rožaje, northern Montenegro",
    mapHint: "Mountain region between Hajla, valleys and winter routes.",
    mapCta: "Open map",
    direct: "Direct contact",
  },
  me: {
    metaTitle: "Kontakt — Rožaje 365",
    metaDescription:
      "Kontaktirajte Rožaje 365 za smještaj, zimske doživljaje, grupna putovanja i projektne razgovore.",
    eyebrow: "Kontakt",
    title: "Planirajte Rožaje uz lokalnu ulaznu tačku.",
    intro:
      "Pišite nam za smještaj, zimske doživljaje, grupna putovanja ili projektne razgovore. Upit ide direktno na info@rozaje365.me.",
    monteText:
      "Ako želite rezervisati direktno preko Monte i More, ovdje će biti dodat pristup stranici za rezervacije.",
    monteCta: "Posjeti Monte i More",
    name: "Ime",
    email: "E-mail",
    message: "Poruka",
    submit: "Pošalji upit",
    location: "Rožaje, sjever Crne Gore",
    mapHint: "Planinska regija između Hajle, dolina i zimskih ruta.",
    mapCta: "Otvori mapu",
    direct: "Direktan kontakt",
  },
} as const;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: copy.de.metaTitle },
      { name: "description", content: copy.de.metaDescription },
      { property: "og:title", content: copy.de.metaTitle },
      { property: "og:description", content: copy.de.metaDescription },
      { property: "og:image", content: rozajeImages.townValley },
    ],
  }),
  component: Contact,
});

function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <div ref={ref} className="bg-background">
      <header className="mx-auto max-w-[1500px] px-6 pt-20 md:px-12 md:pt-32">
        <div className="reveal grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <div className="eyebrow mb-6">{t.eyebrow}</div>
            <h1 className="font-serif text-[40px] leading-[1.05] text-balance md:text-[72px]">
              {t.title}
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground/75 md:text-xl">
              {t.intro}
            </p>
          </div>
          <div className="md:col-span-4">
            <p className="max-w-sm text-sm leading-relaxed text-foreground/64">{t.monteText}</p>
            <button
              type="button"
              className="booking-cta mt-5 w-full md:w-auto"
              aria-disabled="true"
            >
              <span>{t.monteCta}</span>
              <span className="booking-cta-arrow" aria-hidden>
                →
              </span>
            </button>
          </div>
        </div>
      </header>

      <section className="relative mt-16 overflow-hidden bg-paper py-24 md:py-32">
        <img
          src={snowmobileBackground}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.34]"
        />
        <div className="absolute inset-0 bg-paper/68" />
        <div className="relative z-10 mx-auto grid max-w-[1500px] gap-12 px-6 md:grid-cols-12 md:px-12">
          <div className="reveal md:col-span-5">
            <div className="overflow-hidden border border-border bg-background/92 backdrop-blur-sm">
              <div className="relative h-80">
                <iframe
                  title={t.location}
                  src="https://www.google.com/maps?q=Ro%C5%BEaje%2C%20Montenegro&output=embed"
                  className="h-full w-full grayscale-[35%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(248,247,242,0.96))] px-5 pb-5 pt-16">
                  <div className="font-serif text-2xl">{t.location}</div>
                  <p className="mt-2 max-w-sm text-xs leading-relaxed text-muted-foreground">
                    {t.mapHint}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-6 border-t border-border px-5 py-4">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  <MapPin className="h-4 w-4" strokeWidth={1.5} />
                  Rožaje
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Ro%C5%BEaje%2C%20Montenegro"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] uppercase tracking-[0.24em] transition-colors hover:text-foreground"
                >
                  {t.mapCta}
                </a>
              </div>
            </div>

            <div className="mt-8 py-3">
              <div className="eyebrow mb-5">{t.direct}</div>
              <div className="space-y-4 text-sm text-muted-foreground">
                <a
                  href="mailto:info@rozaje365.me"
                  className="flex w-fit items-center gap-3 bg-none no-underline transition-colors hover:text-foreground [background-image:none]"
                >
                  <Mail className="h-4 w-4" strokeWidth={1.5} />
                  info@rozaje365.me
                </a>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4" strokeWidth={1.5} />
                  {t.location}
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4" strokeWidth={1.5} />
                  Monte i More
                </div>
              </div>
            </div>
          </div>

          <form
            action="mailto:info@rozaje365.me?subject=Ro%C5%BEaje%20365%20Inquiry"
            method="post"
            encType="text/plain"
            className="reveal border border-border bg-background/92 p-5 backdrop-blur-sm md:col-span-6 md:col-start-7 md:p-8"
          >
            <label className="block text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              {t.name}
              <input
                name="name"
                required
                className="mt-3 h-12 w-full border border-border bg-paper px-4 text-base normal-case tracking-normal outline-none transition-colors focus:border-foreground"
              />
            </label>
            <label className="mt-6 block text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              {t.email}
              <input
                name="email"
                type="email"
                required
                className="mt-3 h-12 w-full border border-border bg-paper px-4 text-base normal-case tracking-normal outline-none transition-colors focus:border-foreground"
              />
            </label>
            <label className="mt-6 block text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              {t.message}
              <textarea
                name="message"
                required
                rows={8}
                className="mt-3 w-full resize-none border border-border bg-paper px-4 py-3 text-base normal-case tracking-normal outline-none transition-colors focus:border-foreground"
              />
            </label>
            <button type="submit" className="booking-cta mt-7 w-full">
              <span>{t.submit}</span>
              <span className="booking-cta-arrow" aria-hidden>
                →
              </span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
