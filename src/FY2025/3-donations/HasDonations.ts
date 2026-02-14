import { Question } from "@/types/financial-year";
import { DONATIONS_IDS } from "./constants";

export const HasDonations: Question = {
  id: DONATIONS_IDS.HAS_DONATIONS,
  icon: {
    name: "heart-pulse",
    pack: "MCI",
  },
  title: "Donations",
  description: "Do you have any approved donations / gifts / contributions?",
  inputType: {
    type: "boolean",
  },
  allowAttachment: false,
};
