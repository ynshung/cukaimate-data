import { Question } from "@/types/financial-year";
import { PERSONAL_IDS } from "./constants";

export const DisposalProperty: Question = {
  id: PERSONAL_IDS.DISPOSAL_PROPERTY,
  icon: "house-flag",
  title: "Disposal of Property",
  description: "Have you sold any property in the tax year?",
  allowAttachment: false,
  inputType: {
    type: "boolean",
  },
};
