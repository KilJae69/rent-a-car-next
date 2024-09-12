import SectionTitle from "@/components/common/section-title";
import Link from "next/link";
import dynamic from "next/dynamic";
import { FeaturedVehiclesData } from "@/constants/data";
import { FeaturedCarSliderSkeleton } from "./components/featured-car-slider-skeleton";
import FeaturedCarCard from "./components/featured-car-card"; 

export type CarCardDataType = {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice: string;
  features?: { label: string; icon: string }[];
  category?: number[];
};


const FeaturedCarSlider = dynamic(() => import('./components/featured-car-slider'), {
  ssr: false, // Disable SSR for client component
  loading: () => <FeaturedCarSliderSkeleton />, // Show skeleton while loading
});

export default function FeaturedVehicles() {
  return (
    <section className="container relative mb-16 px-0 pb-16 xl:px-10">
      <SectionTitle
        title="Featured Vehicles"
        containerClassName="text-center pb-10 mb-0"
        descriptionClassName="max-w-[650px] mx-auto"
        description={
          <>
            You can make a reservation via our website or just contact us using
            email or phone call. You can find our locations and contact
            information on{" "}
            <Link href="/more-info" className="text-primary">
              this link.
            </Link>
          </>
        }
      />
      <div className="max-width-minus-32 h-[170px] rounded-md bg-secondary"></div>

      {/* Passing server-rendered cards as children to the client component */}
      <FeaturedCarSlider>
        {FeaturedVehiclesData.map((car) => (
          <div key={car.id} className="swiper-slide">
            <FeaturedCarCard car={car} />
          </div>
        ))}
      </FeaturedCarSlider>
    </section>
  );
}
