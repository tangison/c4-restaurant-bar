// Brand logo components. Serve the vector files straight from /brand so the
// browser caches them; every variant was traced from the client's own artwork
// (see scripts/process_logo.py and /brand page for the palette provenance).
// Size is controlled by the caller's h-* class; no default height class here
// so utilities never conflict.

const LOGO_RATIO = "1889 / 585"; // full lockup, width / height

export function LogoKnockout({ className = "" }: { className?: string }) {
  return (
    <img
      src="/brand/logo-knockout.svg"
      alt="C4 Restaurant & Bar"
      width={188}
      height={58}
      className={className}
      style={{ aspectRatio: LOGO_RATIO, height: className.includes("h-") ? undefined : 58 }}
    />
  );
}

export function LogoNavy({ className = "" }: { className?: string }) {
  return (
    <img
      src="/brand/logo-navy.svg"
      alt="C4 Restaurant & Bar"
      width={188}
      height={58}
      className={className}
      style={{ aspectRatio: LOGO_RATIO, height: className.includes("h-") ? undefined : 58 }}
    />
  );
}

export function IconNavy({ className = "" }: { className?: string }) {
  return (
    <img
      src="/brand/icon-navy.svg"
      alt="C4 Restaurant & Bar bowl mark"
      width={44}
      height={49}
      className={className}
      style={{ aspectRatio: "454 / 510", height: className.includes("h-") ? undefined : 49 }}
    />
  );
}

export function IconKnockout({ className = "" }: { className?: string }) {
  return (
    <img
      src="/brand/icon-knockout.svg"
      alt=""
      aria-hidden="true"
      width={44}
      height={49}
      className={className}
      style={{ aspectRatio: "454 / 510", height: className.includes("h-") ? undefined : 49 }}
    />
  );
}
