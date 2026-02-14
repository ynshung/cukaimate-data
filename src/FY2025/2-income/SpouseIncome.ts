import { Question } from "@/types/financial-year";
import { PERSONAL_IDS } from "../1-personal/constants";
import { INCOME_IDS } from "./constants";

export const SpouseIncome: Question = {
  id: INCOME_IDS.SPOUSE_INCOME,
  icon: {
    name: "account-heart",
    pack: "MCI",
  },
  title: "Spouse Income",
  description: "How much is your spouse's total income? Leave blank if none.",
  allowAttachment: true,
  inputType: {
    type: "number",
    isCurrency: true,
  },
  visibilityCondition: {
    type: "string",
    dependsOn: PERSONAL_IDS.ASSESSMENT_TYPE,
    operator: "eq",
    value: "joint",
  },
  explanatoryNotes: `Transfer the total income of the spouse to be aggregated with the total income of the individual to this item.`,
};
