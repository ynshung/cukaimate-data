import { FinancialYear } from "@/types/financial-year";
import { PersonalSection } from "./1-personal";
import { IncomeSection } from "./2-income";
import { DonationsSection } from "./3-donations";
import { ReliefSection } from "./4-relief";
import { RebateSection } from "./5-rebate";
import { OtherSection } from "./6-other";
import { PaidSection } from "./7-paid";
import { Calculations2026 } from "./calculations";

export const FY2026: FinancialYear = {
  type: "BE",
  year: 2026,
  startDate: new Date("2027-01-01"),
  endDate: new Date("2027-12-31"),
  startFilingDate: new Date("2027-03-01"),
  endFilingDate: new Date("2027-04-30"),
  sections: [
    PersonalSection,
    IncomeSection,
    DonationsSection,
    ReliefSection,
    RebateSection,
    OtherSection,
    PaidSection,
  ],
  calculations: Calculations2026,
};
