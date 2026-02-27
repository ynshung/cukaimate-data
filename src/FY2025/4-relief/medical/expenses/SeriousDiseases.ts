import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../../constants";

export const SeriousDiseases: Question = {
  id: RELIEF_IDS.SERIOUS_DISEASES,
  icon: "bed-pulse",
  title: "Serious Diseases",
  description:
    "Medical expenses for serious illnesses (e.g., cancer, AIDS) for yourself, spouse, or child.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
