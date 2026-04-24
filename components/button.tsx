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
    "inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-full border px-4 py-2 text-[12px] leading-none tracking-[0.03em] transition-opacity duration-200 hover:opacity-90 md:min-h-12 md:px-6",
    variant === "primary"
      ? "border-[var(--foreground)] bg-[var(--foreground)] text-white"
      : "border-[var(--foreground)] bg-transparent text-[var(--foreground)]",
    className
  ]
    .filter(Boolean)
    .join(" ");
}

function ButtonIconAsset({ icon }: { icon: ButtonIcon }) {
  const src = icon === "telegram" ? "/icons/telegram.svg" : "/icons/arrow-left.svg";
  const alt = icon === "telegram" ? "" : "";

  return <Image alt={alt} aria-hidden height={16} src={src} width={16} />;
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
      {icon ? <ButtonIconAsset icon={icon} /> : null}
      <span>{children}</span>
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
