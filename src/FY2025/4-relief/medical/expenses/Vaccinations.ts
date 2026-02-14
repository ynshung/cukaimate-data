import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../../constants";

export const Vaccinations: Question = {
  id: RELIEF_IDS.VACCINATIONS,
  icon: {
    pack: "MI",
    name: "vaccines",
  },
  title: "Vaccinations",
  description:
    "Medical expenses for vaccinations for yourself, spouse, or child.",
  inputType: {
    type: "number",
    isCurrency: true,
    totalLimit: {
      type: "fixed-limit",
      limit: 1000,
    },
  },
  allowAttachment: true,
};
