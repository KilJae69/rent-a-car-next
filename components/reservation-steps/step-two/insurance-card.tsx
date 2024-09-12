import Image from "next/image";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { cn, formatPrice } from "@/lib/utils";
import { useBoundStore } from "@/stores/store";
import { useEffect } from "react";

type InsuranceItem = {
  id: number;
  title: string;
  description: string;
  price: number;
  currency: string;
  imageSrc: string;
  link: string;
  additionalContent: React.ReactNode;
};

type InsuranceCardProps = {
  item: InsuranceItem;
};
export default function InsuranceCard({ item }: InsuranceCardProps) {
  const { title, description, price, currency, imageSrc, additionalContent } =
    item;
  const locale = useLocale();
  const setSelectedInsurance = useBoundStore(
    (state) => state.setSelectedInsurance,
  );
  const selectedInsurance = useBoundStore((state) => state.selectedInsurance);
  const isSelected = selectedInsurance?.id === item.id;
  const isHydrated = useBoundStore?.persist?.hasHydrated();
  useEffect(() => {
    if (!selectedInsurance && isHydrated) {
      if (item.id === 2) {
        setSelectedInsurance({ id: item.id, title, price, imageSrc });
      }
    }
  }, [selectedInsurance]);
  return (
    <div className="text-center">
      <Image
        src={imageSrc}
        alt={title}
        width={46}
        height={67}
        className="mx-auto mb-4 h-[auto] w-[46px]"
      />
      <h3 className="text-xl font-black">{title}</h3>
      <p className="text-sm font-light text-secondary">{description}</p>
      <div
        className={cn(
          "my-4 rounded bg-white px-2.5 py-4 shadow-[1px_2px_7px_1px_rgba(0,0,0,0.1)]",
          {
            "bg-gradient-to-r from-primary-light to-primary": isSelected,
          },
        )}
      >
        <h3
          className={cn("pb-1 text-xl font-black uppercase text-black", {
            "text-white": isSelected,
          })}
        >
          {formatPrice(price, locale)}{" "}
          <span className="text-sm font-normal">{currency}</span>
        </h3>
      </div>
      <p className="min-h-[75px] pb-4 text-sm">{additionalContent}</p>
      <Button
        variant={isSelected ? "default" : "outlinePrimary"}
        size="default"
        className="mt-4 min-w-[150px] py-6 text-base uppercase transition-all duration-300 group-hover:bg-primary group-hover:text-white"
        onClick={() =>
          setSelectedInsurance({ id: item.id, title, price, imageSrc })
        }
      >
        {isSelected ? "Selected" : "Select"}
      </Button>
    </div>
  );
}
