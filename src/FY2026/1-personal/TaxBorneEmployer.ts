import { Question } from "@/types/financial-year";
import { PERSONAL_IDS } from "./constants";

export const TaxBorneEmployer: Question = {
  id: PERSONAL_IDS.TAX_BORNE_EMPLOYER,
  icon: "user-tie",
  title: "Tax Borne by Employer",
  description: "Does your company pay taxes on your behalf?",
  allowAttachment: false,
  inputType: {
    type: "boolean",
  },
  explanatoryNotes: "Income tax liability of an employee is paid by the employer which this benefit falls within the definition of a perquisite (tax allowance). Perquisite is part of the gross income from employment under paragraph 13(1)(a) of the ITA 1967. Refer to Public Ruling No. 3/2024",
};
