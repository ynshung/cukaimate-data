import { Section } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";
import { CompetitionFees } from "./CompetitionFees";
import { GymSportsTraining } from "./GymSportsTraining";
import { SportsEquipment } from "./SportsEquipment";
import { SportsFacilityFees } from "./SportsFacilityFees";

export const SportsSection: Section = {
  id: RELIEF_IDS.SPORTS_SECTION,
  title: "Sports",
  icon: {
    pack: "MI",
    name: "sports-tennis",
  },
  questions: [
    SportsEquipment,
    SportsFacilityFees,
    CompetitionFees,
    GymSportsTraining,
  ],
  sectionLimit: {
    type: "fixed-limit",
    limit: 1000,
  },
};
