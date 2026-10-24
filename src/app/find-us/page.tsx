"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapSection } from "@/components/MapSection";

export default function FindUsPage() {
  const [notifyEmail, setNotifyEmail] = useState("");
  const [submittedNotify, setSubmittedNotify] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (notifyEmail) {
      setSubmittedNotify(true);
      setTimeout(() => setSubmittedNotify(false), 4000);
      setNotifyEmail("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFEC] text-[#160909]">
      <Navbar currentPath="/find-us" />

      <main className="flex-1 pt-28 sm:pt-36">
        {/* Hero Section */}
        <section className="max-w-[1240px] mx-auto px-6 sm:px-10 pb-12 sm:pb-16 flex flex-col items-center text-center gap-6">
          <span className="text-xs sm:text-sm font-badge tracking-[0.18em] uppercase text-[#D5433A]">
            HỆ THỐNG BẾP & GIAO HỎA TỐC
          </span>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-[#160909] leading-tight max-w-2xl">
            Địa Chỉ Bếp & Đặt Xôi Nóng
          </h1>
          <p className="font-sans text-base sm:text-xl text-[#160909]/80 max-w-xl leading-relaxed">
            Đến tận bếp ngắm nhìn những chõ xôi bốc khói ngào ngạt hoặc đặt hàng
            để được giao xôi nóng bọc lá sen tận nơi trong 30-45 phút!
          </p>
        </section>

        {/* Map Section */}
        <section className="max-w-[1240px] mx-auto px-6 sm:px-10 pb-20 sm:pb-28">
          <MapSection height="h-[450px] sm:h-[600px] lg:h-[680px]" />
        </section>

        {/* Banners & Retail Partner Callouts */}
        <section className="w-full bg-white py-20 sm:py-28 px-6 sm:px-10">
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Notification Card */}
            <div className="bg-[#FFFFEC] rounded-[36px] p-8 sm:p-12 flex flex-col justify-between gap-6 border border-[#160909]/5">
              <div className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#160909] uppercase">
                  NHẬN THÔNG BÁO MÓN MỚI
                </h2>
                <p className="font-sans text-sm sm:text-base text-[#160909]/80 leading-relaxed">
                  Đăng ký email để nhận thông báo mẻ nếp nương mới về và ưu đãi
                  đặc quyền cho khách hàng thân thiết.
                </p>
              </div>

              <form onSubmit={handleNotifySubmit} className="flex gap-2 w-full">
                <input
                  type="email"
                  required
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  placeholder="email-cua-ban@gmail.com"
                  className="bg-white border border-[#160909]/15 text-[#160909] placeholder:text-[#160909]/40 text-sm rounded-full px-5 py-3 flex-1 focus:outline-none focus:border-[#D5433A]"
                />
                <button
                  type="submit"
                  className="bg-[#160909] text-[#FFFFEC] hover:bg-[#D5433A] transition-colors font-sans font-bold text-xs sm:text-sm px-6 py-3 rounded-full cursor-pointer uppercase tracking-wider shrink-0"
                >
                  {submittedNotify ? "ĐÃ LƯU! ✓" : "Đăng ký ngay"}
                </button>
              </form>
            </div>

            {/* Retail Partner Card */}
            <div className="bg-[#160909] text-[#FFFFEC] rounded-[36px] p-8 sm:p-12 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#FFFFEC] uppercase">
                  ĐẶT MÂM CỖ CƯỚI HỎI & LỄ TIỆC?
                </h2>
                <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed">
                  Chúng tôi nhận đóng mâm xôi hoa sen ngũ sắc, xôi chữ Hỷ và tháp
                  xôi dâng lễ phục vụ cưới hỏi, cúng giỗ, sự kiện trang trọng.
                </p>
              </div>

              <div>
                <Link
                  href="/contact"
                  className="inline-block bg-[#FFFFEC] text-[#160909] hover:bg-[#D5433A] hover:text-white transition-colors font-sans font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full cursor-pointer uppercase tracking-wider"
                >
                  ĐẶT MÂM TIỆC NGAY
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
