"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<1 | 2>(1);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFEC] text-[#160909]">
      <Navbar currentPath="/about" />

      <main className="flex-1 pt-28 sm:pt-36">
        {/* Hero Section */}
        <section className="max-w-[1240px] mx-auto px-6 sm:px-10 pb-16 sm:pb-24 flex flex-col items-center text-center gap-6">
          <span className="font-badge text-xs sm:text-sm tracking-[0.2em] uppercase text-[#D5433A] font-bold">
            CÂU CHUYỆN THƯƠNG HIỆU
          </span>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-[#160909] leading-tight max-w-3xl">
            Bí Mật Đằng Sau Hương Vị Nếp Nương
          </h1>
          <p className="font-sans text-base sm:text-xl text-[#160909]/80 max-w-3xl leading-relaxed">
            Trải qua nhiều thế kỷ, đồng bào vùng cao Tây Bắc đã hoàn thiện nghệ
            thuật đồ xôi nếp từ cỏ cây rừng. Kế thừa truyền thống ấy, chúng tôi
            chắt lọc tinh hoa từ nếp nương Điện Biên và các loại thảo mộc tự
            nhiên — mang hương vị mộc mạc của đại ngàn về với phố thị.
          </p>
          <a
            href="#story"
            className="mt-2 inline-block bg-[#160909] text-[#FFFFEC] hover:bg-[#D5433A] transition-colors font-sans font-bold text-sm sm:text-base tracking-[0.14em] uppercase px-8 py-3.5 rounded-full"
          >
            TÌM HIỂU THÊM
          </a>
        </section>

        {/* Section 1: Dẻo Thơm Từ Đất Trời */}
        <section id="story" className="w-full bg-white py-20 sm:py-28 px-6 sm:px-10">
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6 items-start">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#160909] leading-[1.05]">
                Dẻo Thơm <br />
                Từ Đất Trời
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#160909]/80 leading-relaxed">
                Được tưới tắm bằng dòng nước suối nguồn mát lành và sương mù
                quanh năm tại thung lũng Điện Biên, từng hạt nếp nương tích tụ
                vị ngọt đậm đà hiếm có.
              </p>
              <p className="font-sans text-base sm:text-lg text-[#160909]/80 leading-relaxed">
                Kỹ thuật đồ 2 lửa trong chõ gỗ truyền thống giúp hạt nếp chín
                đều bằng hơi nước, hạt gạo trong veo, căng mọng, mềm dẻo suốt
                24h mà không bao giờ bị lại gạo hay bết dính.
              </p>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[440px] aspect-square rounded-[36px] overflow-hidden bg-[#FFFFEC] p-4 shadow-lg border border-[#160909]/5">
                <Image
                  src="/images/gao-nep-nuong.jpg"
                  alt="Hạt gạo nếp nương Điện Biên"
                  fill
                  className="object-cover rounded-[28px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: 100% Cỏ Cây Hoa Lá Rừng */}
        <section className="w-full bg-[#FFFFEC] py-20 sm:py-28 px-6 sm:px-10">
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-[440px] aspect-square rounded-[36px] overflow-hidden bg-white p-4 shadow-lg border border-[#160909]/5">
                <Image
                  src="/images/xoi-la-cam.jpg"
                  alt="Xôi lá cẩm tím tự nhiên"
                  fill
                  className="object-cover rounded-[28px]"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-6 items-start">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#160909] leading-[1.05]">
                100% Màu Sắc <br />
                Từ Thảo Mộc Rừng
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#160909]/80 leading-relaxed">
                Chúng tôi kiên định nói không với mọi hóa chất phẩm màu công
                nghiệp. Mỗi sắc màu trên đĩa xôi là một vị thuốc dân gian quý giá:
                ruột gấc tươi giàu beta-carotene, lá cẩm tím thanh lọc, dành dành
                giải nhiệt và lá dứa thơm mát.
              </p>
              <p className="font-sans text-base sm:text-lg text-[#160909]/80 leading-relaxed">
                Thưởng thức Xôi Ngũ Sắc là tận hưởng hương vị thuần khiết, an
                lành cho dạ dày và bồi bổ sức khỏe cho cả gia đình.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Ý Nghĩa Văn Hóa & Phong Thủy (Tabs) */}
        <section className="w-full bg-white py-20 sm:py-28 px-6 sm:px-10">
          <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center gap-10">
            <span className="font-badge text-xs sm:text-sm tracking-[0.2em] uppercase text-[#D5433A] font-bold">
              Ý NGHĨA PHONG THỦY & VĂN HÓA
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#160909]">
              Ý Nghĩa Đằng Sau 5 Sắc Màu
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#160909]/80 max-w-2xl leading-relaxed">
              Mâm xôi ngũ sắc không chỉ là món ngon đãi khách mà còn kết tinh
              triết lý nhân sinh quan sâu sắc của người Việt.
            </p>

            {/* Tab Pill Buttons */}
            <div className="flex items-center gap-4 bg-[#FFFFEC] p-2 rounded-full border border-[#160909]/10">
              <button
                type="button"
                onClick={() => setActiveTab(1)}
                className={`px-6 py-2.5 rounded-full font-bold font-sans text-sm sm:text-base transition-all ${
                  activeTab === 1
                    ? "bg-[#160909] text-white shadow"
                    : "text-[#160909] hover:bg-black/5"
                }`}
              >
                1. Triết Lý Ngũ Hành
              </button>
              <button
                type="button"
                onClick={() => setActiveTab(2)}
                className={`px-6 py-2.5 rounded-full font-bold font-sans text-sm sm:text-base transition-all ${
                  activeTab === 2
                    ? "bg-[#160909] text-white shadow"
                    : "text-[#160909] hover:bg-black/5"
                }`}
              >
                2. Nếp Sống Bản Làng
              </button>
            </div>

            {/* Tab Content Box */}
            <div className="w-full bg-[#FFFFEC] rounded-[36px] p-8 sm:p-12 text-left border border-[#160909]/5 shadow-sm min-h-[220px]">
              {activeTab === 1 ? (
                <div className="flex flex-col gap-4 animate-in fade-in duration-300">
                  <h3 className="font-sans font-bold text-lg sm:text-xl tracking-wider text-[#D5433A] uppercase">
                    NGŨ HÀNH TƯƠNG SINH — ĐẠI CÁT ĐẠI LỢI
                  </h3>
                  <p className="font-sans text-base sm:text-lg text-[#160909]/85 leading-relaxed">
                    Năm màu sắc đại diện cho ngũ hành Kim - Mộc - Thủy - Hỏa - Thổ.
                    Màu trắng (Kim) thuần khiết; Màu xanh (Mộc) sinh sôi; Màu tím
                    (Thủy) bền chặt; Màu đỏ (Hỏa) hạnh phúc; Màu vàng (Thổ) no ấm.
                    Bày mâm xôi ngũ sắc trên bàn thờ gia tiên hay mâm cỗ cưới hỏi
                    chính là lời nguyện cầu cho sự hòa hợp, hưng thịnh và viên mãn.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-4 animate-in fade-in duration-300">
                  <h3 className="font-sans font-bold text-lg sm:text-xl tracking-wider text-[#D5433A] uppercase">
                    NGỌN LỬA ẤM VÀ TÌNH NGHĨA BẢN LÀNG
                  </h3>
                  <p className="font-sans text-base sm:text-lg text-[#160909]/85 leading-relaxed">
                    Để có được một chõ xôi ngũ sắc, người phụ nữ vùng cao phải lặn
                    lội vào rừng sâu tìm lá cẩm, hái quả gấc chín, chọn củ nghệ già.
                    Bếp lửa đồ xôi đỏ rực thâu đêm là nơi cả gia đình sum họp,
                    truyền dạy nhau bí quyết gìn giữ hạt ngọc của trời. Chúng tôi
                    tự hào mang trọn tấm lòng ấy gửi vào từng gói xôi đến tay bạn.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Section 4: So Sánh Xôi Sạch vs Xôi Phẩm Màu */}
        <section className="w-full bg-[#FFFFEC] py-20 sm:py-28 px-6 sm:px-10">
          <div className="max-w-[1140px] mx-auto flex flex-col items-center gap-12 sm:gap-16">
            <div className="flex flex-col items-center text-center gap-3">
              <span className="font-badge text-xs sm:text-sm tracking-[0.2em] uppercase text-[#D5433A] font-bold">
                TIÊU CHUẨN AN TOÀN
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#160909]">
                Sự Khác Biệt Tại Bếp Của Chúng Tôi
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#160909]/80">
                So sánh chất lượng với xôi nấu bằng phẩm màu công nghiệp.
              </p>
            </div>

            {/* Comparison Cards */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* Xôi phẩm màu */}
              <div className="bg-white/80 rounded-[36px] p-8 sm:p-10 border border-[#160909]/10 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#160909]/70 uppercase tracking-wide pb-6 border-b border-black/10">
                    XÔI NẤU PHẨM MÀU HÓA HỌC
                  </h3>
                  <ul className="flex flex-col gap-4 pt-6 text-sm sm:text-base text-[#160909]/80 font-sans">
                    <li className="flex items-center gap-3">
                      <span className="text-red-500 font-bold">✕</span>
                      Dùng phẩm màu nhuộm công nghiệp, bột tạo màu không rõ nguồn gốc
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-red-500 font-bold">✕</span>
                      Pha trộn gạo nếp cũ, hạt gạo gãy vụn
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-red-500 font-bold">✕</span>
                      Nhanh bị cứng, khô hạt và lại gạo sau vài giờ
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-red-500 font-bold">✕</span>
                      Mùi hương liệu nồng gắt, mất vị ngọt tự nhiên
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-red-500 font-bold">✕</span>
                      Đựng trong hộp xốp độc hại, ngấm hóa chất khi xôi nóng
                    </li>
                  </ul>
                </div>
              </div>

              {/* Xôi Ngũ Sắc Tây Bắc */}
              <div className="bg-[#160909] text-[#FFFFEC] rounded-[36px] p-8 sm:p-10 shadow-xl flex flex-col justify-between border-2 border-[#D5433A]">
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-white/20">
                    <h3 className="font-display text-2xl sm:text-3xl text-[#FFFFEC] uppercase tracking-wide">
                      XÔI NGŨ SẮC TÂY BẮC
                    </h3>
                    <span className="text-xs font-badge tracking-wider bg-[#D5433A] text-white px-3 py-1 rounded-full uppercase">
                      Cam Kết Vàng
                    </span>
                  </div>
                  <ul className="flex flex-col gap-4 pt-6 text-sm sm:text-base text-[#FFFFEC]/90 font-sans">
                    <li className="flex items-center gap-3">
                      <span className="text-[#8CB83C] font-bold">✓</span>
                      100% Cỏ cây thảo mộc rừng (Gấc, lá cẩm, lá nếp, dành dành)
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#8CB83C] font-bold">✓</span>
                      100% Nếp nương Điện Biên & Nếp cái hoa vàng chính vụ
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#8CB83C] font-bold">✓</span>
                      Hạt xôi căng bóng, mềm dẻo suốt 24h không bị lại gạo
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#8CB83C] font-bold">✓</span>
                      Hương thơm thảo mộc tự nhiên dịu nhẹ, thanh mát
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#8CB83C] font-bold">✓</span>
                      Gói 2 lớp lá chuối tươi / lá sen sạch, giữ nhiệt an toàn tuyệt đối
                    </li>
                  </ul>
                </div>

                <div className="pt-8 mt-6 border-t border-white/10 text-center">
                  <p className="font-display text-xl text-[#FFFFEC] italic">
                    Ăn lành • Sống khỏe • Trân quý cội nguồn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
