import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../../constants";

export const FertilityTreatment: Question = {
  id: RELIEF_IDS.FERTILITY_TREATMENT,
  icon: "person-pregnant",
  title: "Fertility Treatment",
  description:
    "Medical costs for fertility treatments (e.g., IVF, IUI) for yourself or your spouse.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
