import { useReveal } from "@/hooks/use-reveal";
import { rozajeImages } from "@/assets/rozaje365";

const stories = [
  {
    eyebrow: "Chapter I",
    kicker: "What Rožaje is really like",
    title: "A small town that doesn't try to impress you.",
    body: "Rožaje won't sell itself to you at the airport. There are no glossy lift stations, no chains of luxury chalets. What it offers instead is honesty — wide forests, pure snow, simple food, and people who still treat travel as an exchange rather than a transaction.",
    notes: ["Population ~9,000", "Elevation 1,030 m", "3.5 h from Podgorica"],
    img: rozajeImages.townValley,
    side: "left" as const,
  },
  {
    eyebrow: "Chapter II",
    kicker: "Winter in Rožaje",
    title: "Snow you can still trust.",
    body: "Hajla holds snow well into April most years. Pistes are short by Alpine standards, but uncrowded — you ski your own line, not someone else's queue. Expect modest infrastructure, very fair prices, and a quiet that reminds you why people started skiing in the first place.",
    notes: ["Season Dec → April", "Day pass ≈ €15", "5 lifts, 7 km of pistes"],
    img: rozajeImages.skiMountain,
    side: "right" as const,
  },
  {
    eyebrow: "Chapter III",
    kicker: "Summer & Nature",
    title: "The other half of the year nobody tells you about.",
    body: "When the snow goes, the Prokletije meadows turn green. Hike to glacier lakes, sleep in family-run katuns, and meet shepherds whose families have walked the same trails for centuries. Summer here is the version of the Alps that the Alps used to be.",
    notes: ["Hajla peak 2,403 m", "Wildflowers June → August", "Cool 22°C average"],
    img: rozajeImages.valleyMeadow,
    side: "left" as const,
  },
  {
    eyebrow: "Chapter IV",
    kicker: "Prices & reality",
    title: "What a week here actually costs.",
    body: "A comfortable week — apartment, food, ski pass, two activities — sits comfortably under what a single ski-pass costs in St. Anton. We publish real numbers, not brochure prices, so you can plan honestly.",
    notes: ["Apartment from €35/night", "Dinner ≈ €10–14", "Coffee €1.20"],
    img: rozajeImages.mountainRoad,
    side: "right" as const,
  },
  {
    eyebrow: "Chapter V",
    kicker: "Where to stay",
    title: "Wood, linen, mountain light through the window.",
    body: "Most travellers prefer apartments here over hotels. They're calmer, better located near the slopes, and they let you taste the rhythm of local life — buying bread in the morning, drinking rakija with neighbours in the evening.",
    notes: ["Apartments > Hotels", "Walk to lifts < 10 min", "Family-owned"],
    img: rozajeImages.forestRoad,
    side: "left" as const,
  },
];

export function StorySections() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="story" ref={ref} className="relative bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-44">
        <div className="reveal mb-24 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3 eyebrow">The Journal</div>
          <h2 className="md:col-span-9 font-serif text-4xl leading-[1.05] text-balance md:text-6xl">
            Five honest chapters about a place most travel writers have never bothered to visit.
          </h2>
        </div>

        <div className="space-y-32 md:space-y-44">
          {stories.map((s, i) => (
            <article key={i} className="grid items-center gap-10 md:grid-cols-12 md:gap-16">
              <div className={`reveal md:col-span-6 ${s.side === "right" ? "md:order-2" : ""}`}>
                <div className="relative overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.kicker}
                    loading="lazy"
                    className="aspect-[4/5] h-auto w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  <span>{s.eyebrow}</span>
                  <span>Rožaje · 365</span>
                </div>
              </div>

              <div className="reveal md:col-span-6">
                <div className="eyebrow mb-5">{s.kicker}</div>
                <h3 className="font-serif text-3xl leading-[1.08] text-balance md:text-5xl">
                  {s.title}
                </h3>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg">
                  {s.body}
                </p>
                <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6">
                  {s.notes.map((n) => (
                    <div key={n} className="text-xs leading-snug text-muted-foreground">
                      {n}
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
