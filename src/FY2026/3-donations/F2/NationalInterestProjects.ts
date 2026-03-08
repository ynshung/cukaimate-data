import { Question } from "@/types/financial-year";
import { DONATIONS_IDS } from "../constants";

export const NationalInterestProjects: Question = {
  id: DONATIONS_IDS.F2_NATIONAL_INTEREST_PROJECTS,
  icon: "flag",
  title: "National Interest Projects",
  description:
    'Cash or "in-kind" contributions for projects of national interest approved by the Minister of Finance.',
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
