import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../../constants";

export const Vaccinations: Question = {
  id: RELIEF_IDS.VACCINATIONS,
  icon: "syringe",
  title: "Vaccinations",
  description:
    "Medical expenses for vaccinations for yourself, spouse, or child.",
  inputType: {
    type: "number",
    isCurrency: true,
    totalLimit: {
      type: "fixed-limit",
      limit: 1000,
    },
  },
  allowAttachment: true,
  explanatoryNotes: `Vaccination expenses include the following:
1. Pneumococcal;
2. Human papillomavirus (HPV);
3. Influenza;
4. Rotavirus;
5. Varicella;
6. Meningococcal;
7. Combination of tetanus-diphtheria-acellular-pertussis (Tdap);
8. Coronavirus Disease 2019 (COVID-19)
Deduction **up to RM1,000** are allowed on the amount expended on vaccination for own self, spouse or child.`
};
