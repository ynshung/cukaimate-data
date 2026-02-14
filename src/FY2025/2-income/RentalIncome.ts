import { Question } from "@/types/financial-year";
import { INCOME_IDS } from "./constants";

export const RentalIncome: Question = {
  id: INCOME_IDS.RENTAL_INCOME,
  icon: {
    name: "house",
    pack: "MI",
  },
  title: "Rental Income",
  description:
    "Money received from renting out properties like houses, shops, land etc. in Malaysia.",
  allowAttachment: true,
  inputType: {
    type: "number",
    isCurrency: true,
  },
  explanatoryNotes: `Rental received in respect of houses, shop houses, land, plant, machines, furniture and other similar assets.`,
};
