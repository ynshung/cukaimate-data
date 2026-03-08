import { Section } from "@/types/financial-year";
import { RELIEF_IDS } from "../../constants";
import { CovidTests } from "./CovidTests";
import { MedicalExamination } from "./MedicalExam";
import { MentalHealth } from "./MentalHealth";

export const MedicalExamSection: Section = {
  id: RELIEF_IDS.MEDICAL_EXAM_SECTION,
  title: "Medical Examination",
  questions: [MedicalExamination, CovidTests, MentalHealth],
  sectionLimit: {
    type: "fixed-limit",
    limit: 1000,
  },
};
