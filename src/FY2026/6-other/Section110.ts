import { Question } from "@/types/financial-year";
import { OTHER_IDS } from "./constants";

export const Section110: Question = {
  id: OTHER_IDS.SECTION_110,
  title: "Section 110 Tax Deduction",
  description:
    "Tax credits for income that already had tax deducted, such as interest or royalties.",
  allowAttachment: true,
  inputType: {
    type: "number",
    isCurrency: true,
  },
  explanatoryNotes: `Compute the tax deducted under section 110 by using Working Sheet HK-6 in respect of other income such as interest, royalties, section 4A income and income from a trust.

  Section 110 tax deduction (others) does NOT include withholding tax payment pursuant to Section 107A of ITA 1967.

You will need to submit Working Sheet HK-6 if entitled to a tax refund.`
};
