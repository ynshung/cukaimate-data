import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const HobbyCourses: Question = {
  id: RELIEF_IDS.HOBBY_COURSES,
  icon: {
    pack: "MI",
    name: "language",
  },
  title: "Hobby/General Courses",
  description:
    "Fees for non-professional courses for the purpose of upskilling or self enhancement such as hobbies, religion, or language.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
