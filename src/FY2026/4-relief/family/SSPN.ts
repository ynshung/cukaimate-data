import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";
import { fullNotesPage } from "@/FY2026/constants";

export const SSPN: Question = {
  id: RELIEF_IDS.SSPN,
  icon: "graduation-cap",
  title: "SSPN Net Deposit",
  description:
    "The net amount deposited into the National Education Savings Scheme (Deposit minus Withdrawal).",
  inputType: {
    type: "number",
    isCurrency: true,
    totalLimit: {
      type: "fixed-limit",
      limit: 8000,
    },
  },
  allowAttachment: true,
  explanatoryNotes: `This relief is extended and shall take effect for the **years of assessment 2026 to 2028**.

  Amount deposited in SSPN by an individual for the purpose of financing their children’s education are allowable as a deduction, **limited to RM8,000**, subject to the following conditions:

1. The allowable deduction is limited to the net amount deposited in that basis year only. (Deposit minus Withdrawal).

2. For a husband or wife who is assessed separately for a year of assessment, the deduction may only be claimed by either the husband or the wife who made the SSPN savings. Refer to Example 2.

3. The allowable maximum claim is RM8,000 even if the number of children exceeds one.

See example of distribution of relief for separate or joint assessment in the [full explanatory notes](${fullNotesPage(25)}) under page 25.`
};
