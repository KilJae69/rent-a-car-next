"use client";

import { usePathname } from "next/navigation";
import { Link } from "@/config/navigation";
import { cn } from "@/lib/utils";

type CustomLinkProps = {
  href: string;
  hasSubmenu?: boolean;
  isScrolled?: boolean;
  [key: string]: unknown;
};

export default function CustomLink({
  href,
  hasSubmenu,
  isScrolled,
  ...props
}: CustomLinkProps) {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={cn(
        "block px-4 py-3 2xl:py-[50px] font-bold text-sm hover:text-primary transition-all ease-in-out relative",
        {
          "py-2 px-3 text-sm": hasSubmenu,
          "color-primary": isActive,
          "py-3": isScrolled,
        },
      )}
      {...props}
    />
  );
}
