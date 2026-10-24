"use client";

import React, { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Xôi ngũ sắc có dùng phẩm màu hóa học không?",
    a: "Tuyệt đối không! 100% màu sắc của xôi được chiết xuất từ cỏ cây thảo mộc rừng Tây Bắc: màu đỏ từ gấc nếp tươi, màu vàng từ quả dành dành & nghệ nếp, màu xanh từ lá dứa bánh tẻ, màu tím từ lá cẩm thạch anh, màu trắng nguyên bản từ nếp nương. Cửa hàng cam kết hoàn tiền 200% nếu phát hiện phẩm màu nhân tạo.",
  },
  {
    q: "Gạo nếp dùng để đồ xôi là loại gạo gì?",
    a: "Chúng tôi sử dụng 100% hạt gạo nếp nương Điện Biên và nếp cái hoa vàng chính gốc vụ mới. Hạt nếp mẩy tròn, bóng bẩy, khi đồ chín tỏa hương thơm ngát tự nhiên và dẻo mềm suốt cả ngày.",
  },
  {
    q: "Xôi để được bao lâu và cách bảo quản như thế nào?",
    a: "Ở nhiệt độ phòng bọc trong lá chuối/lá sen, xôi giữ trọn vị ngon từ 12-16 tiếng. Nếu để ngăn mát tủ lạnh dùng được trong 3-4 ngày; bảo quản ngăn đông dùng được trong 1 tháng. Khi ăn chỉ cần hấp cách thủy 7-10 phút hoặc quay lò vi sóng 2 phút là dẻo thơm như mới ra lò.",
  },
  {
    q: "Cửa hàng có nhận đặt mâm cúng, tiệc cưới, lễ khai trương không?",
    a: "Có! Bếp nhận đặt mâm xôi hoa sen ngũ sắc ngũ hành, xôi chữ Hỷ song toàn, tháp xôi ngũ sắc dâng lễ với số lượng từ 1 mâm đến hàng trăm suất tiệc, đóng mẹt tre trang trọng và giao đúng giờ hoàng đạo.",
  },
  {
    q: "Xôi giao đến nơi có còn nóng dẻo không?",
    a: "Mọi đơn hàng xôi đều được đồ nóng trước giờ giao 15 phút, gói cẩn thận 2 lớp lá chuối tươi/lá sen sạch và đặt trong túi giữ nhiệt chuyên dụng, đảm bảo xôi đến tay quý khách vẫn bốc khói nghi ngút và thơm ngào ngạt.",
  },
  {
    q: "Cửa hàng có các loại topping ăn kèm nào?",
    a: "Mỗi phần xôi đều tặng kèm muối vừng lạc rang giã tay truyền thống. Quý khách có thể gọi thêm: ruốc nấm hương chay, chà bông thịt heo/gà xé cay, chả quế nướng Ước Lễ, lạp xưởng Tây Bắc gác bếp, hành phi ta giòn rụm tự phi bằng dầu sạch.",
  },
  {
    q: "Cách thức đặt xôi nhanh nhất như thế nào?",
    a: "Quý khách có thể đặt trực tiếp qua mục 'ĐỊA CHỈ & ĐẶT XÔI' trên website, gọi Hotline/Zalo của cửa hàng hoặc nhắn tin qua Fanpage. Với đơn cỗ tiệc lớn, xin vui lòng đặt trước 1 ngày để bếp ngâm nếp và tuyển chọn lá tươi ngon nhất.",
  },
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-white py-20 sm:py-28 px-6 sm:px-10">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Heading */}
        <div className="lg:col-span-5 sticky top-32">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#160909] leading-[1.1] tracking-tight">
            Bạn hỏi, <br />
            Bếp trả lời!
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#160909]/70 mt-4 leading-relaxed max-w-sm">
            Tất cả những điều bạn cần biết về nguồn gốc nếp nương, phẩm màu tự nhiên và cách bảo quản xôi ngũ sắc chuẩn vị.
          </p>
        </div>

        {/* Right Accordion List */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="bg-[#FFFFEC] rounded-[24px] sm:rounded-[30px] p-6 sm:p-7 cursor-pointer transition-all duration-300 hover:shadow-sm"
                onClick={() => toggle(idx)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-sans font-medium text-base sm:text-lg text-[#160909]">
                    {faq.q}
                  </h3>
                  <button
                    type="button"
                    aria-label={isOpen ? "Collapse question" : "Expand question"}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-2xl font-light text-[#160909] transition-transform duration-300 shrink-0"
                    style={{
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </button>
                </div>
                {isOpen && (
                  <div className="mt-4 pt-3 border-t border-[#160909]/10 text-sm sm:text-base text-[#160909]/80 leading-relaxed font-sans animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
