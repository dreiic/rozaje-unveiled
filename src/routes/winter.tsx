import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/site/ArticlePage";
import { rozajeImages } from "@/assets/rozaje365";
import { useLanguage } from "@/lib/language";

const cover = rozajeImages.lift;

const copy = {
  de: {
    eyebrow: "Kapitel II · Winter",
    title: "Lohnt sich Skifahren in Montenegro wirklich?",
    intro:
      "Ja – wenn man dem Massentourismus entfliehen und Skifahren wieder so erleben will, wie es einmal gedacht war. Rožaje ist nicht St. Anton. Es ist ruhiger, kleiner und kostet nur einen Bruchteil.",
    pros: [
      "Zuverlässiger Schnee von Dezember bis April",
      "Tagespass unter 15 Euro, Kinder zum halben Preis",
      "Leere Pisten, keine Warteschlangen",
      "Echte lokale Küche und Gastfreundschaft",
    ],
    cons: [
      "Nur 5 Lifte und rund 7 km Pisten",
      "Begrenzte Après-Ski-Szene",
      "Ideal für Fortgeschrittene, nicht für Rennfahrer",
      "Bargeld mitnehmen, viele Orte akzeptieren keine Karten",
    ],
    sections: [
      {
        heading: "Wie viel Schnee liegt wirklich?",
        body: (
          <>
            <p>
              Hajla liegt auf 2.403 m und profitiert von der adriatisch-kontinentalen Schneelinie.
              In einem normalen Winter halten die oberen Pisten von Ende Dezember bis Mitte April.
              Die unteren Abfahrten können Ende Februar dünner werden, dann schicken Einheimische
              einen meist weiter nach oben.
            </p>
            <p>
              Im letzten Jahrzehnt gab es zwei schwache und sieben starke Winter. In der Saison
              veröffentlichen wir wöchentlich die Schneehöhe, damit Planung ehrlich bleibt.
            </p>
          </>
        ),
      },
      {
        heading: "Was es im Vergleich zu den Alpen kostet",
        body: (
          <p>
            Ein Sechs-Tage-Skipass in Rožaje kostet etwa 70 Euro. In Sölden kostet derselbe Zeitraum
            rund 375 Euro. Dazu kommen Ferienwohnungen ab etwa 40 Euro pro Nacht statt 180 Euro.
            Eine Woche hier kostet ungefähr ein Drittel eines vergleichbaren Aufenthalts in
            Österreich, ohne den Berg selbst zu verlieren.
          </p>
        ),
      },
      {
        heading: "Für wen Rožaje richtig ist",
        body: (
          <p>
            Für Familien. Für Fortgeschrittene. Für Menschen, die genug von Massen haben. Für alle,
            denen der Espresso am Morgen mit dem Liftpersonal mehr bedeutet als ein beheizter
            Gondelsitz. Wer fünfundzwanzig schwarze Pisten und ein Michelin-Restaurant auf Höhe
            braucht, ist hier nicht richtig, und das soll man vorher wissen.
          </p>
        ),
      },
    ],
  },
  en: {
    eyebrow: "Chapter II · Winter",
    title: "Is skiing in Montenegro actually worth it?",
    intro:
      "Short answer: yes, if you understand what you're coming for. Rožaje is not St. Anton. It is something quieter, smaller, and at a fraction of the price.",
    pros: [
      "Reliable snow December through April",
      "Day pass under €15, children half price",
      "Empty pistes, no queues",
      "Genuine local food and hospitality",
    ],
    cons: [
      "Only 5 lifts and around 7 km of pistes",
      "Limited après-ski scene",
      "Best for intermediates, not racers",
      "Bring cash, many places do not take cards",
    ],
    sections: [
      {
        heading: "How much snow, really?",
        body: (
          <>
            <p>
              Hajla sits at 2,403 m and benefits from the Adriatic-Continental snow line. In a
              normal winter, the upper pistes hold cover from late December to mid-April. Lower runs
              may thin in late February, and locals usually point you uphill on those days.
            </p>
            <p>
              The last decade saw two weak winters and seven strong ones. We publish weekly snow
              depth in season so you can plan honestly.
            </p>
          </>
        ),
      },
      {
        heading: "What it costs vs. the Alps",
        body: (
          <p>
            A six-day ski pass in Rožaje is roughly €70. The same pass in Sölden is €375. Add a
            €40/night apartment vs. €180, and a week here costs about a third of an Austrian
            equivalent without sacrificing the mountain itself.
          </p>
        ),
      },
      {
        heading: "Who Rožaje is right for",
        body: (
          <p>
            Families. Intermediates. People tired of crowds. Anyone who values the morning espresso
            with the lift attendant more than a heated gondola seat. If you need twenty-five black
            runs and a Michelin restaurant at altitude, this is not it, and we would rather you know
            now.
          </p>
        ),
      },
    ],
  },
  me: {
    eyebrow: "Poglavlje II · Zima",
    title: "Da li se skijanje u Crnoj Gori stvarno isplati?",
    intro:
      "Kratak odgovor: da, ako znaš zbog čega dolaziš. Rožaje nije St. Anton. Tiše je, manje i mnogo pristupačnije.",
    pros: [
      "Pouzdan snijeg od decembra do aprila",
      "Dnevni ski-pas ispod 15 eura, djeca pola cijene",
      "Prazne staze, bez redova",
      "Prava lokalna hrana i gostoprimstvo",
    ],
    cons: [
      "Samo 5 liftova i oko 7 km staza",
      "Ograničena après-ski scena",
      "Najbolje za rekreativce, ne za trkače",
      "Ponesi gotovinu, mnogi lokali ne primaju kartice",
    ],
    sections: [
      {
        heading: "Koliko snijega zaista ima?",
        body: (
          <>
            <p>
              Hajla je na 2.403 m i ima koristi od jadransko-kontinentalne sniježne linije. U
              normalnoj zimi gornje staze drže snijeg od kraja decembra do sredine aprila. Donje
              staze krajem februara mogu da oslabe, pa te lokalci tada obično upute više prema vrhu.
            </p>
            <p>
              U posljednjoj deceniji bile su dvije slabije i sedam jakih zima. Tokom sezone
              objavljujemo sedmičnu visinu snijega da planiranje bude realno.
            </p>
          </>
        ),
      },
      {
        heading: "Koliko košta u odnosu na Alpe",
        body: (
          <p>
            Šestodnevni ski-pas u Rožajama košta oko 70 eura. Isti period u Söldenu košta oko 375
            eura. Dodaj apartman od oko 40 eura po noći umjesto 180 eura i sedmica ovdje ispadne
            otprilike trećina austrijskog ekvivalenta, bez odricanja od same planine.
          </p>
        ),
      },
      {
        heading: "Za koga su Rožaje pravi izbor",
        body: (
          <p>
            Za porodice. Za rekreativce. Za ljude umorne od gužve. Za svakoga kome jutarnji espresso
            sa radnikom na liftu znači više od grijanog sjedišta u gondoli. Ako ti treba dvadeset
            pet crnih staza i Michelin restoran na visini, ovo nije to, i bolje je da se zna odmah.
          </p>
        ),
      },
    ],
  },
} as const;

function Winter() {
  const { language } = useLanguage();
  const t = copy[language];

  return <ArticlePage cover={cover} {...t} />;
}

export const Route = createFileRoute("/winter")({
  head: () => ({
    meta: [
      { title: "Winter in Rožaje — Skiing, snow & honest expectations | Rožaje 365" },
      {
        name: "description",
        content:
          "What skiing in Rožaje, Montenegro is really like — snow reliability, pistes, prices, and how it compares to the Alps.",
      },
      { property: "og:title", content: "Winter in Rožaje — what to actually expect" },
      { property: "og:description", content: "Snow, pistes, prices, comparisons. No filter." },
      { property: "og:image", content: cover },
    ],
  }),
  component: Winter,
});
