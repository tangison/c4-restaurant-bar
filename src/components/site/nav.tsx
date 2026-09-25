"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { NAV, SITE, ORDER_MSG, waLink, DOCK } from "@/data/site";
import { WhatsAppGlyph } from "./whatsapp-glyph";
import { LogoKnockout } from "./logo";

export function openDock() {
  window.dispatchEvent(new CustomEvent("c4:open-dock"));
}

const DRAWER_LINKS = [{ label: "Home", href: "#top" }, ...NAV];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Drawer side effects: scroll lock, escape, focus handoff.
  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    panelRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      burgerRef.current?.focus();
    };
  }, [menuOpen]);

  const closeTo = useCallback((href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      // let the drawer start closing before the jump
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 60);
    }
  }, []);

  return (
    <>
      {/* Brand bar: 4px accent strip sampled from the logo, pinned top edge */}
      <div aria-hidden="true" className="brand-bar fixed inset-x-0 top-0 z-[60] h-1" />

      <header
        className={`fixed inset-x-3 top-3 z-50 sm:inset-x-5 ${
          scrolled ? "" : ""
        }`}
      >
        <div
          className={`mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 rounded-2xl pl-4 pr-2.5 transition-all duration-300 sm:pl-5 sm:pr-3 ${
            scrolled
              ? "glass-navy shadow-[0_18px_44px_-18px_rgba(2,26,64,0.75)] ring-1 ring-white/10"
              : "bg-c4-navy/55 ring-1 ring-white/10 backdrop-blur-md"
          }`}
        >
          <a
            href="#top"
            className="flex shrink-0 items-center"
            aria-label="C4 Restaurant and Bar, back to top"
          >
            <LogoKnockout className="h-9 w-auto sm:h-10" />
          </a>

          <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-c4-silver-light transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openDock}
              className="hidden items-center gap-2 rounded-full bg-c4-wa px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-c4-wa-deep sm:inline-flex"
            >
              <WhatsAppGlyph className="h-4 w-4" />
              Order &amp; book
            </button>
            <a
              href={`tel:${SITE.phonePrimaryIntl}`}
              className="hidden rounded-full border border-white/25 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-white lg:inline-flex"
            >
              {SITE.phonePrimary}
            </a>
            <button
              type="button"
              ref={burgerRef}
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="offcanvas-nav"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
            >
              <span className="sr-only">Open menu</span>
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Offcanvas drawer */}
      <div
        id="offcanvas-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed inset-0 z-[70] ${menuOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <button
          type="button"
          tabIndex={menuOpen ? 0 : -1}
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 cursor-default bg-c4-navy-deep/60 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          ref={panelRef}
          tabIndex={-1}
          className={`drawer-panel absolute bottom-0 right-0 top-0 flex w-[86vw] max-w-sm flex-col overflow-y-auto bg-c4-navy-deep outline-none ${
            menuOpen ? "open" : ""
          }`}
        >
          <div className="flex items-center justify-between px-6 pb-2 pt-6">
            <LogoKnockout className="h-8 w-auto" />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
            >
              <span className="sr-only">Close menu</span>
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <nav aria-label="Offcanvas" className="mt-4 flex flex-col px-6">
            {DRAWER_LINKS.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => closeTo(item.href)}
                className="drawer-link group flex items-baseline gap-4 border-b border-white/10 py-4"
              >
                <span className="text-[11px] font-semibold tracking-[0.2em] text-c4-silver/70">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="display text-2xl text-white transition-colors group-hover:text-c4-silver-light">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-auto space-y-4 px-6 pb-8 pt-8">
            <button
              type="button"
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => {
                setMenuOpen(false);
                setTimeout(openDock, 120);
              }}
              className="flex w-full items-center justify-center gap-2.5 rounded-full bg-c4-wa px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-c4-wa-deep"
            >
              <WhatsAppGlyph className="h-4.5 w-4.5 h-5 w-5" />
              {DOCK.fab}
            </button>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${SITE.phonePrimaryIntl}`}
                tabIndex={menuOpen ? 0 : -1}
                className="rounded-2xl border border-white/15 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:border-white/40"
              >
                {SITE.phonePrimary}
              </a>
              <a
                href={`tel:${SITE.phoneSecondaryIntl}`}
                tabIndex={menuOpen ? 0 : -1}
                className="rounded-2xl border border-white/15 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:border-white/40"
              >
                {SITE.phoneSecondary}
              </a>
            </div>
            <p className="text-xs leading-relaxed text-c4-silver-light/80">
              {SITE.streetAddress}, {SITE.locality}
              <br />
              {SITE.hours}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
