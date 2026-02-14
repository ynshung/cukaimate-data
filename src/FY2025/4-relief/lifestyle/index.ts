import { Section } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";
import { BooksPublications } from "./BooksPublications";
import { HobbyCourses } from "./HobbyCourses";
import { InternetSubscription } from "./InternetSubscription";
import { TechDevices } from "./TechDevices";

export const LifestyleSection: Section = {
  id: RELIEF_IDS.LIFESTYLE_SECTION,
  title: "Lifestyle",
  icon: {
    pack: "MI",
    name: "auto-stories",
  },
  questions: [
    BooksPublications,
    TechDevices,
    InternetSubscription,
    HobbyCourses,
  ],
  sectionLimit: {
    type: "fixed-limit",
    limit: 2500,
  },
};
