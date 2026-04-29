import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  Link,
  useLocation,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { LanguageProvider } from "@/lib/language";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <div className="eyebrow mb-4">404</div>
        <h1 className="font-serif text-5xl">Dieser Weg existiert nicht.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Die gesuchte Seite ist von der Karte verschwunden.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-3 border-b border-foreground pb-2 text-[12px] uppercase tracking-[0.28em]"
          >
            Zur Startseite →
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Rožaje 365 — Alpine Projekt- und Erlebniswelt" },
      {
        name: "description",
        content:
          "Rožaje 365 repräsentiert Montenegros alpinen Norden durch Natur, Wintertourismus und langfristige Perspektive unter Monte i More.",
      },
      { name: "author", content: "Rožaje 365" },
      { property: "og:title", content: "Rožaje 365 — Alpines Montenegro" },
      {
        property: "og:description",
        content: "Eine alpine Projekt- und Erlebniswelt im Norden Montenegros.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Rožaje 365 — Alpines Montenegro" },
      {
        name: "twitter:description",
        content: "Natur, Wintertourismus und langfristige alpine Perspektive unter Monte i More.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,500;6..96,600;6..96,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const loc = useLocation();
  const isHome = loc.pathname === "/";
  return (
    <>
      <LanguageProvider>
        <Navbar />
        <main className={isHome ? "" : "pt-24"}>
          <Outlet />
        </main>
        <Footer />
      </LanguageProvider>
    </>
  );
}
