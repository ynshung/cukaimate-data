import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const EducationMedicalInsurance: Question = {
  id: RELIEF_IDS.EDUCATION_MEDICAL_INSURANCE,
  icon: "user-injured",
  title: "Education/Medical Ins.",
  description:
    "Insurance premiums for education or medical benefits for self, spouse, or child.",
  inputType: {
    type: "number",
    isCurrency: true,
    totalLimit: {
      type: "fixed-limit",
      limit: 4000,
    },
  },
  allowAttachment: true,
  explanatoryNotes: `A deduction **not exceeding RM4,000** is available on insurance premiums in respect of education or medical benefits for an individual, husband, wife, or child.

### An education policy must satisfy the following criteria:
1. the policy must be contracted by the individual for himself or herself, his or her spouse or child;
2. the beneficiary should be the child;
3. where the insured is the parent, the child must be the nominee;
4. where the child is the insured:-
  - it is compulsory that the life of the person paying the premium (parent) must be covered (payor benefit rider);
  - the rider must also have the same duration as the basic policy;
  - where the rider is packaged together with the basic policy in a single premium, the whole premium paid will qualify for deduction; and
  - where the parent does not qualify for payor benefit rider, the premium paid for the basic policy will not qualify for deduction;
5. in respect of a takaful policy, the participant is the parent and proceeds of the policy must be made “hibah” (gift) to the child;
6. the maturity amount in respect of both conventional or takaful policy must be scheduled to be payable when the child is between the ages of 13 and 25.

### A medical policy must satisfy the following criteria:
1. the expenses should be related to the medical treatment resulting from a disease or an accident or a disability;
2. the policy coverage should be for a period of 12 months or more;
3. the policy can be a stand-alone policy or as a rider to a life insurance or family takaful policy. If it is a rider, only the rider premium/contribution can qualify for deduction;
4. where a dreadful disease cover is attached to a basic policy, the whole amount of the rider premium/contribution paid is allowed as a deduction;
5. where a dreadful disease cover is packaged together with a term life/personal accident cover, 60% of the package premium/contribution is allowed as a deduction;
6. group medical policy where the employee pays the premium/contribution for the medical benefit also qualifies for deduction; and
7. premium/contribution for waiver benefit rider and travel and medical expenses insurance are not allowable as a deduction.

The total deduction in respect of premiums paid for insurance on education and medical benefits is **restricted to RM4,000** for an individual and **RM4,000 for the wife who has source of income**. If the husband or wife elects for **joint assessment**, the deduction allowed for the total of premiums paid for insurance on education and medical benefits is restricted to **RM4,000**.

Refer to Working Sheet HK-14.`,
};
