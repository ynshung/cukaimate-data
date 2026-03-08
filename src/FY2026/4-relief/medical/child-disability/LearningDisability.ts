import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../../constants";
import { CHILD_DISABILITY_EXPLANATORY_NOTES } from "./constants";

export const LearningDisability: Question = {
  id: RELIEF_IDS.LEARNING_DISABILITY,
  icon: "child-reaching",
  title: "Learning Disability Diag.",
  description:
    "Diagnosis assessment for learning disabilities in children (Autism, ADHD, etc.).",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
  explanatoryNotes: CHILD_DISABILITY_EXPLANATORY_NOTES,
};
