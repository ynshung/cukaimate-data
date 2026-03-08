import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const ParentMedical: Question = {
  id: RELIEF_IDS.PARENT_MEDICAL,
  title: "Parent Medical Expenses",
  description:
    "Expenses for medical/dental treatment, special needs, or a carer for parents or grandparents.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
  explanatoryNotes: `Medical treatment, dental treatment, complete medical examination, special needs or carer expenses incurred on parents or grandparents are allowed as a deduction **up to RM8,000**.

Parents refer to natural parents or foster parents where the individual is an adopted child. Grandparents refer to the parents of an individual’s parents. The parents or grandparents must be resident in Malaysia

Expenses on medical treatment for parents which qualify for deduction include:
1. **Medical treatment, complete medical examination or special needs** - must be evidenced by a medical practitioner registered with Malaysian Medical Council (MMC) certifying that the medical condition of parents or grandparents requires medical treatment, complete medical examination or special needs and is supported by an official receipt. Medical treatment and complete medical examination must be provided in Malaysia. Complete medical examination shall include any vaccination.
2. **Carer** - must be evidenced by a medical practitioner registered with Malaysian Medical Council (MMC) certifying that the medical condition of parents or grandparents requires a carer. For carer, it must be proven with a receipt or a written certification by the carer or a copy of the carer's work permit. 'Guardian' does not include individuals, spouses, or children of the individual concerned. Care services must be provided in Malaysia.
3. **Dental treatment** - must be evidenced by a medical practitioner registered with Malaysian Dental Council (MDC) certifying that the medical condition of parents or grandparents requires dental treatment and is supported by an official receipt. Dental treatment must be provided in Malaysia.`
};
