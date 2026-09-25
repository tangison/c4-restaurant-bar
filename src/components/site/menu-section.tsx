"use client";

import { useState } from "react";
import Image from "next/image";
import { MENU, ORDER_MSG, waLink } from "@/data/site";
import { WhatsAppGlyph } from "./whatsapp-glyph";
import { Reveal } from "./reveal";

export function MenuSection() {
  const [active, setActive] = useState(MENU[0].id);
  const group = MENU.find((g) => g.id === active) ?? MENU[0];

  return (
    <section id="menu" aria-labelledby="menu-heading" className="scroll-mt-16 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <h2 id="menu-heading" className="display text-3xl text-c4-navy sm:text-4xl">
            Today&rsquo;s plates
          </h2>
          <p className="mt-4 max-w-prose leading-relaxed text-c4-ink/75">
            Four menus, one kitchen. Tap a plate to start a WhatsApp order, or
            send the whole list when you are ready. Prices in Namibian dollars.
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div role="tablist" aria-label="Menu sections" className="mt-8 flex flex-wrap gap-2">
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
          className="mt-10 grid gap-10 lg:grid-cols-[38%_1fr] lg:gap-14"
        >
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-2xl border border-c4-grey/40">
              <Image
                src={group.photo}
                alt={`${group.label} at C4 Restaurant & Bar`}
                width={900}
                height={676}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 38vw"
                priority
              />
            </div>
            <p className="mt-4 text-sm italic text-c4-ink/60">{group.note}</p>
            <a
              href={waLink(`Hi C4! I would like to order from the ${group.label.toLowerCase()} menu, please.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-c4-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-c4-navy-deep"
            >
              <WhatsAppGlyph className="h-4 w-4" />
              Order from this menu
            </a>
          </Reveal>

          <div>
            <ul className="divide-y divide-c4-grey/40 border-y border-c4-grey/40">
              {group.items.map((item) => (
                <li key={item.name} className="py-4">
                  <div className="price-row flex items-baseline">
                    <h3 className="text-base font-semibold text-c4-ink">
                      {item.name}
                      {item.tag && (
                        <span className="ml-2.5 rounded-full bg-c4-paper px-2.5 py-0.5 align-middle text-[11px] font-semibold uppercase tracking-wide text-c4-navy">
                          {item.tag}
                        </span>
                      )}
                    </h3>
                    <span className="price-leader" aria-hidden="true" />
                    <span className="text-base font-semibold text-c4-navy">
                      N$ {item.price}
                    </span>
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-4">
                    <p className="text-sm leading-relaxed text-c4-ink/65">{item.desc}</p>
                    <a
                      href={waLink(`Hi C4! I would like to order the ${item.name} (N$ ${item.price}), please.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-c4-grey/50 px-3 py-1.5 text-xs font-semibold text-c4-navy transition-colors hover:border-c4-navy hover:bg-c4-navy hover:text-white"
                      aria-label={`Order ${item.name} on WhatsApp`}
                    >
                      <WhatsAppGlyph className="h-3.5 w-3.5" />
                      Order
                    </a>
                  </div>
                </li>
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
