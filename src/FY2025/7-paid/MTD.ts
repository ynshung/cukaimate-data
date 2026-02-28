import { Question } from "@/types/financial-year";
import { PAID_IDS } from "./constants";

export const MTD: Question = {
  id: PAID_IDS.MTD,
  title: "Monthly Tax Deductions (MTD)",
  description: "Deductions amount made by the employer in the tax year.",
  allowAttachment: true,
  inputType: {
    type: "number",
    isCurrency: true,
  },
  explanatoryNotes: `Enter the deductions amount made by the employer in the year 2025 in respect of the following income in this item:

1. Income for the year 2025;
2. Employment income of preceding years (including bonus, director’s fee, arrears, etc.) paid in the year 2025; and
3. Employment income in respect of other year(s) paid in advance in the year 2025.

Example: Salary for the month of January 2026 paid in December 2025 and MTD is paid on or before 15 January 2026.`
};
