import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/site/ArticlePage";
import { rozajeImages } from "@/assets/rozaje365";
import { useLanguage } from "@/lib/language";

const cover = rozajeImages.townValley;

const copy = {
  de: {
    eyebrow: "Kapitel V · Aufenthalt",
    title: "Apartment oder Hotel? Eine ehrliche Antwort.",
    intro:
      "In Rožaje gewinnen Ferienwohnungen fast immer. Sie sind ruhiger, oft besser gelegen und lassen einen den Rhythmus der Stadt spüren: die Bäckerei am Morgen, die Nachbarn am Abend.",
    pros: [
      "Ferienwohnungen ab 35 Euro pro Nacht",
      "Viele liegen in Gehweite zu den Liften",
      "Familiengeführt, lokale Tipps inklusive",
      "Küchen sparen 20 bis 30 Euro pro Tag beim Essen",
    ],
    cons: [
      "Hotels sind begrenzt und teils älter",
      "Im Februar früh buchen",
      "Nur wenige Unterkünfte haben Wellness direkt im Haus",
    ],
    sections: [
      {
        heading: "Die besten Lagen",
        body: (
          <p>
            Centar für Cafés und Zugang, Bandžov für Ruhe und Nähe zum Skigebiet, Carine für
            Familien. Jeder Bereich ist höchstens zehn Minuten zu Fuß vom nächsten entfernt.
          </p>
        ),
      },
      {
        heading: "Worauf man achten sollte",
        body: (
          <p>
            Südbalkon, echte Heizung statt nur Elektroplatten, Parkplatz im Winter und eine heiße
            Dusche mit gutem Wasserdruck. Diese vier Dinge entscheiden oft über eine gute oder
            mühsame Woche.
          </p>
        ),
      },
      {
        heading: "Realistische Preise",
        body: (
          <p>
            35 bis 55 Euro pro Nacht in der Nebensaison, 60 bis 90 Euro in starken Skiwochen. Ein
            Apartment mit zwei Schlafzimmern für vier Personen ist oft günstiger als zwei
            Hotelzimmer irgendwo in den Alpen.
          </p>
        ),
      },
    ],
  },
  en: {
    eyebrow: "Chapter V · Accommodation",
    title: "Apartment or hotel? An honest answer.",
    intro:
      "In Rožaje, apartments almost always win. They are calmer, better located, and they let you taste the rhythm of the town: the bakery in the morning, neighbours in the evening.",
    pros: [
      "Apartments from €35/night",
      "Most are walking distance to the lifts",
      "Family-owned, local advice included",
      "Kitchens save €20-30/day on food",
    ],
    cons: [
      "Hotels are limited and dated",
      "Book early in February peak weeks",
      "Very few have on-site wellness",
    ],
    sections: [
      {
        heading: "Best neighbourhoods",
        body: (
          <p>
            Centar for cafés and access; Bandžov for quiet and ski-in convenience; Carine for
            families. Each is no more than ten minutes' walk from the next.
          </p>
        ),
      },
      {
        heading: "What to look for",
        body: (
          <p>
            South-facing balcony, real heating, parking in winter, and a hot shower with proper
            water pressure. These four things separate a good week from a frustrating one.
          </p>
        ),
      },
      {
        heading: "Realistic prices",
        body: (
          <p>
            €35-55 per night in low season, €60-90 in peak ski weeks. A two-bedroom apartment for
            four people often comes in cheaper than two hotel rooms anywhere in the Alps.
          </p>
        ),
      },
    ],
  },
  me: {
    eyebrow: "Poglavlje V · Smještaj",
    title: "Apartman ili hotel? Iskren odgovor.",
    intro:
      "U Rožajama apartmani skoro uvijek pobjeđuju. Mirniji su, često bolje pozicionirani i daju osjećaj ritma grada: pekara ujutru, komšije uveče.",
    pros: [
      "Apartmani od 35 eura po noći",
      "Mnogi su pješke blizu liftova",
      "Porodični smještaj, lokalni savjeti uključeni",
      "Kuhinja štedi 20 do 30 eura dnevno na hrani",
    ],
    cons: [
      "Hotela je malo i često su starijeg tipa",
      "Za februar treba rezervisati ranije",
      "Vrlo malo objekata ima wellness u okviru smještaja",
    ],
    sections: [
      {
        heading: "Najbolje lokacije",
        body: (
          <p>
            Centar za kafiće i pristup, Bandžov za mir i blizinu skijanja, Carine za porodice. Svaka
            zona je najviše desetak minuta hoda od sljedeće.
          </p>
        ),
      },
      {
        heading: "Na šta obratiti pažnju",
        body: (
          <p>
            Balkon okrenut jugu, pravo grijanje, parking zimi i topao tuš sa dobrim pritiskom vode.
            Te četiri stvari često razdvajaju dobru sedmicu od naporne.
          </p>
        ),
      },
      {
        heading: "Realne cijene",
        body: (
          <p>
            35 do 55 eura po noći van sezone, 60 do 90 eura u najjačim ski sedmicama. Apartman sa
            dvije spavaće sobe za četiri osobe često je jeftiniji od dvije hotelske sobe bilo gdje u
            Alpima.
          </p>
        ),
      },
    ],
  },
} as const;

function Stay() {
  const { language } = useLanguage();
  const t = copy[language];

  return <ArticlePage cover={cover} {...t} />;
}

export const Route = createFileRoute("/stay")({
  head: () => ({
    meta: [
      { title: "Where to stay in Rožaje — Apartments & neighbourhoods | Rožaje 365" },
      {
        name: "description",
        content:
          "Apartments vs. hotels, neighbourhoods ranked by distance, quiet and value — the honest guide to sleeping in Rožaje.",
      },
      { property: "og:title", content: "Where to stay in Rožaje" },
      { property: "og:image", content: cover },
    ],
  }),
  component: Stay,
});
