import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type Sponsor = {
  id: number;
  name: string;
  tier: string;
  color: string;
  description: string;
  image?: string;
};

const sponsors: Sponsor[] = [
  {
    id: 1,
    name: "NVIDIA",
    tier: "Diamond",
    color: "bg-white",
    image: "/NVIDIA2.png",
    description:
      "Trái tim của cuộc cách mạng AI toàn cầu. Không chỉ dừng lại ở card đồ họa, tinh thần của NVIDIA hiện nay là AI vật lý và siêu tính toán, dẫn dắt thế giới tiến vào kỷ nguyên robot và xe tự hành.",
  },
  {
    id: 2,
    name: "VNG Corp",
    tier: "Gold",
    color: "bg-peach-sponsor",
    image: "/VNG.png",
    description:
      "Kỳ lân công nghệ đầu tiên của Việt Nam với tinh thần đón nhận thách thức. Họ sở hữu hệ sinh thái số toàn diện (Zalo, ZaloPay, Games) với khát vọng mang công nghệ Việt vươn tầm quốc tế.",
  },
  {
    id: 3,
    name: "KMS",
    tier: "Gold",
    color: "bg-blue-sponsor",
    image: "/KMS.png",
    description:
      "Chuyên gia gia công và phát triển sản phẩm phần mềm. Đây được coi là vườn ươm công nghệ với văn hóa chú trọng phát triển con người và tạo ra những sản phẩm phần mềm tiêu chuẩn Mỹ.",
  },
  {
    id: 4,
    name: "FPT Software",
    tier: "Silver",
    color: "bg-green-sponsor",
    image: "/FPT.png",
    description:
      "Cánh chim đầu đàn trong xuất khẩu phần mềm Việt Nam. Tinh thần cốt lõi là lấy con người làm trọng tâm và sự bền bỉ trong việc đưa trí tuệ Việt chinh phục các khách hàng Fortune 500 toàn cầu.",
  },
  {
    id: 5,
    name: "Sacombank",
    tier: "Silver",
    color: "bg-yellow-sponsor",
    image: "/SACOM.png",
    description:
      "Một trong những ngân hàng thương mại cổ phần hàng đầu Việt Nam. Tinh thần mới của họ là Vững vàng - Chuẩn mực - Thịnh vượng, tập trung vào việc lấy khách hàng làm trọng tâm và tiên phong trong chuyển đổi số ngân hàng.",
  },
  {
    id: 6,
    name: "Veri Silicon",
    tier: "Silver",
    color: "bg-green-sponsor",
    image: "/Veri.png",
    description:
      "Gã khổng lồ thầm lặng trong ngành bán dẫn. Họ hoạt động theo mô hình SiP (System-in-Package) và dịch vụ thiết kế chip, đóng vai trò nền tảng giúp hiện thực hóa ý tưởng phần cứng phức tạp.",
  },
  {
    id: 7,
    name: "ISB",
    tier: "Silver",
    color: "bg-green-sponsor",
    image: "/ISB.png",
    description:
      "Đơn vị giáo dục công lập hàng đầu với tinh thần Nội lực - Bứt phá. Đây là nơi đào tạo tài năng theo chuẩn quốc tế, hướng tới việc kiến tạo thế hệ lãnh đạo trẻ có tư duy toàn cầu.",
  },
  {
    id: 8,
    name: "NEXON",
    tier: "Silver",
    color: "bg-green-sponsor",
    image: "/Nexon.png",
    description:
      "Ông lớn ngành game đến từ Hàn Quốc. Tinh thần của họ nằm ở sự sáng tạo và vận hành các thế giới ảo lâu đời (như MapleStory, KartRider), tập trung vào trải nghiệm người chơi trực tuyến và mô hình kinh doanh game dịch vụ (Live Operations)",
  },
];

const AboutSponsor = () => {
  const [page, setPage] = useState(0);
  const perPage = 2;
  const totalPages = Math.ceil(sponsors.length / perPage);

  return (
    <section id="sponsors" className="py-20 px-6 bg-background my-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl md:text-4xl text-foreground"
            >
              About Sponsor
            </motion.h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setPage(Math.max(0, page - 1))}
              disabled={page === 0}
              className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:bg-accent/80 transition-colors disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
              disabled={page >= totalPages - 1}
              className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:bg-accent/80 transition-colors disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
          {/* Left text column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-muted-foreground leading-relaxed">
              Sự thành công của CSE JOB FAIR 2026 không chỉ nằm ở những con số, mà còn ở sự tin tưởng và đồng hành từ các đối tác doanh nghiệp hàng đầu – những đơn vị không chỉ dẫn đầu về công nghệ và giải pháp, mà còn chung tay cùng chúng tôi kiến tạo nên những giá trị bền vững cho CSE trong thời gian vừa qua. Sự hiện diện của quý doanh nghiệp chính là bảo chứng cho chất lượng và tầm vóc của JOB FAIR năm nay."
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Trang thông tin này là lời tri ân sâu sắc nhất gửi đến quý đối tác vì đã trở thành nguồn động lực quý giá giúp chúng tôi hiện thực hóa sứ mệnh của mình - đưa sinh viên CSE gần hơn nữa với doanh nghiệp.
            </p>
            <button className="flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all">
              <ArrowRight size={16} />
              <span>View detail</span>
            </button>
          </motion.div>

          {/* Right sponsor cards */}
          <div className="grid grid-cols-2 gap-5 md:gap-6">
            {sponsors.slice(page * perPage, (page + 1) * perPage).map((sponsor, i) => (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div
                  className={`${sponsor.color} rounded-3xl aspect-square flex items-center justify-center p-8 shadow-card group-hover:shadow-card-hover transition-all duration-300 group-hover:-translate-y-1 cursor-pointer`}
                >
                  {sponsor.image ? (
                    <img
                      src={sponsor.image}
                      alt={`${sponsor.name} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <span className="font-display font-bold text-2xl text-navy text-center">
                      {sponsor.name}
                    </span>
                  )}
                </div>
                <div className="mt-3 px-1">
                  <p className="text-xs text-muted-foreground leading-relaxed break-words">
                    {sponsor.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSponsor;
