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
  explanatoryNotes: `Expenditure for the purchase or subscription of books, journals, magazines, newspapers and other similar publications (in the form of hardcopy or electronic but **EXCLUDING banned reading materials** such as morally offensive magazines) for the use by own self, spouse or child.`
};
