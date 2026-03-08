import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";
import { fullNotesPage } from "@/FY2026/constants";

export const LifeInsuranceEPF: Question = {
  id: RELIEF_IDS.LIFE_INSURANCE_EPF,
  icon: "shield-heart",
  title: "Life Insurance/EPF",
  description: "Voluntary EPF contributions or life insurance premiums.",
  inputType: {
    type: "number",
    isCurrency: true,
    totalLimit: {
      type: "fixed-limit",
      limit: 3000,
    },
  },
  allowAttachment: true,
  tips: `Life insurance premium payments and takaful contributions or additional voluntary contribution to EPF.`,
  explanatoryNotes: `Working sheet, HK-14 can be used for the purpose of computation and record.
- Payment of life insurance premiums or takaful contribution on life insurance policy contracted on the life of the individual husband or wife / wives or additional voluntary contribution to EPF is deductable.
  - Deduction is NOT allowed on premiums paid for life insurance policy contracted on the life of the child.
- Contribution to an approved scheme or voluntary contribution to EPF (other than private retirement scheme) or contribution under any written law. Example of an approved scheme is the Employees Provident Fund (EPF).
- Voluntary contribution that allowed for deductions are contribution to:
  - Self-employed under the definition of Employees Provident Fund Act 1991 (Act 452)
  - Pensionable officers under definition of section 2 of Pension Act 1980 (Act 227)
  - Employees other than (a) and (b) above.

See examples in [full explanatory notes](${fullNotesPage(28)}) under page 28.`
};
