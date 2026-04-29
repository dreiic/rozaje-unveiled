import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/site/ArticlePage";
import cover from "@/assets/winter.jpg";

export const Route = createFileRoute("/winter")({
  head: () => ({
    meta: [
      { title: "Winter in Rozaje — Skiing, snow & honest expectations | Rozaje 365" },
      {
        name: "description",
        content:
          "What skiing in Rozaje, Montenegro is really like — snow reliability, pistes, prices, and how it compares to the Alps.",
      },
      { property: "og:title", content: "Winter in Rozaje — what to actually expect" },
      { property: "og:description", content: "Snow, pistes, prices, comparisons. No filter." },
      { property: "og:image", content: cover },
    ],
  }),
  component: () => (
    <ArticlePage
      eyebrow="Chapter II · Winter"
      title="Is skiing in Montenegro actually worth it?"
      intro="Short answer: yes — if you understand what you're coming for. Rozaje is not St. Anton. It is something quieter, smaller, and at a fraction of the price."
      cover={cover}
      pros={[
        "Reliable snow December through April",
        "Day pass under €15 — children half price",
        "Empty pistes, no queues",
        "Genuine local food and hospitality",
      ]}
      cons={[
        "Only 5 lifts and ~7 km of pistes",
        "Limited après-ski scene",
        "Best for intermediates, not racers",
        "Bring cash — many places don't take cards",
      ]}
      sections={[
        {
          heading: "How much snow, really?",
          body: (
            <>
              <p>
                Hajla sits at 1,800 m and benefits from the Adriatic-Continental snow line. In a
                normal winter, the upper pistes hold cover from late December to mid-April. Lower
                runs may thin in late February — locals usually point you uphill on those days.
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
              A six-day ski pass in Rozaje is roughly €70. The same pass in Sölden is €375. Add a
              €40/night apartment vs. €180, and a week here costs about a third of an Austrian
              equivalent — without sacrificing the mountain itself.
            </p>
          ),
        },
        {
          heading: "Who Rozaje is right for",
          body: (
            <p>
              Families. Intermediates. People tired of crowds. Anyone who values the morning
              espresso with the lift attendant more than a heated gondola seat. If you need
              twenty-five black runs and a Michelin restaurant at altitude, this isn't it — and
              we'd rather you know now.
            </p>
          ),
        },
      ]}
    />
  ),
});
