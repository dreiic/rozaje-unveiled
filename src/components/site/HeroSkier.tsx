import { useEffect, useRef, useState } from "react";
import { rozajeImages } from "@/assets/rozaje365";

/**
 * Minimal cinematic hero — full-bleed image with a slow zoom-out.
 * Editorial left-aligned label, asymmetric headline, no clutter.
 */
export function HeroSkier() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = wrapRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const total = el.offsetHeight - window.innerHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), total);
        setProgress(total > 0 ? scrolled / total : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Slow cinematic ease-out
  const ease = (t: number) => 1 - Math.pow(1 - t, 4);
  const p = ease(progress);

  // Zoom 1.45 → 1.0, gentle vertical settle
  const scale = 1.45 - p * 0.45;
  const imgY = 3 - p * 5;

  return (
    <section
      ref={wrapRef}
      className="relative"
      style={{ height: "200vh" }}
      aria-label="Rožaje — northern Montenegro"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-ink">
        {/* Full-bleed image */}
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            transform: `translate3d(0, ${imgY}%, 0) scale(${scale})`,
            transition: "transform 220ms linear",
          }}
        >
          <img
            src={rozajeImages.snowyForest}
            alt="Snow-covered ridges and pine forest in northern Montenegro at first light"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Very subtle bottom gradient for legibility — nothing more */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[rgba(15,12,8,0.55)] via-[rgba(15,12,8,0.15)] to-transparent" />

        {/* Top-left label */}
        <div className="absolute left-6 top-28 z-10 md:left-12 md:top-32">
          <div className="text-[10px] font-medium uppercase tracking-[0.36em] text-white/85">
            Rožaje — Northern Montenegro
          </div>
        </div>

        {/* Bottom-left headline — asymmetric, restrained */}
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="mx-auto max-w-[1500px] px-6 pb-16 md:px-12 md:pb-20">
            <div className="max-w-[640px]">
              <h1 className="font-serif text-[34px] font-light leading-[1.05] tracking-[-0.015em] text-white sm:text-[44px] md:text-[54px]">
                Real answers about winter,
                <br />
                nature &amp; life in the north.
              </h1>
              <p className="mt-6 max-w-sm text-[13px] font-light leading-relaxed text-white/75 md:text-sm">
                No marketing. No filters. Just honest insight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
