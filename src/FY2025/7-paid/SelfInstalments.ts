import { Question } from "@/types/financial-year";
import { PAID_IDS } from "./constants";

export const SelfInstalments: Question = {
  id: PAID_IDS.SELF_INSTALMENTS,
  title: "Self-Instalments / CP500",
  description: "Amount of self-paid instalments or CP500 payment.",
  allowAttachment: true,
  inputType: {
    type: "number",
    isCurrency: true,
  },
};
