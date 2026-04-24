import { ArticleGrid } from "@/components/article-grid";
import { Container } from "@/components/container";
import { getAllArticles } from "@/lib/articles";

export default async function HomePage() {
  const articles = await getAllArticles();

  return (
    <main className="pb-16 pt-4 md:pb-24 md:pt-12">
      <Container>
        <ArticleGrid articles={articles} />
      </Container>
    </main>
  );
}
