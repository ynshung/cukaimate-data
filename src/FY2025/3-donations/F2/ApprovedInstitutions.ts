import { Question } from "@/types/financial-year";
import { DONATIONS_IDS } from "../constants";

export const ApprovedInstitutions: Question = {
  id: DONATIONS_IDS.F2_APPROVED_INSTITUTIONS,
  icon: "landmark-flag",
  title: "Approved Institutions",
  description:
    "Cash gifts to institutions, organizations, or funds specifically approved by the Director General of Inland Revenue.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
