import { GlobalCalculations } from "@/constants/calculations";
import { Question } from "@/types/financial-year";
import { OTHER_IDS } from "./constants";

export const Section132: Question = {
  id: OTHER_IDS.SECTION_132_133,
  title: "Section 132/133 Tax Relief",
  description: "Relief for income that was already taxed in a foreign country.",
  allowAttachment: true,
  inputType: {
    type: "number",
    isCurrency: true,
    totalLimit: {
      type: "item-limit",
      id: GlobalCalculations.TAX_CHARGED,
    },
  },
  explanatoryNotes: `
Tax relief in respect of income as follows:

- Income from sources in Malaysia brought into Malaysia
- Income from sources outside Malaysia received in Malaysia by resident

where:
- **Section 132**: and the income has been taxed in the country of origin that entered into Avoidance of Double Taxation Agreements (DTA) with Malaysia.
- **Section 133**: and the income has been taxed in the country of origin which **does NOT have Avoidance of Double Taxation Agreements (DTA)** with Malaysia.

Use Working Sheet HK-8 or HK-9 to compute the amount of credit.

If the tax credit claimed for a year of assessment exceeds the Malaysian tax payable on income from outside Malaysia received in Malaysia, the excess tax credit shall be disregarded.`
};
