import { Section } from "@/types/financial-year";
import { MTD } from "./MTD";
import { Section107D } from "./Section107D";
import { SelfInstalments } from "./SelfInstalments";
import { PAID_IDS } from "./constants";

export const PaidSection: Section = {
  id: PAID_IDS.SECTION,
  title: "Tax Paid",
  icon: {
    name: "money-bill-transfer",
    pack: "FA",
  },
  questions: [MTD, Section107D, SelfInstalments],
  color: "#658d40",
};
