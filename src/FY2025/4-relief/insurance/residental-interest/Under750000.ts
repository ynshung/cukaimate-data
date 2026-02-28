import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../../constants";
import { RESIDENTAL_INTEREST_EXPLANATORY_NOTES } from "./constants";

export const ResidentUnder750000: Question = {
  id: RELIEF_IDS.RESIDENTAL_INTEREST_750000,
  title: "Property under RM750,000",
  description: "Interest paid for the first home (value between RM500,001 and RM750,000), which you lived in and signed the agreement between January 1, 2025, and December 31, 2027.",
  inputType: {
    type: "number",
    isCurrency: true,
    totalLimit: {
      type: "fixed-limit",
      limit: 5000,
    },
  },
  allowAttachment: true,
  explanatoryNotes: RESIDENTAL_INTEREST_EXPLANATORY_NOTES,
};
