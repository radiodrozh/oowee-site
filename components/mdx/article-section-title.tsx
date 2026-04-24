type ArticleSectionTitleProps = {
  children: React.ReactNode;
};

export function ArticleSectionTitle({ children }: ArticleSectionTitleProps) {
  return (
    <h2 className="font-[family-name:var(--font-heading)] text-[24px] leading-[36px] uppercase tracking-[0.03em] text-[var(--foreground)]">
      {children}
    </h2>
  );
}
