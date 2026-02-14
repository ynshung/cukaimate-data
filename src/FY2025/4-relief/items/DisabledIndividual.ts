import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const DisabledIndividual: Question = {
  id: RELIEF_IDS.DISABLED_INDIVIDUAL,
  icon: {
    pack: "MI",
    name: "accessible",
  },
  title: "Disabled Individual",
  description:
    "Are you a disabled person under the Department of Social Welfare (DSW)?",
  inputType: {
    type: "boolean",
    valueIfTrue: 6000,
  },
  allowAttachment: true,
};
