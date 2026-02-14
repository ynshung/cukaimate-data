import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const Child: Question = {
  id: RELIEF_IDS.CHILD,
  icon: {
    pack: "MI",
    name: "child-friendly",
  },
  title: "Child",
  description: "Child (TBA)",
  inputType: {
    type: "custom-component",
    component: "ChildInput", // TODO: Create a blank component first
  },
  allowAttachment: false,
};
