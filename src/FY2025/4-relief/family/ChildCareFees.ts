import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";
import { fullNotesPage } from "@/FY2025/constants";

export const ChildCareFees: Question = {
  id: RELIEF_IDS.CHILD_CARE_FEES,
  icon: "hands-holding-child",
  title: "Child Care Fees",
  description:
    "Fees for registered kindergartens or childcare centers for children aged 6 and below.",
  inputType: {
    type: "number",
    isCurrency: true,
    totalLimit: {
      type: "fixed-limit",
      limit: 3000,
    },
  },
  allowAttachment: true,
  explanatoryNotes: `This deduction is allowed in respect of **child care fees for a child aged 6 years and below** paid to a:
1. **child care centre registered** with the Department of Social Welfare (DSW) pursuant to the Child Care Centre Act 1984 (Act 308) under the Ministry of Women, Family and Community Development; or
2. **kindergarten registered** with the Ministry of Education Malaysia pursuant to the Education Act 1996 (Act 550).

This deduction is **restricted to RM3,000** even though the number of children who fulfills the mentioned conditions exceeds one. If the amount of claim is less than RM3,000, the amount of deduction allowed is **limited to the amount paid only**.

Where a husband and a wife are assessed separately, the tax deduction under this paragraph can only be claimed either by the husband **OR** the wife who incurs the expenses.

Where a husband and wife are divorced, the tax deduction can be claimed by the former husband and the former wife provided that they both made payment for the fees of the child and that child is not the same child.

The claim for deduction is allowed for the years of assessment 2025 to 2027 and must be evidenced by the:
- birth document of the child (MyKid or birth certificate); and
- receipts for the monthly fees issued by the child care centre or kindergarden.

You may see the example for child care fees distribution (married or divorced) in the [full explanatory notes](${fullNotesPage(24)}) under page 24.`
};
