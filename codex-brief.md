# Build a responsive editorial website in Next.js + TypeScript + Tailwind CSS using the App Router

## Project goals

* Minimal editorial website for OOWEE Union
* Pages:

  1. Homepage with article cards
  2. Dynamic article pages
  3. About page
  4. Shop page
* Content source: MDX files stored in `/content/articles`
* Clean reusable component architecture
* Pixel-close implementation based on provided screenshots and design notes

---

## Tech requirements

* Next.js App Router
* TypeScript
* Tailwind CSS (with proper config and theme setup)
* MDX support for articles
* Semantic HTML
* Accessible navigation and buttons
* Responsive behavior for desktop and mobile
* Optimized local images from `/public`
* SVG logo and icons from provided assets

---

## Figma reference

https://www.figma.com/design/2WiZlnvZpEiiKnbiJpQXsY/OOWEE?node-id=81-478&t=DJdxPMK0kybiVAUn-1

Use screenshots as primary visual reference.

---

## Routes

* `/` → homepage
* `/articles/[slug]` → article page
* `/about`
* `/shop`

---

## Content

Articles come from MDX files in `/content/articles`

Each article contains frontmatter:

* title
* date
* category
* cover
* slug
* description
* source (optional)

Sort articles by date descending on homepage.

---

## Design system

### GENERAL

Fonts (must be loaded via Google Fonts in layout):

* Headings and Meta: Dela Gothic One
* Body: Inter

Colors:

* Primary: #181920
* Secondary: #8596AA
* Background: #FFFFFF
* Accent: #BEF38D

Buttons:

* pill shape (border-radius: 999px)

Images:

* object-fit: cover
* responsive

---

### BREAKPOINTS

* Mobile: < 768px
* Desktop: ≥ 768px

---

### TYPOGRAPHY

Desktop:

* H1: Dela Gothic One, 32px, line-height 46px, letter-spacing 3%, uppercase
* H2: Inter, 24px, line-height 32px
* Meta: Dela Gothic One, 16px, line-height 24px, letter-spacing 10%
* Body: Inter, 16px, line-height 24px

Mobile:

* H1: Dela Gothic One, 18px, line-height 26px, letter-spacing 3%, uppercase
* H2: Inter, 14px, line-height 20px
* Meta: Dela Gothic One, 12px, line-height 18px, letter-spacing 10%
* Body: Inter, 14px, line-height 21px

---

### LAYOUT

Container:

* Desktop: max-width 1200px, horizontal padding 80px
* Mobile: width 100%, padding 20px

---

## Header

Desktop:

* logo left
* navigation centered
* CTA button right

Mobile:

* logo left
* hamburger right

CTA button:

* text: "будь с нами"
* style: primary button
* visible in both header and mobile menu

---

## Mobile Menu

* full screen overlay
* white background
* slides from right
* vertical navigation links
* includes CTA button
* has close button (X)

---

## Navigation

NavLink states:

* default
* hover
* active

Behavior:

* hover and active states must be visually clear (underline or opacity)

---

## Homepage

ArticleGrid:

* Desktop: 2 columns, gap 24px
* Mobile: 2 columns (important), gap 16px

ArticleCard:

* the entire card must be wrapped in a link (`<Link>`)
* no separate "read more" button
* layout: date → image → meta → title → description

Image:

* Desktop ratio: 16:9
* Mobile ratio: 1:1

Spacing:

Desktop:

* date → image: 16px
* image → meta: 32px
* meta → title: 16px
* title → description: 16px

Mobile:

* date → image: 8px
* image → meta: 16px
* meta → title: 8px
* title → description: 8px

---

## Article Page

ArticleHero:

* Desktop: 2 columns (image left, text right)
* Mobile: stacked (image top, text below)

ArticleContent:

* max width ~720px
* supports:

  * headings
  * paragraphs
  * images
  * lists

Spacing:

* 16–24px between elements

---

## MDX Components

MDX must support custom reusable components:

* ArticleHero
* ArticleSectionTitle
* TwoColumnTextBlock
* SourceNote

### ArticleSectionTitle

* used for numbered sections (e.g. "1 / KHAO CHIANG")
* uppercase
* uses Dela Gothic One
* large spacing above and below

### TwoColumnTextBlock

* contains:

  * leftTitle
  * leftText
  * rightTitle
  * rightText

Layout:

* Desktop: 2 equal columns, gap ~24px
* Mobile: stacked (1 column)

### SourceNote

* small muted text at the end of the article
* uses Meta typography style

---

## Article Footer

Contains:

* source text
* “другие статьи” (outline button)
* “будь с нами” (primary button)

Layout:

* Desktop: horizontal
* Mobile: vertical

---

## About Page

* replicate layout from screenshots
* includes:

  * headline
  * two-column text
  * email line
  * CTA buttons

Must match responsive behavior from mockups.

---

## Shop Page

ProductCard:

* similar structure to ArticleCard
* includes:

  * image
  * label (e.g. "скоро")
  * title
  * description

Recreate layout from screenshots.

---

## UI Components

Create reusable components:

* Header
* MobileMenu
* Container
* NavLink
* Button (primary, outline)
* ArticleGrid
* ArticleCard
* ArticleHero
* ArticleFooter
* ProductCard
* ArticleSectionTitle
* TwoColumnTextBlock
* SourceNote

---

## Assets

* Use SVG icons from `/public/icons`
* Do not recreate icons manually
* Use local images from `/public/images`

---

## SEO

* Add metadata (title, description)
* Add Open Graph tags
* Use Next.js App Router metadata API

---

## Project structure

* /app
* /components
* /content/articles
* /public/images
* /public/icons
* /lib

---

## Tasks

1. Scaffold the full project
2. Implement all pages
3. Wire MDX content
4. Create reusable components
5. Add 2 sample articles and 1 sample shop item
6. Keep the code clean and easy to extend
7. Explain where to place future MDX articles and images
8. Prepare the project for deployment on Vercel

---

## Important

* Use provided screenshots as the main visual reference
* Do not invent extra sections
* Keep the layout minimal and clean
* Prefer simple, robust implementation over complex animations
* Match spacing and proportions as closely as possible
