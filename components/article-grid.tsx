import { ArticleCard } from "@/components/article-card";
import type { ArticleListItem } from "@/lib/articles";

type ArticleGridProps = {
  articles: ArticleListItem[];
};

export function ArticleGrid({ articles }: ArticleGridProps) {
  return (
    <section
      aria-label="Articles"
      className="grid grid-cols-2 gap-x-4 gap-y-10 md:mx-auto md:max-w-[1048px] md:gap-x-6 md:gap-y-20"
    >
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </section>
  );
}
