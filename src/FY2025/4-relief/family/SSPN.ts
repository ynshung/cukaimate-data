import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const SSPN: Question = {
  id: RELIEF_IDS.SSPN,
  icon: "graduation-cap",
  title: "SSPN Net Deposit",
  description:
    "The net amount deposited into the National Education Savings Scheme (Deposit minus Withdrawal).",
  inputType: {
    type: "number",
    isCurrency: true,
    totalLimit: {
      type: "fixed-limit",
      limit: 8000,
    },
  },
  allowAttachment: true,
};
