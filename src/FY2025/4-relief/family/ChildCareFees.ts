import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const ChildCareFees: Question = {
  id: RELIEF_IDS.CHILD_CARE_FEES,
  icon: "hands-holding-child",
  title: "Child Care Fees",
  description:
    "Fees for registered kindergartens or childcare centers for children aged 6 and below.",
  inputType: {
    type: "number",
    isCurrency: true,
    totalLimit: {
      type: "fixed-limit",
      limit: 3000,
    },
  },
  allowAttachment: true,
};
