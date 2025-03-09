import image1 from "@/public/assets/images/home-sliders/home-banner-slide-1.png";
import Image from "next/image";

const HomeSlider1 = () => {
  return (
    <div className="relative size-full overflow-hidden bg-transparent">
      <div className="absolute bottom-16 left-36 flex flex-col gap-2">
        <h3 className="animate-fade-left text-3xl font-semibold uppercase">
          Premium Comfort.
        </h3>
        <p className="text-light-200 animate-fade-left animate-delay-200 max-w-[350px] leading-relaxed">
          Transform your space into a sanctuary of peace. Indulge in luxurious
          designs that invite tranquility.
        </p>
      </div>
      <Image
        src={image1}
        alt="home-slider-1-img1"
        className="animate-fade absolute right-[200px] bottom-0 scale-[85%]"
      />
    </div>
  );
};

export default HomeSlider1;
