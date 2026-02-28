import { Question } from "@/types/financial-year";
import { INCOME_IDS } from "./constants";

export const DividendsIncome: Question = {
  id: INCOME_IDS.DIVIDENDS_INCOME,
  icon: "percent",
  title: "Dividends Income",
  description:
    "Combined income from interest, discounts, royalties, pensions, or other miscellaneous gains in Malaysia.",
  allowAttachment: true,
  inputType: {
    type: "number",
    isCurrency: true,
  },
  explanatoryNotes: `The imposition of this tax is known as Dividend Tax. The scope of the imposition of Dividend Tax is as follows:

1. Dividend income received by individual shareholders from income paid, credited or distributed from company profits covering listed shares and unlisted shares in Malaysia. Dividend income includes payments in monetary or other forms;
2. Individual shareholders consist of resident and non-resident individuals; and
3. Individuals who hold shares through nomination. The imposition of tax on individuals for dividend income exceeding RM100,000 is at a rate of 2% on taxable income related to dividend income under Part XXII Schedule 1 of the ITA.

The determination of the taxable income of this dividend is based on the Income Tax Rules (Determination of Individual Taxable Income Regarding Dividends) 2025 [P.U. (A) 148/2025] which was gazetted on 7 May 2025.

Example:
- Mr. Razif, a resident in Malaysia, received a dividend distribution from his shareholding in Syarikat Harmoni Sdn Bhd, a controlled company, amounting to RM2,500,000 in the year 2025.
- The dividend income received by Mr. Razif is subject to Dividend Tax because it exceeds the RM100,000 threshold set. The amount of RM100,000 should be deducted from the dividend statutory income.
- Therefore, the dividend statutory income to be reported by Mr. Razif for the year of assessment 2025 is RM2,400,000.`
};
