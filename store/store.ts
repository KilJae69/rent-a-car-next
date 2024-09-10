import { create } from "zustand";
import {  GeneralSlice } from "@/store/types";
import { createGeneralSlice } from "@/store/general";

import { persist, createJSONStorage } from "zustand/middleware";
export interface AppState extends GeneralSlice {}
export const useBoundStore = create<AppState>()(
  persist(
    (...a) => ({
      ...createGeneralSlice(...a),
     
    }),
    {
      name: "elatus-rent-next",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
