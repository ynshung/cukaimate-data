import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../../constants";

export const CovidTests: Question = {
  id: RELIEF_IDS.COVID_TESTS,
  icon: "heart-pulse",
  title: "Self-testing Devices",
  description: "Costs for self-testing medical devices including self-test kits.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
  explanatoryNotes: `Purchase of self-testing medical device such as pulse oximeters, blood pressure monitors, thermometers, including self‑test kits for COVID‑19 and influenza. The purchase of such equipment must be supported by a receipt and must not be used for the purpose of the individual’s business.`
};
