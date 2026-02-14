import { Question } from "@/types/financial-year";
import { REBATE_IDS } from "../constants";

export const DepartureLevy: Question = {
  id: REBATE_IDS.DEPARTURE_LEVY,
  title: "Departure Levy",
  description:
    "A rebate for travel out of Malaysia for religious pilgrimage (e.g., Umrah) by air (twice in lifetime).",
  allowAttachment: true,
  inputType: {
    type: "number",
    isCurrency: true,
  },
};
