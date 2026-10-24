"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "./BrandLogo";

interface NavbarProps {
  currentPath?: string;
}

export function Navbar({ currentPath }: NavbarProps) {
  const pathname = usePathname() || currentPath || "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "CÂU CHUYỆN", href: "/about" },
    { name: "5 SẮC NẾP", href: "/flavors" },
    { name: "ĐỊA CHỈ & ĐẶT XÔI", href: "/find-us" },
    { name: "BẾP NHÀ NẾP", href: "/recipes" },
    { name: "LIÊN HỆ", href: "/contact" },
  ];

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* Pill container */}
      <nav
        aria-label="Main Navigation"
        className="pointer-events-auto relative w-full max-w-[1240px] bg-[#160909] text-[#FFFFF7] rounded-[100px] px-6 sm:px-10 py-3.5 sm:py-4 shadow-lg flex items-center justify-between transition-all duration-300"
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group transition-transform duration-200 group-hover:scale-105">
          <BrandLogo size="md" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-9">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[13px] tracking-[0.14em] font-bold font-sans transition-all duration-200 hover:text-[#D5433A] relative py-1 ${
                  isActive ? "text-[#D5433A]" : "text-[#FFFFF7]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-[#D5433A]"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <span className="text-xl font-bold leading-none">✕</span>
          ) : (
            <>
              <span className="w-5 h-[2px] bg-[#FFFFF7] rounded-full transition-all"></span>
              <span className="w-5 h-[2px] bg-[#FFFFF7] rounded-full transition-all"></span>
              <span className="w-5 h-[2px] bg-[#FFFFF7] rounded-full transition-all"></span>
            </>
          )}
        </button>

        {/* Mobile Dropdown Menu Card */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 right-0 bg-[#160909] text-[#FFFFF7] rounded-[32px] p-6 shadow-2xl flex flex-col z-50 border border-white/10 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
              >
                <BrandLogo size="sm" />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 flex items-center justify-center text-lg font-bold text-white hover:text-[#D5433A]"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-5 pt-6 pb-4">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg tracking-[0.12em] font-bold font-sans transition-colors ${
                      isActive ? "text-[#D5433A]" : "text-[#FFFFF7] hover:text-[#D5433A]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
