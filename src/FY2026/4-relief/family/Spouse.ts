import { PERSONAL_IDS } from "../../1-personal/constants";
import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const Spouse: Question = {
  id: RELIEF_IDS.SPOUSE,
  icon: "person",
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
        dependsOn: PERSONAL_IDS.CURRENT_STATUS,
        value: "married",
        operator: "eq",
      },
      {
        type: "string",
        dependsOn: PERSONAL_IDS.ASSESSMENT_TYPE,
        value: "separate",
        operator: "neq",
      },
    ],
  },
  explanatoryNotes: `**(i) A deduction for husband of RM4,000** is given to the wife if the husband has no source of income / no total income or the husband has elected for joint assessment in the name of his wife. Only one wife is eligible to claim this deduction although the husband has more than one wife.

With effect from Year of Assessment 2017, the deduction for husband is NOT allowed if the husband (not a husband who is a disabled person) has gross income exceeding RM4,000 derived from sources outside Malaysia.

**(ii) A deduction for wife of RM4,000** is given to the husband who has a wife living together with him in the basis year, and the wife has no source of income / no total income or the wife has elected for joint assessment in the name of her husband.

With effect from Year of Assessment 2017, the deduction for wife is NOT allowed if the wife (not a wife who is a disabled person) has gross income exceeding RM4,000 derived from sources outside Malaysia.`
};
