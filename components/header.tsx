"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/container";
import { JoinButton } from "@/components/join-button";
import { MobileMenu } from "@/components/mobile-menu";
import { NavLink } from "@/components/nav-link";
import { navigationItems } from "@/lib/site";

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
              <JoinButton />
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
