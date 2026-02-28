import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const EducationFeesSkills: Question = {
  id: RELIEF_IDS.EDUCATION_FEES_SKILLS,
  title: "Education Fees (Skills)",
  description:
    "Fees for non-degree courses in law, accounting, technical, or vocational skills in Malaysia.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
  explanatoryNotes: `Courses of study **other than a degree at Masters or Doctorate level**:

Any course of study up to tertiary level undertaken for the purpose of acquiring law, accounting, Islamic finance approved by Bank Negara Malaysia or Securities Commission, technical, vocational, industrial, scientific or technological skills or qualifications undertaken in any institution or professional body in Malaysia recognized by the Malaysian Government or approved by the Minister of Finance:

Refer to the list of recognized local institutions or approved professional bodies in Malaysia at the official portal of the Ministry of Higher Education Malaysia at [https://www.mohe.gov.my](https://www.mohe.gov.my) for deduction.`
};
