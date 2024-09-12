import Image from "next/image";
import * as React from "react";
import { useBoundStore } from "@/stores/store";
import { useFormatter } from "next-intl";
import { formatDateIntl } from "@/lib/utils";
import TotalPrice from "@/components/reservation-steps/reservation-widget/total-price";
import { Link, useRouter } from "@/config/navigation";

export default function ReservationWidgetItems() {
  const format = useFormatter();
  const router = useRouter();
  const pickupLocation = useBoundStore((state) => state.pickupLocation);
  const pickupDate = useBoundStore((state) => state.pickupDate);
  const pickupTime = useBoundStore((state) => state.pickupTime);
  const dropoffLocation = useBoundStore((state) => state.dropoffLocation);
  const dropoffDate = useBoundStore((state) => state.dropoffDate);
  const dropoffTime = useBoundStore((state) => state.dropoffTime);
  const selectedVehicle = useBoundStore((state) => state.selectedVehicle);
  const selectedInsurance = useBoundStore((state) => state.selectedInsurance);
  const selectedAddons = useBoundStore((state) => state.selectedAddons);
  const toggleIsReservationWidgetOpen = useBoundStore(
    (state) => state.toggleIsReservationWidgetOpen,
  );
  const setIsMobileMenuOpen = useBoundStore(
    (state) => state.setIsMobileMenuOpen,
  );
  const formattedPickupDate = formatDateIntl(pickupDate, format);
  const formattedDropoffDate = formatDateIntl(dropoffDate, format);

  const onEditClick = (url: string) => {
    toggleIsReservationWidgetOpen();
    router.push(url);
  };
  return (
    <div className="block items-center justify-center gap-4 bg-white py-3 lg:flex lg:bg-transparent lg:py-0">
      <div className="min-h-[125px] flex-1 border-b border-gray-100 bg-white px-4 py-3 lg:rounded-md lg:border-b-0 lg:shadow-md">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2 text-sm font-bold">
            Pickup and return
            <Image
              src="/icons/ico_checkmark.svg"
              alt="What"
              width={18}
              height={18}
              className="filter-primary"
            />
          </p>
          <button type="button" onClick={() => onEditClick("/")}>
            <Image
              src="/icons/ico_edit.svg"
              alt="What"
              width={18}
              height={18}
              className="filter-primary"
            />
          </button>
        </div>
        <div className="pt-5">
          <ul>
            <li className="flex items-center gap-4 pb-3">
              <span className="block h-[20px] w-[20px] rounded-sm bg-gray-200">
                <Image
                  src="/icons/ico_curved_arrow.svg"
                  alt="What"
                  width={14}
                  height={17}
                  className="relative right-[-10px] top-[-2px] rotate-90 filter-primary"
                />
              </span>
              <span className="text-[11px] 2xl:text-xs">
                {`${pickupLocation} ${formattedPickupDate} @ ${pickupTime}`}
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="block h-[20px] w-[20px] rounded-sm bg-gray-200">
                <Image
                  src="/icons/ico_curved_arrow.svg"
                  alt="What"
                  width={14}
                  height={17}
                  className="relative right-[-10px] top-[5px] rotate-180 filter-primary"
                />
              </span>
              <span className="text-[11px] 2xl:text-xs">
                {`${dropoffLocation || pickupLocation} ${formattedDropoffDate} @ ${dropoffTime}`}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="min-h-[125px] flex-1 border-b border-gray-100 bg-white px-4 py-3 lg:rounded-md lg:border-b-0 lg:shadow-md">
        <div className="flex items-center justify-between">
          <p className="flex w-full items-center gap-2 text-sm font-bold">
            {selectedVehicle ? "Selected vehicle" : "Select vehicle"}
            {selectedVehicle && (
              <Image
                src="/icons/ico_checkmark.svg"
                alt="What"
                width={18}
                height={18}
                className="filter-primary"
              />
            )}
          </p>
          {selectedVehicle && (
            <button
              type="button"
              onClick={() => onEditClick("/reservation/vehicles")}
            >
              <Image
                src="/icons/ico_edit.svg"
                alt="What"
                width={18}
                height={18}
                className="filter-primary"
              />
            </button>
          )}
        </div>
        <div className="pt-5">
          <div className="flex items-center gap-2">
            {selectedVehicle ? (
              <>
                <Image
                  src={selectedVehicle.image}
                  alt="Car"
                  className="h-[60px] w-auto object-contain"
                  width={122}
                  height={65}
                />
                <div>
                  <p className="text-sm text-primary">Category</p>
                  <h3 className="font-bold">{selectedVehicle.name}</h3>
                  <p className="text-xs">or similar</p>
                </div>
              </>
            ) : (
              <p className="text-base">No vehicle selected</p>
            )}
          </div>
        </div>
      </div>
      <div className="min-h-[125px] flex-1 border-b border-gray-100 bg-white px-4 py-3 lg:rounded-md lg:border-b-0 lg:shadow-md">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2 text-sm font-bold">
            Inssurance and addons
            {selectedInsurance && (
              <Image
                src="/icons/ico_checkmark.svg"
                alt="What"
                width={18}
                height={18}
                className="filter-primary"
              />
            )}
          </p>
          {selectedInsurance && (
            <button
              type="button"
              onClick={() => onEditClick("/reservation/insurance")}
            >
              <Image
                src="/icons/ico_edit.svg"
                alt="What"
                width={18}
                height={18}
                className="filter-primary"
              />
            </button>
          )}
        </div>
        <div className="pt-5">
          {selectedInsurance ? (
            <div className="flex items-start gap-2">
              <Image
                src={selectedInsurance.imageSrc}
                alt="Car"
                className="mr-2 h-auto w-[37px] object-contain filter-primary"
                width={32}
                height={37}
              />
              <div>
                <h3 className="text-sm font-bold uppercase">
                  {selectedInsurance.title}
                </h3>
                <p className="text-xs">
                  {selectedAddons.map((addon) => addon.name).join(", ")}
                </p>
              </div>
            </div>
          ) : (
            "No insurance selected"
          )}
          {/*<div className="flex items-start gap-2">*/}
          {/*  <Image*/}
          {/*    src="/icons/ico_ins.svg"*/}
          {/*    alt="Car"*/}
          {/*    className="h-auto w-[37px] object-contain"*/}
          {/*    width={32}*/}
          {/*    height={37}*/}
          {/*  />*/}
          {/*  <div>*/}
          {/*    <h3 className="text-sm font-bold uppercase">Medium Protection</h3>*/}
          {/*    <p className="text-xs">or similar</p>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
      <div className="lg: mx-3 mt-3 flex min-w-[195px] items-center justify-between rounded-md bg-primary px-4 py-3 lg:mx-0 lg:mt-0 lg:block lg:min-h-[125px] lg:bg-white lg:shadow-md">
        <div>
          <p className="text-base font-bold uppercase text-white lg:text-black">
            Total
          </p>
        </div>
        <div className="pt-2">
          <TotalPrice />
        </div>
      </div>
    </div>
  );
}
