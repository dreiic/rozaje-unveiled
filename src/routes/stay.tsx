import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/site/ArticlePage";
import cover from "@/assets/stay.jpg";

export const Route = createFileRoute("/stay")({
  head: () => ({
    meta: [
      { title: "Where to stay in Rozaje — Apartments & neighbourhoods | Rozaje 365" },
      {
        name: "description",
        content:
          "Apartments vs. hotels, neighbourhoods ranked by distance, quiet and value — the honest guide to sleeping in Rozaje.",
      },
      { property: "og:title", content: "Where to stay in Rozaje" },
      { property: "og:image", content: cover },
    ],
  }),
  component: () => (
    <ArticlePage
      eyebrow="Chapter V · Accommodation"
      title="Apartment or hotel? An honest answer."
      intro="In Rozaje, apartments almost always win. They're calmer, better located, and they let you taste the rhythm of the town — the bakery in the morning, neighbours in the evening."
      cover={cover}
      pros={[
        "Apartments from €35/night",
        "Most are walking distance to the lifts",
        "Family-owned — local advice included",
        "Kitchens save €20–30/day on food",
      ]}
      cons={[
        "Hotels are limited and dated",
        "Book early in February peak weeks",
        "Very few have on-site wellness",
      ]}
      sections={[
        { heading: "Best neighbourhoods", body: <p>Centar for cafés and access; Bandžov for quiet and ski-in convenience; Carine for families. Each is no more than ten minutes' walk from the next.</p> },
        { heading: "What to look for", body: <p>South-facing balcony, real heating (not just electric panels), parking in winter, and a hot shower with proper water pressure. These four things separate a good week from a frustrating one.</p> },
        { heading: "Realistic prices", body: <p>€35–55 per night in low season, €60–90 in peak ski weeks. A two-bedroom apartment for four people often comes in cheaper than two hotel rooms anywhere in the Alps.</p> },
      ]}
    />
  ),
});
