"use client";

import { cn } from "@/lib/utils";
import { useBoundStore } from "@/store/store";

export default function MobileMenuToggle() {
  const isMobileMenuOpen = useBoundStore((state) => state.isMobileMenuOpen);
  const toggleIsMobileMenuOpen = useBoundStore(
    (state) => state.toggleIsMobileMenuOpen,
  );

  const setIsReservationWidgetOpen = useBoundStore(
    (state) => state.setIsReservationWidgetOpen,
  );

  const handleOpen = () => {
    toggleIsMobileMenuOpen();
    setIsReservationWidgetOpen(false);
  };

  return (
    <div className="flex h-full items-center justify-center">
      <div
        className={cn(`tham tham-e-squeeze tham-w-8 hover:opacity-100`, {
          "tham-active": isMobileMenuOpen,
        })}
        onClick={handleOpen}
      >
        <div className="tham-box">
          <div className="tham-inner bg-black" />
        </div>
      </div>
    </div>
  );
}