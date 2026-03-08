import { Question } from "@/types/financial-year";
import { PERSONAL_IDS } from "../../1-personal/constants";
import { REBATE_IDS } from "../constants";

export const Spouse: Question = {
  id: REBATE_IDS.SPOUSE,
  title: "Husband/Wife Rebate",
  description:
    "A rebate granted when a spouse has no income or elects for joint assessment.",
  allowAttachment: false,
  inputType: {
    type: "number",
    isCurrency: true,
    fixed: 400,
  },
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
        value: "married",
        operator: "eq",
      },
    ],
  },
};
