import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const SportsEquipment: Question = {
  id: RELIEF_IDS.SPORTS_EQUIPMENT,
  icon: "futbol",
  title: "Sports Equipment",
  description:
    "Purchase of sports gear for activities under the Sports Development Act (excluding motorized bikes) for self, spouse, child or parents (Malaysian).",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
  explanatoryNotes: `Expenditure for the purchase of sports equipment for any sports activity listed under the Sports Development Act 1997 (**EXCLUDING motorized two-wheel bicycles**) for the use by own self, spouse, child or parents.`
};
