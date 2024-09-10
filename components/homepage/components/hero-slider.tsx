
"use client";
import  { Children, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

type HeroSliderProps = {
    children: ReactNode; 
  };

export default function HeroSlider({children}:HeroSliderProps) {
  return (
    <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={0}
        className="relative h-full"
      >
        {Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
  );
  
}