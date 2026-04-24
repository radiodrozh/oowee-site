---
title: "ЗАГОЛОВОК СТАТЬИ"
date: "2026-02-14"
category: "спорт"
cover: "/images/article-cover.jpg"
slug: "slug-stati"
description: "Короткое описание статьи"
source: "Источник или примечание"
---

<ArticleHero
  category={frontmatter.category}
  title={frontmatter.title}
  description={frontmatter.description}
  date={frontmatter.date}
  image={frontmatter.cover}
  imageAlt="Описание изображения"
/>

<ArticleSectionTitle>
  1 / НАЗВАНИЕ БЛОКА
</ArticleSectionTitle>

<TwoColumnTextBlock
  leftTitle="как?"
  leftText="Текст левой колонки."
  rightTitle="когда?"
  rightText="Текст правой колонки."
/>

<ArticleSectionTitle>
  2 / НАЗВАНИЕ БЛОКА
</ArticleSectionTitle>

<TwoColumnTextBlock
  leftTitle="как?"
  leftText="Текст левой колонки."
  rightTitle="когда?"
  rightText="Текст правой колонки."
/>

<SourceNote>
  {frontmatter.source}
</SourceNote>