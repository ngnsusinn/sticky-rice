import React from "react";

interface WaveDividerProps {
  fillColor?: string;
  className?: string;
  position?: "top" | "bottom";
}

export function WaveDivider({
  fillColor = "#D5433A",
  className = "",
  position = "top",
}: WaveDividerProps) {
  if (position === "bottom") {
    return (
      <div
        className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className}`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1922.869 80.371"
          preserveAspectRatio="none"
          className="w-full h-10 sm:h-16 md:h-20 block rotate-180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0 70.61 C 279 -36.606 565.436 2.681 861 31.164 C 1250.539 76.056 1287.76 80.078 1455.5 65 C 1623.24 49.922 1921.5 15.745 1921.5 15.745 L 1922.869 80.371 L 0 80.371 Z"
            fill={fillColor}
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1922.869 80.371"
        preserveAspectRatio="none"
        className="w-full h-10 sm:h-16 md:h-20 block"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0 70.61 C 279 -36.606 565.436 2.681 861 31.164 C 1250.539 76.056 1305.92 68.12 1493 62 C 1680.08 55.88 1921.5 15.745 1921.5 15.745 L 1922.869 80.371 L 0 80.371 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
