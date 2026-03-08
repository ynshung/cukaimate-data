import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../../constants";

export const SeriousDiseases: Question = {
  id: RELIEF_IDS.SERIOUS_DISEASES,
  icon: "bed-pulse",
  title: "Serious Diseases",
  description:
    "Medical expenses for serious illnesses (e.g., cancer, AIDS) for yourself, spouse, or child.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
  explanatoryNotes: `Medical expenses on serious diseases include the treatment of Acquired Immune Deficiency Syndrome (AIDS), Parkinson’s disease, cancer, renal failure, leukemia and other similar diseases.
  
  “Other Similar Diseases” in relation to serious diseases include heart attack, pulmonary hypertension, chronic liver disease, fulminant viral hepatitis, head trauma with neurological deficit, tumor in brain or vascular malformation, major burns, major organ transplant and major amputation of limbs.

  Amount expended on own self, husband / wife or child is deductible **up to a maximum of RM10,000**.

Receipt of the treatment and a certification issued by a medical practitioner registered with the Malaysian Medical Council (MMC) must be kept for future reference and inspection, if required.`
};
