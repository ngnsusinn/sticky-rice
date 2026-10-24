import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RECIPES } from "@/lib/site-data";

export default function RecipesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFEC] text-[#160909]">
      <Navbar currentPath="/recipes" />

      <main className="flex-1 pt-28 sm:pt-36">
        {/* Hero Section */}
        <section className="max-w-[1240px] mx-auto px-6 sm:px-10 pb-16 sm:pb-24 flex flex-col items-center text-center gap-6">
          <span className="text-xs sm:text-sm font-badge tracking-[0.18em] uppercase text-[#D5433A]">
            BẾP NHÀ NẾP • CẨM NANG ẨM THỰC
          </span>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-[#160909] leading-tight max-w-2xl">
            Bí Quyết & Cách Thưởng Thức
          </h1>
          <p className="font-sans text-base sm:text-xl text-[#160909]/80 max-w-xl leading-relaxed">
            Khám phá mẹo hấp xôi dẻo bóng như mới, cách làm muối vừng lạc béo bùi
            và nghệ thuật xếp mâm cỗ hoa sen ngũ sắc trang trọng.
          </p>
        </section>

        {/* Recipes Grid */}
        <section
          id="recipes"
          className="w-full bg-white py-20 sm:py-28 px-6 sm:px-10"
        >
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
            {RECIPES.map((recipe) => (
              <Link
                key={recipe.slug}
                href={`/recipes/${recipe.slug}`}
                className="group flex flex-col gap-5 items-center text-center"
              >
                <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-lg border border-[#160909]/5 transition-transform duration-300 group-hover:scale-[1.02]">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h2 className="font-display text-xl sm:text-2xl text-[#160909] uppercase tracking-wide group-hover:text-[#D5433A] transition-colors line-clamp-2">
                  {recipe.title}
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#160909]/75 line-clamp-2">
                  {recipe.subtitle}
                </p>
                <span className="text-xs tracking-[0.16em] uppercase font-bold text-[#160909]/70 group-hover:text-[#D5433A] transition-colors">
                  XEM CHI TIẾT →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom Banner */}
        <section className="w-full bg-[#160909] text-[#FFFFEC] py-20 sm:py-24 px-6 sm:px-10 text-center">
          <div className="max-w-[800px] mx-auto flex flex-col items-center gap-6">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#FFFFEC]">
              Thưởng thức Xôi Ngũ Sắc nóng hổi ngay hôm nay?
            </h2>
            <p className="font-sans text-base sm:text-lg text-white/80 max-w-lg">
              Đặt hàng giao nóng tận nơi bọc trong lá sen thơm mát.
            </p>
            <Link
              href="/find-us"
              className="bg-[#FFFFEC] text-[#160909] hover:bg-[#D5433A] hover:text-white transition-colors font-sans font-bold text-sm sm:text-base tracking-[0.14em] uppercase px-8 py-3.5 rounded-full mt-2"
            >
              ĐẶT XÔI NÓNG GIAO TẬN NƠI
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
