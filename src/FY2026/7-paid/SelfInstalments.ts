import { Question } from "@/types/financial-year";
import { PAID_IDS } from "./constants";

export const SelfInstalments: Question = {
  id: PAID_IDS.SELF_INSTALMENTS,
  title: "Self-Instalments / CP500",
  description: "Amount of self-paid instalments or CP500 payment.",
  allowAttachment: true,
  inputType: {
    type: "number",
    isCurrency: true,
  },
  explanatoryNotes: `Enter the amount of self-payment / instalments of CP500 (Notice of Installment Payment Under Section 107B Income Tax Act 1967) that has been made by the taxpayer for the year of assessment 2026 only into this item.

  This **does not include** payments made in respect of outstanding tax for previous years of assessment.

Use Working Sheet HK-10 for computation. Transfer amount E of Working Sheet HK-10 to this item.

For joint assessment – Total up the MTD or self-payment / installment of CP500 paid by the husband / wife for entry in this item.`
};
