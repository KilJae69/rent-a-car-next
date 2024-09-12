"use client";
import { Input } from "@/components/ui/input";
import { formatPrice } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { useBoundStore } from "@/stores/store";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export type Addon = {
  id: number;
  name: string;
  description: string;
  pricePerDay: number;
  icon: string;
  price: number;
  quantity: number;
};

type SingleAddonProps = {
  addon: Addon;
};

export default function SingleAddon({ addon }: SingleAddonProps) {
  const selectedCurrency = useBoundStore((state) => state.selectedCurrency);
  const selectedAddons = useBoundStore((state) => state.selectedAddons);
  const setSelectedAddons = useBoundStore((state) => state.setSelectedAddons);
  const addAddon = useBoundStore((state) => state.addAddon);
  const deleteAddon = useBoundStore((state) => state.deleteAddon);
  const selectedAddon = selectedAddons.find(
    (selectedAddon) => selectedAddon.id === addon.id,
  );
  const initialAddonNumber = selectedAddon ? selectedAddon.quantity : 1;
  const [addonNumber, setAddonNumber] = useState<number>(initialAddonNumber);

  const isAddonSelected = !!selectedAddon;
  const locale = useLocale();

  useEffect(() => {
    if (selectedAddon) {
      setAddonNumber(selectedAddon.quantity);
    }
  }, [selectedAddon]);

  const handleSwitchChange = () => {
    const tempAddon = {
      ...addon,
      price: addon.pricePerDay * addonNumber,
      quantity: addonNumber,
    };
    if (isAddonSelected) {
      deleteAddon(tempAddon);
    } else {
      addAddon(tempAddon);
    }
  };

  const onValueChange = (value: number) => {
    setAddonNumber(value);
    const tempAddon = {
      ...addon,
      price: addon.pricePerDay * value,
      quantity: value,
    };

    selectedAddons.forEach((selectedAddon) => {
      if (selectedAddon.id === tempAddon.id) {
        setSelectedAddons([
          ...selectedAddons.filter((item) => item.id !== tempAddon.id),
          tempAddon,
        ]);
      }
    });
  };
  return (
    <div className="grid grid-cols-1 items-center gap-6 border-b border-gray-100 py-6 lg:grid-cols-2">
      <div className="flex max-w-[650px] items-start lg:items-center">
        <Image
          src={addon.icon}
          alt={addon.name}
          width={40}
          height={40}
          className="filter-secondary"
        />
        <div className="flex flex-col pl-5 lg:pl-10">
          <h3 className="text-base font-bold">{addon.name}</h3>
          <p className="text-sm">{addon.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-[70px_1fr_auto] items-center gap-5">
        <Input
          min="1"
          type="number"
          value={addonNumber}
          onChange={(e) => onValueChange(Number(e.target.value))}
          className="h-[55px] rounded-xl border-0 bg-gray-100 text-center text-lg font-bold"
        />

        <h3 className="text-center text-xl font-black uppercase">
          {formatPrice(addon.pricePerDay, locale)}
          <span className="text-base font-bold"> {selectedCurrency}</span>
          <span className="text-sm font-normal lowercase"> / per day</span>
        </h3>

        <Switch
          className="justify-self-end"
          checked={isAddonSelected}
          onCheckedChange={handleSwitchChange}
        />
      </div>
    </div>
  );
}
