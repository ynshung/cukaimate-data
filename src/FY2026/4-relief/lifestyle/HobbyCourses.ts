import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const HobbyCourses: Question = {
  id: RELIEF_IDS.HOBBY_COURSES,
  icon: "chalkboard-user",
  title: "Hobby/General Courses",
  description:
    "Fees for non-professional courses for the purpose of upskilling or self enhancement such as hobbies, religion, or language.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
  explanatoryNotes: `Payment for upskilling or self-enhancement course fees other than those subject to section 46(1)(f)(iii) ACP 1967. The course does not need to be registered or recognized by any government body.
  
Adequate expenses are proven with receipts issued by the course provider. The course in question is one that encourages taxpayers to learn skills unrelated to their jobs, such as courses related to hobbies, religion, or languages.`
};
