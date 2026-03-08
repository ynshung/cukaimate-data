import { Section } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";
import { EducationFeesDegree } from "./EducationFeesDegree";
import { EducationFeesSkills } from "./EducationFeesSkills";
import { UpskillingFees } from "./UpskillingFees";

export const EducationSection: Section = {
  id: RELIEF_IDS.EDUCATION_SECTION,
  title: "Education",
  icon: "school",
  questions: [EducationFeesSkills, EducationFeesDegree, UpskillingFees],
  sectionLimit: {
    type: "fixed-limit",
    limit: 7000,
  },
};
