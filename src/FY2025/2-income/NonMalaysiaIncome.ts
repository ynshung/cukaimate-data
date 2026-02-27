import { Question } from "@/types/financial-year";
import { INCOME_IDS } from "./constants";

export const NonMalaysiaIncome: Question = {
  id: INCOME_IDS.NON_MALAYSIA_INCOME,
  icon: "globe-americas",
  title: "Non-Malaysia Income",
  description:
    "Any statutory income received in Malaysia from sources outside the country.",
  allowAttachment: true,
  inputType: {
    type: "number",
    isCurrency: true,
  },
  explanatoryNotes: `This item has to be completed by individual resident that received other statutory income from sources outside Malaysia received in Malaysia that including employment, dividend, interest, discount, rent, royalty, premium and other income.
  
  You will be required to fill in the necessary information in Part E during your tax filing which includes the country, type of income, amount of tax charged in the country of origin and statutory income.`,
};
