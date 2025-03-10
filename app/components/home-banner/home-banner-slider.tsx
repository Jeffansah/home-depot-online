"use client";

import React, { useEffect, useRef, useState } from "react";
import HomeSlider1 from "./home-slider-1";
import HomeSlider2 from "./home-slider-2";
import HomeSlider3 from "./home-slider-3";
import HomeSliderButton from "./home-slider-button";

const HomeBannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slideInterval] = useState(3000);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % 3) + 1);
    }, slideInterval);
  };

  useEffect(() => {
    startTimer();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [slideInterval, currentSlide]);

  const handleSlideChange = (slideNumber: number) => {
    setCurrentSlide(slideNumber);
    startTimer();
  };

  return (
    <div className="bg-light-50 relative h-[568px] w-full">
      {currentSlide === 1 && <HomeSlider1 />}
      {currentSlide === 2 && <HomeSlider2 />}
      {currentSlide === 3 && <HomeSlider3 />}
      <div className="absolute top-1/2 -left-[19px] z-10 flex -translate-y-1/2 flex-col justify-center gap-10">
        <HomeSliderButton
          slide={1}
          currentSlide={currentSlide}
          setCurrentSlide={handleSlideChange}
        />
        <HomeSliderButton
          slide={2}
          currentSlide={currentSlide}
          setCurrentSlide={handleSlideChange}
        />
        <HomeSliderButton
          slide={3}
          currentSlide={currentSlide}
          setCurrentSlide={handleSlideChange}
        />
      </div>
    </div>
  );
};

export default HomeBannerSlider;
