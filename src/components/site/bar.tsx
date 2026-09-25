import Image from "next/image";
import { BAR, ORDER_MSG, waLink } from "@/data/site";
import { WhatsAppGlyph } from "./whatsapp-glyph";
import { Reveal } from "./reveal";

export function Bar() {
  return (
    <section id="bar" aria-labelledby="bar-heading" className="scroll-mt-16 bg-c4-navy py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-2xl border border-white/15">
            <Image
              src={BAR.photo}
              alt="A cold Hansa draught poured at the C4 bar"
              width={1200}
              height={901}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <h2 id="bar-heading" className="display text-3xl text-white sm:text-4xl">
              {BAR.headline}
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-5 max-w-prose leading-relaxed text-c4-grey">
              {BAR.copy}
            </p>
          </Reveal>
          <Reveal delay={2}>
            <ul className="price-row mt-8 divide-y divide-white/10 border-y border-white/15">
              {BAR.drinks.map((d) => (
                <li key={d.name} className="flex items-baseline py-3">
                  <span className="text-sm font-semibold text-white">{d.name}</span>
                  <span className="price-leader price-leader-dark" aria-hidden="true" />
                  <span className="hidden text-xs text-c4-grey/80 sm:inline">{d.detail}</span>
                  <span className="ml-3 text-sm font-semibold text-white sm:ml-4">{d.price}</span>
                </li>
              ))}
            </ul>
            <a
              href={waLink(ORDER_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-sm font-semibold text-c4-navy transition-colors hover:bg-c4-grey"
            >
              <WhatsAppGlyph className="h-4 w-4" />
              Ask what is pouring today
            </a>
            <p className="mt-3 text-xs text-c4-grey/70">
              Drink prices are market-related and can move with the suppliers.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
