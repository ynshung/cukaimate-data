import { Section } from "@/types/financial-year";
import { OTHER_IDS } from "./constants";
import { Section110 } from "./Section110";
import { Section132 } from "./Section132";

export const OtherSection: Section = {
  id: OTHER_IDS.SECTION,
  title: "Other Deductions",
  icon: {
    name: "receipt",
    pack: "FA",
  },
  questions: [Section110, Section132],
  color: "#58764f",
};
