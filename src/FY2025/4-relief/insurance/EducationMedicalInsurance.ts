import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const EducationMedicalInsurance: Question = {
  id: RELIEF_IDS.EDUCATION_MEDICAL_INSURANCE,
  icon: {
    pack: "MI",
    name: "medical-services",
  },
  title: "Education/Medical Ins.",
  description:
    "Insurance premiums for education or medical benefits for self, spouse, or child.",
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
