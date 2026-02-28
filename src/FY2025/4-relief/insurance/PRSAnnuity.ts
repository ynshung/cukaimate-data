import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const PRSAnnuity: Question = {
  id: RELIEF_IDS.PRS_ANNUITY,
  icon: "vault",
  title: "PRS & Annuity",
  description:
    "Contributions to Private Retirement Schemes or deferred annuity premiums.",
  inputType: {
    type: "number",
    isCurrency: true,
    totalLimit: {
      type: "fixed-limit",
      limit: 3000,
    },
  },
  allowAttachment: true,
  explanatoryNotes: `- This deduction is effective from the **Year of Assessment 2025 until 2030**.
- The deduction allowed shall **not exceed RM3,000** in respect of contributions made to a Private Retirement Scheme (PRS) approved by the Securities Commission and paid premiums for deferred annuity.
- The total deduction for PRS contributions and deferred annuity premiums is **restricted to RM3,000 for an individual and RM3,000 for the spouse who has source of income**. If the husband or wife elects for **joint assessment**, the deduction allowed for the aggregate amount of PRS contributions and deferred annuity premiums is **restricted to RM3,000**.
- Refer to Working Sheet HK-14.`
};
