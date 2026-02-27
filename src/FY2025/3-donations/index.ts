import { Section } from "@/types/financial-year";
import { ArtefactsPaintings } from "./ArtefactsPaintings";
import { ArtGalleryPaintings } from "./ArtGalleryPaintings";
import { DONATIONS_IDS } from "./constants";
import { DisabilityFacilities } from "./DisabilityFacilities";
import { F2 } from "./F2";
import { GovernmentGifts } from "./GovernmentGifts";
import { HasDonations } from "./HasDonations";
import { LibraryFacilities } from "./LibraryFacilities";
import { MedicalEquipment } from "./MedicalEquipment";

const DonationsDetails: Section = {
  id: DONATIONS_IDS.SECTION_DETAILS,
  title: "Donations",
  icon: "gift",
  questions: [
    GovernmentGifts,
    F2,
    ArtefactsPaintings,
    LibraryFacilities,
    DisabilityFacilities,
    MedicalEquipment,
    ArtGalleryPaintings,
  ],
  visibilityCondition: {
    type: "boolean",
    dependsOn: DONATIONS_IDS.HAS_DONATIONS,
    operator: "eq",
    value: true,
  },
  noSubsectionDisplay: true,
};

export const DonationsSection: Section = {
  id: DONATIONS_IDS.SECTION,
  title: "Donations",
  icon: "gift",
  questions: [HasDonations, DonationsDetails],
  color: "#e24d48",
};
