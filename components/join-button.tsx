import Image from "next/image";
import Link from "next/link";

import { CTA_LABEL } from "@/lib/site";

type JoinButtonProps = {
  className?: string;
};

export function JoinButton({ className }: JoinButtonProps) {
  const classes = [
    "group inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-full bg-[#181920] pl-4 pr-5 py-2 text-[#FFFFFF] transition-colors duration-200 hover:bg-[#BEF38D] hover:text-[#181920]",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link
      className={classes}
      href="https://t.me/oowee_union"
      rel="noopener noreferrer"
      target="_blank"
    >
      <span className="relative h-6 w-6 shrink-0 translate-y-[-0.5px]">
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
      <span className="inline-flex items-center self-center font-[family-name:var(--font-heading)] text-[16px] lowercase leading-[1] tracking-[0.03em] text-[#FFFFFF] transition-colors duration-200 group-hover:text-[#181920]">
        {CTA_LABEL}
      </span>
    </Link>
  );
}
