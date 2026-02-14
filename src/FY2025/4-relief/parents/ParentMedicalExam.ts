import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const ParentMedicalExam: Question = {
  id: RELIEF_IDS.PARENT_MEDICAL_EXAM,
  title: "Parent Medical Exam",
  description: "Thorough medical check-ups for parents.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
