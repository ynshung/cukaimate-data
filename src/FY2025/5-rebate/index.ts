import { Section } from "@/types/financial-year";
import { REBATE_IDS } from "./constants";
import { LowIncomeSection } from "./low-income";
import { DepartureLevy } from "./other/DepartureLevy";
import { ZakatFitrah } from "./other/ZakatFitrah";

export const RebateSection: Section = {
  id: REBATE_IDS.SECTION,
  title: "Rebates",
  icon: "percent",
  questions: [LowIncomeSection, ZakatFitrah, DepartureLevy],
  color: "#e5772e",
};
