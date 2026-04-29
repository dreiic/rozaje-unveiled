import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/site/ArticlePage";
import cover from "@/assets/summer.jpg";

export const Route = createFileRoute("/summer")({
  head: () => ({
    meta: [
      { title: "Summer in Rozaje — Hiking, nature & quiet | Rozaje 365" },
      {
        name: "description",
        content:
          "Hiking the Prokletije, glacier lakes and katuns — the unexpected case for visiting northern Montenegro in summer.",
      },
      { property: "og:title", content: "Summer in Rozaje — the other half of the year" },
      { property: "og:image", content: cover },
    ],
  }),
  component: () => (
    <ArticlePage
      eyebrow="Chapter III · Summer"
      title="The other half of the year that nobody tells you about."
      intro="When the snow goes, Rozaje becomes one of the last truly quiet hiking destinations in Europe — meadows, glacier lakes, and shepherds whose families have walked these trails for centuries."
      cover={cover}
      pros={[
        "Hiking from June to October",
        "Glacier lakes within a half-day walk",
        "Cool 22°C summer average",
        "Authentic katun stays — sleep with shepherds",
      ]}
      cons={[
        "Mountain weather changes fast",
        "English not always spoken on trails",
        "Bring a good map — signage is informal",
      ]}
      sections={[
        {
          heading: "The Prokletije, in plain terms",
          body: (
            <p>
              The Accursed Mountains stretch across Montenegro, Albania and Kosovo. Hajla peak
              (2,403 m) is one of the kinder summits — a long but non-technical day from Rozaje.
              The reward is one of the largest uninterrupted views in the Balkans.
            </p>
          ),
        },
        {
          heading: "Where the lakes are",
          body: (
            <p>
              Bukumirsko, Hridsko, Visitorsko — small mirror-still glacial lakes scattered through
              the range. Most are reachable as day hikes; a few require an overnight at a katun.
            </p>
          ),
        },
        {
          heading: "Sleeping in a katun",
          body: (
            <p>
              Katuns are seasonal mountain settlements. Several families now host travellers —
              homemade cheese, fresh bread, candlelight, no Wi-Fi. It is the closest thing to
              time travel that summer in Europe still offers.
            </p>
          ),
        },
      ]}
    />
  ),
});
