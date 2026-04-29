import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { languages, useLanguage } from "@/lib/language";
import { Logo } from "@/components/site/Logo";

const navCopy = {
  de: {
    links: [
      { to: "/", label: "Start" },
      { to: "/winter", label: "Winter" },
      { to: "/summer", label: "Sommer" },
      { to: "/stay", label: "Aufenthalt" },
      { to: "/prices", label: "Preise" },
      { to: "/journal", label: "Journal" },
    ],
    about: "Über",
    menu: "Menü",
    close: "Schließen",
  },
  en: {
    links: [
      { to: "/", label: "Home" },
      { to: "/winter", label: "Winter" },
      { to: "/summer", label: "Summer" },
      { to: "/stay", label: "Stay" },
      { to: "/prices", label: "Prices" },
      { to: "/journal", label: "Journal" },
    ],
    about: "About",
    menu: "Menu",
    close: "Close",
  },
  me: {
    links: [
      { to: "/", label: "Home" },
      { to: "/winter", label: "Zima" },
      { to: "/summer", label: "Ljeto" },
      { to: "/stay", label: "Smještaj" },
      { to: "/prices", label: "Cijene" },
      { to: "/journal", label: "Journal" },
    ],
    about: "O nama",
    menu: "Meni",
    close: "Zatvori",
  },
} as const;

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const copy = navCopy[language];
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isOverlay = isHome && !scrolled && !open;
  const tone = isOverlay ? "text-white" : "text-foreground";
  const mutedTone = isOverlay ? "text-white/72" : "text-muted-foreground";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled || open
          ? "border-b border-border/60 bg-background/88 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1520px] items-center justify-between px-7 py-7 md:px-10 lg:px-11">
        <Logo light={isOverlay} size="md" />

        <nav className="hidden items-center gap-8 xl:gap-11 lg:flex">
          {copy.links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative pb-2 text-[11px] uppercase tracking-[0.38em] transition-colors ${
                isOverlay
                  ? "text-white/78 hover:text-white"
                  : "text-foreground/72 hover:text-foreground"
              }`}
              activeProps={{
                className: isOverlay
                  ? "text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-[color:var(--gold)]"
                  : "text-foreground after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-[color:var(--gold)]",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/#project"
            className={`pb-2 text-[11px] uppercase tracking-[0.38em] transition-colors ${
              isOverlay
                ? "text-white/78 hover:text-white"
                : "text-foreground/72 hover:text-foreground"
            }`}
          >
            {copy.about}
          </a>
        </nav>

        <div className={`flex items-center gap-5 ${tone}`}>
          <div className="hidden items-center gap-2 md:flex">
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => setLanguage(item.code)}
                className={`h-11 min-w-12 border px-3 text-[11px] uppercase tracking-[0.28em] transition-colors ${
                  language === item.code
                    ? isOverlay
                      ? "border-white/80 bg-white/10 text-white"
                      : "border-foreground/60 bg-foreground text-background"
                    : isOverlay
                      ? "border-transparent text-white/68 hover:text-white"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className={`hidden h-8 w-px md:block ${isOverlay ? "bg-white/18" : "bg-border"}`} />

          <button
            aria-label={open ? copy.close : copy.menu}
            className={`flex items-center gap-4 text-[11px] uppercase tracking-[0.36em] ${tone}`}
            onClick={() => setOpen((v) => !v)}
          >
            <span>{open ? copy.close : copy.menu}</span>
            <span className="flex h-4 w-7 flex-col justify-between" aria-hidden>
              <span className={`h-px w-full ${isOverlay ? "bg-white" : "bg-foreground"}`} />
              <span className={`h-px w-full ${isOverlay ? "bg-white" : "bg-foreground"}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background">
          <div className="mx-auto flex max-w-[1520px] flex-col px-7 py-8 md:px-10 lg:px-11">
            {copy.links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 font-serif text-3xl"
              >
                {l.label}
              </Link>
            ))}
            <a href="/#project" onClick={() => setOpen(false)} className="py-3 font-serif text-3xl">
              {copy.about}
            </a>
            <div className="mt-7 flex items-center gap-3 md:hidden">
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setLanguage(item.code)}
                  className={`h-10 border px-4 text-[11px] uppercase tracking-[0.28em] ${
                    language === item.code
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
