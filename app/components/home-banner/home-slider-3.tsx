import Image from "next/image";
import image1 from "@/public/assets/images/home-sliders/home-banner-slide-3.jpg";

const HomeSlider3 = () => {
  return (
    <div className="relative size-full overflow-hidden bg-transparent">
      <div className="absolute bottom-16 left-36 flex flex-col gap-2">
        <h3 className="animate-fade-left text-3xl font-semibold uppercase">
          Contemporary design
        </h3>
        <p className="text-light-200 animate-fade-left animate-delay-200 max-w-[350px] leading-relaxed">
          Crafted with precision and elegance, our furniture is a blend of
          modern aesthetics and timeless craftsmanship.
        </p>
      </div>
      <Image
        src={image1}
        alt="home-slider-1-img1"
        className="animate-fade absolute right-[150px] -bottom-68 scale-[85%]"
      />
    </div>
  );
};

export default HomeSlider3;
