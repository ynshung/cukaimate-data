import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../../constants";

export const CovidTests: Question = {
  id: RELIEF_IDS.COVID_TESTS,
  icon: {
    pack: "MCI",
    name: "medical-cotton-swab",
  },
  title: "COVID-19 Tests",
  description: "Costs for COVID-19 clinic tests or self-test kits.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
