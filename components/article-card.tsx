import Image from "next/image";
import Link from "next/link";

import type { ArticleListItem } from "@/lib/articles";

type ArticleCardProps = {
  article: ArticleListItem;
};

function formatArticleDate(date: string) {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).format(parsedDate);
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link className="block" href={`/articles/${article.slug}`}>
      <article className="flex max-w-[520px] flex-col">
        <p className="font-[family-name:var(--font-heading)] text-[12px] uppercase leading-[18px] tracking-[0.1em] text-[var(--muted)] md:text-[16px] md:leading-6">
          {formatArticleDate(article.date)}
        </p>

        <div className="pt-[8px] md:pt-[16px]">
          <div className="overflow-hidden bg-black/5">
            <div className="relative aspect-square md:aspect-[16/9]">
              <Image
                alt={article.title}
                className="object-cover object-center"
                fill
                sizes="(max-width: 767px) 50vw, 50vw"
                src={article.cover}
              />
            </div>
          </div>
        </div>

        <div className="pt-[16px] md:pt-[32px]">
          <p className="font-[family-name:var(--font-heading)] text-[12px] lowercase leading-[18px] tracking-[0.1em] text-[var(--muted)] md:text-[16px] md:leading-6">
            {article.category}
          </p>
        </div>

        <div className="pt-[8px] md:pt-[16px]">
          <h2 className="font-[family-name:var(--font-heading)] text-[18px] uppercase leading-[26px] tracking-[0.03em] text-[var(--foreground)] md:text-[28px] md:leading-[40px]">
            {article.title}
          </h2>
        </div>

        <div className="pt-[8px] md:pt-[16px]">
          <p className="w-full text-[14px] leading-[21px] text-[var(--foreground)] md:text-[16px] md:leading-6">
            {article.description}
          </p>
        </div>
      </article>
    </Link>
  );
}
