import { BookingSlice, GeneralSlice } from "@/store/types";
import { create } from "zustand";
import { createGeneralSlice } from "@/store/general";
import { createBookingSlice } from "@/store/booking";
import { persist, createJSONStorage } from "zustand/middleware";
export interface AppState extends GeneralSlice, BookingSlice {}
export const useBoundStore = create<AppState>()(
  persist(
    (...a) => ({
      ...createGeneralSlice(...a),
      ...createBookingSlice(...a),
    }),
    {
      name: "elatus-rent-next",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
