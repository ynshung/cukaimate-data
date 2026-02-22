import { Section } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";
import { Alimony } from "./Alimony";
import { BreastfeedingEquipment } from "./BreastfeedingEquipment";
import { ChildCareFees } from "./ChildCareFees";
import { DisabledSpouse } from "./DisabledSpouse";
import { Spouse } from "./Spouse";
import { SSPN } from "./SSPN";
import { Child } from "./Child";

export const FamilySection: Section = {
  id: RELIEF_IDS.FAMILY_SECTION,
  title: "Family",
  icon: {
    pack: "MI",
    name: "family-restroom",
  },
  questions: [
    BreastfeedingEquipment,
    ChildCareFees,
    SSPN,
    Spouse,
    Alimony,
    DisabledSpouse,
    Child,
  ],
};
