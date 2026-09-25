import Image from "next/image";
import { Reveal } from "./reveal";

// Three expandable cards. The long copy hides under the widget: scan the
// headline, open only what you care about.
const FACTS = [
  {
    k: "The patio",
    icon: "umbrella",
    v: "Shaded tables under the umbrellas, blue fence, sand between your feet and the street.",
  },
  {
    k: "The counter",
    icon: "cutlery",
    v: "Takeaway boxes packed to travel, from breakfast boxes to the braai pack for two.",
  },
  {
    k: "The bar",
    icon: "beer-mug",
    v: "Draught, wine, gin and cocktails. The kitchen closes, the patio does not have to.",
  },
];

export function Story() {
  return (
    <section aria-labelledby="story-heading" className="bg-c4-paper py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-3xl border border-c4-grey/40">
            <Image
              src="/photos/story-sign.webp"
              alt="The C4 Restaurant & Bar sign on the corner"
              width={900}
              height={675}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
          <div className="mt-4 w-3/4 overflow-hidden rounded-3xl border border-c4-grey/40 shadow-[0_20px_44px_-24px_rgba(3,43,99,0.4)] sm:ml-auto sm:mt-6 sm:w-2/3">
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
            <p className="mt-5 max-w-prose leading-relaxed text-c4-ink/80">
              On the corner of Aaron Edward and Kovambo Nujoma Street the braai
              smoke starts before noon and the patio keeps its tables long after
              the sun drops. Pap and chakalaka, wors off the coals, fresh hake,
              an oxtail that took its time.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-8 space-y-3">
              {FACTS.map((f) => (
                <details
                  key={f.k}
                  className="group rounded-2xl border border-c4-grey/40 bg-white px-5 py-4 transition-colors open:border-c4-navy/30 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-3.5 text-sm font-bold text-c4-navy">
                    <Image
                      src={`/icons3d/${f.icon}.webp`}
                      alt=""
                      width={34}
                      height={34}
                      className="h-9 w-9 object-contain"
                      aria-hidden="true"
                    />
                    <span className="flex-1">{f.k}</span>
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 text-c4-navy/60 transition-transform duration-200 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>
                  <p className="mt-3 pl-[3.4rem] text-sm leading-relaxed text-c4-ink/70">{f.v}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
