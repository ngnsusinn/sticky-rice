import React from "react";

interface ScallopDividerProps {
  fillColor?: string;
  className?: string;
  flip?: boolean;
}

export function ScallopDivider({
  fillColor = "#160909",
  className = "",
  flip = false,
}: ScallopDividerProps) {
  // Repeating scallops pattern across full width using inline SVG pattern
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className} ${
        flip ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-8 sm:h-12 md:h-14 block"
        viewBox="0 0 1200 63"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id={`scallop-pattern-${fillColor.replace(/[^a-zA-Z0-9]/g, "")}`}
          x="0"
          y="0"
          width="56"
          height="63"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 55.848 0 L 47.95 0 C 45.566 9.069 37.515 15.752 27.921 15.752 C 18.326 15.752 10.275 9.069 7.891 0 L 0 0 L 0 63 L 55.848 63 Z"
            fill={fillColor}
          />
        </pattern>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill={`url(#scallop-pattern-${fillColor.replace(/[^a-zA-Z0-9]/g, "")})`}
        />
      </svg>
    </div>
  );
}
