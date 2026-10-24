# Xôi Ngũ Sắc Tây Bắc: Tinh Hoa Nếp Nương Việt Nam

> Modern showcase & ordering web platform celebrating traditional Vietnamese five-color upland sticky rice, engineered with Next.js 16 App Router, React 19, Tailwind CSS v4, Lucide React, and Leaflet Maps.

[![CI Build](https://img.shields.io/badge/CI-Passing-brightgreen?style=flat-square&logo=githubactions)](https://github.com/ngnsusinn/sticky-rice)
[![Next.js 16](https://img.shields.io/badge/Next.js-16.3.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9_Strict-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/TailwindCSS-v4.1-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

> [!NOTE]
> **Dành cho độc giả tiếng Việt:** Dự án này là nền tảng web giới thiệu và đặt xôi ngũ sắc Tây Bắc truyền thống. Vui lòng cuộn xuống mục [Executive Summary (Tóm Tắt Dự Án)](#executive-summary-tóm-tắt-dự-án) ở cuối trang để xem thông tin chi tiết bằng tiếng Việt.

---

## Table of Contents

- [Overview & Cultural Concept](#overview--cultural-concept)
- [Why Xôi Ngũ Sắc? Problem & Solution Matrix](#why-xôi-ngũ-sắc-problem--solution-matrix)
- [Key Features & Capabilities](#key-features--capabilities)
- [Tech Stack & Architecture](#tech-stack--architecture)
- [Project Structure](#project-structure)
- [Getting Started & Local Development](#getting-started--local-development)
- [Verification & Quality Assurance](#verification--quality-assurance)
- [Executive Summary (Tóm Tắt Dự Án)](#executive-summary-tóm-tắt-dự-án)

---

## Overview & Cultural Concept

**Xôi Ngũ Sắc** (Five-Color Sticky Rice) is a quintessential culinary heritage of the ethnic communities in the Northwest mountains of Vietnam (Điện Biên, Sa Pa, Lai Châu, Sơn La). Steamed from highland glutinous rice (*nếp nương*), its distinctive five vibrant shades are completely natural and rooted in the philosophy of the **Five Universal Elements (Ngũ Hành)**:

1. **Hỏa (Fire - Đỏ Gấc):** Steamed with fresh red momordica cochinchinensis (gấc fruit), symbolizing good fortune and prosperity.
2. **Thổ (Earth - Vàng Dành Dành):** Colored by wild gardenia seeds (*dành dành*) and fresh turmeric, honoring fertile mountain soils.
3. **Mộc (Wood - Xanh Lá Nếp):** Infused with fresh pandan leaves (*lá dứa / nếp thơm*), representing vitality and growth.
4. **Thủy (Water - Tím Lá Cẩm):** Steeped in highland magenta leaves (*lá cẩm*), representing loyalty and depth.
5. **Kim (Metal - Trắng Nếp Nương):** Pure, uncolored upland glutinous rice, representing pristine beginnings and honesty.

---

## Why Xôi Ngũ Sắc? Problem & Solution Matrix

| # | Real-World Challenge | Platform Solution |
|:---:|:---|:---|
| **1** | **Industrial Food Dyes:** Fear of artificial chemical food colorings in festive food. | **100% Herbal Extraction Transparency:** Dedicated catalog detail disclosing botanical origin, preparation methods, and nutritional values. |
| **2** | **Broken Vietnamese Typography:** Western web templates distort accented diacritics (`Ô`, `Ũ`, `Ắ`, `Ế`, `ƯƠ`). | **Self-Hosted Variable Google Fonts:** Embedded `Fraunces` (serif heading) + `Be Vietnam Pro` (geometric body) via `next/font/google` for pixel-perfect typography. |
| **3** | **Order & Storage Ambiguity:** Customers struggle with ordering wedding/event platters and reheating sticky rice without drying. | **Bếp Nhà Nếp SSG Blog & Event Inquiry:** Comprehensive guides on steaming, salt recipe pairings, and structured party order forms. |
| **4** | **Unclear Physical Presence:** Difficulty locating authentic traditional vendors in old-quarter districts. | **Interactive Map Radar:** Client-side Leaflet radar pointing to the flagship store at 36 Hàng Điếu, Hoàn Kiếm, Hà Nội. |

---

## Key Features & Capabilities

- **Retro-Modern Visual Aesthetic:** Warm cream palette (`#FFFFEC`, `#F5E8BE`), deep espresso contours (`#160909`), and terracotta accents inspired by traditional bamboo steaming baskets and lotus leaf wrapping.
- **Dynamic Brand Logo Component (`BrandLogo.tsx`):** Standalone vector emblem with five colorful petals and native HTML/CSS typography, preventing SVG font-fallback glitches across browsers.
- **Full Route Suite:**
  - `/` (Trang Chủ): Hero showcase, brand value marquee ticker, 5-color overview, customer FAQ accordion, and newsletter tier.
  - `/about` (Câu Chuyện): Mountain origin, terraced field farming, and comparison matrix between highland sticky rice vs. industrial glutinous rice.
  - `/flavors` (5 Sắc Nếp): Full botanical flavor catalog with medicinal attributes and pairing notes.
  - `/find-us` (Địa Chỉ & Đặt Xôi): Interactive Leaflet map, flagship store address, delivery coverage, and opening hours.
  - `/recipes` (Bếp Nhà Nếp): Guides on steaming techniques, Sesame peanut salt crafting, and lotus platter arrangement.
  - `/recipes/[slug]` (Chi Tiết Công Thức): Static-generated detail pages for culinary guides.
  - `/contact` (Liên Hệ): Event catering inquiry form with guest counter and instant customer service contacts.

---

## Tech Stack & Architecture

- **Framework:** Next.js 16.3.5 (App Router with Turbopack).
- **Core Library:** React 19.2 + TypeScript 5.9 (Strict Mode).
- **Styling:** Tailwind CSS v4.1 with OKLCH theme tokens.
- **Typography:** `Fraunces` + `Be Vietnam Pro` via `next/font/google`.
- **Maps:** Leaflet & React-Leaflet with dynamic client-side loading.
- **Icons:** Lucide React + custom inline SVG vector emblems.
- **Linting & Code Quality:** ESLint with TypeScript ESLint configurations.

---

## Project Structure

```
sticky-rice/
├── public/
│   └── sites/the-ricecream/
│       └── images/               # High-res authentic culinary photography & SVG assets
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── about/                # Story & Agricultural Origin
│   │   ├── contact/              # Catering & Inquiry Form
│   │   ├── find-us/              # Interactive Store Map & Hours
│   │   ├── flavors/              # Five-Color Botanical Catalog
│   │   ├── recipes/              # Bếp Nhà Nếp Culinary Guides
│   │   │   └── [slug]/           # SSG Article Detail Page
│   │   ├── globals.css           # Tailwind v4 theme setup & typography
│   │   ├── layout.tsx            # Root layout, metadata & Google font loader
│   │   └── page.tsx              # Home landing page
│   ├── components/
│   │   └── sites/the-ricecream/  # UI Modules (Navbar, Footer, BrandLogo, Map, Accordion)
│   └── lib/
│       ├── site-data.ts          # Central source of truth for products & recipes
│       └── utils.ts              # Tailwind clsx/twMerge helper
├── docs/
│   └── design-references/        # Desktop & mobile responsive screenshots
├── package.json
└── tsconfig.json
```

---

## Getting Started & Local Development

### Prerequisites

- **Node.js:** 20.x or higher (recommended: Node 22+)
- **Package Manager:** `npm`, `pnpm`, or `yarn`

### Installation

```bash
# Clone the repository
git clone https://github.com/ngnsusinn/sticky-rice.git
cd sticky-rice

# Install project dependencies
npm install

# Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your web browser.

---

## Verification & Quality Assurance

To execute full typecheck, linting, and static production build verification:

```bash
# Full CI sanity gate
npm run check

# Or individual scripts
npm run lint       # Run ESLint checks
npm run typecheck  # TypeScript compile validation (tsc --noEmit)
npm run build      # Turbopack production build with 12/12 static routes
```

---

## Executive Summary (Tóm Tắt Dự Án)

Dự án **Xôi Ngũ Sắc Tây Bắc** là nền tảng số giới thiệu và kinh doanh tinh hoa ẩm thực xôi nếp nương truyền thống của đồng bào các dân tộc vùng cao Tây Bắc (Điện Biên, Mộc Châu, Sa Pa).

### Điểm nổi bật:
1. **100% Màu Thảo Mộc Tự Nhiên:** Tôn vinh 5 sắc xôi tương ứng Ngũ Hành: Đỏ (gấc), Vàng (dành dành), Xanh (lá nếp), Tím (lá cẩm), Trắng (nếp nương mộc).
2. **Thiết Kế Retro - Hiện Đại:** Kế thừa bố cục retro ấm cúng từ nền tảng Framer, tái cấu trúc sang Next.js 16 và Tailwind CSS v4 chuẩn production.
3. **Typography Tiếng Việt Chuẩn Xác:** Sử dụng bộ đôi font `Fraunces` và `Be Vietnam Pro` tự lưu trữ (self-hosted), loại bỏ hoàn toàn các lỗi vỡ ký tự có dấu.
4. **Bản Đồ Điểm Bán & Đặt Cỗ Tiệc:** Tích hợp bản đồ Leaflet định vị điểm bán tại 36 Hàng Điếu, Hoàn Kiếm, Hà Nội cùng form đặt tiệc, cỗ cưới hỏi theo mâm hoa sen.
