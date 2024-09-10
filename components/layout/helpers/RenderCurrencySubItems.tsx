"use client";

import { NavigationMenuContent } from "@/components/ui/navigation-menu";
import { useBoundStore } from "@/store/store";
import { cn } from "@/lib/utils";
import { useTransition } from "react";

import * as React from "react";

type SubItem = {
  title: string;
  icon: string;
};

type RenderSubItemsProps = {
  subItems: SubItem[];
};

export default function RenderCurrencySubItems({
  subItems,
}: RenderSubItemsProps) {
  const setSelectedCurrency = useBoundStore(
    (state) => state.setSelectedCurrency,
  );
  const selectedCurrency = useBoundStore((state) => state.selectedCurrency);
  const [isPending, startTransition] = useTransition();
  function onCurrencyClick(currency: string) {
    startTransition(() => {
      setSelectedCurrency(currency);
    });
  }
  return (
    <NavigationMenuContent>
      <ul className="block w-[175px]">
        {subItems.map((subItem) => (
          <li
            key={subItem.title}
            className={cn(
              "flex w-full items-center text-center text-sm font-bold hover:text-primary",
              {
                "pointer-events-none bg-primary/20 text-primary":
                  selectedCurrency === subItem.title,
                // "pt-6 pb-2": index === 0,
                // "pt-2 pb-6": index === 1,
              },
            )}
          >
            <button
              type="button"
              disabled={isPending}
              onClick={() => onCurrencyClick(subItem.title)}
              className="flex size-full items-center justify-center gap-2 px-2 py-6"
            >
              {subItem.icon && <span>{subItem.icon}</span>}
              {subItem.title}
            </button>
          </li>
        ))}
      </ul>
    </NavigationMenuContent>
  );
}
