import { Section } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";
import { ChildDisabilitySection } from "./child-disability";
import { MedicalExamSection } from "./exams";
import { MedicalExpenseSection } from "./expenses";

export const MedicalSection: Section = {
  id: RELIEF_IDS.MEDICAL_SECTION,
  title: "Medical",
  icon: {
    pack: "MI",
    name: "medical-services",
  },
  questions: [
    MedicalExpenseSection,
    MedicalExamSection,
    ChildDisabilitySection,
  ],
  sectionLimit: {
    type: "fixed-limit",
    limit: 10000,
  },
};
