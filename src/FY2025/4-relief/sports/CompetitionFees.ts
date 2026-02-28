import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const CompetitionFees: Question = {
  id: RELIEF_IDS.COMPETITION_FEES,
  icon: "trophy",
  title: "Competition Fees",
  description: "Registration fees for licensed sports competitions for self, spouse, child or parents (Malaysian).",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
  explanatoryNotes: `Expenditure for payments of registration fee for any sports competition where the organizer is approved and licensed by the Commissioner of Sports under the Sport Development Act 1997 for the use by own self, spouse or child.`,
};
