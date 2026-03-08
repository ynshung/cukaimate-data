import { Question } from "@/types/financial-year";
import { REBATE_IDS } from "../constants";

export const Self: Question = {
  id: REBATE_IDS.SELF,
  title: "Self Rebate",
  description:
    "A rebate for individuals with chargeable income of RM35,000 or less.",
  allowAttachment: false,
  inputType: {
    type: "number",
    isCurrency: true,
    fixed: 400,
  },
};
