import { Question } from "@/types/financial-year";
import { REBATE_IDS } from "../constants";

export const ZakatFitrah: Question = {
  id: REBATE_IDS.ZAKAT_FITRAH,
  icon: "mosque",
  title: "Zakat & Fitrah",
  description:
    "Rebate for obligatory religious payments made during the basis year.",
  allowAttachment: true,
  inputType: {
    type: "number",
    isCurrency: true,
  },
};
