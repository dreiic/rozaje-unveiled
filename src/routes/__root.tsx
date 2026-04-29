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

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <div className="eyebrow mb-4">404</div>
        <h1 className="font-serif text-5xl">This trail doesn't exist.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for has wandered off the map.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-3 border-b border-foreground pb-2 text-[12px] uppercase tracking-[0.28em]"
          >
            Return home →
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
      { title: "Rozaje 365 — Honest answers about northern Montenegro" },
      {
        name: "description",
        content:
          "An editorial journal about winter, nature, prices and life in Rozaje, Montenegro. No marketing — just real answers, all year round.",
      },
      { name: "author", content: "Rozaje 365" },
      { property: "og:title", content: "Rozaje 365 — Honest answers about northern Montenegro" },
      {
        property: "og:description",
        content: "Real answers about skiing, hiking, prices and life in northern Montenegro.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }, {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    }, {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "",
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap",
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
      <Navbar />
      <main className={isHome ? "" : "pt-24"}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
