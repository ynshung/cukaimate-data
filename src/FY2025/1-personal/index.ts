import { Section } from "@/types/financial-year";
import { AccountOutsideMalaysia } from "./AccountOutsideMalaysia";
import { AssessmentType } from "./AssessmentType";
import { PERSONAL_IDS } from "./constants";
import { CurrentStatus } from "./CurrentStatus";
import { DisposalProperty } from "./DisposalProperty";
import { TaxBorneEmployer } from "./TaxBorneEmployer";

export const PersonalSection: Section = {
  id: PERSONAL_IDS.SECTION,
  title: "Personal Particulars",
  icon: {
    name: "person",
    pack: "MI",
  },
  questions: [
    CurrentStatus,
    AssessmentType,
    TaxBorneEmployer,
    AccountOutsideMalaysia,
    DisposalProperty,
  ],
};
