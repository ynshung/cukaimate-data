import { Question } from "@/types/financial-year";
import { DONATIONS_IDS } from "./constants";

export const ArtefactsPaintings: Question = {
  id: DONATIONS_IDS.ARTEFACTS_AND_PAINTINGS,
  icon: "building-columns",
  title: "Artefacts and Paintings",
  description:
    "Gifts of artefacts, manuscripts, or paintings made to the Government or State Government (value determined by relevant museums/archives).",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
