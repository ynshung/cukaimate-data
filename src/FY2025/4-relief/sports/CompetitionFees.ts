import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const CompetitionFees: Question = {
  id: RELIEF_IDS.COMPETITION_FEES,
  icon: "trophy",
  title: "Competition Fees",
  description: "Registration fees for licensed sports competitions.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
