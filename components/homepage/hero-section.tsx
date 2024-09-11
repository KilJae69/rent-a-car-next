"use client";
import dynamic from "next/dynamic";

import HeroSlide, {
  dummySlideData,
} from "@/components/homepage/components/hero-slide";
import { useState } from "react";
import StaticHeroSection from "./static-hero-section";

// Dynamically import the HeroSlider, with SSR disabled
const DynamicHeroSlider = dynamic(() => import("./components/hero-slider"), {
  ssr: false, // Disable SSR for client component
  loading: () => <StaticHeroSection />,
});

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section
      className="mx-auto h-[590px] max-w-[1675px] overflow-hidden md:rounded-b-lg lg:h-[665px] 3xl:max-w-[1870px]"
      onMouseEnter={() => setIsHovered(true)}
    >
      {!isHovered && <StaticHeroSection />}
      {isHovered && (
        <DynamicHeroSlider>
          {dummySlideData.map((slide) => (
            <HeroSlide key={slide.id} item={slide} priority={slide.id === 1} />
          ))}
        </DynamicHeroSlider>
      )}
    </section>
  );
}
