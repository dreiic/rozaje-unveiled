import { Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";

const questions = [
  { q: "Is skiing in Montenegro actually worth it?", a: "Honest answer for first-timers, families, and Alps regulars.", to: "/journal" },
  { q: "Rozaje vs. Austria — where do you get more?", a: "A side-by-side cost and experience comparison.", to: "/journal" },
  { q: "How expensive is a week in Rozaje, really?", a: "We published our own receipts.", to: "/prices" },
  { q: "Where should you actually stay?", a: "Neighbourhoods ranked by distance, quiet and value.", to: "/stay" },
  { q: "Is there enough snow? Every year?", a: "What 10 winters of records actually show.", to: "/winter" },
  { q: "Can you visit in summer too?", a: "The unexpected case for hiking the Prokletije.", to: "/summer" },
];

export function PopularQuestions() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
        <div className="reveal mb-14">
          <div className="eyebrow mb-4">Popular questions</div>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl text-balance max-w-2xl">
            The six things travellers ask us most — answered without spin.
          </h2>
        </div>

        <ul className="reveal divide-y divide-border border-y border-border">
          {questions.map((q, i) => (
            <li key={i}>
              <Link
                to={q.to}
                className="group grid grid-cols-12 items-baseline gap-4 py-7 transition-colors duration-500 md:py-9"
              >
                <span className="col-span-1 font-serif text-sm text-muted-foreground md:text-base">
                  0{i + 1}
                </span>
                <h3 className="col-span-11 font-serif text-2xl leading-snug md:col-span-7 md:text-[34px] md:leading-[1.15]">
                  <span className="link-underline">{q.q}</span>
                </h3>
                <p className="col-span-11 col-start-2 text-sm text-muted-foreground md:col-span-3 md:col-start-9">
                  {q.a}
                </p>
                <span className="col-span-1 hidden text-right text-foreground/50 transition-transform duration-500 group-hover:translate-x-1 md:block">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
