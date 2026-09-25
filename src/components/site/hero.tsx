"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { HERO_SLIDES, ORDER_MSG, SITE, waLink } from "@/data/site";
import { WhatsAppGlyph } from "./whatsapp-glyph";

const INTERVAL = 5200;

export function Hero() {
  const [index, setIndex] = useState(0);

  const go = useCallback((i: number) => {
    setIndex(((i % HERO_SLIDES.length) + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => go(index + 1), INTERVAL);
    return () => clearInterval(t);
  }, [index, go]);

  return (
    <section id="top" aria-label="Welcome to C4 Restaurant and Bar" className="relative">
      <div className="grid lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[45%_55%]">
        {/* Navy field */}
        <div className="flex flex-col justify-center bg-c4-navy px-5 pb-10 pt-8 sm:px-8 lg:pb-14 lg:pt-16">
          <div className="mx-auto w-full max-w-xl">
            <h1 className="display text-4xl text-white sm:text-5xl lg:text-[3.4rem]">
              The braai corner <br className="hidden lg:block" />
              of Swakopmund.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-c4-grey sm:text-lg">
              Flame-grilled plates, pap and chakalaka, fresh hake and a full
              bar on the patio. Order on WhatsApp and we will have it ready.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={waLink(ORDER_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-c4-navy transition-colors hover:bg-c4-grey"
              >
                <WhatsAppGlyph className="h-5 w-5" />
                Order on WhatsApp
              </a>
              <a
                href="#menu"
                className="inline-flex items-center rounded-full border border-white/40 px-6 py-3.5 text-base font-medium text-white transition-colors hover:border-white"
              >
                See the menu
              </a>
            </div>

            <p className="mt-6 text-sm text-c4-grey">
              Prefer to call?{" "}
              <a
                href={`tel:${SITE.phonePrimaryIntl}`}
                className="font-semibold text-white underline decoration-c4-grey/60 underline-offset-4 hover:decoration-white"
              >
                {SITE.phonePrimary}
              </a>
              {" or "}
              <a
                href={`tel:${SITE.phoneSecondaryIntl}`}
                className="font-semibold text-white underline decoration-c4-grey/60 underline-offset-4 hover:decoration-white"
              >
                {SITE.phoneSecondary}
              </a>
            </p>
          </div>
        </div>

        {/* Photo slider */}
        <div className="relative h-72 min-h-64 overflow-hidden sm:h-96 lg:h-auto">
          {HERO_SLIDES.map((slide, i) => (
            <div
              key={slide.src}
              className={`hero-slide absolute inset-0 ${i === index ? "active" : ""}`}
              aria-hidden={i !== index}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="hero-slide-img object-cover"
                priority={i === 0}
                quality={82}
              />
            </div>
          ))}
          <div className="absolute bottom-4 right-4 z-10 flex gap-2">
            {HERO_SLIDES.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show slide ${i + 1} of ${HERO_SLIDES.length}`}
                aria-current={i === index}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-7 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Facts strip */}
      <div className="bg-c4-navy-deep">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-2.5 px-5 py-5 text-sm text-c4-grey sm:px-6">
          <p>{SITE.streetAddress}, {SITE.locality}</p>
          <p className="hidden sm:inline" aria-hidden="true">·</p>
          <p>{SITE.hours}</p>
          <p className="hidden sm:inline" aria-hidden="true">·</p>
          <a
            href={waLink(ORDER_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
          >
            WhatsApp {SITE.whatsappDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
