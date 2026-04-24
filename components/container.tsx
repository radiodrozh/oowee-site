import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  const classes = ["mx-auto w-full max-w-[1200px] px-5 md:px-20", className]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}

