import { ArrowRight } from "lucide-react";

type BrandProps = {
  images?: {
    leftTall?: string;
    topLeft?: string;
    topRight?: string;
    middleLeft?: string;
    middleRight?: string;
    bottomRight?: string;
  };
};

const defaultImages = {
  leftTall: "/placeholder-left-tall.jpg",
  topLeft: "/placeholder-top-left.jpg",
  topRight: "/placeholder-top-right.jpg",
  middleLeft: "/placeholder-middle-left.jpg",
  middleRight: "/placeholder-middle-right.jpg",
  bottomRight: "/placeholder-bottom-right.jpg",
};

const Brand = ({ images = defaultImages }: BrandProps) => {
  return (
    <section id="partners" className="py-20 px-6 bg-background my-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">Bộ nhận diện thương hiệu</h2>
        </div>
       {/*  Title bên trên */}
        <div className="space-y-4 mb-8">
          <p className="text-muted-foreground leading-relaxed">
            Sự thành công của CSE JOB FAIR 2026 không chỉ nằm ở những con số, mà còn ở sự tin tưởng và đồng hành từ các đối tác doanh nghiệp hàng đầu.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Trang thông tin này là lời tri ân gửi đến quý đối tác đã đồng hành để kết nối sinh viên CSE với doanh nghiệp.
          </p>
          <button className="flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all">
            <ArrowRight size={16} />
            <span>View detail</span>
          </button>
        </div>
        {/* Layout ảnh (chưa sửa gì hết) */}
        <div className="rounded-[28px] p-4 sm:p-5">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_2fr]">
            <ImageSlot src={images.leftTall} alt="Brand image left tall" className="h-[520px] lg:h-full" />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <ImageSlot src={images.topLeft} alt="Brand image top left" className="h-56" />
              <ImageSlot src={images.topRight} alt="Brand image top right" className="h-56" />
                                                                                
              <ImageSlot src={images.middleLeft} alt="Brand image middle left" className="h-64" />
              <ImageSlot src={images.middleRight} alt="Brand image middle right" className="h-40 sm:h-44" />

              <div className="hidden sm:block" aria-hidden="true" />
              <ImageSlot src={images.bottomRight} alt="Brand image bottom right" className="h-32 sm:h-36" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

type ImageSlotProps = {
  src?: string;
  alt: string;
  className: string;
};

const ImageSlot = ({ src, alt, className }: ImageSlotProps) => {
  return (
    <div className={`overflow-hidden rounded-[24px] bg-lime-300 ${className}`}>
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full items-center justify-center text-sm font-medium text-zinc-600">Add image</div>
      )}
    </div>
  );
};

export default Brand;
