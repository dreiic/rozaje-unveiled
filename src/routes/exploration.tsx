import { createFileRoute } from "@tanstack/react-router";
import { Compass, ShieldCheck, Snowflake, Wrench } from "lucide-react";
import { rozajeImages } from "@/assets/rozaje365";
import quadImage from "@/assets/exploration-quad-real.jpg";
import safetyImage from "@/assets/exploration-safety-real.jpg";
import snowmobileImage from "@/assets/exploration-snowmobile-real.jpg";
import { useReveal } from "@/hooks/use-reveal";
import { useLanguage } from "@/lib/language";

const copy = {
  de: {
    metaTitle: "Montenegro Exploration — Schneemobil & Abenteuer | Rožaje 365",
    metaDescription:
      "Motorisierter Wintersport, unentdeckte Pfade, moderne Ausrüstung und geführte Abenteuer in den Bergen von Rožaje.",
    eyebrow: "Montenegro Exploration",
    title: "Die Wildnis rufen hören: Abenteuer in Rožaje",
    subtitle: "Der wahre Adrenalinkick beginnt hier, wo die Zivilisation endet.",
    intro:
      "In den ungezähmten Gipfeln von Rožaje finden Sie keinen Massentourismus. Hier begegnen Sie der rauen Kraft der Natur, gefrorenen Landschaften und der Freiheit, Ihre eigenen Spuren im frischen Pulverschnee zu hinterlassen. Es ist der Ort für jene, die das Echte suchen.",
    snowmobileTitle: "Schneemobil",
    snowmobileSubtitle: "Motorisierter Wintersport",
    snowmobileBody:
      "In den unberührten Bergen von Rožaje definieren wir Winterabenteuer neu. Motorisierter Wintersport bedeutet bei uns nicht Lärm, sondern der exklusive Zugang zu unberührten Gipfeln und tief verschneiten Tälern, die sonst unerreichbar wären. Erleben Sie die perfekte Symbiose aus moderner Technik und der rauen Stille der montenegrinischen Natur.",
    quadTitle: "Quad-Touren & Verleih",
    quadBody:
      "Erkunden Sie die faszinierende, naturbelassene Landschaft von Rožaje auf vier Rädern. Unsere geführten Quad-Touren führen Sie tief in die Berglandschaften, vorbei an kristallklaren Quellen und zu atemberaubenden Aussichtspunkten des Hajlas. Für erfahrene Abenteurer bieten wir einen flexiblen Einzelverleih modernster Fahrzeuge, um die Region in eigenem Tempo zu erkunden.",
    safetyTitle: "Sicherheit im Gelände",
    safetyBody:
      "Ihre Sicherheit ist unser höchstes Gebot. Jede Expedition in die unberührte Wildnis von Rožaje wird von staatlich zertifizierten Bergführern geleitet, die über jahrelange Erfahrung und tiefgreifende Ortskenntnisse verfügen.",
    safetySecond:
      "Wir nutzen modernste Sicherheitsausrüstung und GPS-Tracking, um ein Höchstmaß an Schutz zu garantieren. Vertrauen Sie auf unsere Erfahrung, während Sie die Freiheit der Berge genießen.",
    pathsTitle: "Unentdeckte Pfade",
    pathsBody:
      "In den Bergen rund um Rožaje finden Sie Landschaften, die in ihrer Urwüchsigkeit in Europa ihresgleichen suchen. Von den schroffen Gipfeln des Hajlas bis zu den sanften Hochebenen erzählt jede Route eine Geschichte der Stille.",
    pathsSecond:
      "Unsere markierten Wanderwege führen durch stark bewaldete Regionen und über klare Gebirgsbäche. Ein Paradies für Fotografen und Abenteurer, die das authentische Montenegro suchen.",
    gearTitle: "Technik & Ausrüstung",
    gearBody:
      "Präzision in jeder Kurve. Unsere Ausrüstung kombiniert modernste Technik mit den höchsten Sicherheitsstandards der Region.",
    cards: [
      {
        title: "Pisten-Performance",
        text: "Einsatz von High-Tech-Skis von Weltmarktführern für maximale Kontrolle.",
      },
      {
        title: "Moderne Flotte",
        text: "Unsere Quads und Schneemobile der neuesten Generation garantieren Leistung und Zuverlässigkeit.",
      },
      {
        title: "Sicherheits-Garantie",
        text: "Regelmäßige Wartung und professionelles GPS-Tracking für alle Exkursionen.",
      },
    ],
    finalTitle: "Ihr Abenteuer erwartet Sie.",
    finalBody:
      "Rožaje 365 ist Ihr Fenster zu einer unentdeckten Welt. Wir laden Sie ein, die Stille der Berge und die authentische Kraft der Natur neu zu definieren. Ein Erlebnis, das bleibt – 365 Tage im Jahr.",
    bookingTitle: "Bereit für Ihr Abenteuer?",
    bookingBody:
      "Buchen Sie heute Ihr privates Erlebnis in Montenegro. Wir führen Sie zu versteckten Orten, fernab des Massentourismus.",
    cta: "Anfrage senden",
    map: "Rožaje, Montenegro",
  },
  en: {
    metaTitle: "Montenegro Exploration — Snowmobiles & Adventure | Rožaje 365",
    metaDescription:
      "Motorized winter sports, undiscovered paths, modern gear and guided adventures in the mountains of Rožaje.",
    eyebrow: "Montenegro Exploration",
    title: "Hearing the Call of the Wild: Adventures in Rožaje",
    subtitle: "The true adrenaline kick begins here, where civilization ends.",
    intro:
      "In the untamed peaks of Rožaje, you will not find mass tourism. Here you will encounter the raw power of nature, frozen landscapes, and the freedom to leave your own tracks in the fresh powder snow. It is the place for those seeking the authentic.",
    snowmobileTitle: "Snowmobile",
    snowmobileSubtitle: "Motorized Winter Sports",
    snowmobileBody:
      "In the untouched mountains of Rožaje, we redefine winter adventure. For us, motorized winter sports signify not noise, but exclusive access to pristine peaks and deep snow-covered valleys that would otherwise remain unreachable. Experience the perfect symbiosis of state-of-the-art technology and the raw silence of Montenegrin nature.",
    quadTitle: "Quad Tours & Rental",
    quadBody:
      "Explore the fascinating, unspoiled landscape of Rožaje on four wheels. Our guided quad tours take you deep into the mountain landscapes, past crystal-clear springs and to breathtaking viewpoints on Hajla. For experienced adventurers, we offer flexible individual rentals of the latest vehicles to explore the region at your own pace.",
    safetyTitle: "Backcountry Safety",
    safetyBody:
      "Your safety is our top priority. Every expedition into the untouched wilderness of Rožaje is led by state-certified mountain guides with years of experience and profound local knowledge.",
    safetySecond:
      "We use state-of-the-art safety equipment and GPS tracking to guarantee the highest level of protection. Rely on our experience while you enjoy the freedom of the mountains.",
    pathsTitle: "Undiscovered Paths",
    pathsBody:
      "In the mountains around Rožaje, you will find landscapes that are unparalleled in their primal quality in Europe. From the rugged peaks of Hajla to the gentle plateaus, every route tells a story of silence.",
    pathsSecond:
      "Our marked hiking trails lead through heavily forested regions and over clear mountain streams. A paradise for photographers and adventurers seeking the authentic Montenegro.",
    gearTitle: "Technology & Gear",
    gearBody:
      "Precision in every turn. Our equipment combines state-of-the-art technology with the region's highest safety standards.",
    cards: [
      {
        title: "Slope Performance",
        text: "Using high-tech skis from global market leaders for maximum control.",
      },
      {
        title: "Modern Fleet",
        text: "Our latest generation of quads and snowmobiles guarantee power and reliability.",
      },
      {
        title: "Safety Guarantee",
        text: "Regular maintenance and professional GPS tracking for all excursions.",
      },
    ],
    finalTitle: "Your adventure awaits.",
    finalBody:
      "Rožaje 365 is your window to an undiscovered world. We invite you to redefine the silence of the mountains and the power of nature. An experience that stays – 365 days a year.",
    bookingTitle: "Ready for your adventure?",
    bookingBody:
      "Book your private experience in Montenegro today. We guide you to hidden places, far from mass tourism.",
    cta: "Send request",
    map: "Rožaje, Montenegro",
  },
  me: {
    metaTitle: "Crna Gora istraživanje — Motorne sanke i avantura | Rožaje 365",
    metaDescription:
      "Motorizovani zimski sportovi, neotkrivene staze, moderna oprema i vođene avanture u planinama Rožaja.",
    eyebrow: "Crna Gora istraživanje",
    title: "Slušajući poziv divljine: Avanture u Rožaju",
    subtitle: "Pravi adrenalinski nalet počinje ovdje, gdje se civilizacija završava.",
    intro:
      "Na neukroćenim vrhovima Rožaja nećete naći masovni turizam. Ovdje ćete se susresti sa sirovom snagom prirode, zaleđenim pejzažima i slobodom da ostavite sopstvene tragove u svježem prahu snijega. To je mjesto za one koji traže autentičnost.",
    snowmobileTitle: "Motorne sanke",
    snowmobileSubtitle: "Motorizovani zimski sportovi",
    snowmobileBody:
      "U netaknutim planinama Rožaja ponovo definišemo zimsku avanturu. Za nas motorizovani zimski sportovi ne znače buku, već ekskluzivan pristup nedirnutim vrhovima i duboko snijegom pokrivenim dolinama koje bi inače bile nedostupne. Doživite savršenu simbiozu moderne tehnologije i iskonske tišine crnogorske prirode.",
    quadTitle: "Quad ture i iznajmljivanje",
    quadBody:
      "Istražite fascinantne, netaknute predjele Rožaja na četiri točka. Naše vođene kvad ture vode vas duboko u planinske predjele, pored kristalno čistih izvora i do nevjerovatnih vidikovaca na Hajli. Za iskusne avanturiste nudimo fleksibilno individualno iznajmljivanje najsavremenijih vozila za istraživanje regiona sopstvenim tempom.",
    safetyTitle: "Bezbjednost na terenu",
    safetyBody:
      "Vaša bezbjednost je naš najveći prioritet. Svaku ekspediciju u netaknutu divljinu Rožaja vode državno sertifikovani planinski vodiči sa dugogodišnjim iskustvom i dubokim poznavanjem terena.",
    safetySecond:
      "Koristimo najsavremeniju sigurnosnu opremu i GPS praćenje kako bismo garantovali najviši nivo zaštite. Oslonite se na naše iskustvo dok uživate u slobodi planina.",
    pathsTitle: "Neotkrivene staze",
    pathsBody:
      "U planinama oko Rožaja naći ćete predjele koji su po svojoj iskonskoj ljepoti rijetki u Evropi. Od krševitih vrhova Hajle do mekih visoravni, svaka ruta priča priču o tišini.",
    pathsSecond:
      "Naše označene planinarske staze vode kroz veoma pošumljena područja i preko čistih planinskih potoka. Raj za fotografe i avanturiste koji traže autentičnu Crnu Goru.",
    gearTitle: "Tehnika i oprema",
    gearBody:
      "Preciznost u svakoj krivini. Naša oprema kombinuje najsavremeniju tehnologiju sa najvišim bezbjednosnim standardima regiona.",
    cards: [
      {
        title: "Performanse na stazama",
        text: "Korišćenje visokotehnoloških skija svjetskih lidera na tržištu za maksimalnu kontrolu.",
      },
      {
        title: "Moderna flota",
        text: "Naša najnovija generacija kvadova i motornih sanki garantuje snagu i pouzdanost.",
      },
      {
        title: "Garancija bezbjednosti",
        text: "Redovno održavanje i profesionalno GPS praćenje za sve ekskurzije.",
      },
    ],
    finalTitle: "Vaša avantura vas čeka.",
    finalBody:
      "Rožaje 365 je vaš prozor u neotkriveni svijet. Pozivamo vas da ponovo definišete tišinu planina i moć prirode. Iskustvo koje ostaje – 365 dana u godini.",
    bookingTitle: "Spremni za vašu avanturu?",
    bookingBody:
      "Rezervišite svoje privatno iskustvo u Crnoj Gori danas. Vodimo vas do skrivenih mjesta, daleko od masovnog turizma.",
    cta: "Pošalji upit",
    map: "Rožaje, Crna Gora",
  },
} as const;

const cardIcons = [Snowflake, Wrench, ShieldCheck] as const;

export const Route = createFileRoute("/exploration")({
  head: () => ({
    meta: [
      { title: copy.de.metaTitle },
      { name: "description", content: copy.de.metaDescription },
      { property: "og:title", content: copy.de.metaTitle },
      { property: "og:description", content: copy.de.metaDescription },
      { property: "og:image", content: rozajeImages.winterRoad },
    ],
  }),
  component: Exploration,
});

function Exploration() {
  const ref = useReveal<HTMLDivElement>();
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <div ref={ref} className="bg-background">
      <header className="mx-auto max-w-[1100px] px-6 pt-20 md:px-10 md:pt-32">
        <div className="reveal">
          <div className="eyebrow mb-6">{t.eyebrow}</div>
          <h1 className="font-serif text-[40px] leading-[1.05] text-balance md:text-[72px]">
            {t.title}
          </h1>
          <p className="mt-8 max-w-3xl font-serif text-2xl leading-tight text-foreground/86 md:text-4xl">
            {t.subtitle}
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/75 md:text-xl">
            {t.intro}
          </p>
        </div>
      </header>

      <div className="mx-auto mt-16 max-w-[1400px] px-6 md:px-10">
        <div className="reveal overflow-hidden">
          <img
            src={rozajeImages.winterRoad}
            alt={t.title}
            loading="lazy"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      </div>

      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-6 md:grid-cols-12 md:px-12">
          <div className="reveal md:col-span-6">
            <div className="relative h-[68vh] min-h-[500px] overflow-hidden">
              <img
                src={snowmobileImage}
                alt={t.snowmobileTitle}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="reveal flex flex-col justify-center md:col-span-5 md:col-start-8">
            <div className="eyebrow mb-6">{t.snowmobileSubtitle}</div>
            <h2 className="font-serif text-[clamp(3.2rem,7vw,7.5rem)] leading-[0.86]">
              {t.snowmobileTitle}
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              {t.snowmobileBody}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-6 md:grid-cols-12 md:px-12">
          <div className="reveal flex flex-col justify-center md:col-span-5">
            <div className="eyebrow mb-6">{t.eyebrow}</div>
            <h2 className="font-serif text-[clamp(3rem,6vw,6.5rem)] leading-[0.9]">
              {t.quadTitle}
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              {t.quadBody}
            </p>
          </div>
          <div className="reveal md:col-span-6 md:col-start-7">
            <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
              <img
                src={quadImage}
                alt={t.quadTitle}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-6 md:grid-cols-12 md:px-12">
          <div className="reveal md:col-span-5">
            <div className="relative h-[72vh] min-h-[520px] overflow-hidden">
              <img
                src={rozajeImages.snowyForest}
                alt={t.pathsTitle}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="reveal flex flex-col justify-center md:col-span-6 md:col-start-7">
            <div className="eyebrow mb-6">{t.eyebrow}</div>
            <h2 className="font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.9]">{t.pathsTitle}</h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>{t.pathsBody}</p>
              <p>{t.pathsSecond}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">
          <div className="reveal grid gap-8 md:grid-cols-12">
            <div className="eyebrow md:col-span-3">{t.gearTitle}</div>
            <p className="font-serif text-[clamp(2.5rem,5.5vw,5.8rem)] leading-[0.94] md:col-span-9">
              {t.gearBody}
            </p>
          </div>
          <div className="mt-16 grid border-y border-border md:grid-cols-3">
            {t.cards.map((card, index) => {
              const Icon = cardIcons[index];
              return (
                <div key={card.title} className="reveal border-border py-10 md:border-r md:px-9">
                  <Icon className="mb-14 h-7 w-7 text-[color:var(--gold)]" strokeWidth={1.4} />
                  <h3 className="font-serif text-4xl leading-none">{card.title}</h3>
                  <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    {card.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-6 md:grid-cols-12 md:px-12">
          <div className="reveal md:col-span-5">
            <div className="relative h-[68vh] min-h-[480px] overflow-hidden">
              <img
                src={safetyImage}
                alt={t.safetyTitle}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(5,10,16,0.52))]" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
                <ShieldCheck className="h-7 w-7" strokeWidth={1.4} />
                <span className="text-[11px] uppercase tracking-[0.28em]">{t.safetyTitle}</span>
              </div>
            </div>
          </div>
          <div className="reveal flex flex-col justify-center md:col-span-6 md:col-start-7">
            <div className="eyebrow mb-6">{t.eyebrow}</div>
            <h2 className="font-serif text-[clamp(3rem,6vw,6.5rem)] leading-[0.9]">
              {t.safetyTitle}
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>{t.safetyBody}</p>
              <p>{t.safetySecond}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen overflow-hidden bg-ink text-white">
        <img
          src={rozajeImages.snowRidge}
          alt={t.finalTitle}
          className="absolute inset-0 h-full w-full object-cover opacity-48"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,16,0.34),rgba(5,10,16,0.92))]" />
        <div className="relative z-10 mx-auto grid min-h-screen max-w-[1500px] content-end gap-10 px-6 py-16 md:grid-cols-12 md:px-12">
          <div className="reveal md:col-span-8">
            <h2 className="font-serif text-[clamp(3.5rem,8vw,8rem)] leading-[0.86]">
              {t.finalTitle}
            </h2>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/72 md:text-xl">
              {t.finalBody}
            </p>
          </div>
          <div className="reveal border border-white/18 bg-white/[0.05] p-7 backdrop-blur md:col-span-4 md:self-end">
            <Compass className="mb-8 h-7 w-7 text-[color:var(--gold)]" strokeWidth={1.4} />
            <h3 className="font-serif text-4xl leading-none">{t.bookingTitle}</h3>
            <p className="mt-5 text-sm leading-relaxed text-white/68">{t.bookingBody}</p>
            <a href="/contact" className="booking-cta booking-cta-light mt-8">
              <span>{t.cta}</span>
              <span className="booking-cta-arrow" aria-hidden>
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-paper py-14">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-3 px-6 text-[11px] uppercase tracking-[0.28em] text-muted-foreground md:flex-row md:items-center md:justify-between md:px-12">
          <span>{t.eyebrow}</span>
          <span>{t.map}</span>
        </div>
      </section>
    </div>
  );
}
