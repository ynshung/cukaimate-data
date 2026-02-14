import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../../constants";

export const MedicalExamination: Question = {
  id: RELIEF_IDS.MEDICAL_EXAMINATION,
  icon: {
    pack: "MI",
    name: "medical-information",
  },
  title: "Medical Examination",
  description: "Complete medical check-ups for yourself, spouse, or child.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
