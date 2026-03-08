import { Question } from "@/types/financial-year";
import { PERSONAL_IDS } from "./constants";

export const DisposalProperty: Question = {
  id: PERSONAL_IDS.DISPOSAL_PROPERTY,
  icon: "house-flag",
  title: "Disposal of Property",
  description: "Have you disposed of any property in the tax year?",
  allowAttachment: false,
  inputType: {
    type: "boolean",
  },
  explanatoryNotes: `Refers to chargeable asset under the Real Property Gains Tax Act 1976. See [details](https://www.hasil.gov.my/en/rpgt/).`
};
