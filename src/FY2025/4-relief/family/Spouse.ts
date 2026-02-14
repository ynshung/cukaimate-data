import { PERSONAL_IDS } from "../../1-personal/constants";
import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const Spouse: Question = {
  id: RELIEF_IDS.SPOUSE,
  icon: {
    pack: "MI",
    name: "person",
  },
  title: "Spouse",
  description:
    "Relief for a spouse with no income OR elected for joint assessment.",
  inputType: {
    type: "number",
    isCurrency: true,
    fixed: 4000,
  },
  allowAttachment: true,
  visibilityCondition: {
    type: "and",
    conditions: [
      {
        type: "string",
        dependsOn: PERSONAL_IDS.ASSESSMENT_TYPE,
        value: "separate",
        operator: "neq",
      },
      {
        type: "string",
        dependsOn: PERSONAL_IDS.CURRENT_STATUS,
        value: "divorced-widowed",
        operator: "neq",
      },
    ],
  },
};
