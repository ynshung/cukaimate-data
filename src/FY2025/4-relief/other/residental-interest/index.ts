import { Section } from "@/types/financial-year";
import { RELIEF_IDS } from "../../constants";
import { ResidentUnder500000 } from "./Under500000";
import { ResidentUnder750000 } from "./Under750000";

export const ResidentalInterest: Section = {
  id: RELIEF_IDS.RESIDENTAL_INTEREST,
  title: "Residental Interest",
  icon: "house-chimney",
  questions: [
    ResidentUnder500000,
    ResidentUnder750000,
  ],
};
