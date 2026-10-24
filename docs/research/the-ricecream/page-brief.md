# The Rice Cream — Research Brief & Route Map

## Source
- URL: `https://the-ricecream.com/`
- Brand: The Rice Cream (Plant-Based, Non-Dairy & Gluten-Free Rice-Based Ice Cream)
- Technology: Next.js 16 (App Router), Tailwind CSS v4, TypeScript

## Route Map
| Source Route | Local Route | Purpose | Key Components |
|---|---|---|---|
| `/` | `src/app/page.tsx` | Homepage | Hero, Better/Ticker Arch, Why Rice?, Japanese Heritage, Flavor Showcase, The Rice Kitchen, Store Locator Radar, FAQ Accordion, Footer |
| `/about` | `src/app/about/page.tsx` | Our Story / About | Story Hero, Creamier by Nature, Better for Your Body, Impact Beyond the Scoop (Tabs), Comparison Matrix (Regular vs Rice Cream) |
| `/flavors` | `src/app/flavors/page.tsx` | Flavors Catalog | Catalog Hero, Flavor Lineup (The Original, Matcha, Chocolate) with nutrition, ingredients & store links |
| `/find-us` | `src/app/find-us/page.tsx` | Store Locator | Locator Hero, Full Interactive Leaflet Radar Map, Retail Partner Callout & Notification Signup |
| `/recipes` | `src/app/recipes/page.tsx` | Recipe Index | Recipe Hero, Grid of 3 featured recipes, CTA to store locator |
| `/recipes/chocolate-cloud-sundae-(vegan)` | `src/app/recipes/[slug]/page.tsx` | Recipe Detail 1 | Ingredients, step-by-step instructions, next/previous recipe navigation |
| `/recipes/rice-cream-affogato` | `src/app/recipes/[slug]/page.tsx` | Recipe Detail 2 | Ingredients, step-by-step instructions, next/previous recipe navigation |
| `/recipes/vegan-iced-matcha-latte` | `src/app/recipes/[slug]/page.tsx` | Recipe Detail 3 | Ingredients, step-by-step instructions, next/previous recipe navigation |
| `/contact` | `src/app/contact/page.tsx` | Contact & Inquiries | Contact Hero, Let's Talk info (Instagram, Email, DC Address), Interactive Contact Form |

## Design Tokens & Palette
- Primary Dark: `#160909` (rgb 22, 9, 9) — text, headers, footer, primary buttons
- Primary Background: `#FFFFEC` (rgb 255, 255, 236) — warm cream vanilla tone
- Pure White: `#FFFFFF`
- Accent Terracotta / Rust: `#D5433A` (rgb 213, 67, 58)
- Accent Pale Salmon: `#FFA396`
- Accent Matcha Green: `#E3F39E`
- Accent Soft Teal: `#79CCD3`
- Accent Ivory: `#FFFFF7`
- Accent Butter Yellow: `#F3FFBD`
- Card Muted: `#F7F7F0`

## Typography
- Display / Headings: `Your Life Medium` (custom retro serif typeface)
- Badges & Buttons: `Aeonik TRIAL Bold`, `Outfit`, `Londrina Solid`
- Body & Labels: `Onest`, `Inter`, `Outfit`

## Asset Mapping
All 47 raster images, SVGs, and 2 custom woff2 font files have been extracted from `the-ricecream.com` and stored in:
- `public/sites/the-ricecream/images/`
- `public/sites/the-ricecream/fonts/`
