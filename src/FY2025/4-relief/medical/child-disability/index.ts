import { Section } from "@/types/financial-year";
import { RELIEF_IDS } from "../../constants";
import { DisabilityIntervention } from "./DisabilityIntervention";
import { LearningDisability } from "./LearningDisability";

export const ChildDisabilitySection: Section = {
  id: RELIEF_IDS.CHILD_DISABILITY_SECTION,
  title: "Child Disability",
  questions: [LearningDisability, DisabilityIntervention],
  sectionLimit: {
    type: "fixed-limit",
    limit: 4000,
  },
};
