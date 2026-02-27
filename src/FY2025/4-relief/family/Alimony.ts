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
};
