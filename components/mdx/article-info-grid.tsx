import type { ReactNode } from "react";

type ArticleInfoGridProps = {
  children: ReactNode;
};

type ArticleInfoItemProps = {
  title: string;
  children: ReactNode;
};

export function ArticleInfoGrid({ children }: ArticleInfoGridProps) {
  return (
    <section className="mb-[64px] w-full border border-[var(--foreground)] p-6 md:mb-[96px] md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-6 md:p-8">
      <div className="flex flex-col gap-6 md:contents">{children}</div>
    </section>
  );
}

export function ArticleInfoItem({ title, children }: ArticleInfoItemProps) {
  return (
    <article className="flex flex-col gap-4">
      <h3 className="font-[family-name:var(--font-heading)] text-[18px] uppercase leading-[26px] text-[var(--foreground)] md:text-[24px] md:leading-[36px]">
        {title}
      </h3>
      <div className="text-[14px] leading-[21px] text-[var(--foreground)] md:text-[16px] md:leading-[24px]">
        {children}
      </div>
    </article>
  );
}
