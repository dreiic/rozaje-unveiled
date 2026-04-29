import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/winter", label: "Winter" },
  { to: "/summer", label: "Summer" },
  { to: "/stay", label: "Stay" },
  { to: "/prices", label: "Prices" },
  { to: "/journal", label: "Journal" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-serif text-xl tracking-tight md:text-2xl">Rozaje</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Three‑sixty‑five
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[13px] tracking-wide text-foreground/80 hover:text-foreground link-underline"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/journal"
          className="hidden items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-foreground/80 hover:text-foreground md:inline-flex"
        >
          Read the journal
          <span aria-hidden>→</span>
        </Link>

        <button
          aria-label="Menu"
          className="md:hidden text-sm tracking-wide"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="flex flex-col px-6 py-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 font-serif text-2xl"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
