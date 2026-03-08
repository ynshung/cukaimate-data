import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const ParentMedicalExam: Question = {
  id: RELIEF_IDS.PARENT_MEDICAL_EXAM,
  title: "Parent Medical Exam",
  description: "Complete medical examination including vaccinations for parents or grandparents.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
  explanatoryNotes: `Complete medical examination expenses include any vaccination are allowed as a deduction **up to RM1,000**.

Parents refer to natural parents or foster parents where the individual is an adopted child. Grandparents refer to the parents of an individual’s parents. The parents or grandparents must be resident in Malaysia.`};
