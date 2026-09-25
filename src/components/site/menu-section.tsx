"use client";

import { useState } from "react";
import Image from "next/image";
import { MENU, DOCK } from "@/data/site";
import { WhatsAppGlyph } from "./whatsapp-glyph";
import { Reveal } from "./reveal";
import { openDock } from "./nav";

function ItemRow({ item }: { item: { name: string; desc: string; price: number; tag?: string } }) {
  const [openDesc, setOpenDesc] = useState(false);

  const add = () =>
    window.dispatchEvent(
      new CustomEvent("c4:add-item", { detail: { name: item.name, price: item.price } })
    );

  return (
    <li className="py-3.5">
      <div className="price-row flex items-baseline gap-3">
        <button
          type="button"
          onClick={add}
          aria-label={`Add ${item.name} to the order`}
          className="inline-flex h-7 w-7 shrink-0 translate-y-1 items-center justify-center rounded-full border border-c4-grey/60 text-c4-navy transition-colors hover:border-c4-navy hover:bg-c4-navy hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path strokeLinecap="round" d="M12 5v14M5 12h14" />
          </svg>
        </button>
        <h3 className="text-base font-semibold text-c4-ink">
          {item.name}
          {item.tag && (
            <span className="ml-2.5 rounded-full bg-c4-paper px-2.5 py-0.5 align-middle text-[11px] font-semibold uppercase tracking-wide text-c4-navy">
              {item.tag}
            </span>
          )}
        </h3>
        <span className="price-leader" aria-hidden="true" />
        <span className="text-base font-semibold text-c4-navy">N$ {item.price}</span>
      </div>
      <button
        type="button"
        onClick={() => setOpenDesc((v) => !v)}
        aria-expanded={openDesc}
        className="mt-0.5 inline-flex items-center gap-1 pl-10 text-xs font-medium text-c4-ink/50 transition-colors hover:text-c4-navy"
      >
        {openDesc ? "Hide" : "What is in it"}
        <svg
          viewBox="0 0 24 24"
          className={`h-3.5 w-3.5 transition-transform duration-200 ${openDesc ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <p
        className={`overflow-hidden pl-10 text-sm leading-relaxed text-c4-ink/65 transition-[grid-template-rows] duration-300 ${
          openDesc ? "mt-1 grid grid-rows-[1fr]" : "grid grid-rows-[0fr]"
        }`}
      >
        <span className="min-h-0 overflow-hidden">{item.desc}</span>
      </p>
    </li>
  );
}

export function MenuSection() {
  const [active, setActive] = useState(MENU[0].id);
  const group = MENU.find((g) => g.id === active) ?? MENU[0];

  return (
    <section id="menu" aria-labelledby="menu-heading" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <h2 id="menu-heading" className="display text-3xl text-c4-navy sm:text-4xl">
            Today&rsquo;s plates
          </h2>
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-c4-ink/70">
            Tap the plus next to any plate to build your order. Prices in Namibian dollars, market-related.
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div role="tablist" aria-label="Menu sections" className="mt-7 flex flex-wrap gap-2">
            {MENU.map((g) => {
              const selected = g.id === active;
              return (
                <button
                  key={g.id}
                  role="tab"
                  id={`tab-${g.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${g.id}`}
                  onClick={() => setActive(g.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                    selected
                      ? "bg-c4-navy text-white"
                      : "border border-c4-grey/50 bg-transparent text-c4-navy hover:border-c4-navy"
                  }`}
                >
                  {selected && (
                    <Image
                      src={`/icons3d/${g.icon}.webp`}
                      alt=""
                      width={22}
                      height={22}
                      className="h-6 w-6 object-contain"
                      aria-hidden="true"
                    />
                  )}
                  {g.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div
          role="tabpanel"
          id={`panel-${group.id}`}
          aria-labelledby={`tab-${group.id}`}
          className="mt-10 grid gap-10 lg:grid-cols-[36%_1fr] lg:gap-14"
        >
          {/* Sticky visual card */}
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src={group.photo}
                alt={`${group.label} at C4 Restaurant & Bar`}
                width={900}
                height={1013}
                className="aspect-[4/4.5] h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 36vw"
                priority={false}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-c4-navy-deep/85 via-c4-navy-deep/10 to-transparent"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <Image
                  src={`/icons3d/${group.icon}.webp`}
                  alt=""
                  width={56}
                  height={56}
                  className="mb-3 h-14 w-14 object-contain drop-shadow-lg"
                  aria-hidden="true"
                />
                <p className="text-sm font-semibold leading-snug text-white">{group.note}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={openDock}
              className="mt-5 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-c4-wa px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-c4-wa-deep sm:w-auto"
            >
              <WhatsAppGlyph className="h-4 w-4" />
              {DOCK.orderTab}
            </button>
          </Reveal>

          <div>
            <ul className="divide-y divide-c4-grey/40 border-y border-c4-grey/40">
              {group.items.map((item) => (
                <ItemRow key={item.name} item={item} />
              ))}
            </ul>
            <p className="mt-5 text-sm text-c4-ink/60">
              Half portions for kids on most plates, on request. Allergies? Tell
              us on WhatsApp and the kitchen will work with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
