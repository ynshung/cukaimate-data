import { GlobalCalculations } from "@/constants/calculations";
import { Section } from "@/types/financial-year";
import { DONATIONS_IDS } from "../constants";
import { ApprovedInstitutions } from "./ApprovedInstitutions";
import { NationalInterestProjects } from "./NationalInterestProjects";
import { SportsActivities } from "./SportsActivities";
import { WakafOrEndowment } from "./WakafOrEndowment";

export const F2: Section = {
  id: DONATIONS_IDS.F2_SECTION,
  title: "Selected Donations",
  questions: [
    ApprovedInstitutions,
    SportsActivities,
    NationalInterestProjects,
    WakafOrEndowment,
  ],
  sectionLimit: {
    type: "calculation-limit",
    calculation: {
      type: "multiply",
      id1: GlobalCalculations.AGGREGATE_INCOME,
      multiplier: 0.1,
    },
  },
};
