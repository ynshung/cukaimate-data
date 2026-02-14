import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const InternetSubscription: Question = {
  id: RELIEF_IDS.INTERNET_SUBSCRIPTION,
  icon: {
    pack: "MI",
    name: "wifi",
  },
  title: "Internet Subscription",
  description: "Monthly internet bills registered under your own name.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
