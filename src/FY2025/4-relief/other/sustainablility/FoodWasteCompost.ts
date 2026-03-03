import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../../constants";

export const FoodWasteCompost: Question = {
  id: RELIEF_IDS.FOOD_WASTE,
  icon: "worm",
  title: "Food Waste Compost",
  description:
    "Purchase of food waste compost machine for household use, deduction allowed once every 3 years.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
