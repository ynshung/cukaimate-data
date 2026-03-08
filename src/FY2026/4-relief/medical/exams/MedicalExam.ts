import { Question } from "@/types/financial-year";
import { RELIEF_IDS } from "../../constants";

export const MedicalExamination: Question = {
  id: RELIEF_IDS.MEDICAL_EXAMINATION,
  icon: "stethoscope",
  title: "Medical Examination",
  description: "Complete medical check-ups or disease detection test for yourself, spouse, or child.",
  inputType: {
    type: "number",
    isCurrency: true,
  },
  allowAttachment: true,
  explanatoryNotes: `Complete medical examination or fees for disease screening tests such as blood tests, ultrasound, mammogram and pap smear, including screening tests for diseases such as COVID‑19 and influenza.

The examination must be conducted at a hospital or by a medical practitioner registered with the Malaysian Medical Council, and must be supported by a receipt issued by the hospital or the medical practitioner concerned.`
};
