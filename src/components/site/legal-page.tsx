import { SITE } from "@/data/site";
import type { LegalSection } from "@/data/legal";

// Shared layout for the terms and privacy pages: numbered jump list,
// numbered sections, plain language, floating-nav aware scroll offsets.
export function LegalPage({
  sections,
  heading,
  intro,
}: {
  sections: LegalSection[];
  heading: string;
  intro: string;
}) {
  return (
    <div className="bg-c4-paper pb-20 pt-28 sm:pt-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-c4-blue-deep">
          {SITE.legalName}
        </p>
        <h1 className="display mt-3 text-4xl text-c4-navy sm:text-5xl">{heading}</h1>
        <p className="mt-4 text-sm leading-relaxed text-c4-ink/70">{intro}</p>
        <ol className="mt-10 space-y-3">
          {sections.map((s, i) => (
            <li key={s.title}>
              <a
                href={`#s-${i + 1}`}
                className="group flex items-baseline gap-3 text-sm font-semibold text-c4-navy"
              >
                <span className="price-row text-xs text-c4-ink/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="underline decoration-c4-grey/60 underline-offset-4 group-hover:decoration-c4-navy">
                  {s.title}
                </span>
              </a>
            </li>
          ))}
        </ol>
        <div className="mt-12 space-y-10">
          {sections.map((s, i) => (
            <section key={s.title} id={`s-${i + 1}`} className="scroll-mt-28">
              <h2 className="display flex items-baseline gap-3 text-xl text-c4-navy sm:text-2xl">
                <span className="price-row text-sm text-c4-blue">{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </h2>
              <div className="mt-3 space-y-3">
                {s.body.map((p, j) => (
                  <p key={j} className="text-sm leading-relaxed text-c4-ink/80">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
