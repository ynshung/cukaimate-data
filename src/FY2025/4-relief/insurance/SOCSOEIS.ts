import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const SOCSOEIS: Question = {
  id: RELIEF_IDS.SOCSO_EIS,
  icon: "briefcase",
  title: "SOCSO/EIS",
  description:
    "Your contributions to SOCSO or the Employment Insurance System.",
  inputType: {
    type: "number",
    isCurrency: true,
    totalLimit: {
      type: "fixed-limit",
      limit: 350,
    },
  },
  allowAttachment: true,
  explanatoryNotes: `A deduction **not exceeding RM350** is allowed in respect of contribution to the Social Security Organization (SOCSO) made or incurred by the individual in the basis year that contribution in accordance to the following act:
1. Employees Social Security Act 1969
2. Employment Insurance System Act 2017 for Employment Insurance System (EIS)`
};
