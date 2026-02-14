import { Section } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";
import { ParentMedical } from "./ParentMedical";
import { ParentMedicalExam } from "./ParentMedicalExam";

export const ParentsSection: Section = {
  id: RELIEF_IDS.PARENT_SECTION,
  title: "Parents Relief",
  icon: {
    pack: "MI",
    name: "elderly",
  },
  questions: [ParentMedical, ParentMedicalExam],
  sectionLimit: {
    type: "fixed-limit",
    limit: 8000,
  },
};
