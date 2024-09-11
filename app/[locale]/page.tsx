import StaticHeroSection from "@/components/homepage/static-hero-section";
import dynamic from "next/dynamic";

// import StaticHeroSection from "@/components/homepage/static-hero-section";

const DynamicHeroSection = dynamic(
  () => import("@/components/homepage/hero-section"),
  { ssr: false, loading: () => <StaticHeroSection /> }
);

export default function Home() {
  return (
    <>
      <DynamicHeroSection />
      {/* <StaticHeroSection /> */}
      <section className="container relative z-30 mb-5 mt-[-100px] px-4 xl:px-0"></section>
    </>
  );
}
