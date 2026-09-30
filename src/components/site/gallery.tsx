"use client";

import { useRef } from "react";
import Image from "next/image";
import { GALLERY } from "@/data/site";
import { Reveal } from "./reveal";

export function Gallery() {
  const rail = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = rail.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(el.clientWidth * 0.8, 280), behavior: "smooth" });
  };

  return (
    <section id="gallery" aria-label="Photos from the kitchen and patio" className="bg-c4-paper pb-20 pt-2 sm:pb-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal className="flex justify-end">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll gallery back"
              className="inline-flex h-11 w-11 items-center justify-center border border-c4-grey/50 text-c4-navy transition-colors hover:border-c4-navy"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll gallery forward"
              className="inline-flex h-11 w-11 items-center justify-center border border-c4-grey/50 text-c4-navy transition-colors hover:border-c4-navy"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </Reveal>
      </div>

      <Reveal delay={1}>
        <div
          ref={rail}
          className="rail mt-6 flex gap-4 overflow-x-auto px-5 pb-2 sm:px-6 lg:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] lg:[mask-image:linear-gradient(to_right,transparent,black_2rem,black_calc(100%-2rem),transparent)]"
        >
          {GALLERY.map((shot) => (
            <figure
              key={shot.src}
              className="w-64 shrink-0 overflow-hidden border border-c4-grey/40 bg-white transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-20px_rgba(34,58,108,0.5)] sm:w-72"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                width={800}
                height={600}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
                sizes="288px"
              />
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
