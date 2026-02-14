import { FinancialYear } from "@/types/financial-year";
import { PersonalSection } from "./1-personal";
import { IncomeSection } from "./2-income";
import { DonationsSection } from "./3-donations";
import { ReliefSection } from "./4-relief";
import { RebateSection } from "./5-rebate";
import { OtherSection } from "./6-other";
import { PaidSection } from "./7-paid";
import { Calculations2025 } from "./calculations";

export const FY2025: FinancialYear = {
  type: "BE",
  year: 2025,
  startDate: new Date("2025-01-01"),
  endDate: new Date("2025-12-31"),
  startFilingDate: new Date("2026-03-01"),
  endFilingDate: new Date("2026-04-30"),
  sections: [
    PersonalSection,
    IncomeSection,
    DonationsSection,
    ReliefSection,
    RebateSection,
    OtherSection,
    PaidSection,
  ],
  calculations: Calculations2025,
};
