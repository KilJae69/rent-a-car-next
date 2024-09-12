import SectionTitle from "@/components/common/section-title";
import React from "react";
import SingleAddon, {
  Addon,
} from "@/components/reservation-steps/step-two/single-addon";
import { Button } from "@/components/ui/button";
import { Link } from "@/config/navigation";

const dummyAddons: Addon[] = [
  {
    id: 1,
    name: "Winter Tires",
    description: "Enhance your vehicle's traction in snowy and icy conditions.",
    pricePerDay: 36,
    icon: "/icons/ico_wifi.svg",
    price: 36,
    quantity: 1,
  },
  {
    id: 2,
    name: "GPS Navigation",
    description: "Never get lost with our advanced GPS system.",
    pricePerDay: 25,
    icon: "/icons/ico_gps.svg",
    price: 25,
    quantity: 1,
  },
  {
    id: 3,
    name: "Child Seat",
    description:
      "Ensure your little one's safety with our certified child seats.",
    pricePerDay: 15,
    icon: "/icons/ico_baby.svg",
    price: 15,
    quantity: 1,
  },
  {
    id: 4,
    name: "Additional Driver",
    description: "Add another driver to share the driving responsibilities.",
    pricePerDay: 20,
    icon: "/icons/ico_border.svg",
    price: 20,
    quantity: 1,
  },
  {
    id: 5,
    name: "Roof Rack",
    description: "Extra storage space for your luggage or sports equipment.",
    pricePerDay: 30,
    icon: "/icons/ico_border.svg",
    price: 30,
    quantity: 1,
  },
  {
    id: 6,
    name: "Insurance Coverage",
    description:
      "Get additional peace of mind with our comprehensive insurance.",
    pricePerDay: 40,
    icon: "/icons/ico_baby.svg",
    price: 40,
    quantity: 1,
  },
];

export default function Addons() {
  return (
    <section className="container relative px-4 py-10">
      <SectionTitle
        title="Choose Addons"
        containerClassName="text-center pb-2 mb-0"
      />
      <div className="py-5">
        {dummyAddons.map((addon) => (
          <SingleAddon key={addon.id} addon={addon} />
        ))}
      </div>
      <div className="pb-4 pt-8 text-center">
        <Link
          href="/reservation/send"
          className="inline-block rounded-md bg-gradient-to-r from-primary-light to-primary px-6 py-5 text-base font-bold text-white"
        >
          Continue with reservation
        </Link>
      </div>
    </section>
  );
}
