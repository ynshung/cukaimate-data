import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const LifeInsuranceEPF: Question = {
  id: RELIEF_IDS.LIFE_INSURANCE_EPF,
  icon: "shield-heart",
  title: "Life Insurance/EPF",
  description: "Voluntary EPF contributions or life insurance premiums.",
  inputType: {
    type: "number",
    isCurrency: true,
    totalLimit: {
      type: "fixed-limit",
      limit: 3000,
    },
  },
  allowAttachment: true,
};
