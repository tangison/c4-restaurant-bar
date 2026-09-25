"use client";

import { useState } from "react";
import { FAQS } from "@/data/site";
import { Reveal } from "./reveal";
import { openDock } from "./nav";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[34%_1fr] lg:gap-16">
        <div className="flex flex-col lg:justify-between">
          <Reveal>
            <h2 id="faq-heading" className="display text-3xl text-c4-navy sm:text-4xl">
              Good to know
            </h2>
            <p className="mt-4 max-w-prose leading-relaxed text-c4-ink/75">
              The questions we hear at the counter, answered. Anything else,
              WhatsApp us and a person replies.
            </p>
          </Reveal>
          <Reveal delay={1} className="mt-8 lg:mt-10">
            <button
              type="button"
              onClick={() => openDock()}
              className="inline-flex items-center gap-2.5 rounded-full bg-c4-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-c4-navy-deep"
            >
              Book a table
            </button>
          </Reveal>
        </div>

        <Reveal delay={1}>
          <ul className="space-y-2.5">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <li
                  key={f.q}
                  className={`rounded-xl border transition-colors duration-300 ${
                    isOpen ? "border-c4-grey/40 bg-c4-paper" : "border-transparent bg-transparent"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
                  >
                    <span className="text-base font-semibold text-c4-navy">{f.q}</span>
                    <span
                      aria-hidden="true"
                      className={`relative h-5 w-5 shrink-0 text-c4-blue-deep transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded-full bg-current" />
                      <span className="absolute left-1/2 top-0 h-5 w-0.5 -translate-x-1/2 rounded-full bg-current" />
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 pb-5 pr-8 text-sm leading-relaxed text-c4-ink/70 sm:px-5">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
