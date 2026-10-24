import React from "react";

interface StarburstBadgeProps {
  text?: string;
  fillColor?: string;
  textColor?: string;
  className?: string;
  rotate?: string;
  children?: React.ReactNode;
}

export function StarburstBadge({
  text,
  fillColor = "#160909",
  textColor = "#FFFFEC",
  className = "",
  rotate = "0deg",
  children,
}: StarburstBadgeProps) {
  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ transform: `rotate(${rotate})` }}
    >
      <svg
        className="w-full h-full absolute inset-0 [filter:drop-shadow(0_4px_8px_rgba(0,0,0,0.12))]"
        viewBox="0 0 473 471"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinejoin="miter"
          fill={fillColor}
          d="M216.05,463.09l-30.68-23.6-38.13,6.64c-14.99,2.61-29.85-5.19-36.21-19.01l-16.2-35.15-36.85-11.84c-14.48-4.65-24.02-18.47-23.23-33.66l2-38.65-27.13-27.61c-10.66-10.85-12.68-27.52-4.93-40.6l19.73-33.3-11.19-37.05c-4.4-14.56,1.56-30.26,14.5-38.24l32.94-20.32,7.31-38.01c2.87-14.94,15.44-26.07,30.61-27.12l38.61-2.68,24.14-30.26c9.49-11.89,25.79-15.91,39.71-9.79l35.43,15.57,35.43-15.57c13.93-6.12,30.23-2.1,39.71,9.79l24.14,30.26,38.61,2.68c15.17,1.05,27.74,12.18,30.61,27.12l7.31,38.01,32.94,20.32c12.95,7.98,18.9,23.68,14.5,38.24l-11.19,37.05,19.73,33.3c7.75,13.09,5.73,29.75-4.93,40.6l-27.13,27.61,2,38.65c.78,15.19-8.75,29.01-23.23,33.66l-36.85,11.84-16.2,35.15c-6.37,13.81-21.23,21.62-36.21,19.01l-38.13-6.64-30.68,23.6c-12.06,9.27-28.84,9.27-40.9,0Z"
        />
      </svg>
      {text && (
        <span
          className="relative z-10 font-badge font-bold text-center text-xs sm:text-sm tracking-wider uppercase px-2 leading-tight"
          style={{ color: textColor }}
        >
          {text}
        </span>
      )}
      {children}
    </div>
  );
}
