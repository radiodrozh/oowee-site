"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
};

export function NavLink({ href, label, className, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    href === "/" ? pathname === "/" || pathname.startsWith("/articles") : pathname.startsWith(href);

  const classes = [
    "inline-flex min-h-10 items-center font-[family-name:var(--font-heading)] text-[12px] leading-none tracking-[0.03em] transition-opacity duration-200 hover:opacity-70 md:min-h-12 md:text-[16px]",
    isActive ? "underline underline-offset-[0.35em]" : "",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link aria-current={isActive ? "page" : undefined} className={classes} href={href} onClick={onClick}>
      {label}
    </Link>
  );
}
