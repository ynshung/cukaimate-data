import { Question } from "@/types/financial-year";
import { DONATIONS_IDS } from "./constants";

export const LibraryFacilities: Question = {
  id: DONATIONS_IDS.LIBRARY_FACILITIES,
  icon: "book",
  title: "Library Facilities",
  description:
    "Cash gifts for providing library facilities to public libraries or those in schools and higher education institutions.",
  inputType: {
    type: "number",
    isCurrency: true,
    totalLimit: {
      type: "fixed-limit",
      limit: 20000,
    },
  },
  allowAttachment: true,
};
