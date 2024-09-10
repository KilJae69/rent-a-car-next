"use client";

import { Link } from "@/config/navigation";
import { domAnimation, m, Variants, LazyMotion } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { currencyItems, langItems, mainNavLinks } from "@/constants/data";
import CustomLink from "./custom-link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useLocale } from "next-intl";
import RenderLangSubItems from "./RenderLangSubItems";
import RenderCurrencySubItems from "@/components/layout/helpers/RenderCurrencySubItems";
import { useBoundStore } from "@/store/store";

type DesktopNavProps = {
  isScrolled: boolean;
};

export function getItemByLocale(locale: string) {
  return langItems.find((item) => item.code === locale);
}
export default function DesktopNav({ isScrolled }: DesktopNavProps) {
  const selectedCurrency = useBoundStore((state) => state.selectedCurrency);
  const variants: Variants = {
    open: { opacity: 1, x: 0, pointerEvents: "auto" },
    closed: { opacity: 0, x: "-100%", pointerEvents: "none" },
  };
  const currentLocale = useLocale();
  const currentItem = getItemByLocale(currentLocale);
  return (
    <LazyMotion features={domAnimation}>
      <nav>
        <ul className="flex">
          {mainNavLinks.map((item) => (
            <m.li
              key={item.title}
              initial="closed"
              animate="closed"
              whileHover="open"
              className="group/li relative"
            >
              <CustomLink href={item.href} isScrolled={isScrolled}>
                {item.title}
                {item.subItems && (
                  <ChevronDown
                    className="absolute bottom-[-10px] left-1/2 size-5 translate-x-[-50%] transition-all ease-in-out group-hover/li:rotate-180 2xl:bottom-[25px]"
                    aria-hidden="true"
                  />
                )}
              </CustomLink>
              {item.subItems && (
                <m.ul
                  variants={variants}
                  className="top-100 absolute min-w-[250px] rounded-md bg-white py-2 shadow-xl"
                >
                  {item.subItems.map((subItem) => (
                    <li key={subItem.title}>
                      <Link
                        href={subItem.href}
                        className="group/link flex items-center justify-between px-4 py-2 text-sm font-semibold transition-all duration-500 ease-in-out hover:text-primary"
                      >
                        {subItem.title}
                        <ChevronRight
                          className="size-5 opacity-30 transition-opacity ease-in-out group-hover/link:opacity-100"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </m.ul>
              )}
            </m.li>
          ))}
        </ul>
      </nav>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              hasSubMenu={true}
              className="mt-0 h-full rounded-none border-l border-gray-200 py-2 hover:bg-transparent dark:border-gray-700 2xl:py-[30px]"
            >
              <div className="mt-5 text-sm font-bold">{selectedCurrency}</div>
            </NavigationMenuTrigger>
            <RenderCurrencySubItems subItems={currencyItems} />
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger
              hasSubMenu={true}
              className="mt-0 h-full rounded-none border-l border-gray-200 py-2 hover:bg-transparent dark:border-gray-700 2xl:py-[30px]"
            >
              <div className="mt-5 text-sm font-bold">{currentItem?.title}</div>
            </NavigationMenuTrigger>
            <RenderLangSubItems subItems={langItems} code={currentItem?.code} />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </LazyMotion>
  );
}
