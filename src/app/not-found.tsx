import Link from "next/link";
import { WhatsAppGlyph } from "@/components/site/whatsapp-glyph";
import { ORDER_MSG, SITE, waLink } from "@/data/site";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-c4-navy px-6 text-center">
      <p className="display text-7xl text-white">404</p>
      <h1 className="mt-4 text-xl font-semibold text-white">
        That plate is not on the menu.
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-c4-grey">
        The page you were looking for has moved or never existed. The
        restaurant, the bar and the patio are exactly where they always are.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-c4-navy transition-colors hover:bg-c4-grey"
        >
          Back to the corner
        </Link>
        <a
          href={waLink(ORDER_MSG)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white"
        >
          <WhatsAppGlyph className="h-4 w-4" />
          WhatsApp {SITE.whatsappDisplay}
        </a>
      </div>
    </main>
  );
}
