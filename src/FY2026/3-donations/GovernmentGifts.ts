import { Question } from "@/types/financial-year";
import { DONATIONS_IDS } from "./constants";

export const GovernmentGifts: Question = {
  id: DONATIONS_IDS.GOVERNMENT_GIFTS,
  icon: "building-columns",
  title: "Government Gifts",
  description:
    "Cash gifts made to the Federal Government, State Government, or any local authority.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
