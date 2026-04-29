import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/site/ArticlePage";
import { rozajeImages } from "@/assets/rozaje365";
import { useLanguage } from "@/lib/language";

const cover = rozajeImages.mountainRoad;

const copy = {
  de: {
    eyebrow: "Kapitel IV · Preise",
    title: "Was eine Woche hier wirklich kostet.",
    intro:
      "Wir haben es selbst zusammengerechnet: zwei Personen, Februar, jeden Tag Skifahren. Die Summe hat uns überrascht, und sie wird wahrscheinlich auch Sie überraschen.",
    rows: [
      ["Ferienwohnung, 7 Nächte", "€315"],
      ["Skipässe (2 × 6 Tage)", "€140"],
      ["Lebensmittel & Kochen im Apartment", "€85"],
      ["Restaurants (4 Abendessen)", "€96"],
      ["Kaffee & Cafés", "€28"],
      ["Schneemobil-Tour", "€60"],
      ["Lokaler Transport & Taxis", "€35"],
    ],
    total: "Gesamt, zwei Personen",
    sections: [
      {
        heading: "Die Woche, Zeile für Zeile",
        body: null,
      },
      {
        heading: "Im Vergleich zu Österreich",
        body: (
          <p>
            Dieselbe Reise in Sölden, vorsichtig gerechnet: 1.260 Euro für das Apartment, 750 Euro
            für Skipässe, über 600 Euro für Essen. Rund 2.800 Euro für dieselbe Woche, also mehr als
            das Dreifache, und oft mit weniger Berg für sich selbst.
          </p>
        ),
      },
      {
        heading: "Wie es noch günstiger wird",
        body: (
          <p>
            Unter der Woche anreisen, im Apartment kochen, am ersten Tag einen Mehrtagespass kaufen
            und den Gastgeber nach familiengeführten Restaurants fragen. Sie sind günstiger, besser
            und wärmer als vieles auf der touristischen Karte.
          </p>
        ),
      },
    ],
    ctaTitle: "Möchten Sie diese Preise sichern?",
    ctaBody:
      "Ferienwohnungen und Skipässe sind direkt über Monte i More buchbar, zum lokalen Preis und ohne Gebühren großer Buchungsplattformen.",
  },
  en: {
    eyebrow: "Chapter IV · Prices",
    title: "What a week here actually costs.",
    intro:
      "We added it up ourselves: for two people, in February, with skiing every day. The total surprised us, and probably will surprise you too.",
    rows: [
      ["Apartment, 7 nights", "€315"],
      ["Ski passes (2 × 6 days)", "€140"],
      ["Groceries & home cooking", "€85"],
      ["Restaurants (4 dinners)", "€96"],
      ["Coffee & cafés", "€28"],
      ["Snowmobile tour", "€60"],
      ["Local transport & taxis", "€35"],
    ],
    total: "Total, two people",
    sections: [
      {
        heading: "The week, line by line",
        body: null,
      },
      {
        heading: "Compared to Austria",
        body: (
          <p>
            The same itinerary in Sölden, conservatively: €1,260 for the apartment, €750 for ski
            passes, €600+ for food. About €2,800 for the same week, over three times the cost, for
            arguably less mountain to yourself.
          </p>
        ),
      },
      {
        heading: "How to spend even less",
        body: (
          <p>
            Travel midweek, cook at the apartment, buy a multi-day pass on day one, and ask your
            host for the family-run restaurants. They are cheaper, better and warmer than anything
            on a tourist map.
          </p>
        ),
      },
    ],
    ctaTitle: "Want to lock in these prices?",
    ctaBody:
      "Apartments and ski passes are bookable directly through Monte i More, at the local rate and without booking-platform fees.",
  },
  me: {
    eyebrow: "Poglavlje IV · Cijene",
    title: "Koliko sedmica ovdje stvarno košta.",
    intro:
      "Sami smo sabrali: dvije osobe, februar, skijanje svaki dan. Ukupna cifra je iznenadila nas, a vjerovatno će i vas.",
    rows: [
      ["Apartman, 7 noći", "€315"],
      ["Ski-pasovi (2 × 6 dana)", "€140"],
      ["Namirnice i kuvanje u apartmanu", "€85"],
      ["Restorani (4 večere)", "€96"],
      ["Kafa i kafići", "€28"],
      ["Tura motornim sankama", "€60"],
      ["Lokalni prevoz i taksi", "€35"],
    ],
    total: "Ukupno, dvije osobe",
    sections: [
      {
        heading: "Sedmica, stavka po stavka",
        body: null,
      },
      {
        heading: "U poređenju sa Austrijom",
        body: (
          <p>
            Isti plan u Söldenu, konzervativno računato: 1.260 eura za apartman, 750 eura za
            ski-pasove, preko 600 eura za hranu. Oko 2.800 eura za istu sedmicu, više od tri puta
            skuplje, često sa manje planine samo za sebe.
          </p>
        ),
      },
      {
        heading: "Kako potrošiti još manje",
        body: (
          <p>
            Dođi radnim danima, kuvaj u apartmanu, kupi višednevni ski-pas prvog dana i pitaj
            domaćina za porodične restorane. Jeftiniji su, bolji i topliji od većine mjesta sa
            turističke mape.
          </p>
        ),
      },
    ],
    ctaTitle: "Želite da uhvatite ove cijene?",
    ctaBody:
      "Apartmani i ski-pasovi mogu se rezervisati direktno kroz Monte i More, po lokalnoj cijeni i bez provizija velikih platformi.",
  },
} as const;

function Prices() {
  const { language } = useLanguage();
  const t = copy[language];
  const sections = t.sections.map((section, index) =>
    index === 0
      ? {
          ...section,
          body: (
            <div className="space-y-4">
              <div className="divide-y divide-border border-y border-border">
                {t.rows.map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-6 py-3">
                    <span className="text-foreground/80">{k}</span>
                    <span className="font-serif text-lg">{v}</span>
                  </div>
                ))}
                <div className="flex items-baseline justify-between gap-6 py-4">
                  <span className="font-serif text-xl">{t.total}</span>
                  <span className="font-serif text-3xl text-[color:var(--gold)]">€759</span>
                </div>
              </div>
            </div>
          ),
        }
      : section,
  );

  return (
    <ArticlePage
      eyebrow={t.eyebrow}
      title={t.title}
      intro={t.intro}
      cover={cover}
      sections={sections}
      ctaTitle={t.ctaTitle}
      ctaBody={t.ctaBody}
    />
  );
}

export const Route = createFileRoute("/prices")({
  head: () => ({
    meta: [
      { title: "What a week in Rožaje really costs | Rožaje 365" },
      {
        name: "description",
        content:
          "Real receipts, not brochure prices. A full week in Rožaje, Montenegro, broken down honestly — accommodation, food, ski pass, activities.",
      },
      { property: "og:title", content: "What a week in Rožaje really costs" },
      { property: "og:image", content: cover },
    ],
  }),
  component: Prices,
});
