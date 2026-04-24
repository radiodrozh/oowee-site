import type { MDXComponents } from "mdx/types";

import { ArticleHero } from "@/components/mdx/article-hero";
import { ArticleImageSection } from "@/components/mdx/article-image-section";
import { ArticleSectionTitle } from "@/components/mdx/article-section-title";
import { SourceNote } from "@/components/mdx/source-note";
import { TwoColumnTextBlock } from "@/components/mdx/two-column-text-block";

const components: MDXComponents = {
  ArticleHero,
  ArticleImageSection,
  ArticleSectionTitle,
  SourceNote,
  TwoColumnTextBlock
};

export function useMDXComponents(existingComponents?: MDXComponents): MDXComponents {
  return {
    ...components,
    ...existingComponents
  };
}
