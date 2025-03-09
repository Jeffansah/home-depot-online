import Image from "next/image";
import image1 from "@/public/assets/images/home-sliders/home-banner-slider-2-a-rbg.png";
import image2 from "@/public/assets/images/home-sliders/home-banner-slider-2-b-rbg.png";

const HomeSlider2 = () => {
  return (
    <div className="relative size-full overflow-hidden bg-transparent">
      <div className="absolute bottom-16 left-36 flex flex-col gap-2">
        <h3 className="animate-fade-left text-3xl font-semibold uppercase">
          Think Different.
        </h3>
        <p className="text-light-200 animate-fade-left animate-delay-200 max-w-[350px] leading-relaxed">
          Ignite your imagination with fresh perspectives. Transform ordinary
          spaces into extraordinary experiences.
        </p>
      </div>
      <Image
        src={image1}
        alt="home-slider-1-img1"
        className="animate-fade absolute -top-[160px] right-[450px] scale-[85%]"
      />
      <Image
        src={image2}
        alt="home-slider-1-img2"
        className="animate-fade absolute -top-[140px] right-[160px] scale-[85%]"
      />
    </div>
  );
};

export default HomeSlider2;
