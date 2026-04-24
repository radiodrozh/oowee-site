"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/container";
import { MobileMenu } from "@/components/mobile-menu";
import { NavLink } from "@/components/nav-link";
import { CTA_LABEL, navigationItems } from "@/lib/site";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header>
        <Container>
          <div className="flex h-16 items-center justify-between gap-4 md:grid md:h-[84px] md:grid-cols-[1fr_auto_1fr]">
            <Link aria-label="OOWEE Union home" className="justify-self-start" href="/">
              <Image alt="OOWEE Union" height={27} priority src="/logo.svg" width={108} />
            </Link>

            <nav aria-label="Primary navigation" className="hidden items-center justify-center gap-[84px] md:flex">
              {navigationItems.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} />
              ))}
            </nav>

            <div className="hidden justify-self-end md:flex">
              <Link
                className="group inline-flex min-h-[40px] items-center justify-center gap-2 rounded-full bg-[#181920] px-5 py-2 text-[#FFFFFF] transition-colors duration-200 hover:bg-[#BEF38D] hover:text-[#181920]"
                href="https://t.me/oowee_union"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="relative h-6 w-6 shrink-0">
                  <Image
                    alt=""
                    aria-hidden
                    className="absolute inset-0 transition-opacity duration-200 group-hover:opacity-0"
                    height={24}
                    src="/icons/telegram.svg"
                    width={24}
                  />
                  <Image
                    alt=""
                    aria-hidden
                    className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    height={24}
                    src="/icons/telegram-black.svg"
                    width={24}
                  />
                </span>
                <span className="inline-flex items-center font-[family-name:var(--font-heading)] text-[16px] lowercase leading-none tracking-[0.03em] text-[#FFFFFF] transition-colors duration-200 group-hover:text-[#181920]">
                  {CTA_LABEL}
                </span>
              </Link>
            </div>

            <button
              aria-expanded={isMenuOpen}
              aria-label="Open menu"
              className="inline-flex h-9 w-9 items-center justify-center p-0 md:hidden"
              onClick={() => setIsMenuOpen(true)}
              type="button"
            >
              <Image alt="" aria-hidden height={36} src="/icons/menu.svg" width={36} />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
