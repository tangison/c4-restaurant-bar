"use client";

import Link from "next/link";
import { ORDER_MSG, SITE, waLink } from "@/data/site";
import { WhatsAppGlyph } from "@/components/site/whatsapp-glyph";

export default function ErrorBoundary({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-c4-navy px-6 text-center">
      <p className="display text-5xl text-white">Something burned.</p>
      <h1 className="mt-4 max-w-md text-lg font-medium leading-relaxed text-c4-grey">
        The page hit an error on our side. Try again, or order the direct way.
      </h1>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-c4-navy transition-colors hover:bg-c4-grey"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white"
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
