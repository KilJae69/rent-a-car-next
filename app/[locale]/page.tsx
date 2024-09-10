import { slideComponents } from "@/components/homepage/components/hero-slide";
import HeroSection from "@/components/homepage/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection slides={slideComponents} />
      <section className="container relative z-30 mb-5 mt-[-100px] px-4 xl:px-0"></section>
    </>
  );
}