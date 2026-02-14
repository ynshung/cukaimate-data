import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const UpskillingFees: Question = {
  id: RELIEF_IDS.UPSKILLING_FEES,
  icon: {
    pack: "MI",
    name: "auto-stories",
  },
  title: "Upskilling Fees",
  description:
    "Fees for upskilling or self-enhancement courses recognized by Department of Skills Development.",
  inputType: {
    type: "number",
    isCurrency: true,
    totalLimit: {
      type: "fixed-limit",
      limit: 2000,
    },
  },
  allowAttachment: true,
};
