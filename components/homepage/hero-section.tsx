import dynamic from "next/dynamic";

import HeroSlide, { dummySlideData } from "@/components/homepage/components/hero-slide";

// Dynamically import the HeroSlider, with SSR disabled
const HeroSlider = dynamic(() => import("./components/hero-slider"), {
  ssr: false, // Disable SSR for client component
});

export default function HeroSection() {
  return (
    <section className="mx-auto h-[590px] max-w-[1675px] overflow-hidden md:rounded-b-lg lg:h-[665px] 3xl:max-w-[1870px]">
      <HeroSlider>
        {dummySlideData.map((slide) => (
          <HeroSlide key={slide.id} item={slide} priority={slide.id === 1} />
        ))}
      </HeroSlider>
    </section>
  );
}
