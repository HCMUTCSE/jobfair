import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import "./SeminarsPage.css";

type Seminar = {
    id: number;
    period: string;
    company: string;
    title: string;
    registrationUrl: string;
    description: string;
    heroImage: string;
    popupImage: string;
};

const seminarVenue = "Phòng 609, Tòa BK.B6, Trường ĐH Bách khoa - ĐHQG-HCM (Cơ sở 2)";

const seminars: Seminar[] = [
    {
        id: 1,
        period: "Sáng 21/03",
        company: "ANDPAD",
        title: "From Fresher to Global Engineer: Career Opportunities at ANDPAD",
        registrationUrl: "https://bit.ly/Seminar-ANDPAD",
        description:
            "Phiên hội thảo công nghệ và định hướng việc làm dành cho sinh viên, tập trung vào hành trình phát triển nghề nghiệp từ fresher đến kỹ sư toàn cầu.",
        heroImage: "/seminar-photo/1/hero.jpg",
        popupImage: "/seminar-photo/1/sub.jpg",
    },
    {
        id: 2,
        period: "Chiều 21/03",
        company: "ISB",
        title: "Hành trình từ sinh viên đến lập trình viên: Kinh nghiệm, thử thách và bài học thực tế",
        registrationUrl: "https://bit.ly/Seminar-ISB",
        description:
            "Phiên chia sẻ về kinh nghiệm thực tế trong quá trình chuyển mình từ sinh viên sang lập trình viên chuyên nghiệp.",
        heroImage: "/seminar-photo/2/hero.jpg",
        popupImage: "/seminar-photo/2/sub.jpg",
    },
    {
        id: 3,
        period: "Sáng 22/03",
        company: "WorldQuant",
        title: "Các cơ hội trong ngành Tài chính Định lượng cùng WorldQuant",
        registrationUrl: "https://bit.ly/Seminar-WorldQuant",
        description:
            "Phiên giới thiệu các cơ hội học tập và nghề nghiệp trong lĩnh vực tài chính định lượng cùng WorldQuant.",
        heroImage: "/seminar-photo/3/hero.jpg",
        popupImage: "/seminar-photo/3/sub.jpg",
    },
    {
        id: 4,
        period: "Chiều 22/03",
        company: "TC Data",
        title: "(Dự kiến) Hội thảo công nghệ và định hướng việc làm cho sinh viên",
        registrationUrl: "https://bit.ly/Seminar-TCData",
        description:
            "Phiên hội thảo dự kiến với trọng tâm định hướng nghề nghiệp và cập nhật bức tranh công nghệ dành cho sinh viên.",
        heroImage: "/seminar-photo/4/hero.jpg",
        popupImage: "/seminar-photo/4/sub.jpg",
    },
];

const SeminarsPage = () => {
    const [selectedSeminar, setSelectedSeminar] = useState<Seminar | null>(null);

    useEffect(() => {
        if (!selectedSeminar) {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setSelectedSeminar(null);
            }
        };

        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [selectedSeminar]);

    return (
        <div className="seminars-page">
            <Navbar />
            <main className="seminars-page__main">
                <section className="seminars-page__section">
                    <div className="seminars-page__container">
                        <h1 className="seminars-page__title">Seminars</h1>
                        <p className="seminars-page__intro">
                            Thông tin về Chuỗi hội thảo công nghệ và định hướng việc làm cho sinh viên.
                        </p>
                        <p className="seminars-page__intro seminars-page__intro--location">
                            Địa điểm: {seminarVenue}
                        </p>

                        <div className="seminars-page__grid">
                            {seminars.map((seminar) => (
                                <article key={seminar.id} className="seminars-page__card">
                                    <img className="seminars-page__image" src={seminar.heroImage} alt={`Ảnh seminar ${seminar.company}`} />
                                    <h2>{seminar.title}</h2>
                                    <p className="seminars-page__meta">{seminar.period}</p>
                                    <p className="seminars-page__meta">Đơn vị: {seminar.company}</p>
                                    <p className="seminars-page__summary">{seminar.description}</p>
                                    <button type="button" onClick={() => setSelectedSeminar(seminar)}>
                                        Xem chi tiết
                                    </button>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            {selectedSeminar && (
                <div className="seminars-page__modal-backdrop" role="presentation" onClick={() => setSelectedSeminar(null)}>
                    <div className="seminars-page__modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
                        <button
                            type="button"
                            className="seminars-page__modal-close"
                            aria-label="Đóng chi tiết seminar"
                            onClick={() => setSelectedSeminar(null)}
                        >
                            <X size={18} />
                        </button>

                        <img className="seminars-page__modal-image" src={selectedSeminar.popupImage} alt={`Ảnh chi tiết seminar ${selectedSeminar.company}`} />
                        <h3>{selectedSeminar.title}</h3>
                        <p>{selectedSeminar.period}</p>
                        <p>Đơn vị: {selectedSeminar.company}</p>
                        <p>{selectedSeminar.description}</p>
                        <p>Địa điểm: {seminarVenue}</p>
                        <a
                            className="seminars-page__modal-register"
                            href={selectedSeminar.registrationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Link đăng ký
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SeminarsPage;
