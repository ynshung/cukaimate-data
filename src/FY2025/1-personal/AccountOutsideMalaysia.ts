import { Question } from "@/types/financial-year";
import { PERSONAL_IDS } from "./constants";

export const AccountOutsideMalaysia: Question = {
  id: PERSONAL_IDS.ACCOUNT_OUTSIDE_MALAYSIA,
  icon: {
    pack: "FA",
    name: "person-circle-question",
  },
  title: "Account Outside Malaysia",
  description: "Do you have any financial accounts outside Malaysia?",
  allowAttachment: false,
  inputType: {
    type: "boolean",
  },
};
