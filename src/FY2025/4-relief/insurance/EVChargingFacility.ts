import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const EVChargingFacility: Question = {
  id: RELIEF_IDS.EV_CHARGING_FACILITY,
  icon: "charging-station",
  title: "EV Charging Facility",
  description:
    "Costs for installing, renting, or buying equipment for home electric vehicle charging.",
  inputType: {
    type: "number",
    isCurrency: true,
    totalLimit: {
      type: "fixed-limit",
      limit: 2500,
    },
  },
  allowAttachment: true,
};
