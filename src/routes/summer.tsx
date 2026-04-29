import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/site/ArticlePage";
import { rozajeImages } from "@/assets/rozaje365";
import { useLanguage } from "@/lib/language";

const cover = rozajeImages.valleyMeadow;

const copy = {
  de: {
    eyebrow: "Kapitel III · Sommer",
    title: "Die andere Hälfte des Jahres, über die kaum jemand spricht.",
    intro:
      "Wenn der Schnee verschwindet, wird Rožaje zu einem der letzten wirklich ruhigen Wanderziele Europas: Wiesen, Gletscherseen und Hirtenfamilien, die diese Wege seit Jahrhunderten kennen.",
    pros: [
      "Wandern von Juni bis Oktober",
      "Gletscherseen in einer halbtägigen Wanderung erreichbar",
      "Angenehmer Sommerdurchschnitt um 22°C",
      "Authentische Katun-Aufenthalte bei Hirtenfamilien",
    ],
    cons: [
      "Das Bergwetter ändert sich schnell",
      "Auf den Wegen wird nicht immer Englisch gesprochen",
      "Eine gute Karte mitnehmen, die Beschilderung ist informell",
    ],
    sections: [
      {
        heading: "Die Prokletije, einfach erklärt",
        body: (
          <p>
            Die Prokletije erstrecken sich über Montenegro, Albanien und Kosovo. Der Hajla-Gipfel
            (2.403 m) gehört zu den zugänglicheren Gipfeln: ein langer, aber technisch einfacher Tag
            von Rožaje aus. Der Lohn ist einer der weitesten ununterbrochenen Ausblicke des Balkans.
          </p>
        ),
      },
      {
        heading: "Wo die Seen liegen",
        body: (
          <p>
            Bukumirsko, Hridsko, Visitorsko: kleine, spiegelstille Gletscherseen, verstreut in den
            Bergen. Die meisten sind als Tageswanderung erreichbar, einige verlangen eine
            Übernachtung im Katun.
          </p>
        ),
      },
      {
        heading: "Schlafen im Katun",
        body: (
          <p>
            Katuns sind saisonale Bergsiedlungen. Mehrere Familien nehmen heute Gäste auf:
            hausgemachter Käse, frisches Brot, Kerzenlicht, kein WLAN. Es ist eine der seltenen
            Arten, in Europa noch langsamere Zeit zu erleben.
          </p>
        ),
      },
    ],
  },
  en: {
    eyebrow: "Chapter III · Summer",
    title: "The other half of the year that nobody tells you about.",
    intro:
      "When the snow goes, Rožaje becomes one of the last truly quiet hiking destinations in Europe: meadows, glacier lakes and shepherds whose families have walked these trails for centuries.",
    pros: [
      "Hiking from June to October",
      "Glacier lakes within a half-day walk",
      "Cool 22°C summer average",
      "Authentic katun stays with shepherd families",
    ],
    cons: [
      "Mountain weather changes fast",
      "English is not always spoken on trails",
      "Bring a good map, signage is informal",
    ],
    sections: [
      {
        heading: "The Prokletije, in plain terms",
        body: (
          <p>
            The Accursed Mountains stretch across Montenegro, Albania and Kosovo. Hajla peak (2,403
            m) is one of the kinder summits: a long but non-technical day from Rožaje. The reward is
            one of the largest uninterrupted views in the Balkans.
          </p>
        ),
      },
      {
        heading: "Where the lakes are",
        body: (
          <p>
            Bukumirsko, Hridsko, Visitorsko: small mirror-still glacial lakes scattered through the
            range. Most are reachable as day hikes; a few require an overnight at a katun.
          </p>
        ),
      },
      {
        heading: "Sleeping in a katun",
        body: (
          <p>
            Katuns are seasonal mountain settlements. Several families now host travellers: homemade
            cheese, fresh bread, candlelight, no Wi-Fi. It is the closest thing to time travel that
            summer in Europe still offers.
          </p>
        ),
      },
    ],
  },
  me: {
    eyebrow: "Poglavlje III · Ljeto",
    title: "Druga polovina godine o kojoj skoro niko ne priča.",
    intro:
      "Kad snijeg ode, Rožaje postaje jedna od posljednjih zaista mirnih planinarskih destinacija u Evropi: livade, glečerska jezera i pastirske porodice koje tim stazama idu vjekovima.",
    pros: [
      "Planinarenje od juna do oktobra",
      "Glečerska jezera na pola dana hoda",
      "Prijatnih prosječnih 22°C ljeti",
      "Autentičan boravak u katunima kod pastirskih porodica",
    ],
    cons: [
      "Vrijeme u planini se brzo mijenja",
      "Na stazama se engleski ne govori uvijek",
      "Ponesi dobru mapu, signalizacija je neformalna",
    ],
    sections: [
      {
        heading: "Prokletije, jednostavno rečeno",
        body: (
          <p>
            Prokletije se protežu kroz Crnu Goru, Albaniju i Kosovo. Vrh Hajle (2.403 m) spada u
            pristupačnije vrhove: dug, ali tehnički nezahtjevan dan iz Rožaja. Nagrada je jedan od
            najširih neprekinutih pogleda na Balkanu.
          </p>
        ),
      },
      {
        heading: "Gdje su jezera",
        body: (
          <p>
            Bukumirsko, Hridsko, Visitorsko: mala, mirna glečerska jezera rasuta kroz planinski
            masiv. Većina se može obići kao dnevna tura, a neka traže noćenje u katunu.
          </p>
        ),
      },
      {
        heading: "Spavanje u katunu",
        body: (
          <p>
            Katuni su sezonska planinska naselja. Više porodica danas prima putnike: domaći sir,
            svjež hljeb, svijeće, bez Wi-Fi-ja. To je jedan od rijetkih načina da se u Evropi još
            osjeti sporije vrijeme.
          </p>
        ),
      },
    ],
  },
} as const;

function Summer() {
  const { language } = useLanguage();
  const t = copy[language];

  return <ArticlePage cover={cover} {...t} />;
}

export const Route = createFileRoute("/summer")({
  head: () => ({
    meta: [
      { title: "Summer in Rožaje — Hiking, nature & quiet | Rožaje 365" },
      {
        name: "description",
        content:
          "Hiking the Prokletije, glacier lakes and katuns — the unexpected case for visiting northern Montenegro in summer.",
      },
      { property: "og:title", content: "Summer in Rožaje — the other half of the year" },
      { property: "og:image", content: cover },
    ],
  }),
  component: Summer,
});
