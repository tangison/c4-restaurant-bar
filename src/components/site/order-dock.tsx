"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MENU, BAR, DOCK, SITE, TIME_SLOTS } from "@/data/site";
import { WhatsAppGlyph } from "./whatsapp-glyph";

type DockItem = { name: string; price: number };
type Cart = Record<string, number>;

// Events the rest of the site can dispatch:
//   c4:open-dock  {tab?: "order" | "book"}   open the dock
//   c4:add-item   {name, price}              add one plate to the basket
type OpenDetail = { tab?: "order" | "book" };

const money = (n: number) => `N$ ${n.toLocaleString("en-NA")}`;

// Bar prices arrive as "N$ 40" strings; normalise once.
const DRINKS: DockItem[] = BAR.drinks.map((d) => ({
  name: d.name,
  price: Number(d.price.replace(/[^0-9.]/g, "")),
}));

const CATEGORIES = [
  ...MENU.map((g) => ({
    id: g.id,
    label: g.label,
    items: g.items.map((i) => ({ name: i.name, price: i.price })),
  })),
  { id: "bar", label: "From the bar", items: DRINKS },
];

export function OrderDock() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"order" | "book">("order");
  const [cat, setCat] = useState(CATEGORIES[0].id);
  const [cart, setCart] = useState<Cart>({});
  const [mode, setMode] = useState<"collect" | "eat-in">("collect");
  const [pulse, setPulse] = useState(false);
  const [shown, setShown] = useState(false);

  // Booking state
  const [day, setDay] = useState("");
  const [time, setTime] = useState("19:00");
  const [guests, setGuests] = useState(2);
  const [seat, setSeat] = useState<"Patio" | "Inside" | "Either">("Either");
  const [name, setName] = useState("");

  const panelRef = useRef<HTMLDivElement>(null);
  const fabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setShown(true), 900);
    return () => clearTimeout(t);
  }, []);

  const addItem = useCallback((item: DockItem) => {
    setCart((c) => ({ ...c, [item.name]: (c[item.name] ?? 0) + 1 }));
    setPulse(true);
    setTimeout(() => setPulse(false), 500);
  }, []);

  useEffect(() => {
    const onOpen = (e: Event) => {
      const detail = (e as CustomEvent<OpenDetail>).detail;
      if (detail?.tab) setTab(detail.tab);
      setOpen(true);
    };
    const onAdd = (e: Event) => {
      const item = (e as CustomEvent<DockItem>).detail;
      if (item?.name) {
        setTab("order");
        addItem(item);
      }
    };
    window.addEventListener("c4:open-dock", onOpen);
    window.addEventListener("c4:add-item", onAdd);
    return () => {
      window.removeEventListener("c4:open-dock", onOpen);
      window.removeEventListener("c4:add-item", onAdd);
    };
  }, [addItem]);

  // Escape + scroll lock + focus handoff
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    panelRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      fabRef.current?.focus();
    };
  }, [open]);

  const count = useMemo(
    () => Object.values(cart).reduce((a, b) => a + b, 0),
    [cart]
  );
  const total = useMemo(() => {
    const priceOf = new Map(
      CATEGORIES.flatMap((c) => c.items).map((i) => [i.name, i.price])
    );
    return Object.entries(cart).reduce(
      (sum, [nm, qty]) => sum + (priceOf.get(nm) ?? 0) * qty,
      0
    );
  }, [cart]);

  const today = new Date().toISOString().slice(0, 10);

  const sendOrder = () => {
    const lines = Object.entries(cart)
      .filter(([, q]) => q > 0)
      .map(([nm, q]) => `- ${q} x ${nm}`);
    if (lines.length === 0) return;
    const msg = [
      "Hi C4 Restaurant & Bar! I would like to order:",
      ...lines,
      `Estimated total: ${money(total)}`,
      mode === "collect" ? "For collection." : "Eating with you.",
      "Please confirm the total and prep time. Thank you!",
    ].join("\n");
    window.open(
      `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const sendBooking = () => {
    if (!day) return;
    const msg = [
      "Hi C4 Restaurant & Bar! I would like to book a table, please.",
      `Day: ${day}`,
      `Time: ${time}`,
      `Guests: ${guests}`,
      `Seating: ${seat}`,
      name ? `Name: ${name}` : "",
      "Please confirm. Thank you!",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const active = CATEGORIES.find((c) => c.id === cat) ?? CATEGORIES[0];

  return (
    <>
      {/* Floating action button */}
      <button
        type="button"
        ref={fabRef}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={`fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 rounded-full bg-c4-wa py-3.5 pl-4 pr-5 text-sm font-semibold text-white shadow-[0_14px_34px_-12px_rgba(2,26,64,0.6)] transition-[background-color,transform,opacity] duration-300 hover:bg-c4-wa-deep ${
          shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h12l-1.2 12.1a2 2 0 0 1-2 1.9H9.2a2 2 0 0 1-2-1.9L6 7Z" />
          <path strokeLinecap="round" d="M9 10V6a3 3 0 0 1 6 0v4" />
        </svg>
        {DOCK.fab}
        {count > 0 && (
          <span
            className={`badge-pop inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-white px-1.5 text-xs font-bold text-c4-navy ${pulse ? "" : ""}`}
          >
            {count}
          </span>
        )}
      </button>

      {/* Dock panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Order and book"
        className={`fixed inset-0 z-[80] ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          aria-label="Close order and book panel"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 cursor-default bg-c4-navy-deep/60 backdrop-blur-[2px] transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          ref={panelRef}
          tabIndex={-1}
          className={`absolute bottom-0 right-0 left-0 mx-auto flex max-h-[88svh] w-full max-w-md flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl outline-none transition-transform duration-300 sm:bottom-4 sm:right-4 sm:left-auto sm:max-h-[85svh] sm:rounded-3xl ${
            open ? "translate-y-0" : "translate-y-[110%]"
          }`}
        >
          {/* Tabs */}
          <div className="flex items-center gap-1 border-b border-c4-grey/30 px-3 pt-3">
            {(
              [
                ["order", DOCK.orderTab],
                ["book", DOCK.bookTab],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={tab === id}
                onClick={() => setTab(id)}
                className={`flex-1 rounded-t-xl px-4 py-3 text-sm font-semibold transition-colors ${
                  tab === id
                    ? "bg-c4-paper text-c4-navy"
                    : "text-c4-ink/60 hover:text-c4-navy"
                }`}
              >
                {label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mb-1 inline-flex h-9 w-9 items-center justify-center rounded-full text-c4-ink/60 transition-colors hover:bg-c4-paper hover:text-c4-navy"
            >
              <span className="sr-only">Close</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          {tab === "order" ? (
            <div className="flex min-h-0 flex-1 flex-col">
              <p className="px-5 pb-3 pt-4 text-xs leading-relaxed text-c4-ink/60">
                {DOCK.orderHint}
              </p>
              {/* Category chips */}
              <div className="flex gap-2 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {CATEGORIES.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCat(c.id)}
                    aria-pressed={cat === c.id}
                    className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                      cat === c.id
                        ? "bg-c4-navy text-white"
                        : "border border-c4-grey/50 text-c4-navy hover:border-c4-navy"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
              {/* Items */}
              <div className="min-h-0 flex-1 overflow-y-auto px-5">
                <ul className="divide-y divide-c4-grey/30">
                  {active.items.map((item) => {
                    const q = cart[item.name] ?? 0;
                    return (
                      <li key={item.name} className="flex items-center gap-3 py-2.5">
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-c4-ink">
                            {item.name}
                          </p>
                          <p className="price-row text-xs font-medium text-c4-navy">
                            {money(item.price)}
                          </p>
                        </div>
                        {q === 0 ? (
                          <button
                            type="button"
                            onClick={() => addItem(item)}
                            aria-label={`Add ${item.name} to the order`}
                            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-c4-grey/60 text-c4-navy transition-colors hover:border-c4-navy hover:bg-c4-navy hover:text-white"
                          >
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                              <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                            </svg>
                          </button>
                        ) : (
                          <div className="flex shrink-0 items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() =>
                                setCart((c) => {
                                  const n = { ...c };
                                  if ((n[item.name] ?? 0) <= 1) delete n[item.name];
                                  else n[item.name] = n[item.name] - 1;
                                  return n;
                                })
                              }
                              aria-label={`One less ${item.name}`}
                              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-c4-paper text-c4-navy hover:bg-c4-grey/40"
                            >
                              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                                <path strokeLinecap="round" d="M5 12h14" />
                              </svg>
                            </button>
                            <span className="price-row w-5 text-center text-sm font-bold text-c4-navy">
                              {q}
                            </span>
                            <button
                              type="button"
                              onClick={() => addItem(item)}
                              aria-label={`One more ${item.name}`}
                              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-c4-navy text-white hover:bg-c4-navy-deep"
                            >
                              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                                <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                              </svg>
                            </button>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* Basket + send */}
              <div className="border-t border-c4-grey/30 bg-c4-paper px-5 py-4">
                {count === 0 ? (
                  <p className="text-xs leading-relaxed text-c4-ink/60">{DOCK.empty}</p>
                ) : (
                  <>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-semibold text-c4-ink">
                        {count} item{count > 1 ? "s" : ""}{" "}
                        <button
                          type="button"
                          onClick={() => setCart({})}
                          className="ml-1 text-xs font-medium text-c4-ink/50 underline underline-offset-2 hover:text-c4-navy"
                        >
                          {DOCK.clear}
                        </button>
                      </span>
                      <span className="price-row text-base font-bold text-c4-navy">
                        {money(total)}
                      </span>
                    </div>
                    <div className="mb-3 grid grid-cols-2 gap-2" role="group" aria-label="Collection or eat in">
                      {(
                        [
                          ["collect", DOCK.pickup],
                          ["eat-in", DOCK.eatIn],
                        ] as const
                      ).map(([id, label]) => (
                        <button
                          key={id}
                          type="button"
                          aria-pressed={mode === id}
                          onClick={() => setMode(id)}
                          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                            mode === id
                              ? "bg-c4-navy text-white"
                              : "border border-c4-grey/50 text-c4-navy hover:border-c4-navy"
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={sendOrder}
                      className="flex w-full items-center justify-center gap-2.5 rounded-full bg-c4-wa px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-c4-wa-deep"
                    >
                      <WhatsAppGlyph className="h-4 w-4" />
                      {DOCK.sendOrder}
                    </button>
                    <p className="mt-2 text-center text-[11px] text-c4-ink/50">{DOCK.totalNote}</p>
                  </>
                )}
              </div>
            </div>
          ) : (
            /* Booking tab */
            <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-5 pt-4">
              <p className="text-xs leading-relaxed text-c4-ink/60">{DOCK.bookHint}</p>
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-c4-navy">
                      {DOCK.date}
                    </span>
                    <input
                      type="date"
                      min={today}
                      value={day}
                      onChange={(e) => setDay(e.target.value)}
                      className="w-full rounded-xl border border-c4-grey/50 bg-white px-3 py-2.5 text-sm text-c4-ink outline-none focus:border-c4-navy"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-c4-navy">
                      {DOCK.time}
                    </span>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full rounded-xl border border-c4-grey/50 bg-white px-3 py-2.5 text-sm text-c4-ink outline-none focus:border-c4-navy"
                    >
                      {TIME_SLOTS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div>
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-c4-navy">
                    {DOCK.guests}
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setGuests((g) => Math.max(1, g - 1))}
                      aria-label="Fewer guests"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-c4-grey/60 text-c4-navy hover:border-c4-navy"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <path strokeLinecap="round" d="M5 12h14" />
                      </svg>
                    </button>
                    <span className="price-row w-8 text-center text-lg font-bold text-c4-navy">
                      {guests}
                    </span>
                    <button
                      type="button"
                      onClick={() => setGuests((g) => Math.min(20, g + 1))}
                      aria-label="More guests"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-c4-grey/60 text-c4-navy hover:border-c4-navy"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                      </svg>
                    </button>
                    {guests >= 6 && (
                      <span className="text-[11px] leading-tight text-c4-ink/55">
                        For six or more we keep the patio tables together.
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-c4-navy">
                    {DOCK.seating}
                  </span>
                  <div className="grid grid-cols-3 gap-2" role="group" aria-label="Seating preference">
                    {(
                      [
                        [DOCK.seatPatio, "Patio"],
                        [DOCK.seatInside, "Inside"],
                        [DOCK.seatEither, "Either"],
                      ] as const
                    ).map(([label, val]) => (
                      <button
                        key={val}
                        type="button"
                        aria-pressed={seat === val}
                        onClick={() => setSeat(val)}
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                          seat === val
                            ? "bg-c4-navy text-white"
                            : "border border-c4-grey/50 text-c4-navy hover:border-c4-navy"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-c4-navy">
                    {DOCK.name}
                  </span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={DOCK.namePlaceholder}
                    className="w-full rounded-xl border border-c4-grey/50 bg-white px-3 py-2.5 text-sm text-c4-ink outline-none placeholder:text-c4-ink/40 focus:border-c4-navy"
                  />
                </label>
                <button
                  type="button"
                  onClick={sendBooking}
                  disabled={!day}
                  className="flex w-full items-center justify-center gap-2.5 rounded-full bg-c4-wa px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-c4-wa-deep disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <WhatsAppGlyph className="h-4 w-4" />
                  {DOCK.sendBook}
                </button>
                <p className="text-center text-[11px] text-c4-ink/50">{DOCK.timeSlotNote}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
