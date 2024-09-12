import ReservationForm from "@/components/common/reservation-form";
import HeroSection from "@/components/homepage/hero-section";

export default function Home() {
  return (
    <>
      
      <HeroSection /> 
      <section className="container relative z-30 -mt-[100px] mb-5 px-4 xl:px-0">
      

      <ReservationForm />   
     
   
     </section>
  
    </>
  );
}
