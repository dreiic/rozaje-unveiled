import { useReveal } from "@/hooks/use-reveal";
import { rozajeImages } from "@/assets/rozaje365";

const cards = [
  { title: "Apartments", note: "Walking distance to the lifts.", img: rozajeImages.townValley },
  { title: "Ski passes", note: "Hajla resort, full season.", img: rozajeImages.lift },
  { title: "Tours", note: "Guided routes through Prokletije.", img: rozajeImages.snowRidge },
  { title: "Quads & Snowmobiles", note: "Offroad, year round.", img: rozajeImages.winterRoad },
];

export function ExperienceSection() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="relative bg-foreground text-background">
      <div className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-44">
        <div className="reveal mb-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3 eyebrow text-background/60">Monte i More</div>
          <div className="md:col-span-9">
            <h2 className="font-serif text-4xl leading-[1.05] md:text-6xl text-balance">
              When you're ready to stop reading and start being here.
            </h2>
            <p className="mt-6 max-w-xl text-base text-background/70 md:text-lg">
              Apartments, ski passes, hikes and rides — all bookable through Monte i More, our local
              partner. No middlemen, no markup.
            </p>
          </div>
        </div>

        <div className="reveal grid grid-cols-1 gap-px bg-background/15 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <a
              key={c.title}
              href="#"
              className="group relative block overflow-hidden bg-foreground"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-80 transition-all duration-[1400ms] ease-out group-hover:scale-[1.05] group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <div className="font-serif text-2xl">{c.title}</div>
                  <div className="mt-1 text-xs text-background/70">{c.note}</div>
                </div>
                <span className="text-xl text-background/80 transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="reveal mt-20 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-md text-sm text-background/60">
            We don't push offers inside articles. We just leave the door open — softly — at the end.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 border-b border-background/60 pb-2 text-[12px] uppercase tracking-[0.28em]"
          >
            Visit Monte i More <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
