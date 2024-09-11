

import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/public/images/logo.svg";

export default function StaticHeader() {
  return (
    <header className="fixed left-0 top-0 z-50 w-[calc(100%-var(--removed-body-scroll-bar-size,0px))] transition-transform duration-300 ease-in-out lg:px-4">
      <div className="container flex h-[76px] items-center justify-between bg-white px-3 py-2 shadow-md transition-all duration-300 ease-in-out dark:bg-gray-900 lg:rounded-b-lg lg:py-0 2xl:h-[124px] 2xl:px-4">
        <Link
          href="/"
          className="relative block h-[53px] w-[113px] self-center transition-all duration-200 ease-in-out lg:h-[67px] lg:w-[170px] 2xl:h-[87px] 2xl:w-[231px]"
        >
          <Image src={LogoImage} alt="Logo" fill priority />
        </Link>
        <div className="hidden items-center lg:flex">
          {/* <DesktopNav isScrolled={isScrolled} /> */}
          {/* <div className="pl-2"> */}
          {/*  <ThemeToggler /> */}
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
