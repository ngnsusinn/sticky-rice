import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/sites/the-ricecream/Navbar";
import { Footer } from "@/components/sites/the-ricecream/Footer";
import { StarburstBadge } from "@/components/sites/the-ricecream/StarburstBadge";
import { WaveDivider } from "@/components/sites/the-ricecream/WaveDivider";
import { TickerArch } from "@/components/sites/the-ricecream/TickerArch";
import { FAQAccordion } from "@/components/sites/the-ricecream/FAQAccordion";
import { MapSection } from "@/components/sites/the-ricecream/MapSection";
import { RECIPES } from "@/lib/site-data";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFEC] text-[#160909]">
      <Navbar currentPath="/" />

      <main className="flex-1">
        {/* ================= HERO SECTION ================= */}
        <section className="relative w-full min-h-[90vh] lg:min-h-screen pt-28 sm:pt-36 pb-16 sm:pb-24 px-6 sm:px-10 flex items-center justify-center overflow-hidden">
          {/* Organic wavy background SVG */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full min-w-[1200px]">
              <Image
                src="/sites/the-ricecream/images/yJCiNkNHI2FfSjnEidsY2TrkwI.svg"
                alt=""
                fill
                className="object-contain object-center"
                priority
              />
            </div>
          </div>

          <div className="relative z-10 max-w-[1240px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline and USP */}
            <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
              <div className="space-y-1 sm:space-y-2">
                <span className="font-badge text-xs sm:text-sm tracking-[0.25em] uppercase text-[#D5433A] font-bold">
                  ẨM THỰC TRUYỀN THỐNG VIỆT NAM
                </span>
                <h1 className="font-display text-5xl sm:text-7xl lg:text-[84px] leading-[1.1] text-[#160909] uppercase tracking-normal">
                  XÔI NGŨ SẮC
                </h1>
                <p className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#160909]/90 italic font-semibold leading-[1.2] tracking-normal pt-1">
                  Tinh Hoa Nếp Nương
                </p>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-[#160909]/80 font-sans max-w-lg leading-relaxed">
                Đồ từ hạt gạo nếp nương Điện Biên mẩy tròn, nhuộm 5 sắc màu tự
                nhiên từ lá cẩm, gấc đỏ, lá nếp và dành dành. Dẻo quánh thơm bùi,
                gói lá sen tươi bốc khói nghi ngút.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="#thuc-don"
                  className="inline-block bg-[#160909] text-[#FFFFEC] hover:bg-[#D5433A] transition-colors font-sans font-bold text-sm sm:text-base tracking-[0.14em] uppercase px-8 py-4 rounded-full shadow-md"
                >
                  XEM THỰC ĐƠN
                </a>
                <Link
                  href="/find-us"
                  className="inline-block bg-white text-[#160909] hover:bg-[#D5433A] hover:text-white transition-colors font-sans font-bold text-sm sm:text-base tracking-[0.14em] uppercase px-8 py-4 rounded-full shadow-md border border-[#160909]/10"
                >
                  ĐẶT XÔI NÓNG
                </Link>
              </div>
            </div>

            {/* Right Column: Dish Visual and Badges */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-[42px] overflow-hidden shadow-2xl border-4 border-white/60 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/sites/the-ricecream/images/xoi-ngu-sac-main.jpg"
                  alt="Mâm Xôi Ngũ Sắc Cổ Truyền"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlapping Dietary Certification Badges */}
                <div className="absolute -right-2 sm:-right-4 top-8 sm:top-10 flex flex-col gap-4 z-20">
                  <StarburstBadge
                    text="100% LÁ RỪNG"
                    fillColor="#160909"
                    textColor="#FFFFEC"
                    className="w-24 h-24 sm:w-28 sm:h-28"
                    rotate="10deg"
                  />
                  <StarburstBadge
                    text="NẾP NƯƠNG"
                    fillColor="#D5433A"
                    textColor="#FFFFEC"
                    className="w-24 h-24 sm:w-28 sm:h-28"
                    rotate="-8deg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= BETTER HEALTH, BETTER WORLD ================= */}
        <section className="relative w-full bg-white pt-12 sm:pt-16 pb-0 overflow-hidden">
          {/* Arch of Ticker Badges + Main Graphic */}
          <TickerArch />
        </section>

        {/* ================= TẠI SAO LÀ XÔI NGŨ SẮC? ================= */}
        <section
          id="thuc-don"
          className="relative w-full bg-[#FFFFEC] py-20 sm:py-28 px-6 sm:px-10"
        >
          <div className="max-w-[1240px] mx-auto flex flex-col items-center text-center gap-12 sm:gap-16">
            <div className="max-w-2xl flex flex-col items-center gap-4">
              <span className="font-badge text-xs sm:text-sm tracking-[0.2em] uppercase text-[#D5433A] font-bold">
                CAM KẾT CHẤT LƯỢNG
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#160909]">
                Vì Sao Chọn Xôi Ngũ Sắc?
              </h2>
              <p className="text-base sm:text-lg text-[#160909]/80 font-sans leading-relaxed">
                Chúng tôi tin rằng món ăn truyền thống quý giá nhất khi giữ trọn
                hương vị nguyên bản của cỏ cây, đất trời và bàn tay người thợ đồ
                xôi khéo léo.
              </p>
            </div>

            {/* 3 Pillars Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center gap-5">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
                  <StarburstBadge
                    fillColor="#FFFDCF"
                    className="w-full h-full absolute inset-0"
                    rotate="5deg"
                  />
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 z-10 rounded-full overflow-hidden shadow-md">
                    <Image
                      src="/sites/the-ricecream/images/qua-gac.jpg"
                      alt="Gấc nếp chín đỏ tự nhiên"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-sans font-bold text-lg sm:text-xl tracking-wider uppercase text-[#160909]">
                  100% CỎ CÂY RỪNG
                </h3>
                <p className="text-sm sm:text-base text-[#160909]/75 font-sans leading-relaxed max-w-xs">
                  Hoàn toàn không phẩm màu hóa học. Sắc đỏ từ gấc, vàng dành
                  dành, xanh lá dứa, tím lá cẩm, trắng nếp nương.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center gap-5">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
                  <StarburstBadge
                    fillColor="#FFFDCF"
                    className="w-full h-full absolute inset-0"
                    rotate="-4deg"
                  />
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 z-10 rounded-full overflow-hidden shadow-md">
                    <Image
                      src="/sites/the-ricecream/images/gao-nep-nuong.jpg"
                      alt="Hạt gạo nếp nương tròn mẩy"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-sans font-bold text-lg sm:text-xl tracking-wider uppercase text-[#160909]">
                  NẾP NƯƠNG THƯỢNG HẠNG
                </h3>
                <p className="text-sm sm:text-base text-[#160909]/75 font-sans leading-relaxed max-w-xs">
                  Gạo nếp nương Điện Biên vụ mới, hạt mẩy đều, đồ 2 lửa dẻo
                  quánh, để nguội suốt ngày dài vẫn mềm ngọt không lại gạo.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center gap-5">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
                  <StarburstBadge
                    fillColor="#FFFDCF"
                    className="w-full h-full absolute inset-0"
                    rotate="8deg"
                  />
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 z-10 rounded-full overflow-hidden shadow-md">
                    <Image
                      src="/sites/the-ricecream/images/xoi-la-cam.jpg"
                      alt="Xôi lá cẩm tím dẻo bọc lá sen"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-sans font-bold text-lg sm:text-xl tracking-wider uppercase text-[#160909]">
                  GÓI LÁ SEN LÁ CHUỐI
                </h3>
                <p className="text-sm sm:text-base text-[#160909]/75 font-sans leading-relaxed max-w-xs">
                  Nói không với hộp xốp. Xôi được gói trọn trong lá sen hoặc lá
                  chuối tươi xanh, giữ hơi ấm và hương thơm ngát tự nhiên.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= BORN IN TÂY BẮC SECTION ================= */}
        <section className="relative w-full bg-[#D5433A] text-[#FFFFEC] pt-4 pb-4">
          <WaveDivider
            fillColor="#D5433A"
            position="top"
            className="-translate-y-[90%]"
          />

          <div className="max-w-[1240px] mx-auto px-6 sm:px-10 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story text */}
            <div className="lg:col-span-7 flex flex-col gap-6 items-start">
              <span className="font-badge text-xs sm:text-sm tracking-[0.2em] uppercase text-[#F3FFBD] font-bold">
                DI SẢN ẨM THỰC VÙNG CAO
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#FFFFEC] leading-[1.05]">
                Từ Ruộng Bậc Thang <br />
                Đến Bàn Tiệc Việt
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#FFFFEC]/90 leading-relaxed max-w-xl">
                Bắt nguồn từ đồng bào các dân tộc Tày, Thái, Nùng vùng cao Tây
                Bắc, mâm xôi ngũ sắc là món ăn thiêng liêng xuất hiện trong mọi
                dịp lễ hội, cưới hỏi và cúng mùa mới. Từng hạt nếp ngậm sương
                gió đại ngàn được nhuộm sắc bằng lá rừng, đồ chín trong chõ gỗ
                truyền thống — mang theo ước vọng về mưa thuận gió hòa và vạn sự
                hanh thông.
              </p>
              <Link
                href="/about"
                className="bg-[#160909] text-[#FFFFEC] hover:bg-white hover:text-[#160909] transition-colors font-sans font-bold text-sm sm:text-base tracking-[0.14em] uppercase px-8 py-3.5 rounded-full mt-2"
              >
                CÂU CHUYỆN BẾP
              </Link>
            </div>

            {/* Landscape photo */}
            <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/20">
              <Image
                src="/sites/the-ricecream/images/ruong-bac-thang-sapa.jpg"
                alt="Ruộng bậc thang Tây Bắc Sapa mùa lúa chín"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <WaveDivider
            fillColor="#D5433A"
            position="bottom"
            className="translate-y-[90%]"
          />
        </section>

        {/* ================= 5 SẮC NẾP NGŨ HÀNH ================= */}
        <section className="relative w-full bg-white py-24 sm:py-32 px-6 sm:px-10">
          <div className="max-w-[1240px] mx-auto flex flex-col items-center text-center gap-14 sm:gap-20">
            <div className="max-w-xl flex flex-col items-center gap-3">
              <span className="font-badge text-xs sm:text-sm tracking-[0.2em] uppercase text-[#D5433A] font-bold">
                MÓN XÔI ĐẶC SẮC
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#160909]">
                5 Sắc Nếp Ngũ Hành
              </h2>
              <p className="text-base sm:text-lg text-[#160909]/75 font-sans leading-relaxed">
                Khám phá những mâm xôi dẻo thơm được yêu thích nhất tại Bếp Xôi
                Ngũ Sắc.
              </p>
            </div>

            {/* 3 Featured Dishes Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-8">
              {/* Dish 1 */}
              <Link
                href="/flavors"
                className="group flex flex-col items-center text-center gap-5"
              >
                <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-md border border-[#160909]/10 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/sites/the-ricecream/images/xoi-ngu-sac-main.jpg"
                    alt="Mâm Xôi Ngũ Sắc Cổ Truyền"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-xl sm:text-2xl text-[#160909] uppercase tracking-wide group-hover:text-[#D5433A] transition-colors">
                    MÂM XÔI NGŨ SẮC ĐẠI CÁT
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#160909]/70">
                    5 màu hoa sen ngũ hành • Tặng kèm muối vừng lạc
                  </p>
                </div>
              </Link>

              {/* Dish 2 */}
              <Link
                href="/flavors"
                className="group flex flex-col items-center text-center gap-5"
              >
                <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-md border border-[#160909]/10 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/sites/the-ricecream/images/xoi-chien-gion.jpg"
                    alt="Xôi Chiên Giòn Ngũ Sắc"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-xl sm:text-2xl text-[#160909] uppercase tracking-wide group-hover:text-[#D5433A] transition-colors">
                    XÔI CHIÊN GIÒN NGŨ SẮC
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#160909]/70">
                    Vỏ ngoài giòn rụm • Nhân nếp dẻo mềm phủ chà bông
                  </p>
                </div>
              </Link>

              {/* Dish 3 */}
              <Link
                href="/flavors"
                className="group flex flex-col items-center text-center gap-5"
              >
                <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-md border border-[#160909]/10 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/sites/the-ricecream/images/xoi-ga.jpg"
                    alt="Xôi Gà Xé Nấm Hương"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-xl sm:text-2xl text-[#160909] uppercase tracking-wide group-hover:text-[#D5433A] transition-colors">
                    XÔI GÀ ĐỒI NƯỚNG MẮC KHÉN
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#160909]/70">
                    Gà thả đồi chắc thịt • Ướp hạt dổi mắc khén Tây Bắc
                  </p>
                </div>
              </Link>
            </div>

            <Link
              href="/flavors"
              className="bg-[#160909] text-[#FFFFEC] hover:bg-[#D5433A] transition-colors font-sans font-bold text-sm sm:text-base tracking-[0.14em] uppercase px-8 py-3.5 rounded-full"
            >
              CHI TIẾT 5 SẮC MÀU
            </Link>
          </div>
        </section>

        {/* ================= BẾP NHÀ NẾP (RECIPES) ================= */}
        <section className="relative w-full bg-[#160909] text-[#FFFFEC] py-24 sm:py-32 px-6 sm:px-10">
          <div className="max-w-[1240px] mx-auto flex flex-col items-center text-center gap-14 sm:gap-20">
            <div className="max-w-xl flex flex-col items-center gap-3">
              <span className="font-badge text-xs sm:text-sm tracking-[0.2em] uppercase text-[#D5433A] font-bold">
                BÍ QUYẾT ẨM THỰC
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#FFFFEC]">
                Bếp Nhà Nếp
              </h2>
              <p className="text-base sm:text-lg text-white/75 font-sans leading-relaxed">
                Mẹo giữ xôi dẻo lâu, cách làm muối vừng lạc giã tay và nghệ
                thuật tạo hình mâm cỗ truyền thống.
              </p>
            </div>

            {/* 3 Recipe Cards */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              {RECIPES.map((recipe) => (
                <Link
                  key={recipe.slug}
                  href={`/recipes/${recipe.slug}`}
                  className="group flex flex-col items-center text-center gap-5"
                >
                  <div className="relative w-full aspect-[4/3] rounded-[28px] overflow-hidden shadow-lg border border-white/10 transition-transform duration-300 group-hover:scale-[1.02]">
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl text-[#FFFFEC] uppercase tracking-wide group-hover:text-[#D5433A] transition-colors line-clamp-2">
                    {recipe.title}
                  </h3>
                  <span className="text-xs tracking-[0.16em] uppercase font-bold text-white/60 group-hover:text-white transition-colors">
                    XEM BÍ QUYẾT →
                  </span>
                </Link>
              ))}
            </div>

            <Link
              href="/recipes"
              className="bg-[#FFFFEC] text-[#160909] hover:bg-[#D5433A] hover:text-white transition-colors font-sans font-bold text-sm sm:text-base tracking-[0.14em] uppercase px-8 py-3.5 rounded-full"
            >
              XEM TẤT CẢ BÀI VIẾT
            </Link>
          </div>
        </section>

        {/* ================= STORE LOCATOR RADAR ================= */}
        <section className="relative w-full bg-[#FFFFEC] py-20 sm:py-28 px-6 sm:px-10">
          <div className="max-w-[1240px] mx-auto flex flex-col items-center text-center gap-10 sm:gap-14">
            <div className="max-w-xl flex flex-col items-center gap-3">
              <span className="font-badge text-xs sm:text-sm tracking-[0.2em] uppercase text-[#D5433A] font-bold">
                ĐIỂM HẸN ẨM THỰC
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#160909]">
                Bếp Xôi & Giao Tận Nơi
              </h2>
              <p className="text-base sm:text-lg text-[#160909]/80 font-sans leading-relaxed">
                Đến tận bếp thưởng thức chõ xôi bốc khói hoặc đặt hàng giao nóng
                trong 30-45 phút khắp nội thành!
              </p>
            </div>

            {/* Map Container */}
            <div className="w-full">
              <MapSection />
            </div>

            <Link
              href="/find-us"
              className="bg-[#160909] text-[#FFFFEC] hover:bg-[#D5433A] transition-colors font-sans font-bold text-sm sm:text-base tracking-[0.14em] uppercase px-8 py-3.5 rounded-full shadow-sm"
            >
              HỆ THỐNG CỬA HÀNG
            </Link>
          </div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <FAQAccordion />
      </main>

      <Footer />
    </div>
  );
}
