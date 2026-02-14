import { Question } from "@/types/financial-year";
import { DONATIONS_IDS } from "../constants";

export const SportsActivities: Question = {
  id: DONATIONS_IDS.F2_SPORTS_ACTIVITIES,
  icon: {
    name: "sports-soccer",
    pack: "MI",
  },
  title: "Sports Activities",
  description:
    "Cash gifts for sports activities approved by the Minister of Finance.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
