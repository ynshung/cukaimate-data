import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../../constants";

export const MentalHealth: Question = {
  id: RELIEF_IDS.MENTAL_HEALTH,
  icon: "brain",
  title: "Mental Health",
  description:
    "Consultation or examination fees with a psychiatrist, clinical psychologist, or counselor.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
  explanatoryNotes: `Mental health examination or consultation as evidenced by receipts issued by the following:
1. Psychiatrist within the meaning of section 2 of Mental Health Act 2001 [Act 615];
2. Clinical psychologist registered with Malaysia Allied Health Professions Council under the Allied Health Professions Act 2016 [Act 774]; or
3. Kaunselor	Counsellor registered woith Board of Counsellors under the Counsellors Act 1998 [Act 580].`
};
