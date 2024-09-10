"use client"
import { cn } from "@/lib/utils";

import useScrolled from "@/hooks/useScrolled";
import HeaderLogo from "./helpers/header-logo";
import { useBoundStore } from "@/store/store";
import DesktopNav from "./helpers/desktop-nav";

export default function MainHeader() {
    const { isScrolled, isScrollingDown } = useScrolled(100);
    const isMobileMenuOpen = useBoundStore((state) => state.isMobileMenuOpen);
  const isReservationWidgetOpen = useBoundStore(
    (state) => state.isReservationWidgetOpen,
  );
  return (
    <header
    className={cn(
      "fixed left-0 top-0 z-50 w-[calc(100%-var(--removed-body-scroll-bar-size,0px))] transition-transform duration-300 ease-in-out lg:px-4",
      {
        "translate-y-[-100%]":
          isScrollingDown && !isMobileMenuOpen && !isReservationWidgetOpen,
      },
    )}
  >
    <div
      className={cn(
        "container flex h-[76px] items-center justify-between bg-white px-3 py-2 shadow-md transition-all duration-300 ease-in-out dark:bg-gray-900 lg:rounded-bl-lg lg:rounded-br-lg lg:py-0 2xl:h-[124px] 2xl:px-4",
        {
          "h-[76px] border-b-4 lg:h-[96px] lg:border-primary": isScrolled,
        },
      )}
    >
       <HeaderLogo isScrolled={isScrolled} /> 
      <div className="hidden items-center lg:flex">
        <DesktopNav isScrolled={isScrolled} />
        {/* <div className="pl-2"> */}
        { /*  <ThemeToggler /> */ }
        {/* </div> */}
      </div>
      <div className="flex h-full items-center gap-4 lg:hidden">
        {/* <ReservationWidgetToggle />
        <MobileMenuToggle /> */}
      </div>
    </div>
  </header>
  );
  
}