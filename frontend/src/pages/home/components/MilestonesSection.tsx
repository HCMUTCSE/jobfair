import "./MilestonesSection.css";

const milestones = [
    {
        title: "200+ doanh nghiệp",
        description:
            "Ngày hội quy tụ nhiều doanh nghiệp uy tín trong các lĩnh vực công nghệ, tài chính và dịch vụ tham gia tuyển dụng. Sự kiện không chỉ là lựa chọn tuyệt vời trong việc chiêu mộ các nhân tố mới, mà còn là cơ hội để quảng bá thêm về doanh nghiệp trong cộng đồng sinh viên.",
    },
    {
        title: "300+ gian hàng",
        description:
            "Các gian hàng mở ra không gian kết nối trực tiếp giữa doanh nghiệp và sinh viên toàn khoa, đồng thời tạo dựng sự đối thoại trực tiếp giữa hai bên với những hoạt động hấp dẫn, hữu ích của các doanh nghiệp dành cho các bạn sinh viên.",
    },
    {
        title: "20000+ sinh viên",
        description:
            "CSE Job Fair thu hút nhiều sinh viên trên địa bàn thành phố, các bạn sinh viên từ lâu đã luôn coi đây như một “điểm hẹn” đáng tin cậy để tìm hiểu đa dạng về việc làm và định hướng sự nghiệp trong tương lai.",
    },
    {
        title: "100000+ cơ hội việc làm",
        description:
            "Rất nhiều những vị trí thực tập, fresher và full-time được giới thiệu tại Ngày hội Việc làm. Điều đó mở ra những cơ hội vàng cho sinh viên để tìm một “bến đỗ” phù hợp, cũng như có cái nhìn tổng quan về thị trường việc làm trong ngành.",
    },
];

const MilestonesSection = () => {
    return (
        <section id="milestones" className="home-milestones">
            <div className="home-milestones__container">
                <h2 className="home-milestones__title">Hành trình 20 năm CSE Job Fair</h2>
                <p className="home-milestones__intro">
                    Mang tầm vóc của một sự kiện lớn, CSE JOB FAIR tự hào là cầu nối giữa doanh nghiệp và sinh viên, tạo nên vô vàn những cơ hội nghề nghiệp thực tế trong suốt hai thập kỷ qua.
                </p>
                <div className="home-milestones__grid">
                    {milestones.map((item) => (
                        <article key={item.title} className="home-milestones__card">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MilestonesSection;
