import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-bone/60">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-serif text-3xl leading-tight md:text-4xl">
              Rozaje 365 — written from the mountain, not from a brochure.
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              An honest, year‑round journal about life, winter, nature and prices in northern
              Montenegro. When you decide to come, you can book apartments, ski passes and tours
              through Monte i More.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow mb-5">Read</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/winter" className="link-underline">Winter in Rozaje</Link></li>
              <li><Link to="/summer" className="link-underline">Summer & Nature</Link></li>
              <li><Link to="/stay" className="link-underline">Where to stay</Link></li>
              <li><Link to="/prices" className="link-underline">Prices & reality</Link></li>
              <li><Link to="/journal" className="link-underline">All articles</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow mb-5">Experience</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="link-underline">Apartments</a></li>
              <li><a href="#" className="link-underline">Ski passes</a></li>
              <li><a href="#" className="link-underline">Tours</a></li>
              <li><a href="#" className="link-underline">Quads</a></li>
              <li><a href="#" className="link-underline">Snowmobiles</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow mb-5">Contact</div>
            <ul className="space-y-2 text-sm">
              <li>Rožaje, Montenegro</li>
              <li><a href="mailto:hello@rozaje365.me" className="link-underline">hello@rozaje365.me</a></li>
              <li><a href="#" className="link-underline">Imprint</a></li>
              <li><a href="#" className="link-underline">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="editorial-rule mt-16" />

        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Rozaje 365. An editorial project, in partnership with Monte i More.</div>
          <div className="tracking-[0.22em] uppercase">Made slowly, in the mountains.</div>
        </div>
      </div>
    </footer>
  );
}
