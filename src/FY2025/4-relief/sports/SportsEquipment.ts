import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const SportsEquipment: Question = {
  id: RELIEF_IDS.SPORTS_EQUIPMENT,
  icon: "futbol",
  title: "Sports Equipment",
  description:
    "Purchase of sports gear for activities under the Sports Development Act (excluding motorized bikes).",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
