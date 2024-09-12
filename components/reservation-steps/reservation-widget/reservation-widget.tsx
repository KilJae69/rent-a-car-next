"use client";
import * as React from "react";
import { useRef } from "react";
import useBookingWidgetScroll from "@/hooks/useBookingWidgetScroll";
import ReservationWidgetItems from "@/components/reservation-steps/reservation-widget/reservation-widget-items";

export default function ReservationWidget() {
  const bookingWidgetRef = useRef<HTMLDivElement>(null);
  useBookingWidgetScroll(bookingWidgetRef);
  return (
    <div
      className="absolute left-0 z-10 hidden w-full lg:top-[340px] lg:block"
      ref={bookingWidgetRef}
    >
      <div className="container px-4">
        <ReservationWidgetItems />
      </div>
    </div>
  );
}
