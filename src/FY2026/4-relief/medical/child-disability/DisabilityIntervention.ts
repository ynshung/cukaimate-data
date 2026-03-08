import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../../constants";
import { CHILD_DISABILITY_EXPLANATORY_NOTES } from "./constants";

export const DisabilityIntervention: Question = {
  id: RELIEF_IDS.DISABILITY_INTERVENTION,
  icon: "hands-holding-child",
  title: "Disability Intervention",
  description:
    "Early intervention or rehabilitation treatments for children with learning disabilities.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
  explanatoryNotes: CHILD_DISABILITY_EXPLANATORY_NOTES,
};
