import { Question } from "@/types/financial-year";
import { PERSONAL_IDS } from "./constants";

export const CurrentStatus: Question = {
  id: PERSONAL_IDS.CURRENT_STATUS,
  icon: "person-circle-question",
  title: "Current Status",
  description: "What is your current status as of 31 December 2026?",
  allowAttachment: false,
  inputType: {
    type: "select",
    options: [
      {
        value: "single",
        title: "Single",
      },
      {
        value: "married",
        title: "Married",
      },
      {
        value: "divorced-widowed",
        title: "Divorced / Widowed",
      },
    ],
  },
};
