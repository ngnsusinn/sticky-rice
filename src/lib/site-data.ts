export interface Recipe {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  prevSlug?: string;
  prevTitle?: string;
  nextSlug?: string;
  nextTitle?: string;
}

export interface Flavor {
  id: string;
  name: string;
  tagline: string;
  colorHex: string;
  sourceIngredient: string;
  elementMeaning: string;
  description: string;
  ingredients: string;
  allergenNote: string;
  image: string;
}

export const RECIPES: Recipe[] = [
  {
    slug: "meo-ham-nong-xoi-deo-nhu-moi",
    title: "Bí quyết hấp lại xôi dẻo bóng như vừa dỡ chõ",
    subtitle:
      "Bí quyết đơn giản giữ hạt xôi căng tròn, mọng nước, dậy mùi nếp nương dù đã để tủ lạnh qua đêm.",
    image: "/images/xoi-xeo.jpg",
    ingredients: [
      "Xôi ngũ sắc đã trữ mát hoặc trữ đông",
      "1-2 muỗng canh nước lọc tinh khiết hoặc nước cốt dừa",
      "Vài lá chuối tươi hoặc giấy nến hấp xôi",
      "Chõ hấp cách thủy (hoặc lò vi sóng + màng bọc chịu nhiệt)",
    ],
    instructions: [
      "Nếu dùng chõ hấp: Đun sôi nước trong nồi đáy, lót lá chuối tươi lên vỉ chõ.",
      "Vẩy nhẹ vài giọt nước lọc đều khắp bề mặt xôi để bù ẩm cho hạt nếp.",
      "Cho xôi vào chõ, đậy kín nắp hấp cách thủy từ 7-10 phút ở lửa vừa.",
      "Nếu dùng lò vi sóng: Đặt xôi vào đĩa sứ, úp chén nước nhỏ bên cạnh hoặc đậy khăn xô ẩm, quay công suất 600W trong 2 phút.",
      "Xới nhẹ tay từ dưới lên, hạt xôi sẽ lập tức bóng bẩy, mềm dẻo và ngát hương thơm lá rừng.",
    ],
    nextSlug: "cach-lam-muoi-vung-lac-giao-tay",
    nextTitle: "Cách làm muối vừng lạc rang giã tay bùi ngậy",
  },
  {
    slug: "cach-lam-muoi-vung-lac-giao-tay",
    title: "Cách làm muối vừng lạc rang giã tay bùi ngậy",
    subtitle:
      "Thức chấm mộc mạc 'linh hồn' của mọi đĩa xôi nếp — vị mặn mòi, béo bùi cân bằng hoàn hảo.",
    image: "/images/xoi-do-xanh.jpg",
    ingredients: [
      "200g đậu phộng (lạc sẻ củ nhỏ, vỏ đỏ giòn)",
      "100g vừng trắng (mè trắng) hoặc vừng đen hạt mẩy",
      "1.5 muỗng cà phê muối hầm tinh khiết (hoặc muối hồng)",
      "1/2 muỗng cà phê đường mía thô (tùy khẩu vị)",
    ],
    instructions: [
      "Rang đậu phộng trên chảo gang lửa nhỏ, đảo đều tay đến khi vỏ nứt tách, hạt thơm lừng rồi ủ kín trong khăn sạch 15 phút cho giòn rụm.",
      "Chà sạch vỏ lụa của đậu phộng, cho vào cối đá giã dập thành từng mảnh vừa ăn (không giã quá nát để giữ độ giòn sần sật).",
      "Rang vừng trắng lửa liu riu đến khi hạt vẩy nhẹ tiếng nổ lách tách và dậy mùi thơm béo.",
      "Rang muối hầm khô ráo, giã mịn.",
      "Trộn đều đậu phộng, vừng thơm và muối theo tỷ lệ vừa miệng, bảo quản trong hũ thủy tinh kín dùng kèm xôi nóng.",
    ],
    prevSlug: "meo-ham-nong-xoi-deo-nhu-moi",
    prevTitle: "Bí quyết hấp lại xôi dẻo bóng như vừa dỡ chõ",
    nextSlug: "mam-xoi-hoa-sen-le-tet-cuoi-hoi",
    nextTitle: "Nghệ thuật tạo hình mâm xôi hoa sen ngũ sắc lễ tiệc",
  },
  {
    slug: "mam-xoi-hoa-sen-le-tet-cuoi-hoi",
    title: "Nghệ thuật tạo hình mâm xôi hoa sen ngũ sắc lễ tiệc",
    subtitle:
      "Hướng dẫn ép khuôn mâm xôi ngũ sắc ngũ hành dâng cúng tổ tiên, tiệc cưới hỏi mang lại đại cát, an khang.",
    image: "/images/xoi-ngu-sac-main.jpg",
    ingredients: [
      "5 phần xôi 5 màu: Đỏ (gấc), Vàng (dành dành), Tím (lá cẩm), Xanh (lá nếp), Trắng (nếp nương)",
      "Khuôn ép xôi hoa sen / chữ Hỷ bằng gỗ hoặc silicon an toàn",
      "Dầu mè hoặc mỡ gà thoa khuôn chống dính",
      "Lá sen tươi hoặc mẹt tre lót đáy",
    ],
    instructions: [
      "Thoa một lớp dầu mè hoặc nước cốt dừa thật mỏng vào lòng khuôn để chống dính và tăng độ bóng.",
      "Lần lượt xếp từng màu xôi vào các cánh hoa sen theo vòng ngũ hành tương sinh (Xanh - Đỏ - Vàng - Trắng - Tím).",
      "Dùng thìa nén vừa tay để các hạt nếp kết dính chặt chẽ mà không bị nát hạt.",
      "Lót lá sen tươi lên đĩa hoặc mẹt tre, nhẹ nhàng úp ngược khuôn và nhấc ra đều tay.",
      "Điểm xuyết hoa văn bằng ruốc nấm, chả quế hoặc vừng rang vàng ở tâm hoa để hoàn thiện tác phẩm ẩm thực.",
    ],
    prevSlug: "cach-lam-muoi-vung-lac-giao-tay",
    prevTitle: "Cách làm muối vừng lạc rang giã tay bùi ngậy",
  },
];

export const FLAVORS: Flavor[] = [
  {
    id: "do-gac",
    name: "Màu Đỏ Gấc (Hành Hỏa)",
    tagline: "GẤC NẾP TƯƠI CHÍN ĐỎ • MAY MẮN & HỶ SỰ",
    colorHex: "#D5433A",
    sourceIngredient: "Quả Gấc nếp chín đỏ Tây Bắc",
    elementMeaning:
      "Hành Hỏa — Tượng trưng cho ánh lửa ấm no, vượng khí, hạnh phúc và may mắn cát tường.",
    description:
      "Hạt nếp nương hòa quyện cùng thịt gấc chín đỏ au và một chén nhỏ rượu trắng bí truyền giúp dậy màu tươi thắm tự nhiên. Vị xôi dẻo quánh, ngọt hậu nhẹ nhàng, thoang thoảng hương béo bùi đặc trưng của gấc.",
    ingredients:
      "Gạo nếp nương Điện Biên, thịt gấc nếp tươi, rượu nếp ủ men lá, dầu gấc nguyên chất, đường mía thô, muối hầm",
    allergenNote: "100% Thuần thực vật, không chất bảo quản, không phẩm màu nhân tạo",
    image: "/images/xoi-ngu-sac-main.jpg",
  },
  {
    id: "vang-danh-danh",
    name: "Màu Vàng Dành Dành (Hành Thổ)",
    tagline: "HOA DÀNH DÀNH & NGHỆ NẾP • PHÚ QUÝ & NO ẤM",
    colorHex: "#E5A01A",
    sourceIngredient: "Quả dành dành rừng & củ nghệ vàng bánh tẻ",
    elementMeaning:
      "Hành Thổ — Tượng trưng cho đất mẹ chở che, phúc lộc dồi dào, mùa màng bội thu.",
    description:
      "Nước cốt chiết xuất từ quả dành dành khô kết hợp cùng nghệ nếp tạo nên sắc vàng hổ phách óng ả. Mùi nghệ thoảng nhẹ thanh tao không hề hăng nồng, đượm vị ngọt mát của nếp nương.",
    ingredients:
      "Gạo nếp nương, nước chiết quả dành dành tự nhiên, tinh nghệ nếp, nước cốt dừa Bến Tre, muối hầm",
    allergenNote: "100% Thuần chay tự nhiên, giàu curcumin chống oxy hóa tự nhiên",
    image: "/images/xoi-do-xanh.jpg",
  },
  {
    id: "xanh-la-nep",
    name: "Màu Xanh Lá Dứa (Hành Mộc)",
    tagline: "LÁ NẾP TÂY BẮC • SINH SÔI & THANH MÁT",
    colorHex: "#3E7A36",
    sourceIngredient: "Lá nếp (lá dứa) rừng bánh tẻ hái sớm",
    elementMeaning:
      "Hành Mộc — Tượng trưng cho sức sống đâm chồi nảy lộc, thanh lọc cơ thể và bình yên.",
    description:
      "Lá dứa rừng tươi được xay nhuyễn vắt lấy nước cốt đầu đậm đặc để ngâm hạt gạo nếp tròn mẩy. Khi đồ chín, chõ xôi tỏa hương cốm non ngào ngạt khắp gian bếp, hạt xôi màu xanh ngọc bích mướt mắt.",
    ingredients:
      "Gạo nếp cái hoa vàng, nước ép lá dứa nếp tươi nguyên chất, nước cốt dừa nướng, muối tinh",
    allergenNote: "Hương thơm 100% từ tinh dầu lá nếp rừng, không hương liệu nhân tạo",
    image: "/images/xoi-chien-gion.jpg",
  },
  {
    id: "tim-la-cam",
    name: "Màu Tím Lá Cẩm (Hành Thủy)",
    tagline: "LÁ CẨM NÚI CAO • THỦY CHUNG & HUYỀN DIỆU",
    colorHex: "#6C3483",
    sourceIngredient: "Lá cẩm tím tự nhiên vùng cao Tây Bắc",
    elementMeaning:
      "Hành Thủy — Tượng trưng cho dòng nguồn mát lành, bền chặt, son sắt thủy chung.",
    description:
      "Lá cẩm tím đun sôi nhỏ lửa cho ra thứ nước màu tím thẫm như đá thạch anh. Từng hạt nếp ngậm no tinh chất lá cẩm trở nên căng bóng, mềm mượt như nhung, để nguội qua ngày vẫn giữ trọn độ dẻo thơm.",
    ingredients:
      "Gạo nếp nương Điện Biên, nước luộc lá cẩm tím rừng, mỡ gà ta/dầu dừa thủ công, muối hầm",
    allergenNote: "Màu tím nguyên bản từ sắc tố thảo mộc tự nhiên",
    image: "/images/xoi-la-cam.jpg",
  },
  {
    id: "trang-nep-nuong",
    name: "Màu Trắng Nếp Nương (Hành Kim)",
    tagline: "NẾP NƯƠNG ĐIỆN BIÊN • THUẦN KHIẾT NGUYÊN BẢN",
    colorHex: "#D5D8DC",
    sourceIngredient: "Gạo nếp nương Điện Biên hạt tròn mẩy",
    elementMeaning:
      "Hành Kim — Tượng trưng cho sự tinh khôi, sáng trong, vẹn tròn và viên mãn.",
    description:
      "Không cần pha trộn màu sắc, hạt xôi trắng tinh khôi phô diễn trọn vẹn phẩm chất đỉnh cao của nếp nương rẻo cao Tây Bắc. Hạt gạo đồ chín trong veo, dẻo thơm ngọt ngào, đậm đà vị ngọt của đất trời Tây Bắc.",
    ingredients:
      "100% Gạo nếp nương giống cổ bản địa Điện Biên, nước suối nguồn thanh lọc, một chút muối khoáng",
    allergenNote: "Vị ngọt bùi nguyên bản của hạt nếp vùng cao",
    image: "/images/xoi-ga.jpg",
  },
];
