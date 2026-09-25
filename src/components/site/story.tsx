import Image from "next/image";
import { Reveal } from "./reveal";

const FACTS = [
  { k: "The patio", v: "Shaded tables under the umbrellas, blue fence, sand between your feet and the street." },
  { k: "The counter", v: "Takeaway boxes packed to travel, from breakfast boxes to the braai pack for two." },
  { k: "The bar", v: "Draught, wine, gin and cocktails. The kitchen closes, the patio does not have to." },
];

export function Story() {
  return (
    <section aria-labelledby="story-heading" className="bg-c4-paper py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-2xl border border-c4-grey/40">
            <Image
              src="/photos/story-sign.webp"
              alt="The C4 Restaurant & Bar sign on the corner"
              width={900}
              height={675}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
          <div className="mt-4 w-3/4 overflow-hidden rounded-2xl border border-c4-grey/40 sm:ml-auto sm:mt-6 sm:w-2/3">
            <Image
              src="/photos/story-patio.webp"
              alt="Staff serving tables on the C4 patio"
              width={900}
              height={676}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 70vw, 30vw"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2 id="story-heading" className="display text-3xl text-c4-navy sm:text-4xl">
              A corner with a blue fence
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-6 max-w-prose leading-relaxed text-c4-ink/80">
              C4 Restaurant &amp; Bar sits on the corner of Aaron Edward and
              Kovambo Nujoma Street, behind the blue fence you have probably
              driven past. The umbrellas go up in the morning, the braai smoke
              starts before noon, and the patio keeps its tables long after the
              sun drops over the desert side of town.
            </p>
            <p className="mt-4 max-w-prose leading-relaxed text-c4-ink/80">
              We cook the food people actually want after a day on the beach or
              the site: pap and chakalaka, wors straight off the coals, fresh
              hake, an oxtail that took its time. Eat it here with a cold
              draught, or WhatsApp it in and take the box home.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <dl className="mt-8 divide-y divide-c4-grey/40 border-y border-c4-grey/40">
              {FACTS.map((f) => (
                <div key={f.k} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-4">
                  <dt className="text-sm font-semibold uppercase tracking-wide text-c4-navy">
                    {f.k}
                  </dt>
                  <dd className="text-sm leading-relaxed text-c4-ink/75">{f.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
