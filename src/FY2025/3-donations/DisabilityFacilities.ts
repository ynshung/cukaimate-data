import { Question } from "@/types/financial-year";
import { DONATIONS_IDS } from "./constants";

export const DisabilityFacilities: Question = {
  id: DONATIONS_IDS.DISABILITY_FACILITIES,
  icon: "wheelchair",
  title: "Disability Facilities",
  description:
    'Cash or "in-kind" gifts for providing public facilities specifically for the benefit of disabled persons.',
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
