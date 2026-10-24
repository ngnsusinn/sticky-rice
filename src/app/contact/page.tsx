"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.phone && formData.name) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", phone: "", address: "", message: "" });
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFEC] text-[#160909]">
      <Navbar currentPath="/contact" />

      <main className="flex-1 pt-28 sm:pt-36">
        {/* Hero Section */}
        <section className="max-w-[1240px] mx-auto px-6 sm:px-10 pb-16 sm:pb-20 flex flex-col items-center text-center gap-6">
          <span className="font-badge text-xs sm:text-sm tracking-[0.2em] uppercase text-[#D5433A] font-bold">
            KẾT NỐI VỚI BẾP
          </span>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-[#160909] leading-tight max-w-2xl">
            Liên Hệ Đặt Xôi & Hợp Tác
          </h1>
          <p className="font-sans text-base sm:text-xl text-[#160909]/80 max-w-xl leading-relaxed">
            Quý khách có nhu cầu đặt xôi ăn sáng, đặt mâm cỗ cưới hỏi, cúng giỗ
            hay hợp tác phân phối đại lý? Hãy nhắn ngay cho Bếp nhé!
          </p>
        </section>

        {/* Contact Form & Info */}
        <section className="w-full bg-white py-16 sm:py-24 px-6 sm:px-10">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <h2 className="font-display text-3xl sm:text-4xl text-[#160909] uppercase tracking-wide">
                THÔNG TIN LIÊN HỆ
              </h2>

              <div className="flex flex-col gap-6 text-[#160909] font-sans">
                {/* Facebook / Instagram */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#FFFFEC] flex items-center justify-center p-2.5 shrink-0 transition-transform group-hover:scale-105 border border-[#160909]/10">
                    <Image
                      src="/images/XobD3SwuSBsSBZrhf2k8bevZEi0.svg"
                      alt="Facebook & Instagram"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-base sm:text-lg font-medium group-hover:text-[#D5433A] transition-colors">
                    fb.com/xoingusactaybac
                  </span>
                </a>

                {/* Hotline / Zalo */}
                <a
                  href="tel:0988888999"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#FFFFEC] flex items-center justify-center p-2.5 shrink-0 transition-transform group-hover:scale-105 border border-[#160909]/10">
                    <Image
                      src="/images/kfdjrx3yIH6zSz7SFPTV5nMBi4.svg"
                      alt="Hotline"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-base sm:text-lg font-medium group-hover:text-[#D5433A] transition-colors break-all">
                    Hotline / Zalo: 0988 888 999
                  </span>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFFFEC] flex items-center justify-center p-2.5 shrink-0 border border-[#160909]/10 mt-1">
                    <Image
                      src="/images/s9Rr1jnHKdN9djJX8LfDliVXuo.svg"
                      alt="Địa chỉ"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-base sm:text-lg text-[#160909]/80 leading-snug pt-2">
                    36 Hàng Điếu, Phường Cửa Đông, <br />
                    Quận Hoàn Kiếm, Hà Nội
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 bg-[#FFFFEC] rounded-[36px] p-8 sm:p-12 border border-[#160909]/5 shadow-sm">
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center gap-4 animate-in fade-in">
                  <span className="w-16 h-16 rounded-full bg-[#D5433A] text-white flex items-center justify-center text-2xl font-bold">
                    ✓
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#160909]">
                    Bếp đã nhận yêu cầu!
                  </h3>
                  <p className="font-sans text-base text-[#160909]/80 max-w-sm">
                    Chuyên viên của chúng tôi sẽ liên hệ lại qua số điện thoại để
                    xác nhận đơn hàng và thời gian giao xôi trong ít phút.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs uppercase tracking-wider font-bold text-[#160909]/60 mb-2 font-sans"
                    >
                      Họ và tên của bạn
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Ví dụ: Nguyễn Văn An"
                      className="w-full bg-white border border-[#160909]/15 text-[#160909] placeholder:text-[#160909]/40 text-base rounded-2xl px-5 py-3.5 focus:outline-none focus:border-[#D5433A]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs uppercase tracking-wider font-bold text-[#160909]/60 mb-2 font-sans"
                    >
                      Số điện thoại / Zalo
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="0912 345 678"
                      className="w-full bg-white border border-[#160909]/15 text-[#160909] placeholder:text-[#160909]/40 text-base rounded-2xl px-5 py-3.5 focus:outline-none focus:border-[#D5433A]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-address"
                      className="block text-xs uppercase tracking-wider font-bold text-[#160909]/60 mb-2 font-sans"
                    >
                      Địa chỉ nhận hàng (nếu cần giao tận nơi)
                    </label>
                    <input
                      id="contact-address"
                      type="text"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      placeholder="Số nhà, tên đường, phường/quận..."
                      className="w-full bg-white border border-[#160909]/15 text-[#160909] placeholder:text-[#160909]/40 text-base rounded-2xl px-5 py-3.5 focus:outline-none focus:border-[#D5433A]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs uppercase tracking-wider font-bold text-[#160909]/60 mb-2 font-sans"
                    >
                      Yêu cầu chi tiết (Món xôi, số lượng mâm, ngày giờ cần nhận...)
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Ví dụ: Đặt 2 mâm xôi hoa sen ngũ sắc cúng rằm ngày mai lúc 9h sáng..."
                      className="w-full bg-white border border-[#160909]/15 text-[#160909] placeholder:text-[#160909]/40 text-base rounded-2xl px-5 py-3.5 focus:outline-none focus:border-[#D5433A] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#160909] text-[#FFFFEC] hover:bg-[#D5433A] transition-colors font-sans font-bold text-sm sm:text-base tracking-[0.14em] uppercase py-4 rounded-full mt-2 cursor-pointer"
                  >
                    GỬI YÊU CẦU ĐẶT XÔI
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
