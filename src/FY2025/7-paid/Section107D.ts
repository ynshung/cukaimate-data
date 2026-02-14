import { Question } from "@/types/financial-year";
import { PAID_IDS } from "./constants";

export const Section107D: Question = {
  id: PAID_IDS.SECTION_107D,
  title: "Section 107D",
  description:
    "Tax deduction of 2% made by the payer company for each cash payment to agents, dealers or distributors.",
  allowAttachment: true,
  inputType: {
    type: "number",
    isCurrency: true,
  },
};
