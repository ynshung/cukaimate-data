import { Question } from "@/types/financial-year";
import { INCOME_IDS } from "./constants";

export const EmploymentCount: Question = {
  id: INCOME_IDS.EMPLOYMENT_COUNT,
  icon: {
    name: "office-building",
    pack: "MCI",
  },
  title: "Employment Count",
  description: "The total number of company where you had received income.",
  allowAttachment: false,
  inputType: {
    type: "number",
    isCurrency: false,
  },
  excludeSum: true,
};
