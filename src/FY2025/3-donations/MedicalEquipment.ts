import { Question } from "@/types/financial-year";
import { DONATIONS_IDS } from "./constants";

export const MedicalEquipment: Question = {
  id: DONATIONS_IDS.MEDICAL_EQUIPMENT,
  icon: "hospital",
  title: "Medical Equipment",
  description:
    "Cash or value of medical equipment gifted to healthcare facilities approved by the Ministry of Health.",
  inputType: {
    type: "number",
    isCurrency: true,
    totalLimit: {
      type: "fixed-limit",
      limit: 20000,
    },
  },
  allowAttachment: true,
};
