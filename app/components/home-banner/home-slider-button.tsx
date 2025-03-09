import React from "react";

const HomeSliderButton = ({
  slide,
  currentSlide,
  setCurrentSlide,
}: {
  slide: number;
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
}) => {
  return (
    <div
      onClick={() => setCurrentSlide(slide)}
      className="group relative flex cursor-pointer items-center"
    >
      <p
        className={`${slide === currentSlide ? "text-dark-400" : "text-light-200"} absolute top-1/2 -left-6 -translate-y-1/2 text-base`}
      >
        0{slide}
      </p>
      <div
        className={`${slide === currentSlide ? "bg-dark-400 scale-x-[3.5] rounded-lg" : "bg-light-200 relative rounded-tr-lg rounded-br-lg group-hover:scale-x-[3.5]"} h-[2px] w-[20px] origin-left cursor-pointer pl-3 transition duration-300 ease-in-out`}
      />
    </div>
  );
};

export default HomeSliderButton;
