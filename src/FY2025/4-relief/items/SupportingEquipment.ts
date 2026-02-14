import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const SupportingEquipment: Question = {
  id: RELIEF_IDS.SUPPORTING_EQUIPMENT,
  icon: {
    pack: "MI",
    name: "accessible",
  },
  title: "Supporting Equipment",
  description:
    "Purchase of basic supporting tools (e.g., wheelchairs, hearing aids) for a disabled self, spouse, child, or parent.",
  inputType: {
    type: "number",
    isCurrency: true,
    totalLimit: {
      type: "fixed-limit",
      limit: 6000,
    },
  },
  allowAttachment: true,
};
