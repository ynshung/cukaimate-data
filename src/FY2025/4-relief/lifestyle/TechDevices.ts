import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const TechDevices: Question = {
  id: RELIEF_IDS.TECH_DEVICES,
  icon: "laptop",
  title: "Tech Devices",
  description:
    "Purchase of a personal computer, smartphone, or tablet (not for business use).",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
  explanatoryNotes: `Expenditure for the purchase of personal computer, smartphone or tablet **[Does NOT include additional charge for warranty]** for own use or for the use by own husband / wife or child, and **NOT being used for the purpose of own business**.`
};
