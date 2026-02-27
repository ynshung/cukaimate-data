import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const Child: Question = {
  id: RELIEF_IDS.CHILD,
  icon: "children",
  title: "Child",
  description: "Please refer to the Tips and Explanatory Notes on how to calculate the relief amount.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
