import { GlobalCalculations } from "@/constants/calculations";
import { Section } from "@/types/financial-year";
import { REBATE_IDS } from "../constants";
import { Self } from "./Self";
import { Spouse } from "./Spouse";

export const LowIncomeSection: Section = {
  id: REBATE_IDS.LOW_INCOME_SECTION,
  title: "Low Income",
  questions: [Self, Spouse],
  visibilityCondition: {
    type: "number",
    dependsOn: GlobalCalculations.CHARGEABLE_INCOME,
    value: 35000,
    operator: "lte",
  },
  noSubsectionDisplay: true,
};
