import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../../constants";
import { RESIDENTAL_INTEREST_EXPLANATORY_NOTES } from "./constants";

export const ResidentUnder500000: Question = {
  id: RELIEF_IDS.RESIDENTAL_INTEREST_500000,
  title: "Property under RM500,000",
  description: "Interest paid for the first home (value not more than RM500,000), which you lived in and signed the agreement between January 1, 2025, and December 31, 2027.",
  inputType: {
    type: "number",
    isCurrency: true,
    totalLimit: {
      type: "fixed-limit",
      limit: 7000,
    },
  },
  allowAttachment: true,
  explanatoryNotes: RESIDENTAL_INTEREST_EXPLANATORY_NOTES,
};
