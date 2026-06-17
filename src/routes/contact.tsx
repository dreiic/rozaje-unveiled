import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, ExternalLink } from "lucide-react";
import snowmobileBackground from "@/assets/exploration-snowmobile.png";
import { rozajeImages } from "@/assets/rozaje365";
import { useReveal } from "@/hooks/use-reveal";
import { useLanguage } from "@/lib/language";

const WHATSAPP_NUMBER = "+49 1575 8800312";

const WHATSAPP_LINK = "https://wa.me/4915758800312";

const MONTE_I_MORE_URL = "https://monteimore.com";

const copy = {
  de: {
    metaTitle: "Kontakt — Rožaje 365",
    metaDescription:
      "Kontaktieren Sie Rožaje 365 für Aufenthalte, Wintererlebnisse, Gruppenreisen und Projektgespräche.",
    eyebrow: "Kontakt",
    title: "Planen Sie Rožaje mit einem lokalen Einstieg.",
    intro:
      "Für Aufenthalte, Wintererlebnisse, Gruppenreisen oder Projektgespräche stehen wir per E-Mail oder WhatsApp zur Verfügung.",
    contactEyebrow: "Direktkontakt",
    whatsappLabel: "WhatsApp",
    monteEyebrow: "Buchung & mehr Informationen",
    monteText:
      "Für detaillierte Buchungsinformationen und das vollständige Angebot besuchen Sie Monte i More.",
    monteCta: "Monte i More besuchen →",
    location: "Rožaje, Nordmontenegro",
    mapHint: "Gebirgsregion zwischen Hajla, Tälern und winterlichen Routen.",
    mapCta: "Karte öffnen",
    altitude: "Höhe",
    seasons: "Jahreszeiten",
    toCoast: "zur Küste",
  },
  en: {
    metaTitle: "Contact — Rožaje 365",
    metaDescription:
      "Contact Rožaje 365 for stays, winter experiences, group trips and project conversations.",
    eyebrow: "Contact",
    title: "Plan Rožaje with a local point of entry.",
    intro:
      "For stays, winter experiences, group trips or project conversations, reach us by email or WhatsApp.",
    contactEyebrow: "Direct contact",
    whatsappLabel: "WhatsApp",
    monteEyebrow: "Booking & more information",
    monteText:
      "For detailed booking information and the full offer, visit Monte i More.",
    monteCta: "Visit Monte i More →",
    location: "Rožaje, northern Montenegro",
    mapHint: "Mountain region between Hajla, valleys and winter routes.",
    mapCta: "Open map",
    altitude: "Altitude",
    seasons: "Seasons",
    toCoast: "to the coast",
  },
  me: {
    metaTitle: "Kontakt — Rožaje 365",
    metaDescription:
      "Kontaktirajte Rožaje 365 za smještaj, zimske doživljaje, grupna putovanja i projektne razgovore.",
    eyebrow: "Kontakt",
    title: "Planirajte Rožaje uz lokalnu ulaznu tačku.",
    intro:
      "Za smještaj, zimske doživljaje, grupna putovanja ili projektne razgovore, dostupni smo putem e-maila ili WhatsApp-a.",
    contactEyebrow: "Direktan kontakt",
    whatsappLabel: "WhatsApp",
    monteEyebrow: "Rezervacije i više informacija",
    monteText:
      "Za detaljne informacije o rezervacijama i kompletnu ponudu, posjetite Monte i More.",
    monteCta: "Posjetite Monte i More →",
    location: "Rožaje, sjever Crne Gore",
    mapHint: "Planinska regija između Hajle, dolina i zimskih ruta.",
    mapCta: "Otvori mapu",
    altitude: "Nadmorska visina",
    seasons: "Godišnja doba",
    toCoast: "do obale",
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
        <div className="reveal">
          <div className="eyebrow mb-6">{t.eyebrow}</div>

          <h1 className="font-serif text-[40px] leading-[1.05] text-balance md:text-[72px]">
            {t.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/75 md:text-xl">
            {t.intro}
          </p>
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
          {/* Left: map */}
          <div className="reveal flex flex-col gap-4 md:col-span-5">
            <div className="flex flex-1 flex-col overflow-hidden border border-border bg-background/92 backdrop-blur-sm">
              <div className="relative flex-1" style={{ minHeight: "20rem" }}>
                <iframe
                  title={t.location}
                  src="https://www.google.com/maps?q=Ro%C5%BEaje%2C%20Montenegro&output=embed"
                  className="absolute inset-0 h-full w-full grayscale-[35%]"
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

            {/* Location facts */}
            <div className="grid grid-cols-3 border border-border bg-background/92 backdrop-blur-sm">
              <div className="border-r border-border px-5 py-5">
                <div className="font-serif text-2xl leading-none">860m</div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {t.altitude}
                </div>
              </div>

              <div className="border-r border-border px-5 py-5">
                <div className="font-serif text-2xl leading-none">4</div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {t.seasons}
                </div>
              </div>

              <div className="px-5 py-5">
                <div className="font-serif text-2xl leading-none">120km</div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {t.toCoast}
                </div>
              </div>
            </div>
          </div>

          {/* Right: contact info + Monte i More */}
          <div className="reveal flex flex-col border border-border bg-background/92 backdrop-blur-sm md:col-span-6 md:col-start-7">
            {/* Direct contact */}
            <div className="flex-1 p-8 md:p-10">
              <div className="eyebrow mb-10">{t.contactEyebrow}</div>

              <a
                href="mailto:monteimore.me@gmail.com"
                className="group flex items-start justify-between border-b border-border pb-7 no-underline [background-image:none]"
              >
                <div>
                  <div className="mb-1 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                    E-Mail
                  </div>

                  <div className="font-serif text-2xl text-foreground transition-opacity group-hover:opacity-60 md:text-3xl">
                    monteimore.me@gmail.com
                  </div>
                </div>

                <Mail
                  className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
                  strokeWidth={1.5}
                />
              </a>

              {/* WhatsApp numbers */}
              <div className="pt-7">
                <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                  {t.whatsappLabel}
                </div>

                <div className="flex flex-col gap-4">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between no-underline [background-image:none]"
                  >
                    <div className="font-serif text-2xl text-foreground transition-opacity group-hover:opacity-60 md:text-3xl">
                      {WHATSAPP_NUMBER}
                    </div>

                    <MessageCircle
                      className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
                      strokeWidth={1.5}
                    />
                  </a>

                </div>
              </div>
            </div>

            {/* Monte i More — light block at bottom */}
            <div className="border-t border-border bg-background/92 p-8 text-foreground backdrop-blur-sm md:p-10">
              <div className="eyebrow mb-4 text-muted-foreground">
                {t.monteEyebrow}
              </div>

              <p className="mb-8 text-sm leading-relaxed text-foreground/65">
                {t.monteText}
              </p>

              <a
                href={MONTE_I_MORE_URL}
                target="_blank"
                rel="noreferrer"
                className="booking-cta w-full bg-ink text-white no-underline [background-image:none]"
              >
                <span>{t.monteCta}</span>

                <ExternalLink
                  className="h-4 w-4 shrink-0"
                  strokeWidth={1.5}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}