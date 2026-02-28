import { Question } from "@/types/financial-year";
import { PERSONAL_IDS } from "../../1-personal/constants";
import { RELIEF_IDS } from "../constants";

export const Alimony: Question = {
  id: RELIEF_IDS.ALIMONY,
  icon: "gavel",
  title: "Alimony",
  description: "Alimony payments to a former wife.",
  inputType: {
    type: "number",
    isCurrency: true,
    totalLimit: {
      type: "fixed-limit",
      limit: 4000,
    },
  },
  allowAttachment: true,
  visibilityCondition: {
    type: "string",
    dependsOn: PERSONAL_IDS.CURRENT_STATUS,
    value: "divorced-widowed",
    operator: "eq",
  },
  explanatoryNotes: `Deduction for payment of alimony to a former wife** is limited to RM4,000 or the actual amount paid if the amount of alimony paid is less than the allowable deduction. The total deduction for a wife living together and alimony payments to the former wife is restricted to RM4,000.

Voluntary alimony payments under a mutual agreement but without any formal agreement do not qualify for deduction.`
};
