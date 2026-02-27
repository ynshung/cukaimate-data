import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const TechDevices: Question = {
  id: RELIEF_IDS.TECH_DEVICES,
  icon: "laptop",
  title: "Tech Devices",
  description:
    "Purchase of a personal computer, smartphone, or tablet (not for business use).",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
