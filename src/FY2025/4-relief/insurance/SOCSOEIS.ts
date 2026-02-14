import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const SOCSOEIS: Question = {
  id: RELIEF_IDS.SOCSO_EIS,
  icon: {
    pack: "MI",
    name: "work",
  },
  title: "SOCSO/EIS",
  description:
    "Your contributions to SOCSO or the Employment Insurance System.",
  inputType: {
    type: "number",
    isCurrency: true,
    totalLimit: {
      type: "fixed-limit",
      limit: 350,
    },
  },
  allowAttachment: true,
};
