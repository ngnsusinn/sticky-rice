import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/sites/the-ricecream/Navbar";
import { Footer } from "@/components/sites/the-ricecream/Footer";
import { RECIPES } from "@/lib/site-data";

export function generateStaticParams() {
  return RECIPES.map((r) => ({
    slug: r.slug,
  }));
}

interface RecipeDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function RecipeDetailPage({
  params,
}: RecipeDetailPageProps) {
  const { slug } = await params;
  const recipe = RECIPES.find((r) => r.slug === slug);

  if (!recipe) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFEC] text-[#160909]">
      <Navbar currentPath="/recipes" />

      <main className="flex-1 pt-28 sm:pt-36">
        {/* Hero Section */}
        <section className="max-w-[1240px] mx-auto px-6 sm:px-10 pb-12 sm:pb-16 flex flex-col items-center text-center gap-4">
          <Link
            href="/recipes"
            className="text-xs font-bold uppercase tracking-[0.16em] text-[#D5433A] hover:underline"
          >
            ← QUAY LẠI CẨM NANG
          </Link>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#160909] leading-tight max-w-2xl">
            {recipe.title}
          </h1>
          <p className="font-sans text-base sm:text-xl text-[#160909]/80 max-w-xl leading-relaxed">
            {recipe.subtitle}
          </p>
        </section>

        {/* Content Section */}
        <section className="w-full bg-white py-16 sm:py-24 px-6 sm:px-10">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
            {/* Visual */}
            <div className="lg:col-span-5 flex justify-center sticky top-28">
              <div className="relative w-full max-w-[440px] aspect-[4/3] rounded-[36px] overflow-hidden shadow-xl border border-[#160909]/5">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Recipe Details */}
            <div className="lg:col-span-7 flex flex-col gap-10">
              {/* Ingredients */}
              <div className="bg-[#FFFFEC] rounded-[32px] p-8 sm:p-10 border border-[#160909]/5">
                <h2 className="font-display text-2xl sm:text-3xl text-[#160909] uppercase tracking-wide pb-4 border-b border-[#160909]/10">
                  NGUYÊN LIỆU CHUẨN BỊ
                </h2>
                <ul className="flex flex-col gap-3.5 pt-6 text-sm sm:text-base text-[#160909]/85 font-sans">
                  {recipe.ingredients.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#D5433A] mt-2 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How to Make It */}
              <div className="bg-[#FFFFEC] rounded-[32px] p-8 sm:p-10 border border-[#160909]/5">
                <h2 className="font-display text-2xl sm:text-3xl text-[#160909] uppercase tracking-wide pb-4 border-b border-[#160909]/10">
                  CÁCH THỰC HIỆN
                </h2>
                <ol className="flex flex-col gap-5 pt-6 text-sm sm:text-base text-[#160909]/85 font-sans">
                  {recipe.instructions.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="font-display text-xl font-bold text-[#D5433A] w-6 shrink-0">
                        {idx + 1}.
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Previous / Next Recipe Navigation */}
          <div className="max-w-[1100px] mx-auto mt-16 pt-8 border-t border-[#160909]/10 flex flex-wrap items-center justify-between gap-6">
            {recipe.prevSlug ? (
              <Link
                href={`/recipes/${recipe.prevSlug}`}
                className="flex items-center gap-2 font-display text-lg sm:text-xl text-[#160909] hover:text-[#D5433A] transition-colors"
              >
                ‹ {recipe.prevTitle}
              </Link>
            ) : (
              <div />
            )}

            {recipe.nextSlug && (
              <Link
                href={`/recipes/${recipe.nextSlug}`}
                className="flex items-center gap-2 font-display text-lg sm:text-xl text-[#160909] hover:text-[#D5433A] transition-colors"
              >
                {recipe.nextTitle} ›
              </Link>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
