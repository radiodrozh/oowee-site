# Notes for Dev

## GENERAL

Fonts:

* Headings / Meta: Dela Gothic One
* Body: Inter

Fonts must be loaded via Google Fonts.

Colors:

* Primary: #181920
* Secondary: #8596AA
* Background: #FFFFFF
* Accent: #BEF38D

Border radius:

* Buttons: 999px (pill)

Images:

* object-fit: cover
* width: 100%
* height: auto
* responsive

---

## BREAKPOINTS

* Mobile: < 768px
* Desktop: ≥ 768px

---

## TYPOGRAPHY

### Desktop

H1:

* font: Dela Gothic One
* size: 32px
* line-height: 46px
* letter-spacing: 3%
* uppercase

H2:

* font: Inter
* size: 24px
* line-height: 32px

Meta:

* font: Dela Gothic One
* size: 16px
* line-height: 24px
* letter-spacing: 10%
* lowercase

Body:

* font: Inter
* size: 16px
* line-height: 24px

---

### Mobile

H1:

* font: Dela Gothic One
* size: 18px
* line-height: 26px
* letter-spacing: 3%
* uppercase

H2:

* font: Inter
* size: 14px
* line-height: 20px

Meta:

* font: Dela Gothic One
* size: 12px
* line-height: 18px
* letter-spacing: 10%

Body:

* font: Inter
* size: 14px
* line-height: 21px

---

## GRID

### Container

Desktop:

* max-width: 1200px
* horizontal padding: 80px

Mobile:

* width: 100%
* padding: 20px

---

### Homepage Grid

Desktop:

* 2 columns
* gap: 24px
* align items: start

Mobile:

* 2 columns (important)
* gap: 16px

---

## HEADER

Height:

* desktop: ~80px
* mobile: ~64px

Desktop:

* logo left
* navigation center
* CTA button right

Mobile:

* logo left
* hamburger right

Menu items:

* статьи
* магазин
* о проекте

CTA button:

* text: "будь с нами"
* primary style

---

## MOBILE MENU

* full screen overlay
* background: white
* slides in from right using transform
* vertical navigation links
* includes CTA button
* has close button (X)

---

## NAVIGATION

NavLink states:

* default
* hover
* active

Behavior:

* underline on hover or active
* inherit text color

---

## LINKS

* no underline by default
* hover: underline or slight opacity change
* clickable area should be comfortable (min ~40px height)

---

## ARTICLE CARD

* entire card must be wrapped in a link (<Link>)
* no inner buttons
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

## ARTICLE HERO

Desktop:

* 2 columns
* image left
* text right

Mobile:

* stacked
* image top
* text below

---

## ARTICLE CONTENT

* max width ~720px (centered)

Elements:

* H1, H2
* paragraphs
* lists

Spacing:

* 16–24px between elements

Images:

* full width
* margin: 24px

Typography:

* readable line length
* consistent spacing between sections

---

## TWO COLUMN TEXT BLOCK

Used inside articles

Desktop:

* 2 columns
* equal width
* gap: 24px

Mobile:

* 1 column (stacked)
* fallback to 2 columns only if space allows

---

## ARTICLE FOOTER

Contains:

* source text
* "другие статьи" button (outline)
* "будь с нами" button (primary)

Layout:

* desktop: horizontal
* mobile: vertical

---

## BUTTONS

Primary:

* background: #181920
* text: white
* border-radius: 999px

Outline:

* background: transparent
* border: 1px solid #181920

Spacing:

* padding: ~12–16px vertical, 20–24px horizontal

States:

* hover: opacity 0.85–0.9
* transition: 0.2s

---

## PRODUCT CARD

* similar to ArticleCard but for shop

Content:

* image
* label (e.g. "скоро")
* title
* description

Layout:

* image top
* text below

---

## ICONS

* use SVG icons
* size: ~16–20px
* do not rasterize icons

Used:

* arrow
* telegram
* close (X)

---

## ROUTES

* / → homepage
* /articles/[slug]
* /about
* /shop

---

## CONTENT

Articles stored as MDX:

/content/articles

Each article includes:

* title
* date
* category
* cover
* slug
* description
* optional source
