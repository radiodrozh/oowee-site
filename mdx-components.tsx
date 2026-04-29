import type { MDXComponents } from "mdx/types";

import { ArticleHero } from "@/components/mdx/article-hero";
import { ArticleImageSection } from "@/components/mdx/article-image-section";
import { ArticleInfoGrid, ArticleInfoItem } from "@/components/mdx/article-info-grid";
import { ArticleSectionTitle } from "@/components/mdx/article-section-title";
import { SourceNote } from "@/components/mdx/source-note";
import { TwoColumnTextBlock } from "@/components/mdx/two-column-text-block";

export function useMDXComponents(existingComponents?: MDXComponents): MDXComponents {
  return {
    ArticleHero,
    ArticleImageSection,
    ArticleInfoGrid,
    ArticleInfoItem,
    ArticleSectionTitle,
    SourceNote,
    TwoColumnTextBlock,
    ...existingComponents
  };
}
