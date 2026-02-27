import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const Individual: Question = {
  id: RELIEF_IDS.INDIVIDUAL,
  icon: "user",
  title: "Individual",
  description:
    "A standard automatic relief for yourself and your dependent relatives.",
  inputType: {
    type: "number",
    isCurrency: true,
    fixed: 9000,
  },
  allowAttachment: false,
};
