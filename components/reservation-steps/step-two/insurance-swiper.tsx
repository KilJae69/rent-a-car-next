"use client";
import { cn } from "@/lib/utils";
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import InsuranceCard from "@/components/reservation-steps/step-two/insurance-card";

export type InsuranceData = {
  id: number;
  title: string;
  description: string;
  price: number;
  currency: string;
  imageSrc: string;
  link: string;
  additionalContent: React.ReactNode; // for the p tag content
};

const dummyData: InsuranceData[] = [
  {
    id: 1,
    title: "Low Protection",
    description: "CDWP TP",
    price: 50.0,
    currency: "Eur",
    imageSrc: "/icons/ico_low.svg",
    link: "#",
    additionalContent: (
      <>
        Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Quis ipsum
        <Link href="#" className="text-secondary">
          {" "}
          suspendisse
        </Link>{" "}
        ultrices gravida. Risus commodo viverra maecenas.
      </>
    ),
  },
  {
    id: 2,
    title: "Medium Protection",
    description: "CDWP CWWW TP",
    price: 150.5,
    currency: "Eur",
    imageSrc: "/icons/ico_medium.svg",
    link: "#",
    additionalContent: (
      <>
        Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Quis ipsum
        <Link href="#" className="text-secondary">
          {" "}
          suspendisse
        </Link>{" "}
        ultrices gravida. Risus commodo viverra maecenas.
      </>
    ),
  },
  {
    id: 3,
    title: "Full Protection",
    description: "CDWP CWWW TP",
    price: 300.0,
    currency: "Eur",
    imageSrc: "/icons/ico_full.svg",
    link: "#",
    additionalContent: (
      <>
        Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </>
    ),
  },
  {
    id: 4,
    title: "New Protection",
    description: "CDWP CWWW TP",
    price: 300.0,
    currency: "Eur",
    imageSrc: "/icons/ico_full.svg",
    link: "#",
    additionalContent: (
      <>
        Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </>
    ),
  },
];
export default function InsuranceSwiper({ className = "" }) {
  return (
    <section
      className={cn(
        "container relative px-4 pb-0 pt-10 lg:pt-28 xl:pb-10",
        className,
      )}
    >
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        className="featured-vehicles-swiper"
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        loop={true}
        navigation={{
          nextEl: "#insurance-next",
          prevEl: "#insurance-prev",
        }}
      >
        {dummyData.map((insurance) => (
          <SwiperSlide key={insurance.id}>
            <InsuranceCard item={insurance} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="swiper-button swiper-button-prev"
        id="insurance-prev"
      ></div>
      <div
        className="swiper-button swiper-button-next"
        id="insurance-next"
      ></div>
    </section>
  );
}
