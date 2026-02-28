import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const DisabledIndividual: Question = {
  id: RELIEF_IDS.DISABLED_INDIVIDUAL,
  icon: "person-walking-with-cane",
  title: "Disabled Individual",
  description:
    "Are you a disabled person under the Department of Social Welfare (DSW)?",
  inputType: {
    type: "boolean",
    valueIfTrue: 7000,
  },
  allowAttachment: true,
  explanatoryNotes: `A further deduction of RM7,000 is allowed if the individual is a disabled person.

  An individual is eligible to claim this deduction if he is certified in writing by the Department of Social Welfare (DSW) as a disabled person.`
};
