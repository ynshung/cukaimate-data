import { Question } from "@/types/financial-year";
import { PERSONAL_IDS } from "./constants";

export const TaxBorneEmployer: Question = {
  id: PERSONAL_IDS.TAX_BORNE_EMPLOYER,
  icon: {
    pack: "FA",
    name: "person-circle-question",
  },
  title: "Tax Borne by Employer",
  description: "Does your company pay taxes on your behalf?",
  allowAttachment: false,
  inputType: {
    type: "boolean",
  },
};
