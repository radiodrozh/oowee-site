type ArticleHeroProps = {
  category: string;
  title: string;
  description: string;
  date: string;
  image: string;
  imageAlt?: string;
};

export function ArticleHero({
  category,
  title,
  description,
  date,
  image,
  imageAlt
}: ArticleHeroProps) {
  return (
    <section className="grid gap-6 rounded-3xl border border-black/10 p-6 md:grid-cols-2">
      <div className="rounded-2xl bg-black/5 p-4 text-sm text-[var(--muted)]">
        <p>Image placeholder</p>
        <p className="mt-2 break-all">{image}</p>
        {imageAlt ? <p className="mt-2 break-all">{imageAlt}</p> : null}
      </div>

      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
          {category} / {date}
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl uppercase md:text-5xl">
          {title}
        </h1>
        <p className="text-base text-[var(--muted)]">{description}</p>
      </div>
    </section>
  );
}

