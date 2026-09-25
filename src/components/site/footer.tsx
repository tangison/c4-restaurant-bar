import Image from "next/image";
import { NAV, SITE } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-c4-navy-deep">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-16 sm:px-6 sm:pt-20">
        <div className="grid gap-10 md:grid-cols-[auto_1fr_auto] md:items-start">
          <div>
            <Image
              src="/brand/logo-reversed.png"
              alt="C4 Restaurant & Bar"
              width={180}
              height={52}
              className="h-11 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-c4-grey/80">
              {SITE.streetAddress}, {SITE.locality}
            </p>
          </div>

          <nav aria-label="Footer" className="md:justify-self-center">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-c4-grey transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm text-c4-grey/80 md:justify-self-end">
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
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-c4-grey/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE.legalName}. All rights reserved. This site stores no personal information; WhatsApp and map links open services with their own privacy policies.</p>
          <p className="shrink-0">
            Made by{" "}
            <a
              href="https://studio.tangison.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-c4-grey underline decoration-c4-grey/40 underline-offset-4 hover:text-white"
            >
              Tangison Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
