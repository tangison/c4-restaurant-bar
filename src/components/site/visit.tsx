import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { HOURS_ROWS, ORDER_MSG, SITE, waLink } from "@/data/site";
import { WhatsAppGlyph } from "./whatsapp-glyph";
import { Reveal } from "./reveal";
import { openDock } from "./nav";

const MAP_SRC =
  "https://maps.google.com/maps?q=" +
  encodeURIComponent("C4 Restaurant and Bar, " + SITE.streetAddress + ", " + SITE.locality + ", Namibia") +
  "&z=15&output=embed";

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("C4 Restaurant and Bar, " + SITE.streetAddress + ", " + SITE.locality + ", Namibia");

export function Visit() {
  return (
    <section id="visit" aria-labelledby="visit-heading" className="scroll-mt-24 bg-c4-paper py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <h2 id="visit-heading" className="display text-3xl text-c4-navy sm:text-4xl">
              Find the corner
            </h2>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-c4-ink/70">
              Look for the blue fence and the umbrellas. Parking on the sand in front.
            </p>
          </Reveal>

          <Reveal delay={1}>
            <dl className="mt-8 space-y-5">
              <div className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-c4-blue-deep" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-semibold text-c4-ink">Address</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-c4-ink/70">
                    {SITE.streetAddress}, {SITE.locality}, {SITE.country}
                    <br />
                    {SITE.postal}
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-c4-blue-deep" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-semibold text-c4-ink">Phone</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-c4-ink/70">
                    <a href={`tel:${SITE.phonePrimaryIntl}`} className="underline decoration-c4-grey/60 underline-offset-4 hover:text-c4-navy">
                      {SITE.phonePrimary}
                    </a>
                    {" / "}
                    <a href={`tel:${SITE.phoneSecondaryIntl}`} className="underline decoration-c4-grey/60 underline-offset-4 hover:text-c4-navy">
                      {SITE.phoneSecondary}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-c4-blue-deep" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-semibold text-c4-ink">Email</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-c4-ink/70">
                    <a href={`mailto:${SITE.email}`} className="underline decoration-c4-grey/60 underline-offset-4 hover:text-c4-navy">
                      {SITE.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-c4-blue-deep" aria-hidden="true" />
                <div>
                  <dt className="text-sm font-semibold text-c4-ink">Hours</dt>
                  <dd className="price-row mt-1 space-y-0.5 text-sm leading-relaxed text-c4-ink/70">
                    {HOURS_ROWS.map((r) => (
                      <p key={r.d}>
                        <span className="inline-block min-w-[13rem] font-medium text-c4-ink">{r.d}</span>
                        {r.h}
                      </p>
                    ))}
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={openDock}
                className="inline-flex items-center gap-2.5 rounded-full bg-c4-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-c4-navy-deep"
              >
                Order &amp; book
              </button>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-c4-navy/30 px-6 py-3 text-sm font-semibold text-c4-navy transition-colors hover:border-c4-navy"
              >
                Open directions in Google Maps
              </a>
              <a
                href={waLink(ORDER_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-c4-wa/40 bg-c4-wa/10 px-6 py-3 text-sm font-semibold text-c4-wa-deep transition-colors hover:bg-c4-wa/20"
              >
                <WhatsAppGlyph className="h-4 w-4" />
                Chat now
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={1} className="lg:self-start">
          <div className="overflow-hidden rounded-3xl border border-c4-grey/40 bg-white shadow-[0_24px_52px_-30px_rgba(3,43,99,0.35)]">
            <iframe
              src={MAP_SRC}
              title="Map to C4 Restaurant & Bar on the corner of Aaron Edward and Kovambo Nujoma Street, Swakopmund"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full border-0 sm:h-[26rem]"
              allowFullScreen
            />
            <p className="border-t border-c4-grey/40 px-5 py-3 text-xs text-c4-ink/60">
              Corner of Aaron Edward and Kovambo Nujoma Street, {SITE.locality}. Map opens on Google.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
