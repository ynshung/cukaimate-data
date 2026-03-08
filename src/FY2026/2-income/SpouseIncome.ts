import { Question } from "@/types/financial-year";
import { PERSONAL_IDS } from "../1-personal/constants";
import { INCOME_IDS } from "./constants";

export const SpouseIncome: Question = {
  id: INCOME_IDS.SPOUSE_INCOME,
  icon: "people-pulling",
  title: "Spouse Income",
  description: "How much is your spouse's total income? Leave blank if none.",
  allowAttachment: true,
  inputType: {
    type: "number",
    isCurrency: true,
  },
  visibilityCondition: {
    type: "and",
    conditions: [
      {
        type: "string",
        dependsOn: PERSONAL_IDS.CURRENT_STATUS,
        operator: "eq",
        value: "married",
      },
      {
        type: "string",
        dependsOn: PERSONAL_IDS.ASSESSMENT_TYPE,
        operator: "eq",
        value: "joint",
      },
    ],
  },
  explanatoryNotes: `Transfer the total income of the spouse to be aggregated with the total income of the individual to this item.

This item **NEED NOT** be filled if:
1. the individual’s status is single / a divorcee / a widow / a widower
2. the spouse of the individual has no income, no source of income or has income which is tax exempt
3. the individual elects for separate assessment
4. the individual elects for joint assessment to be raised in the **name of his/her spouse**`,
};
