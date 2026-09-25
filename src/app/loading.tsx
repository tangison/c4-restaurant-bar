import { IconKnockout } from "@/components/site/logo";

// Branded route-loading screen: the bowl breathes while the segment loads.
// Pure CSS, no JS, honours prefers-reduced-motion via globals.css.
export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="fixed inset-0 z-[90] flex min-h-screen flex-col items-center justify-center bg-c4-navy"
    >
      <div className="relative">
        {/* three steam puffs above the bowl */}
        <div aria-hidden="true" className="absolute -top-7 left-1/2 flex -translate-x-1/2 gap-2.5">
          <span className="steam-puff block h-5 w-1.5 rounded-full bg-c4-grey/90" />
          <span className="steam-puff s2 block h-6 w-1.5 rounded-full bg-c4-grey/70" />
          <span className="steam-puff s3 block h-4.5 w-1.5 rounded-full bg-c4-grey/80" />
        </div>
        <IconKnockout className="bowl-breathe h-24 w-auto" />
      </div>
      <p className="display mt-8 text-2xl text-white">Lighting the coals</p>
      <p className="mt-2 text-xs uppercase tracking-[0.25em] text-c4-grey/70">
        C4 Restaurant &amp; Bar
      </p>
    </div>
  );
}
