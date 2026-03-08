import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../constants";

export const BreastfeedingEquipment: Question = {
  id: RELIEF_IDS.BREASTFEEDING_EQUIPMENT,
  icon: "person-breastfeeding",
  title: "Breastfeeding Equipment",
  description:
    "Purchase of breastfeeding tools for children aged 2 and below (Women only, once every 2 years).",
  inputType: {
    type: "number",
    isCurrency: true,
    totalLimit: {
      type: "fixed-limit",
      limit: 1000,
    },
  },
  allowAttachment: true,
  explanatoryNotes: `- This deduction is allowed exclusively for **women taxpayers**, provided that the individual:
  - is a breastfeeding mother;
  - has incurred expenditure for the purchase of breastfeeding equipment for her own use to breastfeed her own child aged 2 years and below; and
  - makes a claim that is evidenced by receipts issued in respect of the purchase.
- **Breastfeeding equipment** which qualifies are:
  - breast pump kit and ice pack;
  - breast milk collection and storage equipment; and
  - cooler set or cooler bag.
- The amount of deduction is **limited to RM1,000** although the individual has more than one child.
- This deduction is only allowed **ONCE in every two (2) years of assessment**.
-	In the case of a **Combined Assessment**, this deduction is only allowed if the assessment is made **in the name of the wife**.

### Example 1: Joint Assessment in the Wife’s Name
Madam Arina has given birth to a child in the year 2026 and has purchased breastfeeding equipment at the cost of RM1,700. Her husband who is a non- resident Malaysian citizen **has elected for joint assessment in the name of his wife**.

Madam Arina is entitled to claim this deduction but limited to RM1,000.

### Example 2: Joint Assessment in the Husband’s Name
Madam Sally has given birth to a child in the year 2026 and has purchased breastfeeding equipment at the cost of RM1,300. Madam Sally **has elected for joint assessment in the name of her husband**.

The claim for this deduction is NOT allowed because the joint assessment is made in the name of Madam Sally’s husband.`
};
