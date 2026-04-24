import Image from "next/image";

type ArticleImageSectionProps = {
  title: string;
  image: string;
  imageAlt: string;
  imageCaption?: string;
  leftTitle: string;
  leftText: string;
  rightTitle: string;
  rightText: string;
};

export function ArticleImageSection({
  title,
  image,
  imageAlt,
  imageCaption,
  leftTitle,
  leftText,
  rightTitle,
  rightText
}: ArticleImageSectionProps) {
  return (
    <section className="mb-[44px] w-full md:mb-[64px]">
      <h2 className="hidden font-[family-name:var(--font-heading)] text-[24px] leading-[36px] uppercase tracking-[0.03em] text-[var(--foreground)] md:block">
        {title}
      </h2>

      <div className="mt-0 md:mt-6">
        <div className="grid grid-cols-2 gap-4 md:hidden">
          <div className="flex items-start">
            <h2 className="font-[family-name:var(--font-heading)] text-[24px] leading-[36px] uppercase tracking-[0.03em] text-[var(--foreground)]">
              {title}
            </h2>
          </div>

          <div>
            <div className="relative aspect-[0.92/1] w-full overflow-hidden">
              <Image
                alt={imageAlt}
                className="object-cover"
                fill
                sizes="50vw"
                src={image}
              />
            </div>

            {imageCaption ? (
              <p className="mt-2 text-[12px] leading-[18px] tracking-[0.02em] text-[var(--muted)]">
                {imageCaption}
              </p>
            ) : null}
          </div>
        </div>

        <div className="mt-8 grid w-full gap-x-6 gap-y-6 min-[440px]:grid-cols-2 md:hidden">
          <div className="flex flex-col gap-2">
            <h3 className="font-[family-name:var(--font-heading)] text-[12px] lowercase leading-[18px] tracking-[0.1em] text-[var(--foreground)]">
              {leftTitle}
            </h3>
            <p className="text-[14px] leading-[21px] text-[var(--foreground)]">{leftText}</p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-[family-name:var(--font-heading)] text-[12px] lowercase leading-[18px] tracking-[0.1em] text-[var(--foreground)]">
              {rightTitle}
            </h3>
            <p className="text-[14px] leading-[21px] text-[var(--foreground)]">{rightText}</p>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 md:gap-10">
          <div>
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                alt={imageAlt}
                className="object-cover"
                fill
                sizes="50vw"
                src={image}
              />
            </div>

            {imageCaption ? (
              <p className="mt-2 font-[family-name:var(--font-body)] text-[16px] leading-6 tracking-[0.02em] text-[var(--muted)]">
                {imageCaption}
              </p>
            ) : null}
          </div>

          <div className="grid w-full grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              <h3 className="font-[family-name:var(--font-heading)] text-[16px] lowercase leading-6 tracking-[0.1em] text-[var(--foreground)]">
                {leftTitle}
              </h3>
              <p className="text-[16px] leading-6 text-[var(--foreground)]">{leftText}</p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-[family-name:var(--font-heading)] text-[16px] lowercase leading-6 tracking-[0.1em] text-[var(--foreground)]">
                {rightTitle}
              </h3>
              <p className="text-[16px] leading-6 text-[var(--foreground)]">{rightText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
