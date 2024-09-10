// import HeroSection from "@/components/homepage/hero-section";

import StaticHeroSection from "@/components/homepage/static-hero-section";

export default function Home() {
  return (
    <>
      {/* <HeroSection  /> */}
      <StaticHeroSection />
      <section className="container relative z-30 mb-5 mt-[-100px] px-4 xl:px-0"></section>
    </>
  );
}
