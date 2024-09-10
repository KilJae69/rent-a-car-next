"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import LogoImage from "@/public/images/logo.svg";

type HeaderLogoProps = {
  isScrolled: boolean;
};

export default function HeaderLogo({ isScrolled }: HeaderLogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "relative block self-center transition-all duration-200 ease-in-out",
        {
          "h-[53px] w-[113px] lg:h-[67px] lg:w-[170px]": isScrolled,
          "h-[53px] w-[113px] lg:h-[67px] lg:w-[170px] 2xl:h-[87px] 2xl:w-[231px]":
            !isScrolled,
        },
      )}
    >
      <Image src={LogoImage} alt="Logo" fill priority />
    </Link>
  );
}