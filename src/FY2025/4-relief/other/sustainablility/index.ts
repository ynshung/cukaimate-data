import { Section } from "@/types/financial-year";
import { RELIEF_IDS } from "../../constants";
import { EVChargingFacility } from "./EVChargingFacility";
import { FoodWasteCompost } from "./FoodWasteCompost";

export const Sustainability: Section = {
  id: RELIEF_IDS.SUSTAINABILITY,
  title: "Sustainability",
  icon: "leaf",
  questions: [
    EVChargingFacility,
    FoodWasteCompost
  ],
  sectionLimit: {
    type: "fixed-limit",
    limit: 2500,
  },
};
