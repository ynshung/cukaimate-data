import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const EPFApprovedSchemes: Question = {
  id: RELIEF_IDS.EPF_APPROVED_SCHEMES,
  icon: "piggy-bank",
  title: "EPF/Approved Schemes",
  description:
    "Compulsory or voluntary contributions to EPF or other approved schemes.",
  inputType: {
    type: "number",
    isCurrency: true,
    totalLimit: {
      type: "fixed-limit",
      limit: 4000,
    },
  },
  allowAttachment: true,
};
