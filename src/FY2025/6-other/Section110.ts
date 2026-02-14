import { Question } from "@/types/financial-year";
import { OTHER_IDS } from "./constants";

export const Section110: Question = {
  id: OTHER_IDS.SECTION_110,
  title: "Section 110 Tax Deduction",
  description:
    "Tax credits for income that already had tax deducted, such as interest or royalties.",
  allowAttachment: true,
  inputType: {
    type: "number",
    isCurrency: true,
  },
};
