"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { contact, primaryNav } from "@/lib/content";
import { ButtonLink } from "@/components/ui";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-ink-deep text-[0.78rem] text-white/65 md:block">
        <div className="container-x flex h-9 items-center justify-between">
          <p className="italic">An Ibadan- and Abuja-based developer. Part of the Dav-Ric Group.</p>
          <a
            href={contact.phoneHref}
            className="font-bold tracking-wide text-white transition-colors hover:text-gold"
          >
            {contact.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="border-b border-white/10 bg-ink/95 backdrop-blur">
        <div className="container-x flex h-18 items-center justify-between gap-6">
          <Link href="/" onClick={close} className="shrink-0">
            <Image
              src="/brand/logo-light.png"
              alt="Dav-Ric Homes"
              width={132}
              height={44}
              preload
              className="h-10 w-auto sm:h-11"
            />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="relative py-2 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-white/80 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-red after:transition-transform hover:text-white hover:after:scale-x-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            {/* Wrapper owns visibility: ButtonLink's own inline-flex would override `hidden`. */}
            <div className="hidden sm:block">
              <ButtonLink href="/#enquire">Enquire About a Home</ButtonLink>
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="inline-flex h-11 w-11 items-center justify-center rounded-brand border border-white/20 text-white lg:hidden"
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span aria-hidden className="relative block h-3.5 w-5">
                <span
                  className={`absolute left-0 block h-0.5 w-5 bg-current transition-transform ${open ? "top-1.5 rotate-45" : "top-0"}`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-5 bg-current transition-transform ${open ? "top-1.5 -rotate-45" : "top-3"}`}
                />
              </span>
            </button>
          </div>
        </div>

        <nav
          id="mobile-nav"
          aria-label="Mobile"
          hidden={!open}
          className="border-t border-white/10 bg-ink lg:hidden"
        >
          <ul className="container-x flex flex-col py-4">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="block border-b border-white/5 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white/85"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-5">
              <ButtonLink href="/#enquire" className="w-full">
                Enquire About a Home
              </ButtonLink>
            </li>
            <li className="pt-4 text-center">
              <a href={contact.phoneHref} className="text-sm font-bold text-white/80">
                {contact.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
