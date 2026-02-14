import { GlobalCalculations } from "@/constants/calculations";
import { Question } from "@/types/financial-year";
import { OTHER_IDS } from "./constants";

export const Section132: Question = {
  id: OTHER_IDS.SECTION_132_133,
  title: "Section 132/133 Tax Relief",
  description: "Relief for income that was already taxed in a foreign country.",
  allowAttachment: true,
  inputType: {
    type: "number",
    isCurrency: true,
    totalLimit: {
      type: "item-limit",
      id: GlobalCalculations.TAX_CHARGED,
    },
  },
};
