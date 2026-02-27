import { Question } from "@/types/financial-year";
import { DONATIONS_IDS } from "./constants";

export const ArtGalleryPaintings: Question = {
  id: DONATIONS_IDS.NATIONAL_STATE_ART_GALLERY,
  icon: "paintbrush",
  title: "National/State Art Gallery",
  description:
    "Gifts of paintings where the value is determined by the National Art Gallery or a state art gallery.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
