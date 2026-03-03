import { Section } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";
import { Sustainability } from "./sustainablility";
import { ResidentalInterest } from "./residental-interest";

export const OtherSection: Section = {
  id: RELIEF_IDS.OTHER_SECTION,
  title: "Other",
  icon: "list-ol",
  questions: [
    Sustainability,
    ResidentalInterest,
  ],
};
