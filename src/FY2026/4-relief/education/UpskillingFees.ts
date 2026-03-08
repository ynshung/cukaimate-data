import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const UpskillingFees: Question = {
  id: RELIEF_IDS.UPSKILLING_FEES,
  title: "Upskilling Fees",
  description:
    "Fees for upskilling or self-enhancement courses recognized by Department of Skills Development.",
  inputType: {
    type: "number",
    isCurrency: true,
    totalLimit: {
      type: "fixed-limit",
      limit: 2000,
    },
  },
  allowAttachment: true,
  explanatoryNotes: `**Course of study undertaken for the purpose of up-skilling or self-enhancement**:

A deduction **up to RM2,000** can be claimed on any skill area recognized by Director General of Skills Development under National Skills Development Act 2006 [Act 652]. Deduction is allowed for **year of assessment 2024 to 2026**.`
};
