"use client";
import { AnimatePresence, m, LazyMotion, domAnimation } from "framer-motion";
import { useBoundStore } from "@/stores/store";
import ReservationWidgetItems from "@/components/reservation-steps/reservation-widget/reservation-widget-items";

export default function ReservationWidgetMobile() {
  const isReservationWidgetOpen = useBoundStore(
    (state) => state.isReservationWidgetOpen,
  );

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isReservationWidgetOpen && (
          <m.div
            className="fixed top-[75px] z-40 h-screen w-full overflow-y-scroll bg-secondary/75 pb-[80px]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <ReservationWidgetItems />
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
