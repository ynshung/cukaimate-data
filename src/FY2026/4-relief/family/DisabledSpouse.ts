import { PERSONAL_IDS } from "../../1-personal/constants";
import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const DisabledSpouse: Question = {
  id: RELIEF_IDS.DISABLED_SPOUSE,
  icon: "wheelchair",
  title: "Disabled Spouse",
  description: "Is your husband or wife is certified as a disabled person?",
  inputType: {
    type: "boolean",
    valueIfTrue: 6000,
  },
  allowAttachment: true,
  visibilityCondition: {
    type: "string",
    dependsOn: PERSONAL_IDS.CURRENT_STATUS,
    value: "single",
    operator: "neq",
  },
};
