import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const Child: Question = {
  id: RELIEF_IDS.CHILD,
  icon: "children",
  title: "Child",
  description: "Please refer to the Tips and Explanatory Notes on how to calculate the relief amount.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
  tips: `In simple, child must be unmarried and:
  * Under 18: RM2,000
  * 18 and above and studying: RM2,000
  * 18 and above and studying Degree/Master/PhD: RM8,000
   
  ### Disabled Child
  * Basic Relief (regardless of age): RM8,000
  * Higher Education Bonus: RM8,000 (Total of RM16,000)`,
  explanatoryNotes: `# Child - Under the age of 18 years
  A deduction of RM2,000 per child is allowed if the child is unmarried and who at any time in the basis year is below the age 18 years.

# Child - 18 years and above and studying
(i)	A deduction of RM2,000 per child is allowed if the child is unmarried, 18 years of age and above, and receiving full-time instruction.

OR

(ii)	A deduction of RM8,000 is allowed if the child is unmarried, 18 years of age and above, and satisfies the following conditions:
- receiving full-time instruction (excluding matriculation course / pre degree / A-Level) at a university, college or other similar educational establishment in Malaysia; or
- serving under articles or indentures with a view to qualify in a trade or profession in Malaysia; or
- receiving full-time instruction outside Malaysia in respect of a degree (including a degree at Master or Doctorate level) or the equivalent of a degree.

# Child - Disabled child
(i) Relief allowed for a disabled child who is unmarried is RM8,000.

(ii) An additional relief of RM8,000 is allowed if the disabled child is unmarried, 18 years of age and above, and satisfies the following conditions:
- receiving full-time instruction (excluding matriculation course / pre degree / A-Level) at a university, college or other similar educational establishment in Malaysia; or
- serving under articles or indentures with a view to qualify in a trade or profession in Malaysia; or
- receiving full-time instruction outside Malaysia in respect of a degree (including a degree at Master or Doctorate level) or the equivalent of a degree.

An individual is entitled to a child relief of RM16,000 if the above conditions are complied with.

# Eligibility

- **100% Eligibility**: This item is to be completed by an individual entitled to claim full child relief.
- **50% Eligibility**: This item is only relevant where two or more individuals (not husband and wife living together) are each entitled to claim a deduction for payment made in respect of the same child, and each of those individuals is entitled to claim 50% of the allowable relief as a deduction. For example, when divorce occurs and there are two or more individuals entitled to claim a deduction on the same child.
For separate assessment, the individual and his spouse are required to select the relief in respect of each child on whom to claim respectively.`
};
