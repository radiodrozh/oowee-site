import { compileMDX } from "next-mdx-remote/rsc";
import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

import type { ReactNode } from "react";

import { useMDXComponents } from "@/mdx-components";

const ARTICLES_DIRECTORY = path.join(process.cwd(), "content", "articles");
const ARTICLE_EXTENSIONS = [".mdx", ".mdx.md", ".md"];

export type ArticleFrontmatter = {
  title: string;
  date: string;
  category: string;
  cover: string;
  slug: string;
  description: string;
  source?: string;
};

export type ArticleListItem = ArticleFrontmatter & {
  fileName: string;
};

export type CompiledArticle = {
  frontmatter: ArticleFrontmatter;
  content: ReactNode;
};

async function getArticleFileNames() {
  const entries = await fs.readdir(ARTICLES_DIRECTORY, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((fileName) => ARTICLE_EXTENSIONS.some((extension) => fileName.endsWith(extension)));
}

function getArticleFilePath(fileName: string) {
  return path.join(ARTICLES_DIRECTORY, fileName);
}

async function resolveCoverPath(cover: string) {
  const normalizedCover = cover.startsWith("/") ? cover : `/${cover}`;
  const publicPath = path.join(process.cwd(), "public", normalizedCover.replace(/^\//, ""));

  try {
    await fs.access(publicPath);
    return normalizedCover;
  } catch {
    return "/images/article-2.jpg";
  }
}

export async function getAllArticles(): Promise<ArticleListItem[]> {
  const fileNames = await getArticleFileNames();

  const articles = await Promise.all(
    fileNames.map(async (fileName) => {
      const source = await fs.readFile(getArticleFilePath(fileName), "utf8");
      const { data } = matter(source);
      const frontmatter = data as ArticleFrontmatter;
      const cover = await resolveCoverPath(frontmatter.cover);

      return {
        ...frontmatter,
        cover,
        fileName
      };
    })
  );

  return articles.sort(
    (left, right) => new Date(right.date).getTime() - new Date(left.date).getTime()
  );
}

export async function getArticleBySlug(slug: string): Promise<CompiledArticle | null> {
  const articles = await getAllArticles();
  const article = articles.find((entry) => entry.slug === slug);

  if (!article) {
    return null;
  }

  const source = await fs.readFile(getArticleFilePath(article.fileName), "utf8");
  const { data } = matter(source);
  const parsedFrontmatter = data as ArticleFrontmatter;
  const { content, frontmatter } = await compileMDX<ArticleFrontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      scope: {
        frontmatter: parsedFrontmatter
      }
    },
    components: useMDXComponents()
  });

  return {
    frontmatter,
    content
  };
}
