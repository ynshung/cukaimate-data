import { Section } from "@/types/financial-year";
import { INCOME_IDS } from "./constants";
import { EmploymentCount } from "./EmploymentCount";
import { EmploymentIncome } from "./EmploymentIncome";
import { NonMalaysiaIncome } from "./NonMalaysiaIncome";
import { OtherIncome } from "./OtherIncome";
import { RentalIncome } from "./RentalIncome";
import { SpouseIncome } from "./SpouseIncome";

export const IncomeSection: Section = {
  id: INCOME_IDS.SECTION,
  title: "Income",
  icon: "money-bill-1-wave",
  // TODO: Account for zero employment (income), make minimum 1?
  questions: [
    EmploymentCount,
    EmploymentIncome,
    RentalIncome,
    OtherIncome,
    NonMalaysiaIncome,
    SpouseIncome,
  ],
  color: "#68b24d",
};
