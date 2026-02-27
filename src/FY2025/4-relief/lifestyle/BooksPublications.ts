import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const BooksPublications: Question = {
  id: RELIEF_IDS.BOOKS_PUBLICATIONS,
  icon: "book",
  title: "Books & Publications",
  description:
    "Purchase of books, journals, magazines, etc. (hardcopy or digital) for self, spouse, or child.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
};
