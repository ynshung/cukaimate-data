import { Section } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";
import { EducationMedicalInsurance } from "./EducationMedicalInsurance";
import { EPFApprovedSchemes } from "./EPFApprovedSchemes";
import { EVChargingFacility } from "./EVChargingFacility";
import { LifeInsuranceEPF } from "./LifeInsuranceEPF";
import { PRSAnnuity } from "./PRSAnnuity";
import { SOCSOEIS } from "./SOCSOEIS";

export const InsuranceSection: Section = {
  id: RELIEF_IDS.INSURANCE_SECTION,
  title: "Insurance & Other",
  icon: {
    pack: "MI",
    name: "security",
  },
  questions: [
    LifeInsuranceEPF,
    EPFApprovedSchemes,
    PRSAnnuity,
    EducationMedicalInsurance,
    SOCSOEIS,
    EVChargingFacility,
  ],
};
