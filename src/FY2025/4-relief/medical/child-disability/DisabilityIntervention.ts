import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../../constants";

export const DisabilityIntervention: Question = {
  id: RELIEF_IDS.DISABILITY_INTERVENTION,
  icon: {
    pack: "MI",
    name: "child-care",
  },
  title: "Disability Intervention",
  description:
    "Early intervention or rehabilitation treatments for children with learning disabilities.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
