import type { Metadata } from "next";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { ScrollTop } from "@/components/site/scroll-top";
import { Reveal } from "@/components/site/reveal";
import { LogoNavy, LogoKnockout, IconNavy } from "@/components/site/logo";

export const metadata: Metadata = {
  title: "Brand",
  description:
    "The C4 Restaurant & Bar brand kit: colour tokens sampled from the logo artwork, typography, logo variants and usage rules.",
  alternates: { canonical: "/brand" },
};

const PALETTE = [
  { name: "Navy", hex: "#032b63", note: "Primary. Logo ink, headers, buttons. Sampled median from the 2026 logo artwork.", dark: true },
  { name: "Navy deep", hex: "#021a40", note: "Footer, drawer and overlay surfaces one step darker.", dark: true },
  { name: "Navy soft", hex: "#0a3a80", note: "Hover and gradient step between navy and blue.", dark: true },
  { name: "Blue accent", hex: "#2c79b4", note: "Accent from the client brand guide. Focus rings, links, details.", dark: true },
  { name: "Silver", hex: "#90939a", note: "Logo silver, measured. Dividers and large text on navy.", dark: false },
  { name: "Silver light", hex: "#c6c9cf", note: "Body text on navy surfaces, AA contrast.", dark: false },
  { name: "Grey", hex: "#bcbbb9", note: "Borders and dotted price leaders on light surfaces.", dark: false },
  { name: "Paper", hex: "#f7f6f3", note: "Warm light surface behind the light sections.", dark: false },
  { name: "Ink", hex: "#1e2430", note: "Body text on light surfaces.", dark: true },
  { name: "WhatsApp", hex: "#25d366", note: "Functional colour for the WhatsApp-first actions only.", dark: true },
];

const LOGO_RULES = [
  "Use the artwork as it ships. Never redraw, restyle, recolour or re-space the logo.",
  "Keep clear space around the lockup of at least the height of the C.",
  "Navy logo on paper or white. Knockout logo on navy or photography with a dark overlay.",
  "Minimum lockup height: 32px on screens, 20mm in print.",
  "The bowl mark can stand alone as an avatar or favicon. The full lockup cannot be cropped.",
];

export default function BrandPage() {
  return (
    <>
      <Nav />
      <main className="bg-c4-paper pb-20 pt-28 sm:pt-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-c4-blue-deep">
            Brand kit
          </p>
          <h1 className="display mt-3 text-4xl text-c4-navy sm:text-5xl">
            How C4 looks, and why
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-c4-ink/70">
            Every token on this page is measured from the client&rsquo;s own
            artwork: the navy and silver are medians sampled from the 2026 logo
            files, traced to vector for the web. Nothing here is invented.
          </p>

          {/* Logo variants */}
          <Reveal>
            <section aria-labelledby="logo-variants" className="mt-14">
              <h2 id="logo-variants" className="display text-2xl text-c4-navy">
                Logo variants
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-c4-grey/40 bg-white p-8">
                  <LogoNavy className="h-14 w-auto" />
                  <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-c4-ink/60">
                    Navy on light
                  </p>
                  <p className="mt-1 text-xs text-c4-ink/50">
                    <a href="/brand/logo-navy.svg" className="underline underline-offset-2 hover:text-c4-navy">logo-navy.svg</a>
                    {" / "}
                    <a href="/brand/logo-navy-800.png" className="underline underline-offset-2 hover:text-c4-navy">logo-navy-800.png</a>
                  </p>
                </div>
                <div className="rounded-3xl bg-c4-navy p-8">
                  <LogoKnockout className="h-14 w-auto" />
                  <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-c4-silver-light">
                    Knockout on navy
                  </p>
                  <p className="mt-1 text-xs text-c4-silver-light/70">
                    <a href="/brand/logo-knockout.svg" className="underline underline-offset-2 hover:text-white">logo-knockout.svg</a>
                    {" / "}
                    <a href="/brand/logo-silver.svg" className="underline underline-offset-2 hover:text-white">logo-silver.svg</a>
                  </p>
                </div>
                <div className="flex items-center gap-6 rounded-3xl border border-c4-grey/40 bg-white p-8">
                  <IconNavy className="h-20 w-auto" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-c4-ink/60">
                      Bowl mark, standalone
                    </p>
                    <p className="mt-1 text-xs text-c4-ink/50">
                      <a href="/brand/icon-navy.svg" className="underline underline-offset-2 hover:text-c4-navy">icon-navy.svg</a>
                      {" / "}
                      <a href="/brand/icon-knockout.svg" className="underline underline-offset-2 hover:text-c4-navy">icon-knockout.svg</a>
                    </p>
                  </div>
                </div>
                <div className="rounded-3xl border border-c4-grey/40 bg-white p-8">
                  <p className="display text-lg text-c4-navy">Poppins</p>
                  <p className="mt-1 text-xs text-c4-ink/60">
                    Display and body. Weights 400 to 800, loaded with font-display: swap.
                  </p>
                  <p className="display mt-4 text-3xl text-c4-navy">Aa 0123 N$</p>
                </div>
              </div>
            </section>
          </Reveal>

          {/* Usage rules */}
          <Reveal>
            <section aria-labelledby="usage" className="mt-14">
              <h2 id="usage" className="display text-2xl text-c4-navy">
                Logo rules
              </h2>
              <ul className="mt-5 space-y-2.5">
                {LOGO_RULES.map((r) => (
                  <li key={r} className="flex gap-3 text-sm leading-relaxed text-c4-ink/80">
                    <svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 shrink-0 text-c4-blue" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {r}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          {/* Palette */}
          <Reveal>
            <section aria-labelledby="palette" className="mt-14">
              <h2 id="palette" className="display text-2xl text-c4-navy">
                Colour tokens
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {PALETTE.map((c) => (
                  <div key={c.name} className="flex overflow-hidden rounded-2xl border border-c4-grey/40 bg-white">
                    <div className="w-20 shrink-0" style={{ background: c.hex }} aria-hidden="true" />
                    <div className="min-w-0 p-4">
                      <p className="text-sm font-bold text-c4-navy">
                        {c.name} <span className="price-row ml-1 font-mono text-xs font-medium text-c4-ink/50">{c.hex}</span>
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-c4-ink/65">{c.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* Typography */}
          <Reveal>
            <section aria-labelledby="type" className="mt-14">
              <h2 id="type" className="display text-2xl text-c4-navy">
                Typography hierarchy
              </h2>
              <div className="mt-6 space-y-5 rounded-3xl border border-c4-grey/40 bg-white p-6 sm:p-8">
                <div>
                  <p className="display text-3xl text-c4-navy sm:text-4xl">Display, Poppins Bold</p>
                  <p className="mt-1 text-xs text-c4-ink/50">Headlines. Weight 700, tight tracking, 1.04 line height.</p>
                </div>
                <div className="border-t border-c4-grey/40 pt-5">
                  <p className="text-base font-semibold text-c4-ink">Section subheads, Poppins SemiBold</p>
                  <p className="mt-1 text-xs text-c4-ink/50">Weight 600.</p>
                </div>
                <div className="border-t border-c4-grey/40 pt-5">
                  <p className="text-sm leading-relaxed text-c4-ink/80">
                    Body copy, Poppins Regular. Short lines, plain words, prices with tabular numerals so columns of N$ amounts line up.
                  </p>
                  <p className="mt-1 text-xs text-c4-ink/50">Weight 400, 1.6 to 1.7 line height.</p>
                </div>
              </div>
            </section>
          </Reveal>
        </div>
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
