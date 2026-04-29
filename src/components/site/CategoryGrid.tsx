import { Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";

const cats = [
  { n: "01", title: "Skiing in Rozaje", note: "Pistes, snow, season, comparisons", to: "/winter" },
  { n: "02", title: "Accommodation", note: "Apartments, hotels, neighbourhoods", to: "/stay" },
  { n: "03", title: "Prices & Costs", note: "Real budgets, week by week", to: "/prices" },
  { n: "04", title: "Hiking & Summer", note: "Trails, peaks, alpine meadows", to: "/summer" },
  { n: "05", title: "Quads & Adventure", note: "Offroad through the north", to: "/journal" },
  { n: "06", title: "Snowmobiles", note: "Winter at full throttle", to: "/journal" },
  { n: "07", title: "Comparisons", note: "Rozaje vs. Austria, Bosnia, Kolašin", to: "/journal" },
  { n: "08", title: "Living in the North", note: "Moving, working, slowing down", to: "/journal" },
] as const;

export function CategoryGrid() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="border-y border-border bg-bone/60">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
        <div className="reveal mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="eyebrow mb-4">Topics</div>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl text-balance max-w-xl">
              Eight quiet doorways into the same mountain.
            </h2>
          </div>
          <Link to="/journal" className="text-[12px] uppercase tracking-[0.28em] link-underline">
            All articles →
          </Link>
        </div>

        <div className="reveal grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {cats.map((c) => (
            <Link
              key={c.n}
              to={c.to}
              className="group relative flex aspect-square flex-col justify-between bg-paper p-7 transition-all duration-700 hover:bg-background"
            >
              <span className="font-serif text-sm text-muted-foreground">{c.n}</span>
              <div>
                <div className="font-serif text-2xl leading-tight md:text-[28px]">{c.title}</div>
                <div className="mt-3 text-xs leading-relaxed text-muted-foreground">{c.note}</div>
                <div className="mt-6 text-[11px] uppercase tracking-[0.24em] text-foreground/70 transition-transform duration-500 group-hover:translate-x-1">
                  Read →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
