import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import winter from "@/assets/winter.jpg";
import summer from "@/assets/summer.jpg";
import stay from "@/assets/stay.jpg";
import prices from "@/assets/prices.jpg";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "The Journal — All articles | Rozaje 365" },
      {
        name: "description",
        content:
          "Every article on Rozaje 365 — honest, useful answers about winter, summer, prices and life in northern Montenegro.",
      },
      { property: "og:title", content: "The Journal — Rozaje 365" },
    ],
  }),
  component: Journal,
});

const articles = [
  { to: "/winter" as const, eyebrow: "Winter", title: "Is skiing in Montenegro actually worth it?", img: winter, read: "6 min" },
  { to: "/prices" as const, eyebrow: "Prices", title: "What a week in Rozaje really costs.", img: prices, read: "5 min" },
  { to: "/stay" as const, eyebrow: "Accommodation", title: "Apartment or hotel? An honest answer.", img: stay, read: "4 min" },
  { to: "/summer" as const, eyebrow: "Summer", title: "The other half of the year that nobody tells you about.", img: summer, read: "7 min" },
];

function Journal() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="bg-background">
      <header className="mx-auto max-w-[1400px] px-6 pt-20 md:px-10 md:pt-32">
        <div className="reveal grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3 eyebrow">The Journal</div>
          <h1 className="md:col-span-9 font-serif text-5xl leading-[1.05] md:text-7xl text-balance">
            Honest writing about a mountain most people overlook.
          </h1>
        </div>
      </header>

      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-x-12 md:gap-y-24">
          {articles.map((a, i) => (
            <Link
              key={a.to}
              to={a.to}
              className={`reveal group block ${i % 2 === 1 ? "md:mt-24" : ""}`}
            >
              <div className="overflow-hidden">
                <img
                  src={a.img}
                  alt={a.title}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                <span>{a.eyebrow}</span>
                <span>{a.read} read</span>
              </div>
              <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl link-underline">
                {a.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
