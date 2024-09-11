/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { currencyItems, langItems, mainNavLinks } from "@/config";

import Image from "next/image";
import { useBoundStore } from "@/store/store";
import { AnimatePresence, m, LazyMotion, domAnimation } from "framer-motion";
import { ChevronRight } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
// import { getItemByLocale } from "@/components/layout/helpers/DesktopNav";
import { usePathname, useRouter,Link } from "@/config/navigation";
import { useTransition } from "react";

interface MainNavLink {
  title: string;
  href: string;
  subItems?: { title: string; href: string }[];
}

interface OpenSubMenus {
  [key: string]: boolean;
}
export default function MobileMenu() {
  const router = useRouter();
  // eslint-disable-next-line no-unused-vars
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const isMobileMenuOpen = useBoundStore((state: { isMobileMenuOpen: boolean; }) => state.isMobileMenuOpen);
  const [openSubMenus, setOpenSubMenus] = React.useState<OpenSubMenus>({});
  const selectedCurrency = useBoundStore((state: { selectedCurrency: unknown; }) => state.selectedCurrency);
  const currentLocale = useLocale();
  // const currentItemLocale = getItemByLocale(currentLocale);
  const toggleSubMenu = (title: string) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };
  function onLangClick(lc: string) {
    startTransition(() => {
      router.push(pathname, { locale: lc });
    });
  }
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <m.div
            className="fixed top-[75px] left-0 z-40 h-full w-full bg-gradient-to-br from-secondary to-secondary-dark lg:hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative h-full">
              <nav className="max-height-minus-250 block overflow-y-scroll py-5">
                <ul className="py-2">
                  {mainNavLinks.map((item: MainNavLink) => (
                    <li key={item.title}>
                      {item.subItems ? (
                        <button
                          type="button"
                          className="flex items-center px-4 py-2.5 text-xl font-bold uppercase text-white"
                          onClick={() => toggleSubMenu(item.title)}
                        >
                          {item.title}
                          <ChevronRight
                            className={cn(
                              "ml-2 transition-transform duration-300",
                              {
                                "rotate-90": openSubMenus[item.title],
                              },
                            )}
                          />
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className="flex items-center px-4 py-2.5 text-xl font-bold uppercase text-white"
                        >
                          {item.title}
                        </Link>
                      )}

                      {item.subItems && (
                        <AnimatePresence>
                          {openSubMenus[item.title] && (
                            <m.ul
                              className="pl-5"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {item.subItems.map((subItem) => (
                                <li key={subItem.title}>
                                  <Link
                                    href={subItem.href}
                                    className="block px-4 py-2.5 text-lg font-bold uppercase text-white"
                                  >
                                    {subItem.title}
                                  </Link>
                                </li>
                              ))}
                            </m.ul>
                          )}
                        </AnimatePresence>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="absolute bottom-0 left-0 flex min-h-[250px] w-full border-t border-white/20 bg-gradient-to-br from-secondary to-secondary-dark pb-5 pt-2.5">
                <div className="w-1/2">
                  <p className="px-4 py-2.5 font-semibold text-white">
                    Language:
                  </p>
                  <ul>
                    {langItems.map((lang) => {
                      return (
                        <li
                          className={cn(
                            "flex items-center px-4 py-2 text-base text-white",
                            {
                              "text-primary": lang.code === currentLocale,
                            },
                          )}
                          key={lang.code}
                          onClick={() => onLangClick(lang.url)}
                        >
                          <Image
                            src={lang.icon}
                            alt="lang"
                            width={30}
                            height={30}
                            className="mr-3"
                          />
                          {lang.title}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="relative w-1/2">
                  <p className="px-4 py-2.5 font-semibold text-white">
                    Currency:
                  </p>
                  <ul>
                    {currencyItems.map((currency) => {
                      return (
                        <li
                          className={cn(
                            "flex items-center px-4 py-2 text-base text-white",
                            {
                              "text-primary":
                                currency.title === selectedCurrency,
                            },
                          )}
                          key={currency.id}
                        >
                          <span
                            className={cn(
                              "mr-3 h-1 w-[20px] rounded bg-white",
                              {
                                "bg-primary":
                                  currency.title === selectedCurrency,
                              },
                            )}
                          ></span>
                          {currency.title}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
