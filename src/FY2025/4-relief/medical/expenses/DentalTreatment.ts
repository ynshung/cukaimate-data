import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../../constants";

export const DentalTreatment: Question = {
  id: RELIEF_IDS.DENTAL_TREATMENT,
  icon: "tooth",
  title: "Dental Treatment",
  description:
    "Fees for dental examinations or treatments for self, spouse, or child.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
