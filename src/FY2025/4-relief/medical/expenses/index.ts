import { Section } from "@/types/financial-year";
import { RELIEF_IDS } from "../../constants";
import { DentalTreatment } from "./DentalTreatment";
import { FertilityTreatment } from "./FertilityTreatment";
import { SeriousDiseases } from "./SeriousDiseases";
import { Vaccinations } from "./Vaccinations";

export const MedicalExpenseSection: Section = {
  id: RELIEF_IDS.MEDICAL_EXPENSE_SECTION,
  title: "Medical Expenses",
  questions: [
    SeriousDiseases,
    FertilityTreatment,
    Vaccinations,
    DentalTreatment,
  ],
};
