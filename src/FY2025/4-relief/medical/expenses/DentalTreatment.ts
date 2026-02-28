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
    totalLimit: {
      type: "fixed-limit",
      limit: 1000,
    },
  },
  allowAttachment: true,
  explanatoryNotes: `Dental examination and treatment expenses are limited to a maximum of **RM1,000**.

Receipt of the treatment and a certification issued by a medical practitioner registered with the Malaysian Dental Council, must be kept for future reference and inspection, if required.`
};
