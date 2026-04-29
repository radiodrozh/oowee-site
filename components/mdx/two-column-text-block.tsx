type TwoColumnTextBlockProps = {
  leftTitle: string;
  leftText: string;
  rightTitle: string;
  rightText: string;
};

export function TwoColumnTextBlock({
  leftTitle,
  leftText,
  rightTitle,
  rightText
}: TwoColumnTextBlockProps) {
  return (
    <section className="mb-[64px] grid w-full gap-x-6 gap-y-6 min-[440px]:grid-cols-2 md:mb-[96px] md:grid-cols-2">
      <div className="flex flex-col gap-2 md:gap-4">
        <h3 className="font-[family-name:var(--font-heading)] text-[12px] lowercase leading-[18px] tracking-[0.1em] text-[var(--foreground)] md:text-[16px] md:leading-6">
          {leftTitle}
        </h3>
        <p className="text-[14px] leading-[21px] text-[var(--foreground)] md:text-[16px] md:leading-6">
          {leftText}
        </p>
      </div>

      <div className="flex flex-col gap-2 md:gap-4">
        <h3 className="font-[family-name:var(--font-heading)] text-[12px] lowercase leading-[18px] tracking-[0.1em] text-[var(--foreground)] md:text-[16px] md:leading-6">
          {rightTitle}
        </h3>
        <p className="text-[14px] leading-[21px] text-[var(--foreground)] md:text-[16px] md:leading-6">
          {rightText}
        </p>
      </div>
    </section>
  );
}
