"use client";
import dynamic from "next/dynamic";

import HeroSlide, {
  dummySlideData,
} from "@/components/homepage/components/hero-slide";

import StaticHeroSection from "./static-hero-section";

import { useState } from "react";

// Dynamically import the HeroSlider, with SSR disabled
const DynamicHeroSlider = dynamic(() => import("./components/hero-slider"), {
  ssr: false, // Disable SSR for client component
  loading: () => <StaticHeroSection />,
});

export default function HeroSection() {
  const [isSwiper, setIsSwiper] = useState(false);
  return (
    <section
    onMouseEnter={() => setIsSwiper(true)}
    onClick={() => setIsSwiper(true)}
      className="mx-auto h-[590px] max-w-[1675px] overflow-hidden md:rounded-b-lg lg:h-[665px] 3xl:max-w-[1870px]"
      
    >
      {!isSwiper && <StaticHeroSection />}
      {isSwiper && (
        <DynamicHeroSlider>
          {dummySlideData.map((slide) => (
            <HeroSlide key={slide.id} item={slide} priority={slide.id === 1} />
          ))}
        </DynamicHeroSlider>
      )}
    </section>
  );
}
