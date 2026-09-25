import Link from "next/link";
import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Story } from "@/components/site/story";
import { Footer } from "@/components/site/footer";
import { ORDER_MSG, waLink } from "@/data/site";
import { WhatsAppGlyph } from "@/components/site/whatsapp-glyph";

export default function Home() {
  return (
    <>
      <a
        href="/menu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-c4-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to the menu
      </a>
      <Nav />
      <main className="pt-20">
        <Hero />
        <Story />
        {/* Short route band: the least words possible, the fastest taps. */}
        <section aria-label="Where to next" className="bg-c4-navy-deep py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <p className="display text-3xl text-white sm:text-4xl">
                  Hungry now? The coals are lit.
                </p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-c4-grey">
                  Four menus, one kitchen, a full bar and a shaded patio.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/menu"
                  className="inline-flex items-center rounded-full bg-white px-6 py-3.5 text-base font-semibold text-c4-navy transition-colors hover:bg-c4-grey"
                >
                  See the menu
                </Link>
                <a
                  href={waLink(ORDER_MSG)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/40 px-6 py-3.5 text-base font-medium text-white transition-colors hover:border-white"
                >
                  <WhatsAppGlyph className="h-5 w-5" />
                  Order on WhatsApp
                </a>
              </div>
            </div>
            <nav aria-label="Site sections" className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
              <Link href="/bar" className="group bg-c4-navy-deep px-6 py-7 transition-colors hover:bg-c4-navy">
                <span className="display block text-xl text-white">The Bar</span>
                <span className="mt-2 block text-sm text-c4-grey">Draught, wine, gin, cocktails</span>
                <span className="mt-4 inline-block text-sm font-semibold text-c4-blue group-hover:text-white" aria-hidden="true">
                  Pour &rarr;
                </span>
              </Link>
              <Link href="/gallery" className="group bg-c4-navy-deep px-6 py-7 transition-colors hover:bg-c4-navy">
                <span className="display block text-xl text-white">Gallery</span>
                <span className="mt-2 block text-sm text-c4-grey">Plates from the pass</span>
                <span className="mt-4 inline-block text-sm font-semibold text-c4-blue group-hover:text-white" aria-hidden="true">
                  Look &rarr;
                </span>
              </Link>
              <Link href="/visit" className="group bg-c4-navy-deep px-6 py-7 transition-colors hover:bg-c4-navy">
                <span className="display block text-xl text-white">Find us</span>
                <span className="mt-2 block text-sm text-c4-grey">Map, hours, good to know</span>
                <span className="mt-4 inline-block text-sm font-semibold text-c4-blue group-hover:text-white" aria-hidden="true">
                  Go &rarr;
                </span>
              </Link>
            </nav>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
