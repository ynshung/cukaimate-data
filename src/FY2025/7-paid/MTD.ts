import { Question } from "@/types/financial-year";
import { PAID_IDS } from "./constants";

export const MTD: Question = {
  id: PAID_IDS.MTD,
  title: "Monthly Tax Deductions (MTD)",
  description: "Deductions amount made by the employer in the tax year.",
  allowAttachment: true,
  inputType: {
    type: "number",
    isCurrency: true,
  },
};
