import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../../constants";

export const EVChargingFacility: Question = {
  id: RELIEF_IDS.EV_CHARGING_FACILITY,
  icon: "charging-station",
  title: "EV Charging Facility",
  description:
    "Costs for installing, renting, or buying equipment or subscription for home electric vehicle charging (not for business use).",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
  explanatoryNotes: `A deduction limited to a maximum of RM2,500 expended for the electric vehicle charging facility as follows:
1. Cost of installation of electric vehicle charging;
2. Purchase including hire-purchase of electric vehicle charging;
3. Rental of electric vehicle charging; or
4. Subscription for use of electric vehicle charging facility

The allowable deduction is effective for the Year of Assessment 2024 and 2028.`
};
