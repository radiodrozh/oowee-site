"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import { JoinButton } from "@/components/join-button";
import { NavLink } from "@/components/nav-link";
import { navigationItems } from "@/lib/site";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <div
      aria-hidden={!isOpen}
      className={[
        "fixed inset-0 z-50 bg-white/80 transition-opacity duration-300 md:hidden",
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      ].join(" ")}
      onClick={onClose}
    >
      <div
        className={[
          "ml-auto flex h-full w-full max-w-sm flex-col bg-white px-5 py-5 shadow-[0_0_40px_rgba(24,25,32,0.12)] transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        ].join(" ")}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <Link aria-label="OOWEE Union home" href="/" onClick={onClose}>
            <Image alt="OOWEE Union" height={27} priority src="/logo.svg" width={108} />
          </Link>

          <button
            aria-label="Close menu"
            className="inline-flex h-9 w-9 items-center justify-center border border-[var(--foreground)]"
            onClick={onClose}
            type="button"
          >
            <Image alt="" aria-hidden height={14} src="/icons/close.svg" width={14} />
          </button>
        </div>

        <nav className="mt-16 flex flex-1 flex-col gap-7" aria-label="Mobile navigation">
          {navigationItems.map((item) => (
            <NavLink
              key={item.href}
              className="text-[28px] leading-[1.1]"
              href={item.href}
              label={item.label}
              onClick={onClose}
            />
          ))}
        </nav>

        <JoinButton className="w-full" />
      </div>
    </div>
  );
}
