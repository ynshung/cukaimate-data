import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../../constants";

export const MentalHealth: Question = {
  id: RELIEF_IDS.MENTAL_HEALTH,
  icon: "brain",
  title: "Mental Health",
  description:
    "Consultation or examination fees with a psychiatrist, clinical psychologist, or counselor.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
