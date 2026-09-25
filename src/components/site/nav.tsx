"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV, SITE, ORDER_MSG, waLink } from "@/data/site";
import { WhatsAppGlyph } from "./whatsapp-glyph";
import { LogoKnockout } from "./logo";

/**
 * Floating navigation: a solid navy card detached from the viewport edges,
 * SQUARE corners (owner instruction), framed by the 4px brand bar at the
 * extreme top. Zero layout shift: one fixed wrapper, constant height.
 * Mobile opens an offcanvas drawer from the right, also square.
 */
export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Drawer: escape key, scroll lock, focus handoff both ways.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      burgerRef.current?.focus();
    };
  }, [open]);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Fixed wrapper: brand bar + floating nav card, constant height. */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="brand-bar h-1 w-full" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-3 pt-2 sm:px-5">
          <div
            className={`flex h-16 items-center justify-between gap-4 bg-c4-navy px-3 transition-shadow duration-300 sm:px-5 ${
              scrolled
                ? "shadow-[0_14px_34px_-14px_rgba(26,46,87,0.85)]"
                : "shadow-[0_8px_24px_-16px_rgba(26,46,87,0.6)]"
            }`}
          >
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label="C4 Restaurant and Bar, home"
            >
              <LogoKnockout className="h-10 w-auto sm:h-11" />
            </Link>

            <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-white underline decoration-c4-blue decoration-2 underline-offset-8"
                      : "text-c4-grey hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
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
                href={`tel:${SITE.phoneLandlineIntl}`}
                className="hidden rounded-full border border-white/30 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white lg:inline-flex"
              >
                {SITE.phoneLandline}
              </a>
              <button
                type="button"
                ref={burgerRef}
                onClick={() => setOpen(true)}
                aria-expanded={open}
                aria-controls="mobile-nav"
                className="inline-flex h-10 w-10 items-center justify-center text-white transition-colors hover:bg-white/10 md:hidden"
              >
                <span className="sr-only">Open menu</span>
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Offcanvas drawer: navy panel from the right, square, staggered links. */}
      <div
        id="mobile-nav"
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] md:hidden ${open ? "" : "pointer-events-none"}`}
      >
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 cursor-default bg-c4-navy-deep/70 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`drawer-panel absolute bottom-0 right-0 top-0 flex w-[min(20rem,88vw)] flex-col bg-c4-navy-deep ${
            open ? "open" : ""
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <LogoKnockout className="h-9 w-auto" />
            <button
              type="button"
              ref={closeRef}
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center text-white transition-colors hover:bg-white/10"
            >
              <span className="sr-only">Close menu</span>
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <nav aria-label="Mobile" className="flex flex-1 flex-col px-5 py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`drawer-link border-b border-white/10 py-4 text-lg font-semibold ${
                  isActive(item.href) ? "text-c4-blue" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/visit#faq"
              onClick={() => setOpen(false)}
              className="drawer-link border-b border-white/10 py-4 text-lg font-semibold text-white"
            >
              Good to know
            </Link>
          </nav>

          <div className="drawer-link border-t border-white/10 px-5 py-5">
            <a
              href={waLink(ORDER_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-c4-navy transition-colors hover:bg-c4-grey"
            >
              <WhatsAppGlyph className="h-4 w-4" />
              Order on WhatsApp
            </a>
            <p className="mt-4 text-xs leading-relaxed text-c4-grey/80">
              Landline:{" "}
              <a href={`tel:${SITE.phoneLandlineIntl}`} className="font-semibold text-white">
                {SITE.phoneLandline}
              </a>
              <br />
              Mobile &amp; WhatsApp:{" "}
              <a href={`tel:${SITE.phoneMobileIntl}`} className="font-semibold text-white">
                {SITE.phoneMobile}
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
