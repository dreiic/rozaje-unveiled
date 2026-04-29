import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/rozaje-logo.png";
import { languages, useLanguage } from "@/lib/language";

const navCopy = {
  de: {
    links: [
      { to: "/", label: "Start" },
      { to: "/winter", label: "Winter" },
      { to: "/summer", label: "Sommer" },
      { to: "/stay", label: "Aufenthalt" },
      { to: "/prices", label: "Preise" },
      { to: "/exploration", label: "Exploration" },
      { to: "/journal", label: "Journal" },
      { to: "/contact", label: "Kontakt" },
    ],
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
      { to: "/exploration", label: "Exploration" },
      { to: "/journal", label: "Journal" },
      { to: "/contact", label: "Contact" },
    ],
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
      { to: "/exploration", label: "Istraživanje" },
      { to: "/journal", label: "Journal" },
      { to: "/contact", label: "Kontakt" },
    ],
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
      <div className="mx-auto flex max-w-[1520px] items-center justify-between px-5 py-5 md:px-10 lg:px-11">
        <Link to="/" className={`group flex items-center ${tone}`} aria-label="Rožaje 365">
          <img
            src={logo}
            alt="Rožaje 365"
            className="h-12 w-[158px] object-contain object-left md:h-14 md:w-[184px]"
          />
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-8 lg:flex">
          {copy.links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative pb-2 text-[10px] uppercase tracking-[0.3em] transition-colors xl:text-[11px] ${
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

          <button
            aria-label={open ? copy.close : copy.menu}
            className={`flex items-center gap-4 text-[11px] uppercase tracking-[0.36em] lg:hidden ${tone}`}
            onClick={() => setOpen((v) => !v)}
          >
            <span>{open ? copy.close : copy.menu}</span>
            <span className="flex h-4 w-7 flex-col justify-between" aria-hidden>
              <span
                className={`h-px w-full origin-center transition-transform duration-500 ${
                  open ? "translate-y-[7.5px] rotate-45" : ""
                } ${isOverlay ? "bg-white" : "bg-foreground"}`}
              />
              <span
                className={`h-px w-full origin-center transition-transform duration-500 ${
                  open ? "-translate-y-[7.5px] -rotate-45" : ""
                } ${isOverlay ? "bg-white" : "bg-foreground"}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-border/60 bg-background transition-[max-height,opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open ? "max-h-[720px] translate-y-0 opacity-100" : "max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-[1520px] flex-col px-7 py-8 md:px-10 lg:px-11">
          {copy.links.map((l, index) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`py-3 font-serif text-3xl transition-all duration-700 ${
                open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${index * 45}ms` : "0ms" }}
            >
              {l.label}
            </Link>
          ))}
          <div
            className={`mt-7 flex items-center gap-3 transition-all duration-700 md:hidden ${
              open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
            }`}
            style={{ transitionDelay: open ? `${copy.links.length * 45}ms` : "0ms" }}
          >
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
    </header>
  );
}
