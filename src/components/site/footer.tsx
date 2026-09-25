import Link from "next/link";
import { NAV, SITE } from "@/data/site";
import { LogoKnockout } from "./logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-c4-navy-deep">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-16 sm:px-6 sm:pt-20">
        <div className="grid gap-10 md:grid-cols-[auto_1fr_auto] md:items-start">
          <div>
            <LogoKnockout className="h-11 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-c4-silver-light/80">
              {SITE.streetAddress}, {SITE.locality}
            </p>
            <p className="mt-1 max-w-xs text-xs leading-relaxed text-c4-silver-light/60">
              {SITE.postal}
            </p>
          </div>

          <nav aria-label="Footer" className="md:justify-self-center">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 sm:flex sm:flex-wrap">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-c4-silver-light transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-4">
              <li>
                <Link href="/terms" className="text-xs text-c4-silver-light/80 transition-colors hover:text-white">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-xs text-c4-silver-light/80 transition-colors hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/brand" className="text-xs text-c4-silver-light/80 transition-colors hover:text-white">
                  Brand
                </Link>
              </li>
            </ul>
          </nav>

          <div className="text-sm text-c4-silver-light/80 md:justify-self-end">
            <p>
              <a href={`tel:${SITE.phonePrimaryIntl}`} className="hover:text-white">
                {SITE.phonePrimary}
              </a>
              {" / "}
              <a href={`tel:${SITE.phoneSecondaryIntl}`} className="hover:text-white">
                {SITE.phoneSecondary}
              </a>
            </p>
            <p className="mt-1">
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                {SITE.email}
              </a>
            </p>
            <p className="mt-1">{SITE.hours}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-c4-silver-light/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE.legalName}. All rights reserved. This site stores no personal information; WhatsApp and map links open services with their own privacy policies.</p>
          <p className="shrink-0">
            Made by{" "}
            <a
              href="https://studio.tangison.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-c4-silver-light underline decoration-c4-silver-light/40 underline-offset-4 hover:text-white"
            >
              Tangison Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
