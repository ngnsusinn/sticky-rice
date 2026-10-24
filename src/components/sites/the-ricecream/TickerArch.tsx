"use client";

import React from "react";
import Image from "next/image";

export function TickerArch() {
  const badges = [
    {
      label: "Nếp Nương Điện Biên",
      src: "/sites/the-ricecream/images/0l5UcMLsLRMBGi6uPj6s9Mtojpo.png",
    },
    {
      label: "100% Màu Cỏ Cây Rừng",
      src: "/sites/the-ricecream/images/ATdmj2unOVI6QDcwWLSS9ygNb4.png",
    },
    {
      label: "Không Phẩm Màu Hóa Học",
      src: "/sites/the-ricecream/images/MAlMDuZuXmRtVs6AJkRVHO5NeY.png",
    },
    {
      label: "Dẻo Thơm Suốt 24 Giờ",
      src: "/sites/the-ricecream/images/2XPfOm4LfaYjA88ErEXkCWPDLm0.png",
    },
    {
      label: "Gói Lá Sen & Lá Chuối",
      src: "/sites/the-ricecream/images/0l5UcMLsLRMBGi6uPj6s9Mtojpo.png",
    },
  ];

  // Repeat for continuous marquee effect
  const repeated = [...badges, ...badges, ...badges];

  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      {/* Curved / Floating Badge Ticker */}
      <div className="w-full overflow-hidden py-4 border-y border-[#160909]/5 bg-[#FFFFEC]/60">
        <div className="flex items-center gap-6 sm:gap-10 animate-marquee whitespace-nowrap w-max">
          {repeated.map((badge, idx) => (
            <div
              key={`${badge.label}-${idx}`}
              className="flex items-center gap-3 bg-white rounded-full px-6 py-2.5 shadow-sm border border-[#160909]/10"
            >
              <div className="relative w-7 h-7 shrink-0">
                <Image
                  src={badge.src}
                  alt={badge.label}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-badge font-bold text-xs sm:text-sm tracking-wider uppercase text-[#160909]">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Big Showcase Graphic: Mâm Xôi Ngũ Sắc Cổ Truyền */}
      <div className="relative w-full max-w-[1240px] px-6 sm:px-10 mt-10 sm:mt-14">
        <div className="relative w-full aspect-[21/9] sm:aspect-[24/9] rounded-[36px] sm:rounded-[56px] overflow-hidden shadow-2xl border-4 border-[#160909]/10 group">
          <Image
            src="/sites/the-ricecream/images/xoi-ngu-sac-main.jpg"
            alt="Mâm Xôi Ngũ Sắc Đại Cát Truyền Thống"
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8 sm:p-14 text-white">
            <span className="font-badge text-xs sm:text-sm tracking-[0.25em] uppercase text-[#F3FFBD] font-bold">
              • TINH HOA ĐẤT TRỜI TÂY BẮC •
            </span>
            <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl uppercase tracking-wide text-white mt-1">
              5 Sắc Màu Ngũ Hành — Vẹn Tròn Sung Túc
            </h3>
            <p className="font-sans text-xs sm:text-base text-white/80 max-w-2xl mt-2 line-clamp-2">
              Đỏ gấc may mắn, Vàng dành dành phú quý, Xanh lá dứa thanh mát, Tím lá cẩm thủy chung, Trắng nếp nương thuần khiết.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
