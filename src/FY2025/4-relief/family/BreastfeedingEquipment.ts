import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const BreastfeedingEquipment: Question = {
  id: RELIEF_IDS.BREASTFEEDING_EQUIPMENT,
  icon: "person-breastfeeding",
  title: "Breastfeeding Equipment",
  description:
    "Purchase of breastfeeding tools for children aged 2 and below (Women only, once every 2 years).",
  inputType: {
    type: "number",
    isCurrency: true,
    totalLimit: {
      type: "fixed-limit",
      limit: 1000,
    },
  },
  allowAttachment: true,
};
