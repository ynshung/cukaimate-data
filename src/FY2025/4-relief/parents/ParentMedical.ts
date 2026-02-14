import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const ParentMedical: Question = {
  id: RELIEF_IDS.PARENT_MEDICAL,
  title: "Parent Medical Expenses",
  description:
    "Expenses for medical/dental treatment, special needs, or a carer for parents.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
