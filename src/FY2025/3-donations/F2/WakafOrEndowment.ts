import { Question } from "@/types/financial-year";
import { DONATIONS_IDS } from "../constants";

export const WakafOrEndowment: Question = {
  id: DONATIONS_IDS.F2_WAKAF_OR_ENDOWMENT,
  icon: "school",
  title: "Wakaf or Endowment",
  description:
    "Cash gifts in the form of wakaf to religious authorities/bodies or public universities, or endowment gifts to public universities.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
  explanatoryNotes: `Gift of money in the form of:

a) wakaf made to any appropriate religious authority established under any written law, body established by that appropriate religious authority or public university allowed by that appropriate religious authority to receive wakaf; or
b) endowment made to a public university.

The wakaf or endowment must be made for the purpose of achieving the objective of establishment of the appropriate religious authority, body or public university.`,
};
