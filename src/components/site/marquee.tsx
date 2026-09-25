import { MARQUEE } from "@/data/site";

// Visual rhythm band: a slow CSS marquee of the house specialties.
// Pure CSS animation, pauses on hover, honours reduced motion.
export function Marquee() {
  const row = (ariaHidden: boolean) => (
    <div aria-hidden={ariaHidden || undefined} className="flex shrink-0 items-center">
      {MARQUEE.map((word) => (
        <span key={word + (ariaHidden ? "-b" : "-a")} className="flex items-center">
          <span className="display px-6 text-lg text-c4-silver-light sm:text-xl">{word}</span>
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-c4-blue" fill="currentColor" aria-hidden="true">
            <path d="M12 2c1.5 3.6 4.4 6.5 8 8-3.6 1.5-6.5 4.4-8 8-1.5-3.6-4.4-6.5-8-8 3.6-1.5 6.5-4.4 8-8Z" />
          </svg>
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee overflow-hidden border-y border-white/10 bg-c4-navy-deep py-4" role="presentation">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
