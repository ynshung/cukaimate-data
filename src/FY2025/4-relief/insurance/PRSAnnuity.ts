import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const PRSAnnuity: Question = {
  id: RELIEF_IDS.PRS_ANNUITY,
  icon: "vault",
  title: "PRS & Annuity",
  description:
    "Contributions to Private Retirement Schemes or deferred annuity premiums.",
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
