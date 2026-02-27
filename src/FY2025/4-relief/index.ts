import { Section } from "@/types/financial-year";
import { RELIEF_IDS } from "./constants";
import { EducationSection } from "./education";
import { FamilySection } from "./family";
import { InsuranceSection } from "./insurance";
import { AngelInvestor } from "./items/AngelInvestor";
import { DisabledIndividual } from "./items/DisabledIndividual";
import { Individual } from "./items/Individual";
import { SupportingEquipment } from "./items/SupportingEquipment";
import { LifestyleSection } from "./lifestyle";
import { MedicalSection } from "./medical";
import { ParentsSection } from "./parents";
import { SportsSection } from "./sports";

export const ReliefSection: Section = {
  id: RELIEF_IDS.SECTION,
  title: "Reliefs",
  icon: "hand-holding-heart",
  questions: [
    AngelInvestor,
    Individual,
    ParentsSection,
    SupportingEquipment,
    DisabledIndividual,
    EducationSection,
    MedicalSection,
    LifestyleSection,
    SportsSection,
    FamilySection,
    InsuranceSection,
  ],
  color: "#377ffc",
};
