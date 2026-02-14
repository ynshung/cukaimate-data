import { Question } from "@/types/financial-year";
import { INCOME_IDS } from "./constants";

export const EmploymentIncome: Question = {
  id: INCOME_IDS.EMPLOYMENT_INCOME,
  icon: {
    name: "cash",
    pack: "MCI",
  },
  title: "Employment Income",
  description:
    "Your total earnings from work in Malaysia, including salary, bonuses, and allowances. You should refer to the EA form from your employer.",
  allowAttachment: true,
  inputType: {
    type: "number",
    isCurrency: true,
  },
  explanatoryNotes: `Salary, bonus, director’s fee, commission and any perquisite [such as share option scheme (Public Ruling No. 11/2012) [Original and amended], insurance premium / school and tuition fee paid by the employer] have to be declared. Entertainment and travelling expenditure incurred in the production of gross employment income and discharge of official duties are allowable deductions. Deduction of entertainment expenditure is restricted to the amount of entertainment allowance included as gross income from employment. However, reimbursements by the employer in respect of both types of expenditure are neither deductible nor liable to tax. Amount N4 from Working Sheet HK-2.

Please refer to the full explanatory notes regarding taxability of Gratuity, Tax Allowance, Benefit In Kind (BIK), Value Of Living Accommodation, Refund From Unapproved Pension Or Provident Fund, Scheme Or Society, and Compensation For Loss Of Employment.`,
};
