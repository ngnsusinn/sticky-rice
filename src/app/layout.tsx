import type { Metadata } from "next";
import { Fraunces, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["vietnamese", "latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["vietnamese", "latin"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Xôi Ngũ Sắc Tây Bắc • Tinh Hoa Nếp Nương Thuần Tự Nhiên",
  description:
    "Chuyên mâm xôi ngũ sắc Tây Bắc làm từ nếp nương Điện Biên, 100% màu tự nhiên từ lá cẩm, quả gấc, lá nếp, dành dành. Nhận đặt tiệc cưới, cúng giỗ, lễ tết giao nóng tận nơi.",
  icons: {
    icon: "/images/logo-xoi-ngu-sac.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${fraunces.variable} ${beVietnamPro.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FFFFEC] text-[#160909] font-sans antialiased selection:bg-[#D5433A] selection:text-white">
        {children}
      </body>
    </html>
  );
}
