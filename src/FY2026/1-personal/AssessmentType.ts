import { Question } from "@/types/financial-year";
import { PERSONAL_IDS } from "./constants";

export const AssessmentType: Question = {
  id: PERSONAL_IDS.ASSESSMENT_TYPE,
  icon: "arrows-to-dot",
  title: "Assessment Type",
  description: "Are you filing with your spouse, separate or by yourself?",
  allowAttachment: false,
  inputType: {
    type: "select",
    options: [
      {
        value: "joint",
        title: "Joint",
      },
      {
        value: "separate",
        title: "Separate",
      },
      {
        value: "self-spouse-no-income",
        title: "Self where spouse has no income",
      },
    ],
  },
  visibilityCondition: {
    type: "string",
    dependsOn: PERSONAL_IDS.CURRENT_STATUS,
    value: "married",
    operator: "eq",
  },
  tips: "The best way to check if you should file for joint or separate assessment is to prepare the tax return in both ways to see which is more beneficial.",
  explanatoryNotes: `Choose ‘Joint’ if the spouse elects for joint assessment to be raised in the name of the husband/wife. He or she does not have to fill in items B10 to B23 and Part G of her Form BE.`,
};
