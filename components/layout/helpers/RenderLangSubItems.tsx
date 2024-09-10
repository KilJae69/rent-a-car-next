"use client";

import { NavigationMenuContent } from "@/components/ui/navigation-menu";
import { useTransition } from "react";
import { useRouter, usePathname } from "@/config/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import * as React from "react";

type SubItem = {
  title: string;
  url: string;
  code: string;
  icon: string;
};

type SubItemsProps = {
  subItems: SubItem[];
  code?: string;
};

export default function RenderLangSubItems({ subItems, code }: SubItemsProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onLangClick(lc: string) {
    startTransition(() => {
      router.push(pathname, { locale: lc });
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
                  code === subItem.code,
                // "pt-6 pb-2": index === 0,
                // "pt-2 pb-6": index === 1,
              }
            )}
          >
            <button
              type="button"
              disabled={isPending}
              onClick={() => onLangClick(subItem.url)}
              className="flex size-full items-center justify-center gap-2 px-2 py-6"
            >
              <Image src={subItem.icon} alt="lang" width={20} height={20} />
              {subItem.title}
            </button>
          </li>
        ))}
      </ul>
    </NavigationMenuContent>
  );
}
