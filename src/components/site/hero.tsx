"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HERO_SLIDES, SITE } from "@/data/site";
import { WhatsAppGlyph } from "./whatsapp-glyph";
import { openDock } from "./nav";

const INTERVAL = 5600;

const CHIPS = [
  { k: "Patio", v: "Shaded tables" },
  { k: "Braai", v: "Over the coals" },
  { k: "Bar", v: "Till late" },
  { k: "Takeaway", v: "Boxes to go" },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  // Progressive hero: slide 1 paints immediately, later slides load just
  // before their crossfade, keeping the initial transfer under budget.
  const [stage, setStage] = useState(1);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(2), 1600);
    const t2 = setTimeout(() => setStage(3), 3400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const go = useCallback(
    (i: number) => {
      setIndex(((i % HERO_SLIDES.length) + HERO_SLIDES.length) % HERO_SLIDES.length);
      setStage(HERO_SLIDES.length);
    },
    []
  );

  useEffect(() => {
    const t = setInterval(() => go(index + 1), INTERVAL);
    return () => clearInterval(t);
  }, [index, go]);

  const onPointerDown = (e: React.PointerEvent) => {
    touchX.current = e.clientX;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (touchX.current === null) return;
    const dx = e.clientX - touchX.current;
    if (Math.abs(dx) > 48) go(index + (dx < 0 ? 1 : -1));
    touchX.current = null;
  };

  return (
    <section
      id="top"
      aria-label="Welcome to C4 Restaurant and Bar"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-c4-navy"
    >
      {/* Full-bleed slider */}
      <div
        className="absolute inset-0"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`hero-slide absolute inset-0 ${i === index ? "active" : ""}`}
            aria-hidden={i !== index}
          >
            {i < stage && (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100vw"
                className="hero-slide-img object-cover"
                priority={i === 0}
                quality={82}
              />
            )}
          </div>
        ))}
        {/* Legibility gradients: navy floor rising to clear sky */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-c4-navy-deep via-c4-navy-deep/45 to-c4-navy/10"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-gradient-to-r from-c4-navy-deep/70 via-transparent to-transparent lg:block"
        />
      </div>

      {/* Slide controls */}
      <div className="absolute right-4 top-24 z-10 flex flex-col gap-2 sm:right-6 sm:top-28">
        {HERO_SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => go(i)}
            aria-label={`Show slide ${i + 1} of ${HERO_SLIDES.length}`}
            aria-current={i === index}
            className={`w-1 rounded-full transition-all duration-300 ${
              i === index ? "h-8 bg-white" : "h-4 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-10 pt-36 sm:px-6 sm:pb-14">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white ring-1 ring-white/20 backdrop-blur-sm">
          {SITE.tagline}
        </p>
        <h1 className="display max-w-3xl text-5xl text-white sm:text-6xl lg:text-7xl">
          Fire, smoke and the
          <span className="block text-c4-silver-light">cold drink waiting.</span>
        </h1>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={openDock}
            className="inline-flex items-center gap-2.5 rounded-full bg-c4-wa px-7 py-4 text-base font-semibold text-white shadow-[0_16px_40px_-14px_rgba(37,211,102,0.55)] transition-colors hover:bg-c4-wa-deep"
          >
            <WhatsAppGlyph className="h-5 w-5" />
            Order &amp; book
          </button>
          <a
            href="#menu"
            className="inline-flex items-center rounded-full bg-white/10 px-7 py-4 text-base font-semibold text-white ring-1 ring-white/30 backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            See the menu
          </a>
        </div>

        {/* Glass fact chips */}
        <ul className="mt-9 flex flex-wrap gap-2.5">
          {CHIPS.map((c) => (
            <li
              key={c.k}
              className="glass-light rounded-2xl px-4 py-2.5 text-c4-navy ring-1 ring-white/40"
            >
              <span className="block text-sm font-bold leading-tight">{c.k}</span>
              <span className="block text-xs leading-tight text-c4-ink/70">{c.v}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Facts strip */}
      <div className="relative z-10 border-t border-white/10 bg-c4-navy-deep/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-2.5 px-5 py-4 text-xs text-c4-silver-light sm:px-6 sm:text-sm">
          <p>{SITE.streetAddress}, {SITE.locality}</p>
          <p className="hidden sm:inline" aria-hidden="true">·</p>
          <p>{SITE.hours}</p>
          <p className="hidden sm:inline" aria-hidden="true">·</p>
          <a
            href={`tel:${SITE.phonePrimaryIntl}`}
            className="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
          >
            {SITE.phonePrimary}
          </a>
        </div>
      </div>
    </section>
  );
}
