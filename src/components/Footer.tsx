"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ScallopDivider } from "./ScallopDivider";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  const navLinks = [
    { name: "CÂU CHUYỆN", href: "/about" },
    { name: "5 SẮC NẾP", href: "/flavors" },
    { name: "ĐỊA CHỈ & ĐẶT XÔI", href: "/find-us" },
    { name: "BẾP NHÀ NẾP", href: "/recipes" },
    { name: "LIÊN HỆ", href: "/contact" },
  ];

  return (
    <footer className="w-full relative bg-[#160909] text-[#FFFFEC] overflow-hidden pt-0">
      {/* Scalloped top decorative awning / cut-out */}
      <ScallopDivider fillColor="#160909" className="-translate-y-[95%]" />

      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 pt-4 pb-12 flex flex-col gap-12 sm:gap-16">
        {/* Navigation tier */}
        <nav
          aria-label="Footer Navigation"
          className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-8 pt-4 border-b border-white/10 pb-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs sm:text-sm tracking-[0.14em] font-bold font-sans text-[#FFFFEC] hover:text-[#D5433A] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Hero Branding Wordmark Tier */}
        <div className="w-full flex justify-center py-6 sm:py-10">
          <Link href="/" className="inline-block transition-transform duration-200 hover:scale-105">
            <BrandLogo size="lg" />
          </Link>
        </div>

        {/* Action & Social Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pt-4">
          {/* Social */}
          <div className="flex flex-col gap-1">
            <span className="text-xs tracking-widest font-outfit uppercase text-white/60">
              THEO DÕI BẾP
            </span>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base font-bold tracking-wider hover:text-[#D5433A] transition-colors uppercase"
            >
              FACEBOOK & INSTAGRAM
            </a>
          </div>

          {/* Newsletter Form */}
          <div className="w-full md:w-auto flex flex-col gap-3">
            <label
              htmlFor="footer-newsletter-email"
              className="text-xs sm:text-sm font-outfit uppercase tracking-wider text-[#FFFFEC]"
            >
              NHẬN THỰC ĐƠN TIỆC & ƯU ĐÃI NẾP MỚI HÀNG TUẦN!
            </label>
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 max-w-md w-full"
            >
              <input
                id="footer-newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email-cua-ban@gmail.com"
                className="bg-white/10 border border-white/20 text-[#FFFFEC] placeholder:text-white/40 text-sm rounded-full px-5 py-3 flex-1 focus:outline-none focus:border-[#D5433A]"
              />
              <button
                type="submit"
                className="bg-[#FFFFEC] text-[#160909] hover:bg-[#D5433A] hover:text-white transition-colors font-sans font-bold text-xs sm:text-sm px-6 py-3 rounded-full cursor-pointer uppercase tracking-wider"
              >
                {subscribed ? "ĐÃ LƯU! ✓" : "ĐĂNG KÝ"}
              </button>
            </form>
          </div>
        </div>

        {/* Baseline Utility / Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 border-t border-white/10 pt-8 gap-4">
          <p>© 2026 Xôi Ngũ Sắc Tây Bắc • Tinh Hoa Ẩm Thực Nếp Nương</p>
          <p className="hover:text-white transition-colors">
            100% Cỏ Cây Hoa Lá Rừng Tự Nhiên
          </p>
        </div>
      </div>
    </footer>
  );
}
