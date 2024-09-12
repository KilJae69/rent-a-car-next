"use client";
import * as React from "react";
import { useBoundStore } from "@/stores/store";
import { useEffect } from "react";
import { useLocale } from "next-intl";
import { cn, formatPrice } from "@/lib/utils";

export default function TotalPrice({
  titleClassName,
  vatClassName,
}: {
  titleClassName?: string;
  vatClassName?: string;
}) {
  const locale = useLocale();
  const totalPrice = useBoundStore((state) => state.totalPrice);
  const selectedCurrency = useBoundStore((state) => state.selectedCurrency);
  const selectedDays = useBoundStore((state) => state.selectedDays);
  const selectedVehicle = useBoundStore((state) => state.selectedVehicle);
  const selectedInsurance = useBoundStore((state) => state.selectedInsurance);
  const selectedAddons = useBoundStore((state) => state.selectedAddons);
  const calculatePrice = useBoundStore((state) => state.calculatePrice);
  const addonsPrice = selectedAddons.reduce(
    (total, addon) => total + addon.price,
    0,
  );
  useEffect(() => {
    calculatePrice();
  }, [
    selectedDays,
    selectedVehicle?.price,
    selectedInsurance?.price,
    selectedAddons?.length,
    addonsPrice,
  ]);
  return (
    <div>
      <h3
        className={cn(
          "pb-1 text-xl font-black uppercase text-white lg:text-black",
          titleClassName,
        )}
      >
        {formatPrice(totalPrice, locale)}{" "}
        <span className="text-sm font-normal opacity-70">
          {" "}
          {selectedCurrency}
        </span>
      </h3>
      <p
        className={cn(
          "text-right text-xs text-white lg:text-left lg:text-black",
          vatClassName,
        )}
      >
        VAT included
      </p>
    </div>
  );
}
