"use client";
import { cn } from "@/lib/utils";

import useScrolled from "@/hooks/useScrolled";
import HeaderLogo from "./helpers/header-logo";
import { useBoundStore } from "@/store/store";
import MobileMenuToggle from "./helpers/MobileMenuToggle";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import { ChevronRight } from "lucide-react";
import { useLocale } from "next-intl";
import { langItems } from "@/constants/data";

const DynamicDesktopNav = dynamic(() => import("./helpers/desktop-nav"), {
  ssr: false, // Disable SSR for client-side only component
  loading: () => <StaticNavPlaceholder />,
});

// Dynamically import MobileMenu
const DynamicMobileMenu = dynamic(() => import("./mobile-menu"), {
  ssr: false, // Disable server-side rendering for client-side only component
});

export default function MainHeader() {
  const { isScrolled, isScrollingDown } = useScrolled(100);
  const isMobileMenuOpen = useBoundStore((state) => state.isMobileMenuOpen);
  const isReservationWidgetOpen = useBoundStore(
    (state) => state.isReservationWidgetOpen
  );

  // State to control when DesktopNav should be loaded
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Load DesktopNav if the user scrolls
  useEffect(() => {
    if (isScrolled) {
      setIsNavVisible(true);
    }
  }, [isScrolled]);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 top-0 z-50 w-[calc(100%-var(--removed-body-scroll-bar-size,0px))] transition-transform duration-300 ease-in-out lg:px-4",
          {
            "translate-y-[-100%]":
              isScrollingDown && !isMobileMenuOpen && !isReservationWidgetOpen,
          }
        )}
        onMouseEnter={() => setIsNavVisible(true)}
      >
        <div
          className={cn(
            "container flex h-[76px] items-center justify-between bg-white px-3 py-2 shadow-md transition-all duration-300 ease-in-out dark:bg-gray-900 lg:rounded-bl-lg lg:rounded-br-lg lg:py-0 2xl:h-[124px] 2xl:px-4",
            {
              "h-[76px] border-b-4 lg:h-[96px] lg:border-primary": isScrolled,
            }
          )}
        >
          <HeaderLogo isScrolled={isScrolled} />
          <div
            className="hidden items-center lg:flex"
             // Load DesktopNav on hover
          >
            {/* Static Nav Placeholder */}
            {!isNavVisible && <StaticNavPlaceholder />}

            {/* Dynamically load DesktopNav on scroll or hover */}
            {isNavVisible && <DynamicDesktopNav isScrolled={isScrolled} />}
            {/* <div classNameName="pl-2"> */}
            {/*  <ThemeToggler /> */}
            {/* </div> */}
          </div>
          <div className="flex h-full items-center gap-4 lg:hidden">
            {/* <ReservationWidgetToggle /> */}
            <MobileMenuToggle />
          </div>
        </div>
      </header>
      {isMobileMenuOpen && <DynamicMobileMenu />}
    </>
  );
}

// Simple static placeholder for the initial nav
export function getItemByLocale(locale: string) {
  return langItems.find((item) => item.code === locale);
}

function StaticNavPlaceholder() {
  const currentLocale = useLocale();
  const currentItem = getItemByLocale(currentLocale);
  return (
    <div className="hidden items-center lg:flex">
      <nav>
        <ul className="flex">
          <li className=" relative">
            <a
              className="relative block px-4 py-3 text-sm font-bold transition-all ease-in-out hover:text-primary 2xl:py-[50px]"
              href="/hr"
            >
              Home
            </a>
          </li>
          <li className=" relative">
            <a
              className="relative block px-4 py-3 text-sm font-bold transition-all ease-in-out hover:text-primary 2xl:py-[50px]"
              href="/hr/fleet?category=1"
            >
              Vehicles
              <ChevronRight className="absolute bottom-[-10px] left-1/2 size-5 -translate-x-1/2 rotate-90 2xl:bottom-[25px]" />
            </a>
          </li>
          <li className=" relative">
            <a
              className="relative block px-4 py-3 text-sm font-bold transition-all ease-in-out hover:text-primary 2xl:py-[50px]"
              href="/hr/blog"
            >
              Blog
              <ChevronRight className="absolute bottom-[-10px] left-1/2 size-5 -translate-x-1/2 rotate-90 2xl:bottom-[25px]" />
            </a>
          </li>
          <li className="relative">
            <a
              className="relative block px-4 py-3 text-sm font-bold transition-all ease-in-out hover:text-primary 2xl:py-[50px]"
              href="/hr/contact"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <nav className="relative z-10 flex max-w-max flex-1 items-center justify-center">
        <div className="relative">
          <ul className=" flex flex-1 list-none items-center justify-center space-x-1">
            <li>
              <button className=" mt-0 flex h-full w-max flex-col items-center justify-center rounded-none border-l border-gray-200 bg-background p-4 py-2 text-sm font-medium  focus:outline-none dark:border-gray-700 2xl:py-[30px]">
                <div className="mt-5 text-sm font-bold">EUR</div>
                <ChevronRight className="relative top-px ml-1 size-5 rotate-90" />
              </button>
            </li>
            <li>
              <button className="group mt-0 flex h-full w-max flex-col items-center justify-center rounded-none border-l border-gray-200 bg-background p-4 py-2 text-sm font-medium  focus:outline-none dark:border-gray-700 2xl:py-[30px]">
                <div className="mt-5 text-sm font-bold">{currentItem?.title}</div>

                <ChevronRight className="relative top-px ml-1 size-5 rotate-90" />
              </button>
            </li>
          </ul>
        </div>
        <div className="absolute left-0 top-full flex justify-center"></div>
      </nav>
    </div>
  );
}
