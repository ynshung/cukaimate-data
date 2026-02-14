import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const SportsFacilityFees: Question = {
  id: RELIEF_IDS.SPORTS_FACILITY_FEES,
  icon: {
    pack: "MI",
    name: "stadium",
  },
  title: "Sports Facility Fees",
  description: "Rental or entrance fees for using sports facilities.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
