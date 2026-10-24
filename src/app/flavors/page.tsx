import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FLAVORS } from "@/lib/site-data";

export default function FlavorsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFEC] text-[#160909]">
      <Navbar currentPath="/flavors" />

      <main className="flex-1 pt-28 sm:pt-36">
        {/* Hero Section */}
        <section className="max-w-[1240px] mx-auto px-6 sm:px-10 pb-16 sm:pb-20 flex flex-col items-center text-center gap-6">
          <span className="font-badge text-xs sm:text-sm tracking-[0.2em] uppercase text-[#D5433A] font-bold">
            DANH MỤC NẾP NGŨ HÀNH
          </span>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-[#160909] leading-tight max-w-2xl">
            5 Sắc Màu Tự Nhiên
          </h1>
          <p className="font-sans text-base sm:text-xl text-[#160909]/80 max-w-xl leading-relaxed">
            Hạt nếp nương Điện Biên dẻo quánh hòa quyện sắc màu thảo mộc cỏ cây
            rừng Tây Bắc — không phẩm màu, dẻo thơm suốt 24h.
          </p>
          <a
            href="#lineup"
            className="mt-2 inline-block bg-[#160909] text-[#FFFFEC] hover:bg-[#D5433A] transition-colors font-sans font-bold text-sm sm:text-base tracking-[0.14em] uppercase px-8 py-3.5 rounded-full"
          >
            XEM CHI TIẾT 5 MÀU
          </a>
        </section>

        {/* Flavors Lineup */}
        <section id="lineup" className="w-full bg-white py-16 sm:py-24 px-6 sm:px-10">
          <div className="max-w-[1240px] mx-auto flex flex-col gap-24 sm:gap-32">
            {FLAVORS.map((flavor, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={flavor.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Dish Visual */}
                  <div
                    className={`lg:col-span-6 flex justify-center ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative w-full max-w-[460px] aspect-[4/3] rounded-[36px] overflow-hidden shadow-xl border border-[#160909]/10 transition-transform duration-300 hover:scale-105">
                      <Image
                        src={flavor.image}
                        alt={`${flavor.name} Xôi Ngũ Sắc`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </div>

                  {/* Flavor Info */}
                  <div
                    className={`lg:col-span-6 flex flex-col items-start gap-6 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="space-y-2">
                      <span className="text-xs sm:text-sm font-badge tracking-[0.18em] uppercase text-[#D5433A]">
                        {flavor.tagline}
                      </span>
                      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#160909] uppercase">
                        {flavor.name}
                      </h2>
                    </div>

                    <div className="bg-[#FFFFEC] rounded-2xl px-5 py-3 border border-[#160909]/10 text-xs sm:text-sm font-medium text-[#160909]">
                      <p>🌿 <b>Nguyên liệu tạo màu:</b> {flavor.sourceIngredient}</p>
                      <p className="pt-1 text-[#D5433A]">🔮 <b>Ý nghĩa ngũ hành:</b> {flavor.elementMeaning}</p>
                    </div>

                    <p className="font-sans text-base sm:text-lg text-[#160909]/80 leading-relaxed">
                      {flavor.description}
                    </p>

                    {/* Ingredients Box */}
                    <div className="w-full bg-[#FFFFEC] rounded-[24px] p-6 border border-[#160909]/10 flex flex-col gap-2">
                      <h3 className="font-sans font-bold text-sm tracking-wider uppercase text-[#160909]">
                        Thành phần tự nhiên
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#160909]/75 leading-relaxed">
                        {flavor.ingredients}
                      </p>
                      <p className="font-sans font-semibold text-xs sm:text-sm text-[#8CB83C] pt-1">
                        ✓ {flavor.allergenNote}
                      </p>
                    </div>

                    <Link
                      href="/find-us"
                      className="bg-[#160909] text-[#FFFFEC] hover:bg-[#D5433A] transition-colors font-sans font-bold text-sm sm:text-base tracking-[0.14em] uppercase px-8 py-3.5 rounded-full mt-2"
                    >
                      ĐẶT XÔI NÓNG GIAO TẬN NƠI
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
