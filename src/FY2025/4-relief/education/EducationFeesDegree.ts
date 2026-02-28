import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const EducationFeesDegree: Question = {
  id: RELIEF_IDS.EDUCATION_FEES_DEGREE,
  title: "Education Fees (Degree)",
  description: "Fees for any Masters or Doctorate level course of study.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
  explanatoryNotes: `Courses of study of **degree at Masters or Doctorate level**:

  Any course of study undertaken for the purpose of acquiring any skill or qualification undertaken in any institution or professional body in Malaysia recognized by the Malaysian Government or approved by the Minister of Finance:
  
  Refer to the list of recognized local institutions or approved professional bodies in Malaysia at the official portal of the Ministry of Higher Education Malaysia at [https://www.mohe.gov.my](https://www.mohe.gov.my) for deduction.
  `
};
