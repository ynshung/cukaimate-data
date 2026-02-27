import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../../constants";

export const MedicalExamination: Question = {
  id: RELIEF_IDS.MEDICAL_EXAMINATION,
  icon: "stethoscope",
  title: "Medical Examination",
  description: "Complete medical check-ups for yourself, spouse, or child.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
