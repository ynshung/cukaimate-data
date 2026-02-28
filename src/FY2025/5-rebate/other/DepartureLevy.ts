import { Question } from "@/types/financial-year";
import { REBATE_IDS } from "../constants";

export const DepartureLevy: Question = {
  id: REBATE_IDS.DEPARTURE_LEVY,
  icon: "plane-departure",
  title: "Departure Levy",
  description:
    "A rebate for travel out of Malaysia for religious pilgrimage (e.g., Umrah) by air (twice in lifetime).",
  allowAttachment: true,
  inputType: {
    type: "number",
    isCurrency: true,
  },
  explanatoryNotes: `This tax rebate is granted to any individual who leaves Malaysia by air for the purpose of performing umrah or other religious pilgrimage but NOT for the purpose of performing hajj.

  The rebate granted is equivalent to the **amount of departure levy paid** but the claim is **limited to two (2) trips in a lifetime**.

Eligibility to claim shall be evidenced by the following documents:
- the boarding pass; and
- in the case of:
  - **umrah**: a copy of the visa issued by the embassy of the Kingdom of Saudi Arabia
  - **any other religious pilgrimage**: A written verification by a religious body recognised by the Committee for the Promotion of Inter Religious Understanding and Harmony Among Adherents, Department of National Unity and Integration in the Prime Minister’s Department.
  
Rate of departure levy:
- **ASEAN countries**: Economy: RM8, Other: RM50
- **Non-ASEAN countries**: Economy: RM20, Other: RM150

For the following types of assessment:
- joint assessment;
- separate assessment; or
- assessment on self whose spouse has no income, no source of income or no total income

The individual in whose name the assessment is raised, is:
- eligible to claim for the amount of departure levy paid on own self travel.
- NOT eligible to claim if the depature levy is paid for the behalf of spouse, family member or other party.
- NOT eligible to claim if the depature levy for own travel is paid by other party.`
};
