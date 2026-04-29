import Image from "next/image";
import Link from "next/link";

import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline";
type ButtonIcon = "telegram" | "arrow-left";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  icon?: ButtonIcon;
  variant?: ButtonVariant;
};

type ButtonAsLinkProps = ButtonBaseProps & {
  href: string;
  rel?: string;
  target?: string;
};

type ButtonAsButtonProps = ButtonBaseProps & {
  href?: undefined;
  onClick?: () => void;
  rel?: never;
  target?: never;
  type?: "button" | "submit" | "reset";
};

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

function getButtonClasses(variant: ButtonVariant, className?: string) {
  return [
    "group inline-flex min-h-[40px] shrink-0 items-center justify-center rounded-full border py-2 transition-colors duration-200",
    variant === "primary"
      ? "gap-1.5 border-[#181920] bg-[#181920] pl-4 pr-5 text-[#FFFFFF] hover:bg-[#BEF38D] hover:text-[#181920]"
      : "gap-1.5 border-[#181920] bg-[#FFFFFF] pl-4 pr-5 text-[#181920] hover:bg-[#181920] hover:text-[#FFFFFF]",
    className
  ]
    .filter(Boolean)
    .join(" ");
}

function ButtonIconAsset({
  icon,
  variant
}: {
  icon: ButtonIcon;
  variant: ButtonVariant;
}) {
  if (icon === "telegram") {
    return <Image alt="" aria-hidden height={16} src="/icons/telegram.svg" width={16} />;
  }

  if (variant === "outline") {
    return (
      <span className="relative flex h-6 w-6 shrink-0 items-center justify-center translate-y-[-0.5px]">
        <Image
          alt=""
          aria-hidden
          className="absolute inset-0 transition-opacity duration-200 group-hover:opacity-0"
          height={24}
          src="/icons/arrow-left.svg"
          width={24}
        />
        <Image
          alt=""
          aria-hidden
          className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          height={24}
          src="/icons/arrow-left-white.svg"
          width={24}
        />
      </span>
    );
  }

  return <Image alt="" aria-hidden height={16} src="/icons/arrow-left.svg" width={16} />;
}

export function Button({
  children,
  className,
  icon,
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = getButtonClasses(variant, className);
  const content = (
    <>
      {icon ? <ButtonIconAsset icon={icon} variant={variant} /> : null}
      <span className="inline-flex items-center self-center font-[family-name:var(--font-heading)] text-[16px] lowercase leading-[1] tracking-[0.03em]">
        {children}
      </span>
    </>
  );

  if (props.href !== undefined) {
    return (
      <Link className={classes} href={props.href} rel={props.rel} target={props.target}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={props.onClick} type={props.type ?? "button"}>
      {content}
    </button>
  );
}
