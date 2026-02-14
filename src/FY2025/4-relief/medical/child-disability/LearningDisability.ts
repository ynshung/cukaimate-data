import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../../constants";

export const LearningDisability: Question = {
  id: RELIEF_IDS.LEARNING_DISABILITY,
  icon: {
    pack: "MI",
    name: "child-care",
  },
  title: "Learning Disability Diag.",
  description:
    "Diagnosis assessment for learning disabilities in children (Autism, ADHD, etc.).",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
