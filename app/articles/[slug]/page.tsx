import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/container";
import { JoinButton } from "@/components/join-button";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const articles = await getAllArticles();

  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article not found | OOWEE Union",
    };
  }

  return {
    title: `${article.frontmatter.title} | OOWEE Union`,
    description: article.frontmatter.description,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const { frontmatter, content } = article;
  const formattedDate = frontmatter.date.includes("-")
    ? frontmatter.date.split("-").reverse().join(".")
    : frontmatter.date;

  return (
    <main className="py-8 md:py-12">
      <Container>
        <div>
          {/* MOBILE HERO */}
          <div className="md:hidden">
            <div className="flex items-center justify-between font-[family-name:var(--font-heading)] text-[16px] lowercase leading-6 tracking-[0.1em] text-[var(--muted)]">
              <p>{frontmatter.category}</p>
              <p>{formattedDate}</p>
            </div>

            <div className="mt-3 aspect-square w-full overflow-hidden">
              <img
                src={frontmatter.cover}
                alt={frontmatter.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-[16px] flex flex-col gap-[12px]">
              <h1 className="font-[family-name:var(--font-heading)] text-[32px] uppercase leading-[46px] tracking-[0.03em] text-[var(--foreground)]">
                {frontmatter.title}
              </h1>

              <p className="text-[14px] leading-[1.5] text-[var(--foreground)]">
                {frontmatter.description}
              </p>
            </div>
          </div>

          {/* DESKTOP HERO */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-10">
            <div className="aspect-square w-full overflow-hidden">
              <img
                src={frontmatter.cover}
                alt={frontmatter.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-[36px]">
              <div className="flex w-full items-center justify-between">
                <p className="font-[family-name:var(--font-heading)] text-[16px] lowercase leading-6 tracking-[0.1em] text-[var(--muted)]">
                  {frontmatter.category}
                </p>

                <p className="font-[family-name:var(--font-heading)] text-[16px] lowercase leading-6 tracking-[0.1em] text-[var(--muted)]">
                  {formattedDate}
                </p>
              </div>

              <h1 className="font-[family-name:var(--font-heading)] text-[32px] uppercase leading-[46px] tracking-[0.03em] text-[var(--foreground)]">
                {frontmatter.title}
              </h1>

              <p className="text-[16px] leading-[24px] text-[var(--foreground)]">
                {frontmatter.description}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 [&>h2+section]:mt-4 md:[&>h2+section]:mt-6">
          {content}
        </div>

        <div className="flex flex-col gap-8">
          <p className="font-[family-name:var(--font-heading)] text-[12px] lowercase leading-[18px] tracking-[0.1em] text-[var(--muted)] md:text-[16px] md:leading-6">
            {frontmatter.source}
          </p>

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <Link
  className="group inline-flex h-[44px] w-full items-center justify-center gap-2 rounded-full border border-[#181920] bg-white px-6 font-[family-name:var(--font-heading)] text-[16px] lowercase leading-none tracking-[0.03em] text-[#181920] transition-colors duration-200 hover:bg-[#181920] hover:text-white md:w-auto"
  href="/"
>
  <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
    <Image
      alt=""
      aria-hidden
      className="absolute inset-0 h-full w-full transition-opacity duration-200 group-hover:opacity-0"
      height={20}
      src="/icons/arrow-left.svg"
      width={20}
    />
    <Image
      alt=""
      aria-hidden
      className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      height={20}
      src="/icons/arrow-left-white.svg"
      width={20}
    />
  </span>
  <span className="leading-none">другие статьи</span>
</Link>

            <JoinButton className="w-full md:w-auto" />
          </div>
        </div>
      </Container>
    </main>
  );
}
