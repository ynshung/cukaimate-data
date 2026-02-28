import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const GymSportsTraining: Question = {
  id: RELIEF_IDS.GYM_SPORTS_TRAINING,
  icon: "dumbbell",
  title: "Gym/Sports Training",
  description:
    "Gym memberships or sports training fees provided by registered clubs or companies for self, spouse, child or parents (Malaysian).",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
  explanatoryNotes: `Expenses for gym membership fees or sports training fees provided by sports associations or clubs registered with the Commissioner of Sports or companies incorporated under the Companies Act 2016 [Act 777] to carrying out sports activities listed under the Sports Development Act 1997 [Act 576].`
};
