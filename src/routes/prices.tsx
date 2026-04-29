import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/site/ArticlePage";
import cover from "@/assets/prices.jpg";

export const Route = createFileRoute("/prices")({
  head: () => ({
    meta: [
      { title: "What a week in Rozaje really costs | Rozaje 365" },
      {
        name: "description",
        content:
          "Real receipts, not brochure prices. A full week in Rozaje, Montenegro, broken down honestly — accommodation, food, ski pass, activities.",
      },
      { property: "og:title", content: "What a week in Rozaje really costs" },
      { property: "og:image", content: cover },
    ],
  }),
  component: () => (
    <ArticlePage
      eyebrow="Chapter IV · Prices"
      title="What a week here actually costs."
      intro="We added it up ourselves — for two people, in February, with skiing every day. The total surprised us, and probably will surprise you too."
      cover={cover}
      sections={[
        {
          heading: "The week, line by line",
          body: (
            <div className="space-y-4">
              <div className="border-y border-border divide-y divide-border">
                {[
                  ["Apartment, 7 nights", "€315"],
                  ["Ski passes (2 × 6 days)", "€140"],
                  ["Groceries & home cooking", "€85"],
                  ["Restaurants (4 dinners)", "€96"],
                  ["Coffee & cafés", "€28"],
                  ["Snowmobile tour", "€60"],
                  ["Local transport & taxis", "€35"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between py-3">
                    <span className="text-foreground/80">{k}</span>
                    <span className="font-serif text-lg">{v}</span>
                  </div>
                ))}
                <div className="flex items-baseline justify-between py-4">
                  <span className="font-serif text-xl">Total, two people</span>
                  <span className="font-serif text-3xl text-[color:var(--gold)]">€759</span>
                </div>
              </div>
            </div>
          ),
        },
        {
          heading: "Compared to Austria",
          body: (
            <p>
              The same itinerary in Sölden, conservatively: €1,260 for the apartment, €750 for ski
              passes, €600+ for food. About €2,800 for the same week — over three times the cost,
              for arguably less mountain to yourself.
            </p>
          ),
        },
        {
          heading: "How to spend even less",
          body: (
            <p>
              Travel midweek, cook at the apartment, buy a multi-day pass on day one, and ask
              your host for the family-run restaurants — they're cheaper, better, and warmer than
              anything on a tourist map.
            </p>
          ),
        },
      ]}
      ctaTitle="Want to lock in these prices?"
      ctaBody="Apartments and ski passes are bookable directly through Monte i More — at the local rate, without booking-platform fees."
    />
  ),
});
