import { Question } from "@/types/financial-year";
import { INCOME_IDS } from "./constants";

export const OtherIncome: Question = {
  id: INCOME_IDS.OTHER_INCOME,
  icon: "percent",
  title: "Other Income",
  description:
    "Combined income from interest, discounts, royalties, pensions, or other miscellaneous gains in Malaysia.",
  allowAttachment: true,
  inputType: {
    type: "number",
    isCurrency: true,
  },
  explanatoryNotes: `Please refer to the full explanatory notes regarding the details of each items.

* **Interest from sources in Malaysia**: Interest received by Malaysian-resident individuals from deposits with specified licensed banks, financial institutions, Tabung Haji, approved housing finance institutions, and registered co-operative societies is tax exempt.
* **Discounts from sources in Malaysia**: Income earned from discounting transactions involving treasury bills, bills of exchange, or promissory notes is taxable.
* **Royalties from sources in Malaysia**: Royalties from the use of copyrights or patents are taxable only on amounts exceeding the specified exemption limits by type of royalty.
* **Pensions from sources in Malaysia**: Pensions paid by the Malaysian Government or approved pension schemes are tax exempt if received upon reaching age 55, compulsory retirement age, or due to ill-health, with only the highest pension exempt if multiple pensions are received.
* **Annuities from sources in Malaysia**: Annuities are payments received under a will or from an investment that provides a series of annual payments, whether regular or for a limited period.
* **Periodical payments from sources in Malaysia**: Periodical payments are recurring payments received at fixed intervals.
* **Other gains or profits from sources in Malaysia**: Other taxable income includes payments from part-time or occasional activities such as broadcasting, lecturing, or writing.
* **Additions pursuant to paragraph 43(1)(c) from sources in Malaysia**: Certain earnings or proceeds related to previously claimed prospecting expenditure are deemed income and must be included in aggregate income with proper supporting computations.`,
};
