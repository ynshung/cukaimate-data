import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../../constants";

export const FertilityTreatment: Question = {
  id: RELIEF_IDS.FERTILITY_TREATMENT,
  icon: "person-pregnant",
  title: "Fertility Treatment",
  description:
    "Medical costs for fertility treatments (e.g., IVF, IUI) for yourself or your spouse.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
  explanatoryNotes: `Expenses for fertility treatment include Intrauterine Insemination (IUI) treatment, In vitro fertilization (IVF) or any other fertility treatments including consultation fees and medicines on yourself or your spouse. Claim conditions are:

1. the claim for medical expenses has to be evidenced by a receipt and certification issued by a  medical  practitioner  registered  with  the
Malaysian Medical Council (MMC) that that the serious disease treatment was provided to  individual, spouse or child; or fertility treatment was provided to the individual or the spouse; and
2. married individual.

Deductions of **up to RM10,000** are allowed on the amount expended or deemed to be expended on fertility treatment for yourself or your spouse.

Receipt of the treatment and a certification issued by a medical practitioner registered with the MMC must be kept for future reference and inspection, if required.

If the husband or wife chooses Joint Assessment, the allowable deduction for expenses incurred by the spouse will be deemed to be spent by the husband / wife whose assessment is raised in his name is limited to **RM10,000**.`
};
