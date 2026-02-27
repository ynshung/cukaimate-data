import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const GymSportsTraining: Question = {
  id: RELIEF_IDS.GYM_SPORTS_TRAINING,
  icon: "dumbbell",
  title: "Gym/Sports Training",
  description:
    "Gym memberships or sports training fees provided by registered clubs or companies.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
