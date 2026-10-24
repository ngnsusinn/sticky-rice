import React from "react";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function BrandLogo({ size = "md", className = "" }: BrandLogoProps) {
  const iconSize =
    size === "lg"
      ? "w-14 h-14 sm:w-20 sm:h-20"
      : size === "sm"
      ? "w-7 h-7"
      : "w-8 h-8 sm:w-10 sm:h-10";

  const titleSize =
    size === "lg"
      ? "text-3xl sm:text-5xl md:text-6xl"
      : size === "sm"
      ? "text-base sm:text-lg"
      : "text-lg sm:text-2xl";

  const subtitleSize =
    size === "lg"
      ? "text-xs sm:text-sm tracking-[0.28em] mt-1.5"
      : size === "sm"
      ? "text-[8px] tracking-[0.16em] mt-0.5"
      : "text-[9px] sm:text-[11px] tracking-[0.2em] mt-1";

  return (
    <div
      className={`inline-flex items-center gap-3 sm:gap-4 select-none ${className}`}
    >
      {/* Five-Color Rice Petals Emblem */}
      <svg
        className={`${iconSize} shrink-0 drop-shadow-md`}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Red (Gấc) */}
        <path
          d="M 50 15 C 60 30, 65 45, 50 60 C 35 45, 40 30, 50 15 Z"
          fill="#D5433A"
        />
        {/* Yellow (Dành dành/Nghệ) */}
        <path
          d="M 85 50 C 70 60, 55 65, 40 50 C 55 35, 70 40, 85 50 Z"
          fill="#F4B41A"
          transform="rotate(72 50 50)"
        />
        {/* Green (Lá dứa/nếp) */}
        <path
          d="M 85 50 C 70 60, 55 65, 40 50 C 55 35, 70 40, 85 50 Z"
          fill="#4B8B3B"
          transform="rotate(144 50 50)"
        />
        {/* Purple (Lá cẩm) */}
        <path
          d="M 85 50 C 70 60, 55 65, 40 50 C 55 35, 70 40, 85 50 Z"
          fill="#7D3C98"
          transform="rotate(216 50 50)"
        />
        {/* White (Nếp nương) */}
        <path
          d="M 85 50 C 70 60, 55 65, 40 50 C 55 35, 70 40, 85 50 Z"
          fill="#FFFFEC"
          stroke="#160909"
          strokeWidth="1.5"
          transform="rotate(288 50 50)"
        />
        {/* Center seed */}
        <circle cx="50" cy="50" r="9" fill="#160909" />
        <circle cx="50" cy="50" r="4.5" fill="#FFFFEC" />
      </svg>

      {/* Typography with verified native Vietnamese font */}
      <div className="flex flex-col text-left justify-center">
        <span
          className={`font-display font-black uppercase text-[#FFFFEC] leading-none ${titleSize}`}
          style={{ letterSpacing: "0.03em" }}
        >
          XÔI NGŨ SẮC
        </span>
        <span
          className={`font-sans font-bold uppercase text-[#D5433A] leading-none ${subtitleSize}`}
        >
          TÂY BẮC • NẾP NƯƠNG THUẦN TỰ NHIÊN
        </span>
      </div>
    </div>
  );
}
