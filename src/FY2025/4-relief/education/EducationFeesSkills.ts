import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const EducationFeesSkills: Question = {
  id: RELIEF_IDS.EDUCATION_FEES_SKILLS,
  icon: {
    pack: "MI",
    name: "school",
  },
  title: "Education Fees (Skills)",
  description:
    "Fees for non-degree courses in law, accounting, technical, or vocational skills in Malaysia.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
