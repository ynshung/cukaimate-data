import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const SupportingEquipment: Question = {
  id: RELIEF_IDS.SUPPORTING_EQUIPMENT,
  icon: "wheelchair",
  title: "Supporting Equipment",
  description:
    "Purchase of basic supporting tools (e.g., wheelchairs, hearing aids) for a disabled self, spouse, child, or parent.",
  inputType: {
    type: "number",
    isCurrency: true,
    totalLimit: {
      type: "fixed-limit",
      limit: 6000,
    },
  },
  allowAttachment: true,
  explanatoryNotes: `Expenditure incurred for the purchase of any necessary basic supporting equipment is allowed as a deduction **up to RM6,000** for the use by:

1. the individual, if he / she is a disabled person; or
2. the spouse, if he / she is a disabled person; or
3. his / her child, if the child is a disabled person; or
4. his / her parent, who is a disabled person.

This deduction will NOT be allowed if the disabled individual for whom the basic supporting equipment is purchased, is not registered with the Department of Social Welfare (DSW) as a disabled person.

Basic supporting equipment includes hemodialysis machine, wheel chair, artificial leg and hearing aids but excludes spectacles and optical lenses.`,
};
