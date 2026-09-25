"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { NAV, SITE, ORDER_MSG, waLink } from "@/data/site";
import { WhatsAppGlyph } from "./whatsapp-glyph";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 bg-c4-navy transition-shadow duration-300 ${
        scrolled ? "shadow-[0_6px_24px_-12px_rgba(26,46,87,0.7)]" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-3"
          aria-label="C4 Restaurant and Bar, back to top"
        >
          <Image
            src="/brand/logo-reversed.png"
            alt="C4 Restaurant & Bar"
            width={180}
            height={52}
            className="h-11 w-auto"
            priority
          />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-c4-grey transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink(ORDER_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-c4-navy transition-colors hover:bg-c4-grey sm:inline-flex"
          >
            <WhatsAppGlyph className="h-4 w-4" />
            Order
          </a>
          <a
            href={`tel:${SITE.phonePrimaryIntl}`}
            className="hidden rounded-full border border-white/30 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white lg:inline-flex"
          >
            {SITE.phonePrimary}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 md:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-white/10 transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col px-4 pb-4 pt-2">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-3 text-base font-medium text-white last:border-b-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href={waLink(ORDER_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-c4-navy"
          >
            <WhatsAppGlyph className="h-4 w-4" />
            Order on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
