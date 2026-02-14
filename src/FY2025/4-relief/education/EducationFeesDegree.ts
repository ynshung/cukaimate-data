import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const EducationFeesDegree: Question = {
  id: RELIEF_IDS.EDUCATION_FEES_DEGREE,
  icon: {
    pack: "MI",
    name: "school",
  },
  title: "Education Fees (Degree)",
  description: "Fees for any Masters or Doctorate level course of study.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
